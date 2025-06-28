import React from 'react'
import 'boxicons/css/boxicons.min.css'
const Header = () => {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }


    return (
        <header className='flex justify-between items-center py-4 px-4
                         lg:px-20'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
                Hawiyat
            </h1>
            <nav className="hidden md:flex items-center gap-12">
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"

                    href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                    Company
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"

                    href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                    Members
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"

                    href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                    Product
                </a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500"

                    href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                    Contact
                </a>
            </nav>
            <button className='gidden md:block bg-[#a7a7a7]
           text-black py-3 px-6 rounded-full border-none
            font0-medium transtion-all 
          duration-500 hover:bg-white cursor-potiner z-50'>
                Sign in
            </button>

            <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
                <i class='bx  bx-menu'  ></i> 
            </button>

            <div id='mobileMenu' className="hidden fixed top-16 bottom-0 right-0 left-0 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
                <nav className="flex flex-col items-center gap-6">
                    <a href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                        Company
                    </a>
                    <a href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                        Members
                    </a>
                    <a href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                        Product
                    </a>
                    <a href="#" className="text-base tracking-wider
                                    transition-colors hover:text-gray-300
                                    z-50">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header