import { SignUpForm } from "../components/SignUpForm/SignUpForm";

export const SignUp = () => {
  const handleSignUpSubmit = (formData: {
    name: string;
    nikName: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log(formData);
  };

  return <SignUpForm formSubmit={handleSignUpSubmit} />;
};
