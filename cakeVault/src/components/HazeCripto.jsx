import React from 'react'
import {Card,  CardBody, CardRibbon} from '@pancakeswap-libs/uikit';

export default function HazeCripto() {
    return (
        <div className='flex items-center justify-center'>             
          <Card ribbon={<CardRibbon variantColor="success" text="Audited by" />}
          className='w-full md:w-1/3'          >
          <CardBody 
          className='p-6 '>
            <a  href='https://hazecrypto.net/cakevault/' target='_black'>
            <div className='flex items-center justify-center w-full font-bold'>
                <h3 >Audited by HazeCrypto</h3>
                <img
                style={{height:'5rem'}}
                src="https://hazecrypto.net/wp-content/uploads/thegem-logos/logo_726a148fa9d6f9e093eb3d9dd636513d_1x.png" alt=""/>
                
            </div>
            </a>
          </CardBody>
        </Card>
        
        
        
         
          
         </div>
    )
}
