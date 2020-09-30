import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchHeader from './components/ExchHeader/ExchHeader';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: #90b4fc;
color: rgb(23, 12, 40)
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: "Bitcoin",
        balance: 0.5,
        ticker: "BTC",
        price: 9999.99
      },
      {
        name: "Ethereum",
        balance: 32,
        ticker: "ETH",
        price: 355.05
      },
      {
        name: "Ripple",
        balance: 1000,
        ticker: "XRP",
        price: 0.2453
      },
      {
        name: "Polkadot",
        balance: 121,
        ticker: "DOT",
        price: 4.21
      },
      {
        name: "Bitcoin Cash",
        balance: 2,
        ticker: "BCH",
        price: 232.22
      },
    ]
  }
  handleBalanceVisabilityChange = () => {
    this.setState(function (oldState ) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }
  handleRefresh = (valueChangeTicker) => {
   const newCoinData = this.state.coinData.map( function( values ) {
    let newValues = {...values};
    if (valueChangeTicker === values.ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newValues.price *= randomPercentage;
}
  return newValues;
   });
   this.setState({coinData: newCoinData});
  }
  render() {
    return (
      <Div className="App">
            <ExchHeader/>
            <AccountBalance amount= {this.state.balance} 
            showBalance= {this.state.showBalance} 
            handleBalanceVisabilityChange={this.handleBalanceVisabilityChange}/>
            <Coinlist 
            coinData= {this.state.coinData} 
            showBalance={this.state.showBalance}
            handleRefresh= {this.handleRefresh}/>
      </Div>
    );
  }

}

export default App;
