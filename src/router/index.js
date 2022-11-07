import { createBrowserRouter } from 'react-router-dom';
import { RootLayout, Home, Cryptocurrencies, Exchanges, News } from '../pages';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      children: [
         { index: true, element: <Home /> },
         { path: 'cryptocurrencies', element: <Cryptocurrencies /> },
         { path: 'exchanges', element: <Exchanges /> },
         { path: 'news', element: <News /> },
      ],
   },
]);
