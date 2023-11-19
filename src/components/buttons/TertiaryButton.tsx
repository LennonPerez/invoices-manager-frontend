import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, ButtonProps } from "./Button";

const TertiaryButton: FunctionComponent<ButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "tertiary",
    backgroundColor: theme.buttons.tertiary.background,
    hoverBackgroundColor: theme.buttons.tertiary.hoverBackground,
    textColor: theme.buttons.tertiary.color,
    hoverTextColor: theme.buttons.tertiary.hoverColor,
  };

  return (
    <BaseButton {...props} $colors={colors}>
      {props.children}
    </BaseButton>
  );
};

export default TertiaryButton;
