'use client';
import LogoImage from '../../assets/images/logo1-e1678627949991.png';
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { TbPlaneTilt } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { BsPlayFill, BsTwitter, BsCheckCircleFill } from 'react-icons/bs';
import Image from 'next/image'


export default function index() {
  return (
    <>
    


{/* Footer -------------------- */}



<div className="container-fluid border-t p-3">
  <div className="container xl:w-[80%] lg:[100%] m-auto py-10">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:gridcols-1">
      <div className='p-5'>
      <Image alt=""
          className=" w-36 xl:w-40 lg:w-40 md:w-40"
          src={LogoImage} />
        <p className='my-3 text-sm'>Ericson Technologies L.L.C</p>
        <div className='flex'>
          <div className='w-[35px] h-[35px] rounded bg-zinc-600 flex items-center justify-center m-1'>
              <a href="#"><CgFacebook className='text-white m-1 text-lg' /></a>
          </div>
          <div className='w-[35px] h-[35px] rounded bg-zinc-600 flex items-center justify-center m-1'>
              <a href="#"><AiOutlineInstagram className='text-white m-1 text-lg' /></a>
          </div>
          <div className='w-[35px] h-[35px] rounded bg-zinc-600 flex items-center justify-center m-1'>
              <a href="#"><BsTwitter className='text-white m-1 text-lg' /></a>
          </div>
          <div className='w-[35px] h-[35px] rounded bg-zinc-600 flex items-center justify-center m-1'>
              <a href="#"><AiFillLinkedin className='text-white m-1 text-lg' /></a>
          </div>
        </div>
      </div>
      <div className='p-5'>
        <h1 className='text-xl font-bold'>Contact Us</h1>
        <hr className='m-2' />
          <div className="rounded grid grid-cols-6 mt-2">
            <ImLocation className='text-[#E21F36] w-[30px] text-xl m-2 ' />
            <p className='text-black text-sm col-span-5'><span className='font-bold'>Address:</span> 14th FLoor 1403 Al Moosa Tower 1, Trade Center First, Sheik Zayed Rd, Dubai,UAE</p>
          </div>
          <div className="rounded grid grid-cols-6 mt-2">
            <IoMdMail className='text-[#E21F36] w-[30px] text-xl m-2 ' />
            <p className='text-black text-sm col-span-5 flex items-center'><span className='font-bold'>Email:</span> <a href="mailto:info@ericsontechnologies.com">info@ericsontechnologies.com</a></p>
          </div>
          <div className="rounded grid grid-cols-6 mt-2">
            <FaPhoneVolume className='text-[#E21F36] w-[30px] text-xl m-2 ' />
            <p className='text-black text-sm col-span-5 flex items-center'><span className='font-bold'>Phone:</span> <a href="tel:+971 4 431 9000">+971 4 431 9000</a></p>
          </div>
      </div>
      <div className='p-5 lg:ps-20 md:ps-5'>
      <h1 className='text-xl font-bold'>About Us</h1>
        <p className='text-sm mt-2'><a href="">Services</a></p>
        <p className='text-sm mt-2'><a href="">Contact</a></p>
        <p className='text-sm mt-2'><a href="">FAQ</a></p>
        <p className='text-sm mt-2'><a href="">Blog</a></p>
        <p className='text-sm mt-2'><a href="">Team</a></p>
      </div>
      <div className='p-5'>
      <h1 className='text-xl font-bold'>Newsletter</h1>
        <div className='bg-gray-100 mt-5 rounded p-5'>
          <p className='text-sm'>Latest resources sent to your inbox weekly</p>
          <input type="text" placeholder='Enter your Email address'  className='rounded-full text-sm mt-3 w-[100%] bg-gray-200 p-2 px-5 outline-0 focus:ring-0 border-none' />
          <button className='rounded-full bg-black text-white text-sm mt-3 w-[100%] p-2 px-5 flex items-center'>Subscribe Now <TbPlaneTilt className='m-1 text-md'/></button>
        </div>
      </div>
    </div>

  </div>
    <div className="container-fluid border-t-2 m-auto py-5">
      <div className="container xl:w-[80%] lg:[100%] text-sm m-auto ">
        Copyright @2023 Ericson Technologies LLC. All Rights Reserved.
      </div>
    </div>
    
</div>



    
    </>
  )
}
