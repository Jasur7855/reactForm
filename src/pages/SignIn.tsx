import { SignInForm } from "../components/SignInForm/SignInForm";

export const SignIn = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <SignInForm formSubmit={handleSubmit} />
    </div>
  );
};
