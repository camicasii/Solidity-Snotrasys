//import { useState } from 'react'
import info from "../../data/card-info-content.json";
import { useForm } from "../../hooks/useForm";
const CardPricing = ({loading,amountPlanOne,title}) => {
    const { DateOne, DateTwo, DateThree, DateFour, DateFive } = info
    
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      const [formValues, handleInputChange] = useForm({
        amountPlanOne: "",
        amountPlanTwo: "",
        amountPlanThree: "",
      });
    return (
        <div className=" border border-[#FDBB26] p-10 rounded">
              <div className="flex justify-center -ml-36 lg:-ml-12 -mt-16 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-16 lg:justify-start lg:pr-0 py-1">
                <span className="text-black py-3 px-4 rounded-full bg-[#DA781E]">
                  <p className="work-sans font-semibold text-sm tracking-wide">
                    {title}
                  </p>
                </span>
              </div>
              <ul className="text-[#FDBB26] leading-loose list-reset grid grid-cols-2 md:grid-cols-2 py-12">
                <li>{DateOne}</li>
                {loading ? (
                  <li className="text-[#DA781E]">.....</li>
                ) : (
                  <li className="text-[#DA781E]">{}</li>
                )}
                {/*******************************/}
                <li>{DateTwo}</li>
                {loading ? (
                  <li className="text-[#DA781E]">.....</li>
                ) : (
                  <li className="text-[#DA781E]">{}</li>
                )}
                {/*******************************/}
                <li>{DateThree}</li>
                {loading ? (
                  <li className="text-[#DA781E]">Anny Timme</li>
                ) : (
                  <li className="text-[#DA781E]">{}</li>
                )}
                {/*******************************/}
                <li>{DateFour}</li>
                {loading ? (
                  <li className="text-[#DA781E]">.....</li>
                ) : (
                  <li className="text-[#DA781E]">{}</li>
                )}
                {/*******************************/}
                <li>{DateFive}</li>
                {loading ? (
                  <li className="text-[#DA781E]">.....</li>
                ) : (
                  <li className="text-[#DA781E]">{}</li>
                )}
              </ul>

              <form onSubmit={handleSubmit} className="my-5 text-sm">
                <label htmlFor="amount" className="text-[#FDBB26] text-left">
                  Enter amount:
                </label>

                <input
                  type="number"
                  autoFocus
                  autoComplete="off"
                  name="amountPlanOne"
                  value={amountPlanOne}
                  onChange={handleInputChange}
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                />

                <div className="flex flex-wrap justify-center text-center">
                  <button
                    type="submit"
                    className=" mt-4 cursor-pointer  py-2 px-6 rounded-md bg-[#FDBB26]  transition-all ease-in-out duration-100  text-[#030217] text-2xl"
                    style={{ boxShadow: "0px 4px 15px #DA781E" }}
                  >
                    Stake BNB
                  </button>
                </div>
              </form>
            </div>
    )
}

export default CardPricing
