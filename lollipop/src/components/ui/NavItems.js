import * as React from 'react'
import {ConnectModal} from '../modal/ConnectModal'

import {Link} from 'react-router-dom'
const NavItems = ({ isStatic, isClosed, setClosed }) => {
     

 const [isOpen,setIsOpen] = React.useState(false)
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
  <img  src="/logo.svg" className="ml-4 w-20"/>
 
            </Link>

    </div>
 
      


    <div className="flex items-center justify-left"> </div>

    <div className="flex items-center justify-end">
      
      <p className="text-[#f49033] dark:text-[#ed80le] dark:bg-[#3c2e24] text-lg font-medium bg-[#fff3e5] px-2 py-2 rounded-md mr-2">
      BSC
      </p>


      <ConnectModal />

      <button aria-label="config" className="text-yellow-900 dark:text-[#ffcd84] dark:bg-[#754d38] bg-[#eed9cc] px-2 py-2 rounded-md " onClick={()=> setIsOpen(!isOpen)}>
   
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-fAjcbJ dGAfPP"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
  
        </button>
   
    </div>
</div>
  </>
  );
}
export default NavItems
