import React from 'react';
import Logo from '../../assets/hwr-logo-alt.svg';
import Text from '../../assets/hwr-type.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="max-w-[1440px] ml-auto mr-auto h-auto">
      <header>
        <div className="flex justify-between items-center px-20 pt-10 pb-16 bg-white">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Berlin School of Economics and Law Logo"
              className="h-16 w-auto mr-4"
            />
            <img
              src={Text}
              alt="Berlin School of Economics and Law Text"
              className="h-16 w-auto"
            />
          </div>
          <nav className="flex items-center space-x-4">
            <a href="https://www.hwr-berlin.de/" className="text-sm text-[#4A4D50] hover:text-gray-500">Hochschule für Wirtschaft und Recht Berlin</a>
            <span className="text-sm text-[#4A4D50] border-l-[1px] border-l-[#c4c5c7] ml-4 pl-4 hover:text-gray-500"><Link to="/data-security">Data Security</Link></span>
            <span className="text-sm text-[#4A4D50] border-l-[1px] border-l-[#c4c5c7] ml-4 pl-4 hover:text-gray-500"><Link to="/imprint">Imprint</Link></span>
          </nav>
        </div>
        <div className="font-bold h-12 -mt-6 ml-32 flex justify-left items-center pl-8 relative z-10">
          <button className="bg-[#D50C2F] hover:bg-[#771323] py-2 px-8 w-auto text-xl text-center line align-middle text-white cursor-pointer"><Link to="/">Chat with MIKA</Link></button>
          <button className="bg-[#D50C2F] hover:bg-[#771323] py-2 px-8 w-auto text-xl text-center line align-middle text-white cursor-pointer"><Link to="/feedback">Feedback</Link></button>
          <button className="bg-[#D50C2F] hover:bg-[#771323] py-2 px-8 w-auto text-xl text-center line align-middle text-white cursor-pointer"><Link to="/about">About the project</Link></button>
        </div>
      </header>
    </div>
  );
}

export default Header;