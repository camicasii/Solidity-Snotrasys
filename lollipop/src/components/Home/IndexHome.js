import React from 'react'
import {Link} from 'react-router-dom';


const IndexHome = (  ) => {
    

    return(
  <>

   <div className="hero-headline flex flex-col items-center justify-center  text-center z-40">

    

      <div className="md:w-1/2 max-w-md flex  justify-center">
       <img alt="card img" class="rounded-t z-10" src="/choco-lolli.svg"/> 
      </div>

  <div className="md:w-5/6 max-w-md flex flex-col justify-center">
  
         <div className="text-xl mt-4 font-bold text-gray-500 z-10">Hello crypto world, today a new way of seeing the world of DEFI has
been born, my name is lollipop together with my partner Choco we
come to positively change your finances</div>
     <div className="flex space-x-4 mt-4">
        <div><img src="/home/dias99.svg"/></div>
  <div><img src="/home/dias99One.svg"/></div>
  <div className="mt-6"><img src="/home/group.svg"/></div>
  <div><img src="/home/dias99.svg"/></div>
  <div className="mt-6"><img src="/home/group.svg"/></div>
  <div><img src="/home/dias99One.svg"/></div>
     </div>
         <div className="my-5 h-16 mt-8">
           <Link to="/airdrop" class="shadow-md font-medium  text-yellow-100 md:text-2xl text-sm
               cursor-pointer top-0 right-0 px-8 py-3 mt-1 mr-1 font-bold text-white duration-300 bg-pink-500 rounded-full hover:bg-pink-400">Click to claim Airdrop</Link>
         </div>
      </div>

   </div>

  </>
  );
}
export default IndexHome
