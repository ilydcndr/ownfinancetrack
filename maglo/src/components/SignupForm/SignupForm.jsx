import { useForm } from "react-hook-form";
import "./SignupForm.scss";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const API = import.meta.env.VITE_API_URL;

const SignupForm = ({ onSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const registerRes = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: data.fullname,
          email: data.email,
          password: data.password,
        }),
      });


      if (!registerRes.ok) { throw new Error("Giriş başarısız!"); }

      const registerData = await registerRes.json();
      const token = registerData.token;
      console.log(token,"signup üretti")

      Toastify({
        text: "Kayıt olma Başarılı ✔",
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

      onSignUp({ ...data, token });

    } catch (err) {
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
      <div className='form-header sign-up'>
        <p className='title fw-semibold'>Create new account</p>
        <p className='subtitle'>Welcome back! Please enter your details</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='form-container d-flex flex-column' noValidate>
        <div className='form-group d-flex flex-column'>
          <label htmlFor="fullname">Full Name</label>
          <input
            id='fullname'
            type='text'
            placeholder='John Doe'
            disabled={isSubmitting}
            {...register("fullname", {
              required: "Full name zorunludur",
              minLength: {
                value: 2,
                message: "En az 2 karakter olmalı"
              },
              maxLength: {
                value: 50,
                message: "En fazla 50 karakter olabilir"
              }
            })}
            className={`form-input ${errors.fullname ? "error" : ""}`}
          />
          {errors.fullname && <p className="error-message">{errors.fullname.message}</p>}
        </div>

        <div className='form-group d-flex flex-column'>
          <label className='' htmlFor="email">Email</label>
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
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignupForm;