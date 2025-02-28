import { useRef } from "react";
import { AppLabel } from "../components/AppLabel/AppLabel";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const signUpRef = useRef({
    name: "",
    nikName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmite = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(signUpRef.current);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmite}>
        <h1>Форма для регистрации</h1>
        <AppLabel
          labelText="Введите свое Имя"
          type="text"
          labelChange={(value: string) => (signUpRef.current.name = value)}
        />
        <AppLabel
          labelText="Введите свой Ник"
          type="text"
          labelChange={(value: string) => (signUpRef.current.nikName = value)}
        />
        <AppLabel
          labelText="Введите свою почту"
          type="email"
          labelChange={(value: string) => (signUpRef.current.email = value)}
        />
        <label htmlFor="">
          Ваш пол
          <div className="gender">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={(e) => (signUpRef.current.gender = e.target.value)}
            />
            <label className="gender" htmlFor="male">
              Мужской
            </label>
          </div>
          <div className="gender">
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={(e) => (signUpRef.current.gender = e.target.value)}
            />
            <label className="gender" htmlFor="female">
              Женский
            </label>
          </div>
        </label>
        <AppLabel
          labelText="Введите свой пароль"
          type="password"
          labelChange={(value: string) => (signUpRef.current.password = value)}
        />
        <AppLabel
          labelText="Повторите свой пароль"
          type="password"
          labelChange={(value: string) =>
            (signUpRef.current.confirmPassword = value)
          }
        />
        <div className="btnWrapper">
          <button type="submit"> Войти</button>
          <Link to="/"> Залогиниться</Link>
        </div>
      </form>
    </div>
  );
};
