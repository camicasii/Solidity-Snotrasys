import React from 'react'
import { Card, CardBody, Button, Text } from "@pancakeswap-libs/uikit";

const FooterIcon = () => (
<svg width="29" height="29" className="inline-flex items-center justify-center " viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0417 10.2084H18.9584C19.7319 10.2084 20.4738 10.5156 21.0208 11.0626C21.5677 11.6096 21.875 12.3515 21.875 13.125V14.5834H18.9584V13.125H16.0417V21.875H18.9584V20.4167H21.875V21.875C21.875 22.6486 21.5677 23.3904 21.0208 23.9374C20.4738 24.4844 19.7319 24.7917 18.9584 24.7917H16.0417C15.2681 24.7917 14.5263 24.4844 13.9793 23.9374C13.4323 23.3904 13.125 22.6486 13.125 21.875V13.125C13.125 12.3515 13.4323 11.6096 13.9793 11.0626C14.5263 10.5156 15.2681 10.2084 16.0417 10.2084ZM17.5 2.91669C19.4151 2.91669 21.3115 3.2939 23.0808 4.02678C24.8502 4.75966 26.4578 5.83386 27.812 7.18805C29.1662 8.54223 30.2404 10.1499 30.9733 11.9192C31.7061 13.6886 32.0834 15.5849 32.0834 17.5C32.0834 21.3678 30.5469 25.0771 27.812 27.812C25.0771 30.5469 21.3678 32.0834 17.5 32.0834C15.5849 32.0834 13.6886 31.7061 11.9192 30.9733C10.1499 30.2404 8.54223 29.1662 7.18805 27.812C4.45314 25.0771 2.91669 21.3678 2.91669 17.5C2.91669 13.6323 4.45314 9.92295 7.18805 7.18805C9.92295 4.45314 13.6323 2.91669 17.5 2.91669ZM17.5 5.83335C14.4058 5.83335 11.4384 7.06252 9.25044 9.25044C7.06252 11.4384 5.83335 14.4058 5.83335 17.5C5.83335 20.5942 7.06252 23.5617 9.25044 25.7496C11.4384 27.9375 14.4058 29.1667 17.5 29.1667C20.5942 29.1667 23.5617 27.9375 25.7496 25.7496C27.9375 23.5617 29.1667 20.5942 29.1667 17.5C29.1667 14.4058 27.9375 11.4384 25.7496 9.25044C23.5617 7.06252 20.5942 5.83335 17.5 5.83335Z" fill="#DA781E"/>
</svg>
)

const Footer = (  ) => (
 <footer className="bg-red-200">	
		<div className="container max-w-6xl mx-auto flex items-center px-7 py-8">
			<div className="w-full mx-auto flex flex-wrap items-center">
				<div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
					<a className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="/">
            
			<h3 className="text-base inline-flex sm:text-left text-center text-[#FDBB26] ">
				<Text >
				{new Date().getFullYear()}
				</Text> <FooterIcon />  
				
				<Text bold>Pancake Vault</Text></h3>
  
					</a>

				</div>

	
			</div>
        

		
		</div>
	</footer>
)
export default Footer
