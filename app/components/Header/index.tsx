'use client';

import { Button, Navbar, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import LogoImage from '../../assets/images/logo1-e1678627949991.png';

export default function index() {
  return (
    <>

    <div className="container-fluid w-[100%]">
    <Navbar className='xl:w-[80%] lg:bg-transparent md:bg-white m-auto navbarBanner '> 
      <Navbar.Brand href="https://flowbite-react.com">
        <Image alt="Flowbite React Logo"
          className=" w-36 xl:w-60 lg:w-40 md:w-40  logo"
          src={LogoImage} />
      </Navbar.Brand>
      <div className="flex md:order-2">
      <button className='bg-[#E21F36] hover:bg-[#EA530A] p-2 text-white px-3 w-max duration-500'>Get Started</button>
        <Navbar.Toggle className='toggler xl:hidden lg:hidden' />
      </div>
      <Navbar.Collapse className='md:hidden bg-black sm:bg-black md:bg-transparent lg:bg-transparent lg:flex Navbar_Collapse '>
        <Navbar.Link
          active
          href="#"
          className='text-black bg-transparent hover:text-red-600 space-x-4' 
        >
          {/* <span className='text-red-600 hover:text-red-600'>Services</span> */}
        <Dropdown 
      inline
      className='text-white lg:text-white md:text-white sm:text-white hover:text-red-600 w-[200px]'
      label="Services"
    >
      <Dropdown.Item>
        <span className='text-black'>Application Security</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className='text-black'>cloud Security</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className='text-black'>Infrastructure Security</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className='text-black'>Threat Hunter</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className='text-black'>Disaster Planning</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className='text-black'>Insident Responder</span>
      </Dropdown.Item>
      <Dropdown.Item>
        <span className='text-black'>More Services</span>
      </Dropdown.Item>
    </Dropdown>
        </Navbar.Link>
        <Navbar.Link href="#" className='hover:text-red-600 space-x-4'>
          <span className='hover:text-red-600 text-white'>LED Screens</span>
        </Navbar.Link>
        <Navbar.Link href="#">
        <span className='hover:text-red-600 text-white'>Company</span>
        </Navbar.Link>
        <Navbar.Link href="/contact">
          <span className='hover:text-red-600 text-white'>Contact</span>
        </Navbar.Link>
        <Navbar.Link href="#">
        <span className='hover:text-red-600 text-white'>Press Release</span>
        </Navbar.Link>
        <Navbar.Link href="#">
        <span className='hover:text-red-600 text-white'>Product Inquiry</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>

      </>
  )
}


