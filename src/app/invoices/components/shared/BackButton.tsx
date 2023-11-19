import { FunctionComponent } from "react";
import styled from "styled-components";
import { LuChevronLeft } from "react-icons/lu";
import { FourthButton } from "@/components/Button";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: FunctionComponent<BackButtonProps> = (props) => {
  return (
    <BackButtonStyles>
      <FourthButton $padding="0" $minHeight="0" onClick={props.onClick}>
        <LuChevronLeft className="chevron-icon" />
        Go back
      </FourthButton>
    </BackButtonStyles>
  );
};

const BackButtonStyles = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  .chevron-icon {
    color: ${({ theme }) => theme.palette.primary.main};
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1rem;
  }

  .text {
    font-size: 0.75rem;
  }
`;

export default BackButton;
