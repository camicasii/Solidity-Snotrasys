import * as React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ setClosed, isStatic }) => {
  return (
    <>
      {!isStatic && (
        <div className=" py-4 flex-grow bg-[#fbf8fa] ">
          <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  text-gray-800">
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full mt-[10px]">
              <div
                className="overflow-y-auto overflow-x-hidden flex-grow bg-[#fbf8fa] px-4"
                style={{ marginTop: "54px" }}
              >
                <ul className="mt-4 flex flex-col py-4 space-y-1 rounded-lg bg-white border-red-400 sm:ml-4 ml-0 text-center shadow-sm">
                  <li className="text-center">
                    <NavLink
                      onClick={() => setClosed(true)}
                      to="/home"
                      className=" font-bold focus:outline-none px-1 pb-1 border-b-2 border-fuchsia-600"
                      inactiveClassName="text-red-400"
                      activeClassName="rounded-sm text-pink-primary "
                    >
                      <span className="flex items-center sm:ml-[90px] ml-24">
                        <img src="/chupete.svg" alt="chupete" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Home
                      </span>
                    </NavLink>
                  </li>
                  <li className="pt-4">
                    <NavLink
                      onClick={() => setClosed(true)}
                      to="/trade"
                      className=" font-bold focus:outline-none px-1 pb-1 border-b-2 border-fuchsia-600"
                      inactiveClassName="text-red-400"
                      activeClassName="rounded-sm text-pink-primary "
                    >
                      <span className="flex items-center sm:ml-[90px] ml-24">
                        <img src="/Menu/Grupo_676.svg" alt="trade" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Trade
                      </span>
                    </NavLink>
                  </li>
                  <li className="pt-4">
                    <NavLink
                      onClick={() => setClosed(true)}
                      to="/farms"
                      className=" font-bold focus:outline-none px-1 pb-1 border-b-2 border-fuchsia-600"
                      inactiveClassName="text-red-400"
                      activeClassName="rounded-sm text-pink-primary "
                    >
                      <span className="flex items-center sm:ml-[90px] ml-24">
                        <img src="/Menu/golosinas.svg" alt="golosinas" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Farms
                      </span>
                    </NavLink>
                  </li>

                  <li className="pt-4">
                    <NavLink
                      onClick={() => setClosed(true)}
                      to="/pools"
                      className=" font-bold focus:outline-none px-1 pb-1 border-b-2 border-fuchsia-600"
                      inactiveClassName="text-red-400"
                      activeClassName="rounded-sm text-pink-primary "
                    >
                      <span className="flex items-center sm:ml-[90px] ml-24">
                        <img src="/Menu/maquina-de-chicles.svg" alt="pools" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Pools
                      </span>
                    </NavLink>
                  </li>
                  <li className="pt-4">
                    <NavLink
                      onClick={() => setClosed(true)}
                      to="/sweet-games"
                      className=" font-bold focus:outline-none px-1 pb-1 border-b-2 border-fuchsia-600"
                      inactiveClassName="text-red-400"
                      activeClassName="rounded-sm text-pink-primary"
                    >
                      <span className="flex items-center sm:ml-[90px] ml-24">
                        <img src="/Menu/poker.svg" alt="poker" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Sweet Games
                      </span>
                    </NavLink>
                  </li>
                  <li className="pt-4 pb-8">
                    <NavLink
                      onClick={()=> setClosed(true)}
                      to="/airdrop"
                    >
                      <span className="flex items-center sm:ml-[90px] ml-24 mt-4">
                      <img src="/Menu/lanzamiento.svg" alt="cohete" />
                    </span>
              </NavLink>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
};
export default SidebarMenu;
