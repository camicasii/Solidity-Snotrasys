import React from "react";
import { Link } from "react-router-dom";

const InfoMarketPlace = () => {
  return (
    <>

      <div className="p-10 items-center  flex flex-col items-center justify-center ">
        <div className="mt-3 rounded overflow-hidden shadow-lg bg-white dark:bg-brown-eight">
          <div className="px-2 pt-4 pb-2">
            <p className="inline-block  rounded-full px-3 py-1 text-md font-bold text-yellow-700 mr-2 mb-2 dark:text-brown-nine">
              Digital Artwork:
            </p>
            <Link
              exact
              to="/"
              className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six"
            >
              Musk&Doge
            </Link>
            <Link to="/exchange/safe-nft">
              <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              SafeNFT
            </span>
            </Link>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              linch&Bake
            </span>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              BAE&Banana
            </span>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              BTC Artwarks
            </span>
          </div>

           <div className="px-2 pt-4 pb-2">
            <p className="inline-block  rounded-full px-3 py-1 text-md font-bold text-yellow-700 mr-2 mb-2 dark:text-brown-nine">
              Gamification NFT:
            </p>
            <Link
              exact
              to="/"
              className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six"
            >
              Rare Car
            </Link>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              Bakery Combos
            </span>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              BakerySoccer
            </span>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              Battle Pets
            </span>
            <span className="inline-block bg-brown-eleven  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 dark:text-brown-ten dark:bg-brown-six">
              Weapons
            </span>
          </div>        </div>
      </div>
    </>
  );
};
export default InfoMarketPlace;
