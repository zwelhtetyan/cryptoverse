import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import {
   AiOutlineHome,
   AiOutlineMenuUnfold,
   BsCurrencyBitcoin,
   BsCurrencyExchange,
   BsNewspaper,
} from '../icons';
import { useState } from 'react';

const Sidebar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => setShowMenu((prev) => !prev);

   const handleCloseMenu = () => showMenu && setShowMenu(false);

   const activeLink = (isActive) =>
      isActive ? { background: '#1C1917' } : undefined;

   return (
      <>
         <div
            className={`w-screen h-screen fixed top-0 left-0 bg-[#00000091] z-10 ${
               showMenu ? 'block' : 'hidden'
            } cursor-pointer`}
            onClick={() => setShowMenu(false)}
         />

         <aside
            className={`bg-zinc-800 text-white w-[300px] h-screen ${
               showMenu ? 'left-0' : '-left-[100%]'
            } fixed md:static overflow-hidden duration-200 z-50`}
         >
            <div className='flex items-center mb-2 p-2'>
               <Link to='/' onClick={handleCloseMenu}>
                  <img src={logo} alt='logo' className='w-14 h-w-14' />
               </Link>
               <h1 className='ml-2 text-[1.5rem] font-bold tracking-wider uppercase'>
                  Cryptoverse
               </h1>
            </div>

            <button
               onClick={toggleMenu}
               className='fixed bg-zinc-800 md:hidden hover:bg-stone-900 top-16 right-0 w-10 h-10 flex items-center justify-center rounded-l-sm'
            >
               <AiOutlineMenuUnfold size={30} />
            </button>

            <nav>
               <ul>
                  <li onClick={handleCloseMenu}>
                     <NavLink
                        to='/'
                        className='navlink'
                        style={({ isActive }) => activeLink(isActive)}
                     >
                        <AiOutlineHome className='mr-2' size={22} /> Home
                     </NavLink>
                  </li>
                  <li onClick={handleCloseMenu}>
                     <NavLink
                        to='cryptocurrencies'
                        className='navlink'
                        style={({ isActive }) => activeLink(isActive)}
                     >
                        <BsCurrencyBitcoin className='mr-2' size={22} />{' '}
                        Cryptocurrencies
                     </NavLink>
                  </li>
                  <li onClick={handleCloseMenu}>
                     <NavLink
                        to='exchanges'
                        className='navlink'
                        style={({ isActive }) => activeLink(isActive)}
                     >
                        <BsCurrencyExchange className='mr-2' size={22} />{' '}
                        Exchanges
                     </NavLink>
                  </li>
                  <li onClick={handleCloseMenu}>
                     <NavLink
                        to='news'
                        className='navlink'
                        style={({ isActive }) => activeLink(isActive)}
                     >
                        <BsNewspaper className='mr-2' /> News
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </aside>
      </>
   );
};

export default Sidebar;
