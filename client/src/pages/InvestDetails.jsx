import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import image from '../assets/company.svg'; // Importez votre image ici
import axios from 'axios';

const InvestDetail = () => {
  const [investment, setInvestment] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/investments/1/');
        const response2 = await axios.get('http://localhost:8000/companies/1/');
        setInvestment(response.data);
        setCompanies(response2.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  console.log(investment)
  
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
           <h1 className='font-semibold text-xl'>{companies?.company_name}</h1>
         </div>
     </div>
     <p className='text-xl mb-8'> Unlock a new era in waste management: Convert any bin into smart, elevating recycling to new heights</p>
      <h1 className='font-bold text-xl mb-4'>Company Information</h1>
      <div className='border-t-2 border-main-blue border-opacity-65 mb-4 '></div>
      <div className=' grid grid-cols-3  gap-y-5 pr-10 mb-10'>
           
          <p className='text-xl'>Company:</p>
          <h1 className='font-bold col-span-2'>{companies?.company_name}</h1>
          <p className='text-xl'>Website:</p>
          <h1 className='font-bold col-span-2'>{companies?.website}</h1>
          <p className='text-xl'>Incorporation:</p>
          <h1 className='font-bold col-span-2'>{companies?.incorporation_date}</h1>
          <p className='text-xl'>Description:</p>
          <h1 className=''>{companies?.description}</h1>
          


      </div>
      <h1 className='font-bold text-xl mb-4'>Investment Information</h1>
      <div className='border-t-2 border-main-blue border-opacity-65 mb-4 '></div>
      <div className=' grid grid-cols-3  gap-y-5 pr-10 bm-6'>
           
          <p className='text-xl'>Valuation:</p>
          <h1 className='font-bold col-span-2'>{investment?.valuation+' '} DA</h1>
          <p className='text-xl'>Equality Offered:</p>
          <h1 className='font-bold col-span-2'>{investment?.equity_offered+' '} %</h1>
          <p className='text-xl'>Share Price:</p>
          <h1 className='font-bold col-span-2'>{investment?.share_price+' '} DA</h1>
          <p className='text-xl'>Tax Relief:</p>
          <h1 className='font-bold col-span-2'>{investment?.tax_relief+' '} DA</h1>
          <p className='text-xl'>Investors:</p>
          <h1 className='font-bold col-span-2'>{investment?.num_investors+' '}</h1>
          <p className='text-xl'>Type:</p>
          <h1 className='font-bold col-span-2'>{investment?.type+' '}</h1>
          
          

      </div>
      <div className='border-t-2 border-main-blue border-opacity-65 mb-6 mt-6'></div>
      <p className='p-5'>
      {investment?.pitch}
      </p>



      
      



    </div>

    </div>
  );
}

export default InvestDetail;
