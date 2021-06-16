import React from "react";
import Link from '../link'

const ExchangeCard = ({
  id,
  title,
  image,
  trading,
}) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-lg  dark:bg-brown-eight">
        <Link to={`/exchange/info/${id}`}>
        <img
          src={image}
          alt="Placeholder"
          className=" object-center w-full lg:h-48 md:h-3"
        />

        <div className="p-6">
          <h2  className="mb-1 text-base font-bold tracking-widest text-yellow-900 title-font">
            {title}
          </h2>
          <div className="col-span-3 row-span-1">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg text-yellow-900 dark:text-brown-six font-bold">

                  <img className="flex" src="/icon_fav.svg" alt="fav"/>
                  0

              </h1>
              <p className="text-yellow-900 dark:text-brown-six font-bold text-sm">{trading} BAKE</p>
            </header>
          </div>
          <Link to="/" className="dark:bg-brown-six dark:text-yellow-900 sm:px-4 sm:py-3 px-2 py-0  mr-2  sm:text-base text-lg   font-semibold rounded-md block text-center   bg-brown-eleven hover:bg-opacity-30 text-white">
                      Connect Waller
          </Link>
        </div>
          </Link>
      </div>

    </>
  );
};
export default ExchangeCard;
