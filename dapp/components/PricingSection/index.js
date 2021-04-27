import React from 'react'
import {useForm} from '../../hooks/useForm';
import {useFetch} from '../../hooks/useFetch';
import info from '../../data/card-info-content.json'

const PricingSection = (  ) => {

const { loading, data } = useFetch( `` );

  const [ formValues, handleInputChange ] = useForm({
        amountPlanOne: '',
        amountPlanTwo: '',
        amountPlanThree: ''
    })

  const {DateOne,DateTwo,DateThree,DateFour,DateFive} = info

 const { amountPlanOne,amountPlanTwo,amountPlanThree } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
 
    }
  return(
  <>
    <div className="container mx-auto px-4 py-24 bg-[#030217]">
  
  
  
  <div className="lg:flex lg:items-center lg:-mx-2">
    
    <div className="bg-[#000000] mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
           <div className=" border border-[#FDBB26] p-10 rounded">
             <div className="flex justify-center -ml-36 lg:-ml-12 -mt-16 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-16 lg:justify-start lg:pr-0 py-1">
            <span  className="text-black py-3 px-4 rounded-full bg-[#DA781E]"><p className="work-sans font-semibold text-sm tracking-wide">Plan 1</p></span>
        </div>
        <ul className="text-[#FDBB26] leading-loose list-reset grid grid-cols-2 md:grid-cols-2 py-12">
          <li>{DateOne}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
         {/*******************************/}
          <li>{DateTwo}</li>
           {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
        {/*******************************/}
          <li>{DateThree}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">Anny Timme</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
          {/*******************************/}
          <li>{DateFour}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
            {/*******************************/}
          <li>{DateFive}</li>
            {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
        </ul>

     <form onSubmit={ handleSubmit } className="my-5 text-sm">
       <label 
       htmlFor="amount" 
       className="text-[#FDBB26] text-left"
       >Enter amount:
       </label>

       <input 
        type="number" 
        autoFocus 
        autoComplete="off"
        name="amountPlanOne"
        value={amountPlanOne}
        onChange={handleInputChange}
        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
       
       <div className="flex flex-wrap justify-center text-center">
  <button
        type="submit"
        className=" mt-4 cursor-pointer  py-2 px-6 rounded-md bg-[#FDBB26]  transition-all ease-in-out duration-100  text-[#030217] text-2xl" style={{boxShadow : '0px 4px 15px #DA781E' }}
                        >
                        Stake BNB
                        </button>
       </div>
                    </form>
      </div>
    </div>
    



    <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 bg-[#000000]">
      <div className=" border border-[#FDBB26] p-10 rounded">
             <div className="flex justify-center -ml-36 lg:-ml-12 -mt-16 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-16 lg:justify-start lg:pr-0 py-1">
            <span  className="text-black py-3 px-4 rounded-full bg-[#DA781E]"><p className="work-sans font-semibold text-sm tracking-wide">Plan 2</p></span>
       
        </div>
          <ul className="text-[#FDBB26] leading-loose list-reset grid grid-cols-2 md:grid-cols-2 py-12">
          <li>{DateOne}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
         {/*******************************/}
          <li>{DateTwo}</li>
           {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
        {/*******************************/}
          <li>{DateThree}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">Anny Timme</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
          {/*******************************/}
          <li>{DateFour}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
            {/*******************************/}
          <li>{DateFive}</li>
            {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
        </ul>
     <form onSubmit={ handleSubmit } className="my-5 text-sm">
       <label 
       htmlFor="amount" 
       className="text-[#FDBB26] text-left"
       >Enter amount:
       </label>

       <input 
        type="number" 
        autoFocus 
        autoComplete="off"
        name="amountPlanTwo"
        value={amountPlanTwo}
        onChange={handleInputChange}
        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
       <div className="flex flex-wrap justify-center text-center">
  <button
        type="submit"
        className=" mt-4 cursor-pointer  py-2 px-6 rounded-md bg-[#FDBB26]  transition-all ease-in-out duration-100  text-[#030217] text-2xl" style={{boxShadow : '0px 4px 15px #DA781E' }}
                        >
                        Stake BNB
                        </button>
       </div>
       
       

                    </form>
  
      </div>
    </div>
    
    <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 bg-[#000000]">
    <div className=" border border-[#FDBB26] p-10 rounded">
             <div className="flex justify-center -ml-36 lg:-ml-12 -mt-16 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-16 lg:justify-start lg:pr-0 py-1">
            <span  className="text-black py-3 px-4 rounded-full bg-[#DA781E]"><p className="work-sans font-semibold text-sm tracking-wide">Plan 3</p></span>
       
        </div>
         <ul className="text-[#FDBB26] leading-loose list-reset grid grid-cols-2 md:grid-cols-2 py-12">
          <li>{DateOne}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
         {/*******************************/}
          <li>{DateTwo}</li>
           {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
        {/*******************************/}
          <li>{DateThree}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">Anny Timme</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
          {/*******************************/}
          <li>{DateFour}</li>
          {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
            {/*******************************/}
          <li>{DateFive}</li>
            {
            loading?
              (
      <li className="text-[#DA781E]">.....</li>
              )
              :
              (
  <li className="text-[#DA781E]">{ }</li>

              )
          }
        </ul>


       <form onSubmit={ handleSubmit } className="my-5 text-sm">
       <label 
       htmlFor="amount" 
       className="text-[#FDBB26] text-left"
       >Enter amount:
       </label>

       <input 
        type="number" 
        autoFocus 
        autoComplete="off"
        name="amountPlanThree"
        value={amountPlanThree}
        onChange={handleInputChange}
        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
       
            <div className="flex flex-wrap justify-center text-center">
  <button
        type="submit"
        className=" mt-4 cursor-pointer  py-2 px-6 rounded-md bg-[#FDBB26]  transition-all ease-in-out duration-100  text-[#030217] text-2xl" style={{boxShadow : '0px 4px 15px #DA781E' }}
                        >
                        Stake BNB
                        </button>
       </div>
       

                    </form>

  
      </div>


    </div>
    
  </div>
</div>
  </>
)
      }
export default PricingSection
