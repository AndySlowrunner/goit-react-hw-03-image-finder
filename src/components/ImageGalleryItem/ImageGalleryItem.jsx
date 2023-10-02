import { StyledImage, StyledItem } from "./StyledGalleryItem";

export const ImageGalleryItem = ({ items }) => {
    return (
        items.map(item => (
            <StyledItem key={item.id}>
                <StyledImage src={item.webformatURL} alt={item.tags} />
            </StyledItem>
        ))
    );
};