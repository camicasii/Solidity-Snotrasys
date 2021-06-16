import React from "react";
import Emoji from "../Emoji";

import InfoMarketPlace from '../InfoMarketplace'
import {ExchangeList} from '../exchange/ExchangeList'
const NftScreen = () => {
  return (
    <>
      
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto sm:ml-48 ml-0">
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className=" font-extrabold text-3xl text-yellow-900 dark:text-brown-six">
              NFT Marketplace
            </h1>
            <p className=" font-base text-base text-yellow-600 dark:text-brown-thirteen">
              A market made for NFT, where everything is special{" "}
              <Emoji symbol="😋" />
            </p>
          </div>
        
      
      <InfoMarketPlace />
</div>
      <ExchangeList publisher="musk-doge"/>
     
    </>
  );
};
export default NftScreen;
