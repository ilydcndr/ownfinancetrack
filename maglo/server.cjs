// server.cjs
const jsonServer = require("json-server");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const SECRET_KEY = "superSecretKey";

server.use(jsonServer.bodyParser);
server.use(middlewares);

// Default user template
function getDefaultUser({ fullName, email, password }) {
  return {
    id: uuidv4(),
    email,
    password,
    fullName,
    image: "",
    role: "user",
    isActive: true,
    financialSummary: {
      totalBalance: { amount: 0, currency: "TRY", change: { percentage: 0, trend: "up" } },
      totalExpense: { amount: 0, currency: "TRY", change: { percentage: 0, trend: "up" } },
      totalSavings: { amount: 0, currency: "TRY", change: { percentage: 0, trend: "up" } },
      lastUpdated: new Date().toISOString()
    },
    financialWorkingCapital: [],
    financialWallet: [],
    financialTransactionsRecent: [],
    financialTransfersScheduled: []
  };
}

// -------------------- SIGNUP --------------------
server.post("/signup", (req, res) => {
  const db = router.db; // lowdb instance
  const users = db.get("users");
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Tüm alanlar gerekli!" });
  }

  const existingUser = users.find({ email }).value();
  if (existingUser) {
    return res.status(400).json({ message: "Bu email zaten kayıtlı!" });
  }

  const newUser = getDefaultUser({ fullName, email, password });
  users.push(newUser).write();

  res.status(201).json({ message: "Kayıt başarılı", user: newUser });
});

// -------------------- LOGIN --------------------
server.post("/login", (req, res) => {
  const db = router.db;
  const users = db.get("users");
  const { email, password } = req.body;

  const user = users.find({ email, password }).value();
  if (!user) return res.status(401).json({ message: "Kullanıcı bulunamadı!" });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });
  users.find({ id: user.id }).assign({ token }).write();

  res.json({ message: "Giriş başarılı", token, user });
});

// -------------------- PROFILE --------------------
server.get("/profile", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Token yok!" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const db = router.db;
    const user = db.get("users").find({ id: decoded.id }).value();
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı!" });

    res.json(user);
  } catch (err) {
    return res.status(403).json({ message: "Token geçersiz!" });
  }
});

// -------------------- ROUTER --------------------
server.use(router);

// -------------------- SERVER --------------------
server.listen(5737, () => {
  console.log("JSON Server running on port 5737");
});
