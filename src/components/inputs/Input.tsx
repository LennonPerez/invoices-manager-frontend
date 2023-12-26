import {
  useState,
  useEffect,
  ReactNode,
  FunctionComponent,
  HTMLInputTypeAttribute,
  ChangeEvent,
  FocusEvent,
} from "react";
import styled from "styled-components";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { HiCalendar } from "react-icons/hi2";
import { generateUniqueId } from "@/utils/generators";
import { ChangeHandler, RefCallBack } from "react-hook-form";

export interface InputProps {
  reference?: RefCallBack;
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  label?: string;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  cantWrite?: boolean;
  error?: boolean;
  showErrorMessage?: boolean;
  errorMessage?: string;
  suffixContent?: ReactNode;
  onClick?: () => void;
  onFocus?: ChangeHandler;
  onBlur?: ChangeHandler;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
  const [inputId, setInputId] = useState<string>("");
  const [isFocused, setFocus] = useState<boolean>(false);

  useEffect(() => setInputId(generateUniqueId()), []);

  const onClickInput = () => {
    if (props.disabled) return;

    setFocus(!props.disabled);

    if (!props.onClick) return;
    props.onClick();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) return;
    props.onChange(e);
  };

  const onFocusInput = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(!props.disabled);
    if (props.onFocus && !props.disabled) props.onFocus(e);
  };

  const onBlurInput = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocus(false);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <BaseInputStyles
      $hasSuffix={!!props.suffixContent}
      $isDisabled={!!props.disabled}
      $isReadOnly={!!props.readOnly}
      $cantWrite={!!props.cantWrite}
      $isError={props.error ?? false}
      $isFocused={isFocused}
    >
      {!!props.label ? (
        <div className="label-container">
          <label className="label" htmlFor={inputId}>
            {props.label}
          </label>
          {props.error &&
          props.errorMessage &&
          (props.showErrorMessage ?? true) ? (
            <span className="error-message">{props.errorMessage}</span>
          ) : null}
        </div>
      ) : null}
      <div className="input-container" onClick={onClickInput}>
        <input
          id={inputId}
          ref={props.reference}
          type={props.type}
          value={props.value}
          name={props.name}
          required={props.required}
          disabled={props.disabled}
          readOnly={props.readOnly}
          inputMode={props.cantWrite ? "none" : undefined}
          pattern={props.pattern}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
        />
        {!!props.suffixContent ? props.suffixContent : null}
      </div>
    </BaseInputStyles>
  );
};

interface BaseInputStylesProps {
  $isFocused: boolean;
  $hasSuffix: boolean;
  $isReadOnly: boolean;
  $isDisabled: boolean;
  $cantWrite: boolean;
  $isError: boolean;
}

const BaseInputStyles = styled.div<BaseInputStylesProps>`
  opacity: ${({ $isDisabled }) => ($isDisabled ? "0.5" : "1")};
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .label-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
    gap: 0.5rem;

    label {
      color: ${({ theme, $isError }) =>
        $isError ? theme.inputs.error : theme.inputs.label};
      width: fit-content;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 0.9375rem;
      letter-spacing: -0.01563rem;
      text-align: left;

      @media (min-width: 768px) {
        color: ${({ theme, $isError }) =>
          $isError ? theme.inputs.error : theme.palette.text.secondary};
      }
    }

    .error-message {
      color: ${({ theme }) => theme.inputs.error};
      text-transform: lowercase;
      text-align: right;
    }
  }

  .input-container {
    background-color: ${({ theme }) => theme.inputs.background};
    border: 1px solid
      ${({ theme, $isFocused, $isError }) =>
        $isError
          ? theme.inputs.error
          : $isFocused
            ? theme.inputs.borderActive
            : theme.inputs.border};
    cursor: ${({ $cantWrite, $isDisabled, $isReadOnly }) =>
      $isDisabled || $isReadOnly
        ? "not-allowed"
        : $cantWrite
          ? "pointer"
          : "text"};
    padding: 0 ${(props) => (props.$hasSuffix ? "0" : "1rem ")} 0 1rem;
    border-radius: 0.25rem;
    display: flex;
    height: 3rem;
    width: 100%;

    @media (hover: hover) {
      &:hover {
        border-color: ${({ theme, $isError }) =>
          $isError ? theme.inputs.error : theme.inputs.borderActive};
      }
    }

    input {
      caret-color: ${({ $cantWrite, theme }) =>
        $cantWrite ? "transparent" : theme.inputs.caret};
      background-color: ${({ theme }) => theme.inputs.background};
      cursor: inherit;
      color: ${({ theme }) => theme.inputs.text};
      border: none;
      outline: none;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: 0.9375rem;
      letter-spacing: -0.01563rem;
      width: 100%;
      height: 100%;
    }
  }
`;

const InputSuffixIcon = ({ children }: { children: ReactNode }) => {
  return <InputSuffixIconStyles>{children}</InputSuffixIconStyles>;
};

const InputSuffixIconStyles = styled.div`
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputSelectIcon = ({ isOpen }: { isOpen: boolean }) => {
  const Icon = isOpen ? LuChevronUp : LuChevronDown;
  return (
    <InputSuffixIcon>
      <InputSelectIconStyles>
        <Icon className="icon" />
      </InputSelectIconStyles>
    </InputSuffixIcon>
  );
};

const InputSelectIconStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: ${({ theme }) => theme.inputs.selector};
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const InputCalendarIcon = () => {
  return (
    <InputSuffixIcon>
      <InputCalendarIconStyles>
        <HiCalendar className="icon" />
      </InputCalendarIconStyles>
    </InputSuffixIcon>
  );
};

const InputCalendarIconStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: ${({ theme }) => theme.inputs.icon};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default Input;
