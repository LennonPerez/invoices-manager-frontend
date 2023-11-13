import { InvoiceStatus } from '@/types/invoice';
import { formatDate, formatAmount } from '@/utils/formatters';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface InvoiceCardProps {
    id: string,
    clientName: string,
    date: Date,
    amount: number,
    status: InvoiceStatus,
}

const InvoiceCard: FunctionComponent<InvoiceCardProps> = (props) => {
    return (
        <InvoiceCardStyles status={props.status}>
            <div className='top-row-container'>
                <h4 className='invoice-id'><span>#</span>{props.id}</h4>
                <p className='client-name'>{props.clientName}</p>
            </div>
            <div className='bottom-row-container'>
                <div className='left-column'>
                    <p className='date'>{`Due ${formatDate(props.date)}`}</p>
                    <h5 className='amount'>{formatAmount(props.amount)}</h5>
                </div>
                <div className='status-box'>
                    <div className='opacity-background' />
                    <div className='status-circle' />
                    <h5 className='status-text'>{props.status}</h5>
                </div>
            </div>
        </InvoiceCardStyles>
    );
}

const InvoiceCardStyles = styled.div<{ status: InvoiceStatus }>`
    background: ${({ theme }) => theme.card.background};
    box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.card.shadow};
    min-height: 8.37rem;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top-row-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .invoice-id{
            font-size: 0.75rem;

            span{
                color: ${({ theme }) => theme.palette.secondary.main}
            }
        }
    }

    .bottom-row-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-column{
            display: flex;
            flex-direction: column;

            .date{
                margin-bottom: 0.75rem;
            }

            .amount{
                font-size: 1rem;
            }
        }

        .status-box{
            width: 6.5rem;
            height: 2.5rem;
            border-radius: 0.375rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            .opacity-background{
                background-color: ${(props) => props.theme.status[props.status]};
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                opacity: 0.05;
            }
            
            .status-circle{
                background-color: ${(props) => props.theme.status[props.status]};
                border-radius: 100%;
                width: 0.5rem;
                height: 0.5rem;
                margin-right: 0.25rem;
            }
        
            .status-text{
                color: ${(props) => props.theme.status[props.status]};
                text-transform: capitalize;
                font-size: 0.75rem;
            }
        }
    }
`

export default InvoiceCard;
