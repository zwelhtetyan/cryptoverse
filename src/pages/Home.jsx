import millify from 'millify';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCoinAPI } from '../api';
import Spinner from '../components/Spinner';
import Cryptocurrencies from './Cryptocurrencies';

const Home = () => {
   const { data, isLoading, error, isError } = useQuery('getStats', () =>
      fetchCoinAPI('stats').then(({ data }) => data.data)
   );

   let stats = [];
   if (data) {
      stats = [
         { title: 'Total Cryptocurrencies', rate: millify(data.totalCoins) },
         { title: 'Total Exchanges', rate: millify(data.totalExchanges) },
         { title: 'Total Market', rate: millify(data.totalMarkets) },
         { title: 'Total Market Cap', rate: millify(data.totalMarketCap) },
         { title: 'Total 24h Volume', rate: millify(data.total24hVolume) },
      ];
   }

   return (
      <div>
         <h2 className='text-2xl font-bold uppercase'>Global Crypto Stats</h2>

         {isLoading && <Spinner />}

         {isError && (
            <h1 className='my-4 text-center text-lg'>{error.message}</h1>
         )}

         {data && (
            <div className='grid xs:grid-cols-2 gap-3 mt-4'>
               {stats.map((stat, i) => (
                  <div key={i}>
                     <p className='text-neutral-500 capitalize'>{stat.title}</p>
                     <h2 className='text-2xl'>{stat.rate}</h2>
                  </div>
               ))}
            </div>
         )}

         <h2 className='text-2xl font-bold mt-8 uppercase mb-4'>
            Top 10 Cryptocurrencies in the world
         </h2>

         <Cryptocurrencies limit={10} hideInput />

         <button className='btn-primary'>
            <Link to='cryptocurrencies' className='px-4 py-3 block'>
               See more
            </Link>
         </button>

         {/* <h2 className='text-2xl font-bold mt-8 uppercase'>
            Latest Crypto News
         </h2>

         <News limit={5} /> */}
      </div>
   );
};

export default Home;
