import { Component } from "react"
// import axios from "axios";
import { StyledApp } from "./StyledApp";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImagesWithQuery } from "components/Service/Api";


//       query: `${Math.random().toFixed(4)}/${newQuery}`,


export class App extends Component {
    state = {
        query: "",
        page: 1,
        images: [],
        isLoading: false,
        error: null,
    };

    changeQuery = (newQuery) => {
        this.setState({
            query: newQuery,
            page: 1,
            images: [],
        });
    };

    async componentDidUpdate(prevProps, prevState) {
        if (
            prevState.query !== this.state.query ||
            prevState.page !== this.state.page
        ) {
            try {
                const images = await getImagesWithQuery(
                    this.state.query,
                    this.state.page
                );
                this.setState({ images, isLoading: false });
            } catch (error) {
                this.setState({ error, isLoading: false });
            }
        }
    }

    render() {
        return (
            <StyledApp>
                <Searchbar
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        this.changeQuery(evt.target.elements.query.value);
                        evt.target.reset();
                    }}
                />
                <ImageGallery gallery={this.state.images} Children={ImageGalleryItem} />
            </StyledApp>
        );
    }
}