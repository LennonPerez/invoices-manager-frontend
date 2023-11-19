import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, ButtonProps } from "./Button";

const TransparentButton: FunctionComponent<ButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "transparent",
    backgroundColor: "transparent",
    textColor: theme.palette.text.primary,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export default TransparentButton;
