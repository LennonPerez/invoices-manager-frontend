import { FunctionComponent } from "react";
import { useTheme } from "@/providers/ThemesProvider";
import BaseButton, { ButtonColor, BaseButtonProps } from "./Button";

type PrimaryButtonProps = Omit<BaseButtonProps, "buttonColor">;

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props) => {
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
