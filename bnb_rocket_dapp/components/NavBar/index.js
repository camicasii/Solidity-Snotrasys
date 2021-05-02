import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import content from '../../data/navbar-content'
const NavBar = (  ) => {

    const [click, setClick] = useState(false) 
    const handleClick = () => setClick(!click)

  const {telegram,support,audit} = content

  return(
<>
        <header   className=" flex items-center flex-wrap  p-3  ">
       <Link href="/">
   <a className="flex items-center justify-between px-4 py-3 sm:p-0">

      <Image 
        className='inline-flex items-center p-2 mr-4 rounded-full bg-[#C4C4C4]'  
        src='/logo.png' 
        alt="logo" 
        width={90}
        height={90}
        />
   </a>
        </Link>

    
 <button
          className=' inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
{
          click?
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
            />
          </svg>
          :
   <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
            />
          </svg>
   }
        </button>





          <nav className={` ${!click && 'hidden' }  w-full lg:inline-flex lg:flex-grow lg:w-auto  `}>
             <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
               <div className="px-0 md:px-8 py-5">
                 <Link href={telegram.url}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center bg-[#FDBB26]'>
                {telegram.title}
              </a>
            </Link>
          </div>


   <div className="px-0 md:px-8 py-5">
                 <Link href={support.url}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center bg-[#FDBB26]'>
                {support.title}
              </a>
            </Link>
          </div>

   <div className="px-0 md:px-8 py-5">
                 <Link href={audit.url}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center bg-[#FDBB26]'>
                {audit.title}
              </a>
            </Link>
          </div>
                     </div>    </nav>

  
  
 
    </header>
  </>
  )
}
export default NavBar
