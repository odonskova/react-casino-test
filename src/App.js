import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Content/MainContent";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      balance: null,
    }
  }

  componentDidMount() {
    const username = localStorage.getItem("user");
    const balance = localStorage.getItem("balance") || "99.99";
    this.setState({username, balance: parseFloat(balance).toFixed(2)})
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    }, () => {
      localStorage.setItem("user", this.state.username);
      localStorage.setItem("balance", this.state.balance);
    });
  };

  onLogout = () => {
    this.setState({
      username: null
    });
    localStorage.removeItem("user");
  };

  changeBalance = () => {
    this.setState(prevState => ({
      balance: prevState.balance - 1
    }), () => {
      localStorage.setItem("balance", this.state.balance);
    });
  };

  checkWinningCombinations = (gameResults) => {
    let arrOfValues = Object.values(gameResults);
    let sortedArr = arrOfValues.sort((a, b) => a - b);
    if (sortedArr[0] === sortedArr[1] || sortedArr[1] === sortedArr[2] ) {
      this.setState(prevState => ({
        balance: prevState.balance + 0.5
      }))
    }
    if (sortedArr[0] === sortedArr[1] === sortedArr[2] ) {
      if (sortedArr[0] === 7) {
        this.setState(prevState => ({
          balance: prevState.balance + 10
        }))
      } else {
        this.setState(prevState => ({
          balance: prevState.balance + 5
        }))
      }
    }
    localStorage.setItem("balance", this.state.balance);
  };

  render() {
    return (
        <>
          <Header
              username={this.state.username}
              balance={this.state.balance}
              onChange={this.onChange}
              onLogout={this.onLogout}
          />
          <MainContent
              balance={this.state.balance}
              changeBalance={this.changeBalance}
              checkWinningCombinations={this.checkWinningCombinations}
          />
          <Footer />
        </>
    )
  }
}