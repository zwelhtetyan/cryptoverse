import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { fetchCoinAPI } from '../api';

const Chart = ({ currentPrice, name, crypotId }) => {
   const [timePeriod, setTimePeriod] = useState('24h');
   const timeStamps = [];
   const coinPrices = [];

   const { data: cryptoHistory } = useQuery(
      ['getCryptoHistory', crypotId, timePeriod],
      () =>
         fetchCoinAPI(`/coin/${crypotId}/history`, timePeriod).then(
            ({ data }) => data.data.history
         )
   );

   const avaliableTimePeriod = [
      '3h',
      '24h',
      '7d',
      '30d',
      '3m',
      '1y',
      '3y',
      '5y',
   ];

   cryptoHistory?.forEach((coin) => {
      timeStamps.push(coin.timestamp);
      coinPrices.push(coin.price);
   });

   const dataa = {
      labels: timeStamps,
      datasets: [
         {
            label: 'Price in USD',
            fill: false,
            data: coinPrices,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
         },
      ],
   };

   return (
      <>
         <div className='flex items-center justify-between'>
            <select
               name=''
               id=''
               value={timePeriod}
               onChange={({ target }) => setTimePeriod(target.value)}
               className='w-32 text-center h-8 focus:outline-sky-500'
            >
               {avaliableTimePeriod.map((time) => (
                  <option key={time}>{time}</option>
               ))}
            </select>

            <div>
               Current {name} price - {currentPrice}
            </div>
         </div>
         <Line data={dataa} />
      </>
   );
};

export default Chart;
