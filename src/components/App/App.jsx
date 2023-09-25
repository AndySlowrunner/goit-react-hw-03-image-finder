import { Component } from "react"
import { Searchbar } from "../Searchbar/Searchbar";
import { StyledApp } from "./StyledApp";

export class App extends Component {
  state = {
    query: '',
    page: 1,
    image: [],
  };

  changeQuery = newQuery => {
    this.setState({
     query: `${Math.random().toFixed(4)}/${newQuery}`, 
     page: 1,
     image: [],
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.setState.page) {
      console.log("Do HTTP-query!")
      console.log(this.state.query)
    }
  }

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={evt => {
          evt.preventDefault();
          this.changeQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}
        />
      </StyledApp>
  )};
};
