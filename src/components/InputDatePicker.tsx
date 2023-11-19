import { FunctionComponent, RefObject, useState } from "react";
import styled from "styled-components";
import DatePickerSelector, { DatePicked } from "./DatePickerSelector";
import BaseInput, { InputCalendarIcon } from "./Input";
import { formatDate } from "@/utils/formatters";

interface InputDatePickerProps {
  reference?: RefObject<HTMLInputElement>;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
}

export const InputDatePicker: FunctionComponent<InputDatePickerProps> = (
  props,
) => {
  const [isSelectorOpened, setIsSelectorOpened] = useState<boolean>(false);
  const [datePicked, setDatePicked] = useState<DatePicked>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });

  const { year, month, day } = datePicked;
  const dateToDisplay = formatDate(new Date(year, month, day));

  const onOpenSelector = () => setIsSelectorOpened(true);
  const onCloseSelector = () => setIsSelectorOpened(false);

  const onSelectYear = (year: number) => {
    setDatePicked({ ...datePicked, year });
  };

  const onSelectMonth = (month: number) => {
    setDatePicked({ ...datePicked, month });
  };

  const onSelectDay = (day: number) => {
    setDatePicked({ ...datePicked, day });
    onCloseSelector();
  };

  return (
    <InputDatePickerStyles>
      <BaseInput
        {...props}
        cantWrite
        value={dateToDisplay}
        suffixContent={<InputCalendarIcon />}
        onClick={onOpenSelector}
        onFocus={onOpenSelector}
        // onBlur={() => setTimeout(onCloseSelector, 200)}
      />
      <DatePickerSelector
        isOpened={isSelectorOpened}
        datePicked={datePicked}
        onClose={onCloseSelector}
        onSelectDate={setDatePicked}
        onSelectYear={onSelectYear}
        onSelectMonth={onSelectMonth}
        onSelectDay={onSelectDay}
      />
    </InputDatePickerStyles>
  );
};

const InputDatePickerStyles = styled.div`
  position: relative;
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
