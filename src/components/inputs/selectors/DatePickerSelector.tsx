import { FunctionComponent, memo, useState } from "react";
import styled from "styled-components";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import BaseSelector from "./Selector";
import { formatMonth, formatMonthByIndex } from "@/utils/formatters";
import { generateIDs } from "@/utils/generators";

interface DatePickerSelectorProps {
  isOpened: boolean;
  datePicked: DatePicked;
  onClose: () => void;
  onSelectDate: (date: DatePicked) => void;
  onSelectDay: (day: number) => void;
  onSelectMonth: (month: number) => void;
  onSelectYear: (year: number) => void;
}

interface DatePicked {
  year: number;
  month: number;
  day: number;
}

const DatePickerSelector: FunctionComponent<DatePickerSelectorProps> = ({
  isOpened,
  datePicked,
  onClose,
  onSelectDate,
  onSelectYear,
  onSelectDay,
}) => {
  const { year, month, day } = datePicked;
  const [view, setView] = useState<"days" | "months" | "years">("days");
  if (!isOpened) return null;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const minYear = 1900;
  const maxYear = currentYear;

  const date = new Date(year, month, day);
  const daysByMonth = new Date(year, month + 1, 0).getDate();

  const yearsToIterate = generateYears(minYear, maxYear);
  const monthsToIterate = generateIDs(12);
  const daysToIterate = generateIDs(daysByMonth);

  const filterToShow =
    view === "days" ? `${formatMonth(date)} ${year}` : `${year}`;

  const isPreviusButtonDisabled = view === "years" || year === minYear;
  const isNextButtonDisabled =
    view === "years" || (month === currentMonth && year === maxYear);

  const changeView = () => {
    switch (view) {
      case "days":
        setView("months");
        break;
      case "months":
        setView("years");
        break;
      case "years":
        setView("days");
        break;
    }
  };

  const selectYear = (year: number) => {
    onSelectYear(year);
    setView("months");
  };

  const selectMonth = (month: number) => {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const adjustedDay = Math.min(day, lastDayOfMonth);
    onSelectDate({ ...datePicked, month, day: adjustedDay });
    setView("days");
  };

  const selectDay = (day: number) => {
    onSelectDay(day);
  };

  const selectPreviousOption = () => {
    const previousMonth = month - 1;
    const previousYear = year - 1;

    switch (view) {
      case "days":
        if (previousMonth === -1) {
          onSelectDate({
            ...datePicked,
            year: previousYear,
            month: 11,
          });
        } else {
          selectMonth(previousMonth);
        }
        break;
      case "months":
        selectYear(previousYear);
        break;
      default:
        return;
    }
  };

  const selectNextOption = () => {
    const nextMonth = month + 1;
    const nextYear = year + 1;

    switch (view) {
      case "days":
        if (nextMonth === 12) {
          onSelectDate({
            ...datePicked,
            year: nextYear,
            month: 0,
          });
        } else {
          selectMonth(nextMonth);
        }
        break;
      case "months":
        selectYear(nextYear);
        break;
      default:
        return;
    }
  };

  return (
    <InputDatePickerSelectorStyles>
      <BaseSelector onClose={onClose}>
        <div className="date-picker-container">
          <div className="filters-container">
            <div
              className={`previus-button button ${
                isPreviusButtonDisabled ? "disabled" : ""
              }`}
              onClick={selectPreviousOption}
            >
              <LuChevronLeft className="icon" />
            </div>
            <div className="selected-month-year" onClick={changeView}>
              <p>{filterToShow}</p>
            </div>
            <div
              className={`next-button button ${
                isNextButtonDisabled ? "disabled" : ""
              }`}
              onClick={selectNextOption}
            >
              <LuChevronRight className="icon" />
            </div>
          </div>
          {view === "years" ? (
            <div className="years-container list-options">
              {yearsToIterate.map((y, i) => {
                return (
                  <div
                    key={y + i}
                    className={`year option ${y === year ? "selected" : ""}`}
                    onClick={() => selectYear(y)}
                  >
                    <p>{y}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
          {view === "months" ? (
            <div className="months-container list-options">
              {monthsToIterate.map((id, i) => {
                const monthToShow = i + 1;
                return (
                  <div
                    key={id}
                    className={`month option ${i === month ? "selected" : ""}`}
                    onClick={() => selectMonth(i)}
                  >
                    <p>{formatMonthByIndex(monthToShow, "long")}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
          {view === "days" ? (
            <div className="days-container">
              {daysToIterate.map((id, i) => {
                const dayToShow = i + 1;
                return (
                  <div
                    key={id}
                    className={`day ${dayToShow === day ? "selected" : ""}`}
                    onClick={() => selectDay(dayToShow)}
                  >
                    <p>{dayToShow}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </BaseSelector>
    </InputDatePickerSelectorStyles>
  );
};

const generateYears = (startYear: number, endYear: number) => {
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
};

const InputDatePickerSelectorStyles = styled.div`
  /* position: absolute;
  top: 6rem;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    top: 5rem;
  } */

  p {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 700;
  }

  .date-picker-container {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0.75rem;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      padding: 1.25rem 0.75rem;
    }

    .filters-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5rem;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        margin-bottom: 1rem;
      }

      .button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.25rem;
        padding: 0.5rem;

        @media (min-width: 768px) {
          padding: 0;
        }

        @media (hover: hover) {
          &:hover {
            /* background-color: ${({ theme }) => theme.selector.border}; */
          }
        }

        .icon {
          color: ${({ theme }) => theme.selector.activeText};
          width: 1.25rem;
          height: 1.25rem;

          @media (min-width: 768px) {
            width: 1rem;
            height: 1rem;
          }
        }
      }

      .disabled {
        pointer-events: none;
        cursor: not-allowed;

        .icon {
          visibility: hidden;
        }
      }

      .selected-month-year {
        padding: 1rem;
        border-radius: 0.25rem;
        cursor: pointer;

        @media (min-width: 768px) {
          padding: 0.5rem;
        }

        @media (hover: hover) {
          &:hover {
            /* background-color: ${({ theme }) => theme.selector.border}; */

            p {
              color: ${({ theme }) => theme.selector.activeText};
            }
          }
        }

        p {
          font-size: 1rem;

          @media (min-width: 768px) {
            font-size: 0.75rem;
          }
        }
      }
    }

    .list-options {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 10rem;
      overflow-y: auto;
      padding: 0 0.75rem;

      scrollbar-width: thin;
      scrollbar-color: transparent transparent;

      &::-webkit-scrollbar {
        width: 0px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }

      .option {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.25rem;
        padding: 1rem;
        width: 100%;

        @media (hover: hover) {
          &:hover {
            /* background-color: ${({ theme }) => theme.selector.border}; */

            p {
              color: ${({ theme }) => theme.selector.activeText};
            }
          }
        }
      }

      .selected {
        p {
          color: ${({ theme }) => theme.selector.activeText};
        }
      }
    }

    .days-container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      /* grid-gap: 0.9375rem; */

      .day {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.25rem;
        padding: 1rem 0.5rem;

        @media (hover: hover) {
          &:hover {
            /* background-color: ${({ theme }) => theme.selector.border}; */

            p {
              color: ${({ theme }) => theme.selector.activeText};
            }
          }
        }

        @media (min-width: 768px) {
          padding: 0.5rem 0.4rem;
        }
      }

      .selected {
        p {
          color: ${({ theme }) => theme.selector.activeText};
        }
      }
    }
  }
`;

export default memo(DatePickerSelector);
