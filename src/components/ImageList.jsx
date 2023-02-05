import ImageShow from './ImageShow'
import './ImageList.scss'

function ImageList({ images }) {

    const imageShowList = images.map((image) => {
        return <ImageShow image={image} key={image.id} />
    })

    return (
        <div className="image-list">
            {imageShowList}
        </div>
    )
}

export default ImageList