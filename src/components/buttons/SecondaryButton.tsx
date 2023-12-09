import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, BaseButtonProps } from "./Button";

type SecondaryButtonProps = Omit<BaseButtonProps, "buttonColor">;

const ScondaryButton: FunctionComponent<SecondaryButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "secondary",
    backgroundColor: theme.buttons.secondary.background,
    hoverBackgroundColor: theme.buttons.secondary.hoverBackground,
    textColor: theme.buttons.secondary.color,
    hoverTextColor: theme.buttons.secondary.hoverColor,
  };

  return (
    <BaseButton {...props} buttonColor={colors}>
      {props.children}
    </BaseButton>
  );
};

export default ScondaryButton;
