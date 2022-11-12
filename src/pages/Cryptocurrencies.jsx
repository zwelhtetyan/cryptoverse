import millify from 'millify';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCoinAPI } from '../api';
import Spinner from '../components/Spinner';

const CryptoCard = ({ i, uuid, name, price, marketCap, change, iconUrl }) => (
   <Link
      to={`/cryptocurrencies/${uuid}`}
      className='border bg-white shadow-sm hover:shadow-md rounded-sm'
   >
      <div className='flex items-center justify-between border-b-[1px] border-b-gray-200 py-3 px-4'>
         <h2 className='font-bold text-lg'>
            {i}. {name}
         </h2>
         <img src={iconUrl} alt='coin_logo' className='w-10 h-10' />
      </div>
      <div className='p-4'>
         <p className='my-2'>Price: {millify(price)}</p>
         <p className='mb-2'>Market Cap: {millify(marketCap)}</p>
         <p className='mb-2'>Daily Change: {millify(change)}%</p>
      </div>
   </Link>
);

const Cryptocurrencies = ({ limit }) => {
   const { data, isLoading, error, isError } = useQuery('getCoins', () =>
      fetchCoinAPI('coins').then(({ data }) => data.data.coins)
   );

   const cryptos = limit ? data?.slice(0, 10) : data;

   if (isLoading) return <Spinner />;

   if (isError)
      return <h1 className='my-4 text-center text-lg'>{error.message}</h1>;

   return (
      <>
         <div className='grid xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {cryptos?.map((crypto, i) => (
               <CryptoCard {...crypto} i={i + 1} key={i} />
            ))}
         </div>
      </>
   );
};

export default Cryptocurrencies;
