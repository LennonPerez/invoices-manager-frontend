/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import Option from "@/types/option";
import Input, { InputProps, InputSelectIcon } from "./Input";
import { OptionSelector } from "./selectors";

interface InputSelectProps extends InputProps {
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
      <Input
        {...props}
        cantWrite
        value={selected?.text ?? ""}
        suffixContent={<InputSelectIcon isOpen={isSelectorOpened} />}
        onClick={onOpenSelector}
        onFocus={onOpenSelector}
        // onBlur={() => setTimeout(onCloseSelector, 100)}
      />
      <div className="input-options-container">
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
      </div>
    </InputSelectStyles>
  );
};

const InputSelectStyles = styled.div`
  position: relative;
  width: 100%;

  .input-options-container {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;

    @media (min-width: 768px) {
      top: 5rem;
    }
  }
`;

export const searchOptionByString = (
  text: string,
  options: Option[],
): Option | undefined => {
  return options.find((o) => o.text === text);
};

export default InputSelect;
