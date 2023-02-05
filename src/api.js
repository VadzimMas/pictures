import axios from 'axios'

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID dlJj7dshIOhvq_nahG3ISULkqaFEYXhZjK4MDAU2474'
        },
        params: {
            query: term
        }
    })
    return response.data.results
}

export default searchImage