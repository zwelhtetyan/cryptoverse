import HTMLReactParser from 'html-react-parser';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinAPI } from '../api';
import Spinner from '../components/Spinner';
import 'chart.js/auto';
import Chart from '../components/Chart';
import millify from 'millify';

const CryptoDetails = () => {
   const { id: crypotId } = useParams();

   const { data: coinDetail, isLoading } = useQuery(
      ['getCryptoDetails', crypotId],
      () => fetchCoinAPI(`/coin/${crypotId}`).then(({ data }) => data.data.coin)
   );

   if (isLoading) return <Spinner />;

   return (
      <>
         <h3 className='text-3xl font-medium text-center mb-4'>
            {coinDetail.name}
         </h3>

         <img
            src={coinDetail.iconUrl}
            alt='logo'
            className='w-20 h-20 md:w-32 md:h-32 mx-auto block mb-8'
         />

         <Chart
            currentPrice={millify(coinDetail.price)}
            name={coinDetail.name}
            crypotId={crypotId}
         />

         <div className='grid grid-cols-12 lg:gap-8 mt-12'>
            <div className='crypto-details col-span-12 lg:col-span-7'>
               {HTMLReactParser(coinDetail.description)}
            </div>

            <div className='col-span-12 lg:col-span-5 mt-8 lg:mt-0'>
               {coinDetail.links.map((link, i) => (
                  <div className='flex justify-between mb-2' key={i}>
                     <p className='text-neutral-500'>{link.type}</p>

                     <a
                        href={link.url}
                        target={'_blank'}
                        rel='noreferrer'
                        className='text-sky-600 hover:underline decoration-sky-600'
                     >
                        <span className='sr-only'>link</span>
                        {link.name}
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default CryptoDetails;
