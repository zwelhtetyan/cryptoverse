import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { fetchCoinAPI } from '../api';

import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

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

   const data = {
      labels: timeStamps,
      datasets: [
         {
            responsive: true,
            label: 'Price in USD',
            fill: false,
            data: coinPrices,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
         },
      ],
   };

   const options = {
      responsive: true,
      borderWidth: 1.5,
      elements: {
         point: {
            radius: 0,
         },
      },
      plugins: {
         tooltip: {
            mode: 'index',
            intersect: false,
            yAlign: 'bottom',
         },
      },
      hover: {
         mode: 'index',
         intersect: false,
      },
   };

   return (
      <>
         <div className='xs:flex items-center justify-between'>
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

            <p className='text-center my-4'>
               Current {name} price - {currentPrice}
            </p>
         </div>

         <Line data={data} options={options} />
      </>
   );
};

export default Chart;
