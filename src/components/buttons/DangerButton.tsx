import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, ButtonProps } from "./Button";

const DangerButton: FunctionComponent<ButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "danger",
    backgroundColor: theme.buttons.danger.background,
    hoverBackgroundColor: theme.buttons.danger.hoverBackground,
    textColor: theme.buttons.danger.color,
    hoverTextColor: theme.buttons.danger.hoverColor,
  };

  return (
    <BaseButton {...props} buttonColor={colors}>
      {props.children}
    </BaseButton>
  );
};

export default DangerButton;
