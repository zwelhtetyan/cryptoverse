import axios from 'axios';

export const fetchCoinAPI = (endpoint, timePeriod) =>
   axios.get(`https://coinranking1.p.rapidapi.com/${endpoint}`, {
      params: {
         timePeriod: timePeriod || null,
      },
      headers: {
         'X-RapidAPI-Key': '0ccd21e225mshb1b3672cd9debf6p1bfd1bjsnec03cc9247ee',
         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
   });
