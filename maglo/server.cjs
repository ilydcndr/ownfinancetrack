const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const SECRET_KEY = "secret123";
const TOKEN_EXPIRES = "2h";

/* ----------------------- REGISTER ----------------------- */
server.post("/users/register", (req, res) => {
  const { email, password, fullName } = req.body;
  const db = router.db;

  const exists = db.get("users").find({ email }).value();
  if (exists) {
    return res.status(400).json({ message: "Bu email zaten kayıtlı!" });
  }

  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    fullName: fullName || "",
    role: "user",
    isActive: true,
    financialSummary: {},
    financialWorkingCapital: [],
    financialWallet: [],
    financialTransactionsRecent: [],
    financialTransfersScheduled: []
  };

  db.get("users").push(newUser).write();

  return res.json({
    message: "Kayıt başarılı!",
    user: newUser
  });
});

/* ----------------------- LOGIN ----------------------- */
server.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  const db = router.db;

  const user = db.get("users").find({ email, password }).value();
  if (!user) {
    return res.status(401).json({ message: "E-mail veya şifre yanlış!" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: TOKEN_EXPIRES }
  );

  // Login sonrası DB’ye token yaz
  db.get("users")
    .find({ id: user.id })
    .assign({ accessToken: token })
    .write();

 return res.json({
    message: "Giriş başarılı!",
    accessToken: token,
    user: user
  });
});

/* ----------------------- GET USER BY ID ----------------------- */
server.get("/users/:id", (req, res) => {
  const db = router.db;
  const userId = req.params.id;

  // array içinden exact match
  const user = db.get("users").find({ id: userId }).value();

  if (!user) return res.status(404).json({ message: "User not found" });

  // nested tüm objeleri dahil ederek dön
  res.json(user);
});


/* ----------------------- ROUTER ----------------------- */
server.use(router);

server.listen(5737, () => {
  console.log("✓ JSON Server çalışıyor (nested objeler dahil)");
});
