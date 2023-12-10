import { FunctionComponent, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { TransparentButton } from "@/components/buttons";
import { MultipleOptionSelector } from "@/components/inputs/selectors";
import { statusOptions } from "@/utils/options";
import styled from "styled-components";
import useIsMobile from "@/hooks/useIsMobile";

interface InvoicesFilterProps {}

const InvoicesFilter: FunctionComponent<InvoicesFilterProps> = () => {
  const isMobileSize = useIsMobile();
  const [isSelectorOpened, setIsSelectorOpened] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const Icon = isSelectorOpened ? LuChevronUp : LuChevronDown;

  const onSelectOption = (option: string) => {
    const optionIsAlreadySelected = selectedOptions.includes(option);

    if (optionIsAlreadySelected) {
      const options = [...selectedOptions].filter((o) => o !== option);
      setSelectedOptions(options);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <InvoicesFilterStyles>
      <TransparentButton
        padding="0.25rem 0.5rem 0.25rem 1.25rem"
        onClick={() => setIsSelectorOpened(true)}
      >
        {isMobileSize ? "Filter" : "Filter by status"}
        <div className="chevron-icon-container">
          <Icon className="chevron-icon" />
        </div>
      </TransparentButton>
      <MultipleOptionSelector
        isOpened={isSelectorOpened}
        options={statusOptions}
        selectedOptions={selectedOptions}
        onSelectOption={onSelectOption}
        onClose={() => setIsSelectorOpened(false)}
      />
    </InvoicesFilterStyles>
  );
};

const InvoicesFilterStyles = styled.div`
  position: relative;

  .chevron-icon-container {
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;

    .chevron-icon {
      color: ${({ theme }) => theme.palette.primary.main};
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export default InvoicesFilter;
