export const ImageGallery = ({Children, gallery}) => {
    return (
        <ul className="gallery">
            <Children items={gallery} />
        </ul>
    )
};