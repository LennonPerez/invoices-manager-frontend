import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, ButtonProps } from "./Button";

const PrimaryButton: FunctionComponent<ButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "primary",
    backgroundColor: theme.buttons.primary.background,
    hoverBackgroundColor: theme.buttons.primary.hoverBackground,
    textColor: theme.buttons.primary.color,
    hoverTextColor: theme.buttons.primary.hoverColor,
  };

  return (
    <BaseButton {...props} buttonColor={colors}>
      {props.children}
    </BaseButton>
  );
};

export default PrimaryButton;
