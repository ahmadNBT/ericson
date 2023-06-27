import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineSearch, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";

export default function index() {
  return (
    <>
        <div className='container-fluid  p-2 text-white w-[100%]'>
        <div className="container xl:w-[80%] lg:[100%]  m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4">
              <div className='col-span-3'>
                <p className='flex md:align-middle'>
                  <span>Email:</span>
                  <BiEnvelope className='m-2 mt-1' />
                  <span>info@ericsontechnologies.com</span>
                </p>
              </div>
              <div className='col-span-1 flex md:justify-end sm:justify-start'>
                  {/* <TfiHeadphoneAlt className='m-2 mt-1' />
                <span>Support Center</span> */}
                <a href="#"><CgFacebook className='m-1 text-xl' /></a>
                <a href="#"><AiOutlineInstagram className='m-1 text-xl' /></a>
                <a href="#"><BsTwitter className='m-1 text-xl' /></a>
                <a href="#"><AiFillLinkedin className='m-1 text-xl' /></a>
              </div>
            </div>
        </div>
      </div>  
    </>
  )

}
