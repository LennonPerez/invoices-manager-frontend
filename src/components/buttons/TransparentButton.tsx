import { FunctionComponent } from "react";
import { useTheme } from "@/providers/ThemesProvider";
import BaseButton, { ButtonColor, BaseButtonProps } from "./Button";

type TransparentButtonProps = Omit<BaseButtonProps, "buttonColor">;

const TransparentButton: FunctionComponent<TransparentButtonProps> = (
  props,
) => {
  const { theme } = useTheme();

  const colors: ButtonColor = {
    name: "transparent",
    backgroundColor: "transparent",
    textColor: theme.palette.text.primary,
  };

  return (
    <BaseButton {...props} buttonColor={colors}>
      {props.children}
    </BaseButton>
  );
};

export default TransparentButton;
