import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
border : 1px solid #eeeeee;
    width: 16vw;
`;

const TdControls = styled(Td)`
    width: 18vw;
`;

const TdName = styled(Td)`
    width: 16vw;
`;

const Button = styled.button`
   
    font-size: 11px;
    width: 60px;
    margin: 1px 2px 0px;
    color: magenta;
    
    
`;

export default function Coin(props) {


const handleRefresh = (event) => {
    event.preventDefault();
    props.handleRefresh(props.tickerId);

}
const handleBuy = (event) => {
    event.preventDefault();
    props.handleTransaction(true, props.tickerId);

}
const handleSell = (event) => {
    event.preventDefault();
    props.handleTransaction(false, props.tickerId);

}
return (
    <tr>
    <TdName>{props.name}</TdName>
    <Td>{props.ticker}</Td>
    <Td>${props.price}</Td>
    {props.showBalance ? <Td>${props.balance}</Td> : 'Bal'}
    <TdControls>
        <form>
            <Button className btn-info onClick={handleRefresh}>
                Refresh
            </Button>
            <Button className btn btn-primary btn-sm onClick={handleBuy}>
                Buy 
            </Button>
            <Button className btn-danger onClick={handleSell}>
                Sell
            </Button>
        </form>
        
    </TdControls>
    </tr>
);

}
Coin.propTypes= {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}