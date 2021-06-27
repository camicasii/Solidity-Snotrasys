import React from 'react'


const SweetGamesScreen = (  ) => {


  return(
  <>
    <div className="m-auto max-w-6xl p-12 pt-20 ">
 <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 max-w-md flex flex-col justify-center">
         <img src="/Sweet_games/Grupo_15809.svg" alt="comming soong"/>
         <div className="text-3xl font-normal mt-4 text-gray-500">Get Notified, When we launch</div>
        <div className="mt-6 bg-transparent border lg:rounded-full rounded-md lg:w-full focus-within:ring ring-primary focus-within:border-teal-500 ring-opacity-40">
          <form action="/suscripse" className="flex flex-wrap justify-between md:flex-row bg-white lg:rounded-full">
            <input type="email" placeholder="Enter your email adress" className="flex-1 px-4 py-3 h-10 lg:h-12 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"/>
            <button className="flex justify-center items-center w-full lg:w-24 p-2 lg:p-0 m-2 text-white transition-colors duration-200 transform rounded-full bg-blue-400 hover:bg-blue-300 focus:outline-none focus:bg-blue-300">Notify Me</button>

          </form>
        </div>
         <div className="my-1 h-12">
             <div className="text-sm font-normal mt-4 text-blue-500">Don't worry not spam you :)</div>
         </div>
      </div>
      <div className="flex md:justify-end w-full md:w-1/2 -mt-5 ">
         <div className="bg-dots ">
            <div className=" max-w-md z-10  mt-6 ml-4">
               <img alt="card img" className="rounded-t " src="/Sweet_games/Grupo_15866.svg"/> 
        
            </div>
         </div>
      </div>
   </div>


    </div>
  </>
)
}
export default SweetGamesScreen
