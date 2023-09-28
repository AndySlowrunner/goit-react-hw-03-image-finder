import { Component } from "react"
// import axios from "axios";
import { Searchbar } from "../Searchbar/Searchbar";
import { StyledApp } from "./StyledApp";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImagesWithQuery } from "components/Service/Api";

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Math.random().toFixed(4)}/${newQuery}`,
      page: 1,
      images: [],
    });
  };

  componentDidMount() {};
  
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.setState.page) {
      const images = getImagesWithQuery(this.state.query);
      this.setState({ images: images });
    }
  };

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={evt => {
          evt.preventDefault();
          this.changeQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}
        />
        <ImageGallery gallery={this.state.images} Children={ImageGalleryItem} />
      </StyledApp>
  )};
};
