import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 3rem;
    
`;

const Balance = styled.div`
    min-width: 250px;
    margin: 0.5rem 0 0 2.5rem;
    font-size: 1.6rem;
    vertical align: middle;
    text align: left;
`;

const Button = styled.button`
    margin 0 2rem;
`;

const BalanceToggleButton = styled(Button)`
    width: 19rem;
`;

var formatter = Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
});

export default function AccountBalance(props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = '\u00A0';
    if (props.showBalance) {
        content = <> {formatter.format(props.amount)}</>
    }
    const buttonClass = 'btn' + props.showBalance ? 'btn-secondary':'btn-secondary';
    
    return ( 
        <>
        <Section>
          <Balance>{content}</Balance>
    <BalanceToggleButton 
        onClick={props.handleBalanceVisabilityChange}
        className = {buttonClass}>
        {buttonText}
    </BalanceToggleButton>
        <Button className = "btn-warning"
            onClick= {props.handleBrrrr}>
            <i className = "fas fa-helicopter"></i>

        </Button>
        </Section>
        </>
    );

}



AccountBalance.propTypes= {
    amount: PropTypes.number.isRequired,
}