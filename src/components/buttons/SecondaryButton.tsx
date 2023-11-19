import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, ButtonProps } from "./Button";

const ScondaryButton: FunctionComponent<ButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "secondary",
    backgroundColor: theme.buttons.secondary.background,
    hoverBackgroundColor: theme.buttons.secondary.hoverBackground,
    textColor: theme.buttons.secondary.color,
    hoverTextColor: theme.buttons.secondary.hoverColor,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export default ScondaryButton;
