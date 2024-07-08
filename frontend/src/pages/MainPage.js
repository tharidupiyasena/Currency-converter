import React, {useEffect, useState} from 'react'
import axios from "axios";


export default function MainPage() {

  //states for the form fields
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, settargetCurrency] = useState("");
  const [amountInSourceCurrency, SetAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, SetAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const responce = await axios.get("http://localhost:5000/convert",{
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency,
        },
      });
      SetAmountInTargetCurrency(responce.data);
      console.log(amountInSourceCurrency, amountInTargetCurrency);

    } catch (err) {
      console.error(err);
    }

  };

  //get all currency names
  useEffect(()=>{
    const getCurrencyNames = async() =>{
      try{

        const responce = await axios.get("http://localhost:5000/getAllCurrencies");

        setCurrencyNames(responce.data);
      }
       catch(err){
        console.erraor(err);
       }
    };
    getCurrencyNames();
  }, []);


  return (
    <div >
      <h1 className=' mt-10 lg:mx-32 text-5xl font-bold text-green-700'>Currency Converter</h1>
      <p className='lg:mx-32 opacity-40 py-6'>Get fast and easy calculator for converting one currency to another using the latest live exchange rates.
      </p>

    <div className='mt-5 flex items-center justify-center flex-col '>
      <section className='w-full lg:w-1/2'>
      
        <form onSubmit={handleSubmit}>


    
          <div htmlFor={date} className='block mb-2'> <label className='block mb-2' >Date</label>
            <input onChange={(e)=>setDate(e.target.value)} type="date"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id={date} name={date} required />
          </div>



    
          <div className='block mb-2'> 
            <label htmlFor={amountInSourceCurrency} className='block mb-2'>Source Currency</label>
            <select onChange={(e)=>setSourceCurrency(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "placeholder="Slect source currency type"  required id={amountInSourceCurrency} name={amountInSourceCurrency}>
            <option>Select Source Currency</option>
            {Object.keys(currencyNames).map((currency)=> (
              <option className='p-1' key={currency} value= {currency}>
                {currencyNames[currency]}
              </option>
            ))}
            </select>
          </div>



    
          <div className='block mb-2'> 
            <label  htmlFor={amountInTargetCurrency} className='block mb-2'>Target Currency</label>
            <select onChange={(e)=>settargetCurrency(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "placeholder="Slect source currency type"  required id={amountInTargetCurrency} name={amountInTargetCurrency}>
            <option>Select Target Currency</option>
            {Object.keys(currencyNames).map((currency)=> (
              <option className='p-1' key={currency} value= {currency}>
                {currencyNames[currency]}
                </option>
                ))}
            </select>
          </div>


    
          <div className='block mb-2'> <label className='block mb-2' >Amount</label>
            <input onChange={(e)=>SetAmountInSourceCurrency(e.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter amoount" required />
          </div>




     
          <div className='my-4'>
            <button className='bg-blue-700 hover:bg-blue-600 rounded-lg px-5 py-2  ' >Get target currency</button>
          </div>

        </form>
      </section>
    </div>
            <section className='mt-5'>
              {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equals to {" "}
              <span className='text-green-600 font-bold'> {amountInTargetCurrency} </span>  in {currencyNames[targetCurrency]}
            </section>
    </div>
     


  );
}