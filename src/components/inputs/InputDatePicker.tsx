import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Input, { InputCalendarIcon, InputProps } from "./Input";
import { formatDate } from "@/utils/formatters";
import { DatePickerSelector } from "./selectors";

type InputDatePickerProps = InputProps;

export const InputDatePicker: FunctionComponent<InputDatePickerProps> = (
  props,
) => {
  const [isSelectorOpened, setIsSelectorOpened] = useState<boolean>(false);
  const [datePicked, setDatePicked] = useState<Date | null>(null);

  const dateToDisplay = datePicked ? formatDate(datePicked) : "";

  const onOpenSelector = () => setIsSelectorOpened(true);
  const onCloseSelector = () => setIsSelectorOpened(false);

  return (
    <InputDatePickerStyles>
      <Input
        {...props}
        cantWrite
        value={dateToDisplay}
        suffixContent={<InputCalendarIcon />}
        onClick={onOpenSelector}
        onFocus={onOpenSelector}
        // onBlur={() => setTimeout(onCloseSelector, 200)}
      />
      <div className="input-datepicker-container">
        <DatePickerSelector
          isOpened={isSelectorOpened}
          datePicked={datePicked ?? new Date()}
          onClose={onCloseSelector}
          onSelectDate={setDatePicked}
        />
      </div>
    </InputDatePickerStyles>
  );
};

const InputDatePickerStyles = styled.div`
  position: relative;
  width: 100%;

  .input-datepicker-container {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;

    @media (min-width: 768px) {
      top: 5rem;
    }
  }
`;

export const getDateByString = (text: string): Date | null => {
  const parsedDate = Date.parse(text);

  if (!isNaN(parsedDate)) {
    return new Date(parsedDate);
  } else {
    return null;
  }
};

export default InputDatePicker;
