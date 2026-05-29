import React from 'react'
import { assets , cityList} from '../assets/assets';

const Hero = () => {
    const [pickupLocation, setPickupLocation] = React.useState('');
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'> 
      <h1 className='text-4xl md:text-5xl font-semibold'> Your Journey, Your Way.</h1>
         <h6 className='text-xl md:text-xl font-semibold'> premium cars rentals at affordable daily rates. Book your car in under two minutes!</h6>
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] '>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:,l-8'>
            <div className='flex flex-col  items-start gap-2' >
                <select  required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} className='border border-borderColor rounded-lg px-4 py-2 w-full text-left text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary'>
                    <option value="">pickup Location</option>
                    {cityList.map((city)=><option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-sm text-gray-500'>{pickupLocation?pickupLocation:"Please select location"}</p>
            </div>


            <div  >
                <label htmlFor="pickup-date" >Pickup Date</label>
                <input type="date" id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required  />
            </div>


            <div  >
                <label htmlFor="return-date" >Return Date</label>
                <input type="date" id='return-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required  />
            </div>

            
        </div>

        <button className='flex items-center justify-center gap-1 px-9 py-3 msx-sm:mt-4 bg-primary hover :bg-primary-dull text-white rounded-full cursor-pointer '>
                <img src={assets.search_icon} alt="search" className='brightness-300' />
                search
            </button>

      </form>
      <img src={assets.main_car} alt="Main Car" className='max-h-74' />
    </div>
  )
}

export default Hero
