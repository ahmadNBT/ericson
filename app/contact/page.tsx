import React from 'react'
import { HomeLayout } from '../layouts'
import footer_bg from '../assets/images/footer-bg.jpg'

export default function page() {
  return (
    <>
        <HomeLayout>
            <div className="footerBanner py-32 pt-60 bg-[#000219]" style={{backgroundImage: `url(${footer_bg})`}}>
                <h1 className='text-white text-5xl font-bold text-center'>Contact Us</h1>
                  <nav className="flex text-white m-auto w-max" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center my-4 space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-sm font-medium text-white dark:text-gray-400 dark:hover:text-white">
                          <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                          Home
                        </a>
                      </li>
                      <li aria-current="page">
                        <div className="flex items-center">
                          <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Contact</span>
                        </div>
                      </li>
                    </ol>
                  </nav>
            </div>


      <div className="container xl:w-[80%] lg:[100%] m-auto">
              <div className=" grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 py-40">
                <div className="col-span-12 md:col-span-1 lg:col-span-2 xl:col-span-2">
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#E21F36] focus:border-[#E21F36] block w-full p-3" placeholder="John" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#E21F36] focus:border-[#E21F36] block w-full p-3" placeholder="company@mail.com" required />
        </div>  
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#E21F36] focus:border-[#E21F36] block w-full p-3" placeholder="97 000 00 00 000" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
            <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#E21F36] focus:border-[#E21F36] block w-full p-3" placeholder="your subject" required />
        </div>
    </div>
  
        <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea style={{resize: 'none'}} maxLength={600} rows={6}  id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#E21F36] focus:border-[#E21F36] block w-full p-3" placeholder="" required></textarea>
        </div>
        <button type="submit"  className='bg-[#E21F36] hover:bg-[#EA530A] p-2 text-white px-5 w-max duration-500'>Submit</button>
    
</form>

                </div>
                <div className="col-span-12 md:col-span-1 lg:col-span-1 xl:col-span-1">
                      
                </div>
              </div>
            </div>


        </HomeLayout>
    </>
  )
}
