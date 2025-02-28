import React, { useRef } from "react";
import { AppLabel } from "../components/AppLabel/AppLabel";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const signInRef = useRef({ email: "", password: "" });

  const handleSubmite = (event: React.FormEvent): void => {
    event.preventDefault();

    console.log(signInRef.current);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmite}>
        <h1>Форма для логина</h1>
        <AppLabel
          labelText="Введите свой email"
          type="email"
          labelChange={(value: string) => (signInRef.current.email = value)}
        />
        <AppLabel
          labelText="Введите свой пароль"
          type="password"
          labelChange={(value: string) => (signInRef.current.password = value)}
        />
        <div className="btnWrapper">
          <button type="submit"> Войти</button>
          <Link to="/signIn"> Зарегестрироваться</Link>
        </div>
      </form>
    </div>
  );
};
