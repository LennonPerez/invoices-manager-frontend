'use client'

import styled from "styled-components";
import { FourthButton, PrimaryButton } from "../../components/button";
import { HiPlusSm } from 'react-icons/hi'
import { LuChevronDown } from 'react-icons/lu'

const InvoicesPageHeader = () => {
    return (
        <InvoicesListHeaderStyles> 
            <div className="left-side">
                <h1 className="title">Invoices</h1>
                <p className="invoices-counter">7 invoices</p>
            </div>
            <div className="right-side">
                <div className="filter-button-container">
                    <FourthButton padding="0.25rem 0.5rem 0.25rem 1.25rem" onClick={() => { console.log('Change filters') }}>
                        Filter
                        <div className="chevron-icon-container">
                            <LuChevronDown className="chevron-icon" />
                        </div>
                    </FourthButton>
                </div>
                <div className="new-button-container">
                    <PrimaryButton padding="0.25rem 1.25rem 0.25rem 0.5rem" onClick={() => { console.log('Go to create a new invoice') }}>
                        <div className="plus-icon-container">
                            <HiPlusSm className="plus-icon" />
                        </div>
                        New
                    </PrimaryButton>
                </div>
            </div>
        </InvoicesListHeaderStyles>
    );
}

const InvoicesListHeaderStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .left-side{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
            font-size: 1.25rem;
        }
        .invoices-counter{

        }
    }

    .right-side{
        display: flex;
        align-items: center;

        .filter-button-container{

            .chevron-icon-container{
                margin-left: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 0.5rem;
            
                .chevron-icon{
                    color: ${({ theme }) => theme.palette.primary.main};
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }
        }

        .new-button-container{

            .plus-icon-container{
                background-color: ${({ theme }) => theme.palette.common.white};
                height: 2rem;
                width: 2rem;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 0.5rem;

                .plus-icon{
                    color: ${({ theme }) => theme.palette.primary.main};
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }
`

export default InvoicesPageHeader;