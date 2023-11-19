import { FunctionComponent } from "react";
import styled from "styled-components";
import Option from "@/types/option";
import Checkbox from "./Checkbox";
import BaseSelector from "./Selector";

interface MultipleOptionSelectorProps {
  isOpened: boolean;
  selectedOptions: string[];
  options: Option[];
  onClose: () => void;
  onSelectOption: (arg: string) => void;
}

export const MultipleOptionSelector: FunctionComponent<
  MultipleOptionSelectorProps
> = ({ isOpened, selectedOptions, options, onClose, onSelectOption }) => {
  if (!isOpened) return null;

  return (
    <MultipleOptionSelectorStyles>
      <BaseSelector onClose={onClose}>
        <div className="options-container">
          {options.map((e) => (
            <label key={e.value} htmlFor={e.value} className="option">
              <Checkbox
                id={e.value}
                value={e.value}
                isChecked={selectedOptions.includes(e.value)}
                onChange={onSelectOption}
              />
              <span>{e.text}</span>
            </label>
          ))}
        </div>
      </BaseSelector>
    </MultipleOptionSelectorStyles>
  );
};

const MultipleOptionSelectorStyles = styled.div`
  position: absolute;
  top: 3.5rem;
  left: -4rem;
  right: -4rem;

  .options-container {
    padding: 1.75rem;
    width: fit;

    .option {
      border-bottom: 0.0625rem solid ${({ theme }) => theme.selector.border};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 1.5rem;

      &:hover input ~ .checkmark-container {
        border-color: ${({ theme }) => theme.inputs.selector};
      }

      &:last-child {
        margin-bottom: 0;
      }

      span {
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
