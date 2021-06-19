import React from 'react'


const TradeScreen = (  ) => {


  return(
  <>
    <div className="m-auto max-w-6xl p-12 pt-20 ">
    
<div className="hero-headline flex flex-col items-center justify-center  text-center z-40">

    

      <div className="md:w-1/2 max-w-md flex  justify-center">
       <img alt="card img" class="rounded-t z-10" src="/choco-lolli.svg"/> 
      </div>

  <div className="md:w-5/6 max-w-md flex flex-col justify-center">
  
       <div class="grid mt-8  gap-8 grid-cols-1">
	<div class="flex flex-col ">
		<div class="bg-white shadow-md rounded-3xl p-5">
			<div class="flex flex-row items-center">
        <img src="/trade/Grupo_14415.svg" className="mr-2"/>
				<h2 class="font-semibold text-lg text-blue-400 mr-auto">Exchange</h2>
				<div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
  <button className="mr-2">
            <img src="/trade/Grupo_14389.svg" />
          </button>
          <button>
            <img src="/trade/reloj-de-pared.svg"/>
          </button>
        </div>
			</div>
			<div class="mt-5">
				<div class="form">
										<div class="md:flex flex-row md:space-x-4 w-full text-xs">
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-semibold text-gray-600 py-2">Company  Name <abbr title="required">*</abbr></label>
								<input placeholder="Company Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name"/>
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-semibold text-gray-600 py-2">Company  Mail <abbr title="required">*</abbr></label>
								<input placeholder="Email ID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name"/>
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
						</div>
						<div class="mb-3 space-y-2 w-full text-xs">
							<label class=" font-semibold text-gray-600 py-2">Company  Website</label>
							<div class="flex flex-wrap items-stretch w-full mb-4 relative">
								<div class="flex">
									<span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                   </span>
								</div>
								<input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://"/>
                  </div>
							</div>
							<div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-3">
									<label class="font-semibold text-gray-600 py-2">Company Address</label>
									<input placeholder="Address" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address"/>
              </div>
									<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Location<abbr title="required">*</abbr></label>
										<select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                  <option value="">Seleted location</option>
                  <option value="">Cochin,KL</option>
                  <option value="">Mumbai,MH</option>
                  <option value="">Bangalore,KA</option>
                </select>
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>
								<div class="flex-auto w-full mb-1 text-xs space-y-2">
									<label class="font-semibold text-gray-600 py-2">Description</label>
									<textarea required="" name="message" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your comapny info" spellcheck="false"></textarea>
									<p class="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
								</div>
								<p class="text-xs text-red-500 text-right my-3">Required fields are marked with an
									asterisk <abbr title="Required field">*</abbr></p>
							
      <button
        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none font-bold"
      >
        Swap
      </button>
							</div>
						</div>
					</div>
				</div>
			</div>
  
        
      </div>

   </div>
    </div>
  </>
)}
export default TradeScreen
