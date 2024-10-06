import axios from 'axios';
export const fetchNews=async()=>{
const apikey = "f447ca70ecec4115926f3898a599b270";
const url =
  "https://newsapi.org/v2/everything?q=apple&from=2024-10-05&to=2024-10-05&sortBy=popularity&apiKey=f447ca70ecec4115926f3898a599b270";

    try{
const {data}=await axios(url);
return data.articles;
    }
    catch(error){
throw error;
    }

};