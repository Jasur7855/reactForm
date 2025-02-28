interface IAppLabel {
  type: "email" | "password" | "text";
  labelText: string;
  labelChange: (value: string) => void;
}

export const AppLabel = ({ type, labelText, labelChange }: IAppLabel) => {
  return (
    <label htmlFor="">
      {labelText}
      <input
        type={type}
        onChange={(e) => labelChange(e.target.value)}
        required
      />
    </label>
  );
};
