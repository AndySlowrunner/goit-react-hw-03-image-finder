export const ImageGalleryItem = ({items}) => {
    return (
        items.map(item => (
            <li key={item.id} className="gallery-item">
                <img src='' alt='' />
            </li>)
        )
    )
};