import { createBrowserRouter } from 'react-router-dom';
import { RootLayout, Home, Cryptocurrencies, Exchanges, News } from '../pages';
import CryptoDetails from '../pages/CryptoDetails';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      children: [
         { index: true, element: <Home /> },
         { path: 'cryptocurrencies', element: <Cryptocurrencies /> },
         { path: 'cryptocurrencies/:id', element: <CryptoDetails /> },
         { path: 'exchanges', element: <Exchanges /> },
         { path: 'news', element: <News /> },
      ],
   },
]);
