import React from 'react'

export default function MainPage() {
  return (
    <div >
      <h1 className=' mt-10 lg:mx-32 text-5xl font-bold text-green-700'>Currency Converter</h1>
      <p className='lg:mx-32 opacity-40 py-6'>Get fast and easy calculator for converting one currency to another using the latest live exchange rates.
      </p>

    <div className='mt-5 flex items-center justify-center flex-col '>
      <section className='w-full lg:w-1/2'>
      
        <form>
          <div className='block mb-2'> <label className='block mb-2' >Date</label>
            <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>

          <div className='block mb-2'> 
            <label className='block mb-2'>Source Currency</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "placeholder="Slect source currency type"  required >
            <option>temp</option>
            </select>
          </div>

          <div className='block mb-2'> 
            <label className='block mb-2'>Target Currency</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "placeholder="Slect source currency type"  required >
            <option>temp</option>
            </select>
          </div>

          <div className='block mb-2'> <label className='block mb-2' >Amount</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter amoount" required />
          </div>

          <div className='my-4'>
            <button className='bg-blue-700 hover:bg-blue-600 rounded-lg px-5 py-2  ' >Get target currency</button>
          </div>

        </form>
      </section>
    </div>

    </div>
     


  );
}