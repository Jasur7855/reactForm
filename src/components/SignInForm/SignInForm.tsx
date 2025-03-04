import { Link } from "react-router-dom";
import { AppInput } from "../AppInput/AppInput";
import { useRef } from "react";

interface ISignIn {
  formSubmit: (email: string, password: string) => void;
}

export const SignInForm = ({ formSubmit }: ISignIn) => {
  const signInRef = useRef({ email: "", password: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    formSubmit(signInRef.current.email, signInRef.current.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Форма для логина</h1>
      <AppInput
        labelText="Введите свой email"
        type="email"
        labelChange={(value: string) => (signInRef.current.email = value)}
      />
      <AppInput
        labelText="Введите свой пароль"
        type="password"
        labelChange={(value: string) => (signInRef.current.password = value)}
      />
      <div className="btnWrapper">
        <button type="submit"> Войти</button>
        <Link to="/signUp"> Зарегистрироваться</Link>
      </div>
    </form>
  );
};
