import style from "./button.module.css";

type BtnVariant = "primary" | "secondary";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: BtnVariant;
  text: string;
}

const { primary, secondary } = style;

const btnBackgroundVariants = {
  primary: primary,
  secondary: secondary,
};

const Button = ({ variant, text }: IButtonProps) => {
  console.log(btnBackgroundVariants[variant]);

  return (
    <button
      className={`${btnBackgroundVariants[variant]} text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center`}
    >
      {text}
    </button>
  );
};

export default Button;
