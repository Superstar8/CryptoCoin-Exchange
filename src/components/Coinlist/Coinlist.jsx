import React from 'react';
import Coin from './../Coin/Coin';
import styled from 'styled-components';


const Table = styled.table`
    margin: 55px auto 55px auto;
    display: inline-block;
    font-size: 1.4rem;
`;
export default function Coinlist(props) {
return (

<Table  >
    <thead>
        <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
        props.coinData.map( ({key,name,ticker,price,balance}) =>
            <Coin key={key} 
            handleRefresh={props.handleRefresh}
            handleTransaction={props.handleTransaction}
            name={name} 
            ticker={ticker} 
            showBalance ={props.showBalance}
            balance={balance}
            price={price} 
            tickerId={key}/>
            )
        }

    </tbody>   
</Table>

)

}
