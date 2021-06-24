import * as React from 'react'
import {ConnectModal} from '../modal/ConnectModal'

import {Link} from 'react-router-dom'
const NavItems = ({ isStatic, isClosed, setClosed }) => {
     


 const [scroll] = React.useState(false)
    return(
  <>

     <div active={scroll} className=" flex h-16 z-50   px-6 grid grid-cols-3 bg-[#fbf8fa]" style={{position: 'sticky',top: '0', }}>
     
 <div className="flex items-center bg-[#fbf8fa]">
       {!isStatic &&
            (isClosed ? (
            <button
             tabIndex="1"
              aria-hidden={isClosed}
              className="w-10 p-1"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setClosed(false)}
            >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="6" width="20" height="2" rx="1" fill="#e84a94"/>
<rect x="4" y="12" width="20" height="2" rx="1" fill="#e84a94"/>
<rect x="4" y="18" width="20" height="2" rx="1" fill="#e84a94"/>
</svg>
            </button>
          ) : (
            <button
              tabIndex="1"
              className="w-10 p-1"
              aria-label="Close menu"
              title="Close menu"
              onClick={() => setClosed(true)}
            >
             <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="6" width="16" height="2" rx="1" fill="#e84a94"/>
<rect x="4" y="12" width="11" height="2" rx="1" fill="#e84a94"/>
<rect x="4" y="18" width="16" height="2" rx="1" fill="#e84a94"/>
<path d="M17.8352 14.2C17.3503 13.8 17.3503 13.057 17.8352 12.657L22.1637 9.087C22.8159 8.54904 23.8 9.01298 23.8 9.85845L23.8 16.9985C23.8 17.844 22.8159 18.308 22.1637 17.77L17.8352 14.2Z" fill="#e84a94"/>
</svg>
            </button>
          ))}
   <Link to="/" >
  <img  src="/logo.svg" alt="logo" className="ml-4 w-20"/>
 
            </Link>

    </div>
 
      


    <div className="flex items-center justify-left"> </div>

    <div className="flex items-center justify-end">
      
    


      <ConnectModal />
<div className="flex sm:space-x-2 space-x-1  text-center mt-2 px-3 py-2">
              <img src="/home/choco.svg" alt="choco" className="w-4"/>
  <h1 className="text-gray-800 bg-blue-200 rounded  font-normal text-sm ">20.00</h1>

            </div>
 <div className="flex sm:space-x-2 space-x-1  text-center mt-2 px-3 py-2">
              <img src="/home/Recurso_1.svg" alt="Recurso_1" className="w-4"/>
  <h1 className="text-gray-800 bg-pink-200 rounded  font-normal text-sm ">10.00</h1>

            </div>
      <div className="px-2">
        <Link className="bg-gradient-to-br from-pink-500 to-red-600  md:border border-transparent text-white text-text px-3 leading-tight py-2  rounded-lg transition-colors ease-in-out duration-150">0x3f...359E</Link>
      </div>
   
    </div>
</div>
  </>
  );
}
export default NavItems
