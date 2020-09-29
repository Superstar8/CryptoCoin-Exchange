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
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 9999.99
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 355.05
        },
        {
          name: "Ripple",
          ticker: "XRP",
          price: 0.2453
        },
        {
          name: "Polkadot",
          ticker: "DOT",
          price: 4.21
        },
        {
          name: "Bitcoin Cash",
          ticker: "BCH",
          price: 232.22
        },
      ]
    }
    this.handleRefresh= this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
   const newCoinData = this.state.coinData.map( function( {ticker, name, price} ) {
    let newPrice= price;
    if (valueChangeTicker === ticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newPrice = newPrice  * randomPercentage;
}
  return{
    ticker,
    name,
    price: newPrice,
  }
   });
   this.setState({coinData: newCoinData});
  }
  render() {
    return (
      <Div className="App">
            <ExchHeader/>
            <AccountBalance amount= {this.state.balance}/>
            <Coinlist coinData= {this.state.coinData} handleRefresh= {this.handleRefresh}/>
      </Div>
    );
  }

}

export default App;
