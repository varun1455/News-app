// import React from 'react'

import axios from "axios"

export function GetNews(category='Business') {
 
    const API_KEY = '605f0517470748f59e6fd66646be91a5'
    const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`

   
        return axios.get(`${API_ENDPOINT}&apiKey=${API_KEY}`)
        // .then((response)=>{
        //     console.log(response.data.articles)
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    


}
