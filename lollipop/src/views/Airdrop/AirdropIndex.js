import React from 'react'
import Link from '../../components/link'

const AirdropIndex = (  ) => {
    
    return(
  <>
     <div className="flex flex-col md:flex-row">
      <div className="md:w-5/6 max-w-lg flex flex-col justify-center pr-4">
        <div className="flex space-x-4 mt-4" >
  <div className="text-5xl font-bold mt-4 text-blue-primary">Airdrop</div>
          <img src="/airdrop/lanzamiento.svg" alt="lanzamiento" className="w-20"/>
        </div> 
               <div className="mt-6 text-sm text-gray-500 font-semibold">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia.</p> 
        </div>
         <div className="my-1 mb-4 mt-4 flex space-x-4">
           <Link to="url">
             <img src="/airdrop/telegram.svg" alt="telegram"/>
           </Link> 
  <Link to="url">
             <img src="/airdrop/twitter.svg" alt="telegram"/>
           </Link> 
         </div>
        <h1 className=" text-3xl  font-semibold text-pink-500">@sugarswap</h1>
      </div>
      <div className="flex md:justify-end w-full md:w-1/2 -mt-5 ">
         <div className="bg-dots ">
            <div className=" max-w-md z-10  mt-6 ml-4">
               <img alt="card img" className="rounded-t " src="/airdrop/Grupo_15269.svg"/> 
        
            </div>
         </div>
      </div>
   </div>
  </>
  );
}
export default AirdropIndex
