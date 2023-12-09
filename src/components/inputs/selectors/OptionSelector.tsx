import { FunctionComponent } from "react";
import styled from "styled-components";
import BaseSelector from "./Selector";

interface OptionSelectorProps {
  isOpened: boolean;
  selectedOption: string | null;
  options: SelectorOption[];
  onClose: () => void;
  onSelectValue: (arg: SelectorOption) => void;
}

export interface SelectorOption {
  text: string;
  value: string;
}

const OptionSelector: FunctionComponent<OptionSelectorProps> = ({
  isOpened,
  selectedOption,
  options,
  onClose,
  onSelectValue,
}) => {
  if (!isOpened) return null;

  return (
    <OptionSelectorStyles>
      <BaseSelector onClose={onClose}>
        {options.map((e) => (
          <div
            key={e.value}
            className={`option ${selectedOption === e.value ? "selected" : ""}`}
            onClick={() => onSelectValue(e)}
          >
            <p>{e.text}</p>
          </div>
        ))}
      </BaseSelector>
    </OptionSelectorStyles>
  );
};

const OptionSelectorStyles = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;

  .option {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.selector.border};
    padding: 1.25rem;
    cursor: pointer;

    p {
      color: ${({ theme }) => theme.selector.text};
      font-size: 0.75rem;
      font-weight: 700;
    }

    @media (hover: hover) {
      &:hover {
        p {
          color: ${({ theme }) => theme.selector.activeText};
        }
      }
    }

    &:first-child {
      border-radius: 0.5rem 0.5rem 0 0;
    }

    &:last-child {
      border-bottom: none;
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }

  /* .selected {
    p {
      color: ${({ theme }) => theme.selector.activeText};
    }
  } */
`;

export default OptionSelector;
