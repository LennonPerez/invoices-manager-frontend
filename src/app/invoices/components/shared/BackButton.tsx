import { FunctionComponent } from "react";
import styled from "styled-components";
import { LuChevronLeft } from "react-icons/lu";
import { TransparentButton } from "@/components/buttons";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: FunctionComponent<BackButtonProps> = (props) => {
  return (
    <BackButtonStyles>
      <TransparentButton
        type="button"
        padding="0"
        minHeight="0"
        onClick={props.onClick}
      >
        <LuChevronLeft className="chevron-icon" />
        <div className="text">Go back</div>
      </TransparentButton>
    </BackButtonStyles>
  );
};

const BackButtonStyles = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media (hover: hover) {
    &:hover {
      .text {
        color: ${({ theme }) => theme.palette.text.fourth};
      }
    }
  }

  .chevron-icon {
    color: ${({ theme }) => theme.palette.primary.main};
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1rem;

    @media (min-width: 1440px) {
      margin-right: 1.5rem;
    }
  }

  .text {
    font-size: 0.75rem;
    transition: color 0.3s ease-in-out;
  }
`;

export default BackButton;
