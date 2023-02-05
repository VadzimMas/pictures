import ImageList from './components/ImageList'
import SearchBar from './components/SearchBar'
import { useState } from 'react'
import searchImage from './api';

function App() {
    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        const result = await searchImage(term)
        setImages(result)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App