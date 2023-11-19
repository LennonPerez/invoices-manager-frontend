import { FunctionComponent } from "react";
import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";

interface CheckboxProps {
  id: string;
  value: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  value,
  isChecked,
  onChange,
}) => {
  return (
    <CheckboxStyles onClick={() => onChange(value)}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        value={value}
        readOnly
      />
      <div className="checkmark-container">
        <ImCheckmark className="checkmark" />
      </div>
    </CheckboxStyles>
  );
};

const CheckboxStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.125rem;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 1rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark-container {
      background-color: ${({ theme }) => theme.inputs.selector};

      .checkmark {
        display: block;
      }
    }
  }

  .checkmark-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.inputs.background};
    border-radius: 0.125rem;
    border: 1px solid transparent;
    transition: border-color 0.2s ease-in-out;
    height: 1.5rem;
    width: 1.5rem;

    .checkmark {
      display: none;
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;

export default Checkbox;
