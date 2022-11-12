import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../components/Sidebar';

const RootLayout = () => {
   const location = useLocation();
   const docRef = useRef();

   useEffect(() => docRef?.current.scrollIntoView(), [location.pathname]);

   return (
      <>
         <main className='flex'>
            <SideBar />

            <section className='flex-1 p-4 pt-0 bg-stone-100 h-screen overflow-hidden overflow-y-auto'>
               {/* to scroll to when location change */}
               <div ref={docRef} className='pt-4' />

               <Outlet />
            </section>
         </main>
      </>
   );
};

export default RootLayout;
