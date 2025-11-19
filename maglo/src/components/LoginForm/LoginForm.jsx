import { useForm } from "react-hook-form";
import "./LoginForm.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const API = import.meta.env.VITE_API_URL;

const LoginForm = ({ onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const loginRes = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!loginRes.ok) { throw new Error("Giriş başarısız! Kayıt oldunuz mu"); }

      const loginData = await loginRes.json();
      const loginInfo = loginData.data;
      const token = loginInfo.accessToken;
      const userId = loginInfo.user.id;

      const userRes = await fetch(`${API}/users/${userId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!userRes.ok) {
        const err = await userRes.json();
        throw new Error(err.message || "Kullanıcı verisi alınamadı");
      }

      const userData = await userRes.json();

      Toastify({
        text: "Giriş Başarılı ✔",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "white",
        stopOnFocus: true,
        close: true,
        style: {
          border: "1px solid green",
          color: "green",
        },
      }).showToast();
      
      onSignIn({ ...userData, token });
    }
    catch (err) {
      console.error(err);
      Toastify({
        text: `Hata: ${err.message}`,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "white",
        stopOnFocus: true,
        close: true,
        style: {
          border: "1px solid red",
          color: "red",
        },
      }).showToast();
    }
  };

  return (
    <>
      <div className='form-header sign-in'>
        <p className='title fw-semibold'>SignIn</p>
        <p className='subtitle'>Welcome back! Please enter your details</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='form-container d-flex flex-column' noValidate>
        <div className='form-group d-flex flex-column'>
          <label htmlFor="email">Email</label>
          <input
            id='email'
            type='email'
            placeholder='example@gmail.com'
            disabled={isSubmitting}
            {...register("email", {
              required: "Email zorunludur",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Geçerli bir email giriniz",
              },
            })}
            className={`form-input ${errors.email ? "error" : ""}`}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group d-flex flex-column">
          <label htmlFor="email">Password</label>
          <input
            id='password'
            type="password"
            placeholder='*******'
            disabled={isSubmitting}
            {...register("password", { required: "Password zorunludur" })}
            className={`form-input ${errors.password ? "error" : ""}`}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button type="submit" className="form-button border-0">
          {isSubmitting ? (
            <span className="spinner" />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
