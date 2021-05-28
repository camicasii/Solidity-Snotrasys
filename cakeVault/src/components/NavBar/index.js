import React,{useState} from 'react'
import content from '../../data/navbar-content'
import { Card, CardBody, Text } from "@pancakeswap-libs/uikit";
const NavBar = (  ) => {

    const [click, setClick] = useState(false) 
    const handleClick = () => setClick(!click)

  const {telegram,support,audit} = content

  return(
<>
        <header   className=" flex h-24 z-50  p-3  bg-white shadow-md">
       <a href="/">
         <a className="md:flex md:items-center  md:justify-between -px-4 py-3 sm:p-0">
     <div
       className='flex items-center py-2'  
     >
     <img 
        src='/logo.png' 
        alt="logo" 
        width={65}
        height={65}
        /> 
     </div>      
     
     <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-orange-primary to-[#FFB000] font-bold text-2xl invisible md:visible ml-4 pt-1"
     >Cake Vault</h1>
   </a>
        </a>

          <div >

          </div> 

  <nav className={` w-full inline-flex flex-grow w-auto  justify-end`}>
            
               <div className="px-0 md:px-8 py-7">
                 <a href='https://t.me/CakevaultES' target='_blank'>
              <button   className='lg:inline-flex lg:w-auto w-full px-2 py-2  rounded-full font-bold items-center justify-center bg-orange-primary text-white'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" fill="white">
  <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"/>
</svg>
              </button>
            </a>
          </div>


   <div className="px-3 md:px-8  py-7">
   <a href='https://t.me/CakevaultES' 
   className='focus:outline-white'
   target='_blank'>
              <button   className='lg:inline-flex lg:w-auto w-full px-2 py-2  rounded-full font-bold items-center justify-center bg-orange-primary text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
            </a>
          </div>
          <div className="px-0 md:px-8 py-5">
   <a href='/4_5855116064647547226.pdf' 
   className='focus:outline-white'
   target='_blank'>
              <button  className='lg:inline-flex lg:w-auto w-full px-7 py-3 rounded-full font-light text-lg text-white font-bold items-center justify-center bg-gradient-to-br from-orange-primary to-[#FFB000] '>
                Connect Wallet
              </button>
            </a>
          </div>

   
                        </nav>
          
            
              


            

   
                        
  
  
 
    </header>
  </>
  )
}
export default NavBar
