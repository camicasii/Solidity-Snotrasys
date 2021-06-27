import React from "react";


const AirdropPreSale = () => {
  return (
    <>
      <div className="border-b-2 border-gray-200 mt-12 sm:mx-24 mx-12"> </div>

      <img src="/home/Grupo_1029.svg" alt="candy" className="absolute ml-28 mt-12 invisible md:visible sm:invisible"/>
   
 <img src="/airdrop/Grupo_1069.svg" alt="candy2" className="absolute ml-32 mt-52 invisible md:visible"/>

 <img src="/airdrop/Grupo_1055.svg" alt="candy4" className="absolute ml-52  mt-32 invisible md:visible"/>
      <img src="/airdrop/Grupo_1044.svg" alt="candy5" className="absolute ml-[800px]  mt-32 invisible md:visible "/>
 <img src="/airdrop/Grupo_1026.svg" alt="candy6" className="absolute ml-[900px] mt-12"/>
 <img src="/airdrop/Grupo_1059.svg" alt="candy7" className="absolute ml-[870px]  mt-64"/>

      <div className="hero-headline flex flex-col items-center justify-center  text-center z-40 mt-16">
        <h1 className="text-blue-primary text-5xl font-bold">Pre-Sale</h1>

        <ul className="mt-8 text-gray-500 my-5 font-semibold md:text-xl text-md">
          <li className="py-2">
            • Buy 0.01 BNB - 200.000.000 Lollipop ( Min Buy )
          </li>
          <li className="py-2">• Buy 0.1 BNB - 2.000.000.000 Lollipop</li>
          <li className="py-2">• Buy 1 BNB - 20.000.000.000 Lollipop</li>
          <li className="py-2">
            • Buy 5 BNB - 100.000.000.000 Lollipop ( Max Buy )
          </li>
          <li className="py-2  text-pink-500">• Attention: Use Gas 250000</li>
        </ul>

        <div className="md:w-5/6 max-w-lg bg-gradient-to-br from-pink-500 to-pink-600  rounded-lg overflow-hidden sm:p-8 p-5 lg:col-span-2  text-white mt-24">
          <img
            src="/airdrop/Grupo_15379.svg"
            alt="candy"
            className="absolute -mt-32  z-20 w-52 md:ml-24 ml-20 "
          />
          <div className="mt-20">
            <a
              href=""
              className="border-2 border-white rounded-full font-bold text-white px-36 py-3 transition duration-300 ease-in-out  "
            >
              0.01
            </a>
          </div>
          <h1 className="text-white text-xl font-bold mt-12">BEP20 Address</h1>

          <div className="mt-4 mb-8">
            <a
              href=""
              className="bg-white rounded-full font-bold text-pink-400 md:px-24 text-sm  px-12 py-2 transition duration-300 ease-in-out  "
            >
              Enter your wallet bep20 address
            </a>
          </div>

          <div className="mt-4 sm:ml-28 ml-[70px] absolute">
            <a
              href=""
              className="bg-white rounded-full font-semibold text-pink-500 md:px-16 text-xl  px-12 py-4 transition duration-300 ease-in-out   drop-shadow-md"
            >
              Buy Token
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AirdropPreSale;
