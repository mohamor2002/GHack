import React from 'react';
import Navbar from '../components/Navbar';
import image from '../assets/company.svg'; // Importez votre image ici

const InvestDetail = () => {
  return (
    <div className='bg-main-gray relative '>
      <Navbar />
      <div className='bg-main-blue w-full h-60 '>
        
      </div>
      <div className='p-8 pl-12 tmb-5'>
      <div className=' flex justify-start mb-3 '>
        <img 
          src={image} 
          alt='Floating Image' 
          className='absolute transform translate-y-40 top-20 h-56 w-40  mr-10' 
        />
         <div className='mb-4 ml-48'>
          <button className="  bg-main-blue hover:bg-main-green-700 text-white font-bold py-2 px-12 rounded mb-4 ">Invest Now</button>
           <h1 className='font-semibold text-xl'>Candam Technologies</h1>
         </div>
     </div>
     <p className='text-xl mb-8'> Unlock a new era in waste management: Convert any bin into smart, elevating recycling to new heights</p>
      <h1 className='font-bold text-xl mb-4'>Company Information</h1>
      <div className='border-t-2 border-main-blue border-opacity-65 mb-4 '></div>
      <div className=' grid grid-cols-3  gap-y-5 pr-10 mb-10'>
           
          <p className='text-xl'>Company:</p>
          <h1 className='font-bold col-span-2'>Candam Technologies</h1>
          <p className='text-xl'>Website:</p>
          <h1 className='font-bold col-span-2'>Candamtech.com</h1>
          <p className='text-xl'>Incorporation:</p>
          <h1 className='font-bold col-span-2'>12/01/2022</h1>
          <p className='text-xl'>Description:</p>
          <h1 className=''> Investing involves risks, including loss of capital, illiquidity, lack of dividends and dilution, and should be done only as part of a diversified portfolio</h1>
          


      </div>
      <h1 className='font-bold text-xl mb-4'>Investment Information</h1>
      <div className='border-t-2 border-main-blue border-opacity-65 mb-4 '></div>
      <div className=' grid grid-cols-3  gap-y-5 pr-10 bm-6'>
           
          <p className='text-xl'>Valuation:</p>
          <h1 className='font-bold col-span-2'>220,000,000 DA</h1>
          <p className='text-xl'>Equality Offered:</p>
          <h1 className='font-bold col-span-2'>8.4 %</h1>
          <p className='text-xl'>Share Price:</p>
          <h1 className='font-bold col-span-2'>100,000 DA</h1>
          <p className='text-xl'>Tax Relief:</p>
          <h1 className='font-bold col-span-2'>20,00 DA</h1>
          <p className='text-xl'>Investors:</p>
          <h1 className='font-bold col-span-2'>224</h1>
          <p className='text-xl'>Type:</p>
          <h1 className='font-bold col-span-2'>Equity</h1>
          
          

      </div>
      <div className='border-t-2 border-main-blue border-opacity-65 mb-6 mt-6'></div>
      <p className='p-5'>
      Candam Technologies is a deep tech company based in Barcelona. Our mission is to ensure that every citizen receives a fair reward for their recycled packaging, thanks to our technology.
♻️ 1. Return & Earn Schemes – RecySmart is an IoT device able to transform any single bin into a Smart. It can identify users and characterize packaging material recycled by citizens. This valuable data enables waste managers and the retail industry to reward or refund them for their correct recycling actions to increase the packaging recovery rates.
🤖 2. Smart Waste – Optimize Waste Collection: Candam offers a wide range of technology to optimize waste collection where recently we have been adjudicated with the largest deployment in the EU.
💲 Secured €4 M through private equity and prestigious EU grants. We have established 11 commercial agreements in multiple countries like Spain, Portugal, the UK, the Gulf Region, etc. In 2023, revenue nearly hit €1M.

      </p>



      
      



    </div>

    </div>
  );
}

export default InvestDetail;
