import { useForm } from "react-hook-form";
import "./LoginForm.scss";

const LoginForm = ({onSignIn}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onSignIn(data);
  };

  return (
    <>
      <div className='form-header sign-in'>
          <p className='title fw-semibold'>SignIn</p>
          <p className='subtitle'>Welcome back! Please enter your details</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='form-container d-flex flex-column' noValidate>
        <div className='form-group d-flex flex-column'>
          <label className='' htmlFor="email">Email</label>
          <input
            id='email'
            type='email'
            placeholder='example@gmail.com'
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
            {...register("password", { required: "Password zorunludur" })}
            className={`form-input ${errors.password ? "error" : ""}`}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <button type="submit" className="form-button border-0">
          Sign In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
