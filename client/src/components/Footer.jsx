import React from 'react'
import { assets, menuLinks } from '../assets/assets';

const Footer = () => {
  return (
     <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Drive Away is a peer-to-peer car rental platform that connects car owners with renters, providing a convenient and affordable way to access vehicles for short-term use.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                      <a href="#" ><img src={assets.facebook_logo} alt="facebook" className='h-5 w-5' /></a>
                        <a href="#" ><img src={assets.twitter_logo} alt="twitter" className='h-5' /></a>

                        <a href="#" ><img src={assets.instagram_logo} alt="instagram" className='h-5' /></a>
                        
                    </div>
                </div>

                <div>
                    <h2 className='text-lg text-gray-800 font-medium uppercase '>COMPANY</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">BROWSE CARS</a></li>
                        <li><a href="#">LIST YOUR CAR</a></li>
                        <li><a href="#">ABOUT US</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-lg text-gray-800 font-medium uppercase '>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Termse of service  CARS</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#"> Insurence</a></li>
                    </ul>
                </div>


                <div>
                    <h2 className='text-lg text-gray-800 font-medium uppercase '>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li> Name : Bhargav</li>
                        <li> Email : bhargavbala56@gmail.com</li>
                    </ul>
                </div>

        
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="#">Bhargav </a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
