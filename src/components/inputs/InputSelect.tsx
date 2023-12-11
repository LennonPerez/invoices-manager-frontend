/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import Option from "@/types/option";
import BaseInput, { InputSelectIcon } from "./Input";
import { OptionSelector } from "./selectors";

interface InputSelectProps {
  reference?: RefObject<HTMLInputElement>;
  label?: string;
  value?: string | null;
  isRequired?: boolean;
  options: Option[];
}

export const InputSelect: FunctionComponent<InputSelectProps> = (props) => {
  const [isSelectorOpened, setIsSelectorOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);

  useEffect(() => {
    if (!props.value) return;

    const initial = props.options.find((e) => e.value === props.value);
    if (!initial) return;

    setSelected(initial);
  }, []);

  const onOpenSelector = () => setIsSelectorOpened(true);
  const onCloseSelector = () => setIsSelectorOpened(false);

  return (
    <InputSelectStyles>
      <BaseInput
        {...props}
        cantWrite
        value={selected?.text ?? ""}
        suffixContent={<InputSelectIcon isOpen={isSelectorOpened} />}
        onClick={onOpenSelector}
        onFocus={onOpenSelector}
        // onBlur={() => setTimeout(onCloseSelector, 100)}
      />
      <OptionSelector
        isOpened={isSelectorOpened}
        selectedOption={selected?.value ?? null}
        options={props.options}
        onClose={onCloseSelector}
        onSelectValue={(e) => {
          setSelected(e);
          onCloseSelector();
        }}
      />
    </InputSelectStyles>
  );
};

const InputSelectStyles = styled.div`
  position: relative;
  width: 100%;
`;

export const searchOptionByString = (
  text: string,
  options: Option[],
): Option | undefined => {
  return options.find((o) => o.text === text);
};

export default InputSelect;
