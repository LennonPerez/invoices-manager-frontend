import {
  useRef,
  useState,
  useEffect,
  ReactNode,
  FunctionComponent,
  HTMLInputTypeAttribute,
  RefObject,
  ChangeEvent,
} from "react";
import styled from "styled-components";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { HiCalendar } from "react-icons/hi2";
import { generateUniqueId } from "@/utils/generators";

export interface BaseInputProps {
  reference?: RefObject<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  cantWrite?: boolean;
  suffixContent?: ReactNode;
  pattern?: string;
  errorMessage?: string;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: string) => void;
}

const BaseInput: FunctionComponent<BaseInputProps> = (props) => {
  const [inputId, setInputId] = useState<string>("");
  const [isFocused, setFocus] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const localRef = useRef<HTMLInputElement>(null);
  const ref = props.reference ?? localRef;

  useEffect(() => setInputId(generateUniqueId()), []);

  const onClickInput = () => {
    if (props.isDisabled || props.isDisabled) return;

    ref.current?.focus();

    if (!props.onClick) return;
    props.onClick();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) return;
    props.onChange(e.target.value);
  };

  const onFocusInput = () => {
    setFocus(!props.isDisabled);
    if (props.onFocus && !props.isDisabled) props.onFocus();
  };

  const onBlurInput = () => {
    setFocus(false);
    setIsError(!ref.current?.validity.valid ?? false);
    if (props.onBlur) props.onBlur();
  };

  const onInvalidInput = () => {
    setIsError(true);
  };

  return (
    <BaseInputStyles
      $hasSuffix={!!props.suffixContent}
      $isDisabled={!!props.isDisabled}
      $isReadOnly={!!props.isReadOnly}
      $cantWrite={!!props.cantWrite}
      $isFocused={isFocused}
    >
      {!!props.label ? (
        <label className="label" htmlFor={inputId}>
          {props.label}
        </label>
      ) : null}
      <div className="input-container" onClick={onClickInput}>
        <input
          id={inputId}
          ref={ref}
          type={props.type}
          value={props.value}
          name={props.name}
          required={props.isRequired ?? true}
          disabled={props.isDisabled}
          readOnly={props.isReadOnly}
          inputMode={props.cantWrite ? "none" : undefined}
          pattern={props.pattern}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onInvalid={onInvalidInput}
        />
        {!!props.suffixContent ? props.suffixContent : null}
      </div>
      {isError ? (
        <span className="error-message">
          {props.errorMessage ?? "Invalid field"}
        </span>
      ) : null}
    </BaseInputStyles>
  );
};

interface BaseInputStylesProps {
  $isFocused: boolean;
  $hasSuffix: boolean;
  $isReadOnly: boolean;
  $isDisabled: boolean;
  $cantWrite: boolean;
}

const BaseInputStyles = styled.div<BaseInputStylesProps>`
  display: flex;
  flex-direction: column;
  opacity: ${({ $isDisabled }) => ($isDisabled ? "0.5" : "1")};

  label {
    color: ${({ theme }) => theme.inputs.label};
    width: fit-content;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375rem;
    letter-spacing: -0.01563rem;
    margin-bottom: 0.625rem;
  }

  .input-container {
    background-color: ${({ theme }) => theme.inputs.background};
    border: 1px solid
      ${({ theme, $isFocused }) =>
        $isFocused ? theme.inputs.borderActive : theme.inputs.border};
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

    &:hover {
      border-color: ${({ theme }) => theme.inputs.borderActive};
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

  .error-message {
    margin-top: 1rem;
    color: ${({ theme }) => theme.inputs.error};
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

export default BaseInput;
