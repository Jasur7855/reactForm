import { useRef } from "react";
import { AppInput } from "../AppInput/AppInput";
import { Link } from "react-router-dom";

interface ISignUpForm {
  formSubmit: (formData: {
    name: string;
    nikName: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

export const SignUpForm = ({ formSubmit }: ISignUpForm) => {
  const signUpRef = useRef({
    name: "",
    nikName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    formSubmit(signUpRef.current);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Форма для регистрации</h1>
        <AppInput
          labelText="Введите свое Имя"
          type="text"
          labelChange={(value: string) => (signUpRef.current.name = value)}
        />
        <AppInput
          labelText="Введите свой Ник"
          type="text"
          labelChange={(value: string) => (signUpRef.current.nikName = value)}
        />
        <AppInput
          labelText="Введите свою почту"
          type="email"
          labelChange={(value: string) => (signUpRef.current.email = value)}
        />
        <label>
          Ваш пол
          <div className="gender">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={(e) => (signUpRef.current.gender = e.target.value)}
            />
            <label htmlFor="male">Мужской</label>
          </div>
          <div className="gender">
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={(e) => (signUpRef.current.gender = e.target.value)}
            />
            <label htmlFor="female">Женский</label>
          </div>
        </label>
        <AppInput
          labelText="Введите свой пароль"
          type="password"
          labelChange={(value: string) => (signUpRef.current.password = value)}
        />
        <AppInput
          labelText="Повторите свой пароль"
          type="password"
          labelChange={(value: string) =>
            (signUpRef.current.confirmPassword = value)
          }
        />
        <div className="btnWrapper">
          <button type="submit">Зарегистрироваться</button>
          <Link to="/">Залогиниться</Link>
        </div>
      </form>
    </div>
  );
};
