import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar';

const RootLayout = () => {
   return (
      <main className='flex h-screen overflow-hidden'>
         <SideBar />
         <section className='flex-1 p-4 bg-stone-100 overflow-y-auto'>
            <Outlet />
         </section>
      </main>
   );
};

export default RootLayout;
