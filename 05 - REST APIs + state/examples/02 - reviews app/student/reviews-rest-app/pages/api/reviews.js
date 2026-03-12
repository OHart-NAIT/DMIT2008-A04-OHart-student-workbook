export const BASE_URL = 'http://localhost:5000'

export const getReviews = () => {
    // Function to get reviews
    fetch(`${BASE_URL}/reviews`, {
        method: "GET", // Not necassary, method by default is get
        headers: {
        'Content-Type': 'application/json'
        }    
    })
      .then((response)=> {
        return response.json()
      }).then((data)=> {
        // console.log(data)

        // using Promise.resolve here will pass the data we have
        // fetched here as the returnedData passed when we use the function.
        // getReviews().then((returnedData)=> { // when used in other places.})
        return Promise.resolve(data)
    })
}

const addReviews = () => {
    // Function to post reviews
}