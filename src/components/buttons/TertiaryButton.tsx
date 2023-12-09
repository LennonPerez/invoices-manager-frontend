import { FunctionComponent } from "react";
import { useTheme } from "@/providers/themes";
import BaseButton, { ButtonColor, BaseButtonProps } from "./Button";

type TertiaryButtonProps = Omit<BaseButtonProps, "buttonColor">;

const TertiaryButton: FunctionComponent<TertiaryButtonProps> = (props) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "tertiary",
    backgroundColor: theme.buttons.tertiary.background,
    hoverBackgroundColor: theme.buttons.tertiary.hoverBackground,
    textColor: theme.buttons.tertiary.color,
    hoverTextColor: theme.buttons.tertiary.hoverColor,
  };

  return (
    <BaseButton {...props} buttonColor={colors}>
      {props.children}
    </BaseButton>
  );
};

export default TertiaryButton;
