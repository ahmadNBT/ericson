import React from 'react'
import { HomeLayout } from './layouts'
import Image from 'next/image'
import aboutImage from './assets/images/about1.png'
import counterIcon1 from './assets/images/funfacts-icon5.png'
import counterIcon2 from './assets/images/funfacts-icon6.png'
import counterIcon3 from './assets/images/funfacts-icon7.png'
import counterIcon4 from './assets/images/funfacts-icon8.png'
import web_sec_Image from './assets/images/web.png'

import { FiSettings } from 'react-icons/fi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsPlayFill, BsTwitter, BsCheckCircleFill } from 'react-icons/bs';



export default function page() {
  return (
    <HomeLayout>

{/* Banner Section -------------------- */}

      <div className="container-fluid bannerImage bg-[#FFFFFF] bg-center py-20 px-10 bg-cover h-auto">
        <div className="container lg:w-[80%] md:w-[100%] m-auto pt-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            <div className='flex align-middle flex-col py-20'>
              <p className='text-white mt-10'>World Class Cyber Security</p>
              <h1 className='lg:text-5xl text-3xl sm:text-4xl mt-5 font-bold text-white leading-tight'>We Protect The World&apos;s Most Sensitive Data</h1>
              <p className='mt-5 text-white'>Maintaining cybersecurity in a constantly evolving threat landscape is a challenge for all organizations. Traditional reactive approaches, in which resources were put toward protecting systems against the biggest known threats.</p>
              <button className='bg-[#E21F36] hover:bg-[#EA530A] p-2 text-white mt-5 px-8 w-max duration-500'>Contact</button>
            </div>
            <div className='flex items-center justify-center'>
               
            </div>
          </div>
        </div>

      </div>

      <div className="container m-auto lg:mt-[-100px] md:mt-[0px] w-[80%] ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className='p-3'>
              <div className="card duration-500 w-[100%] p-5 px-10 bg-[#000219]">
                  <h1 className='text-white flex items-center'>
                    <FiSettings  className='card_icon m-2 text-4xl duration-1000 text-[#E21F36]' />
                    <span className='text-lg'>Pen Testing</span>
                  </h1>
                  <p className='mt-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className='p-3'>
              <div className="card duration-500 w-[100%] p-5 px-10 bg-[#000219]">
                  <h1 className='text-white flex items-center'>
                    <FiSettings className='card_icon m-2 text-4xl duration-1000 text-[#E21F36]' />
                    <span className='text-lg'>Pen Testing</span>
                  </h1>
                  <p className='mt-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className='p-3'>
              <div className="card duration-500 w-[100%] p-5 px-10 bg-[#000219]">
                  <h1 className='text-white flex items-center'>
                    <FiSettings className='card_icon m-2 text-4xl duration-1000 text-[#E21F36]' />
                    <span className='text-lg'>Pen Testing</span>
                  </h1>
                  <p className='mt-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
        </div>




{/* Solution Section -------------------- */}

      <div className="container m-auto py-20 w-[80%] ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <p className='text-[#E21F36] font-semibold'>All-in Solution</p>
            <h1 className='text-3xl mt-3 font-bold'>Our Approach Is Simple But Not Time-Wasting</h1>
            <p className='mt-3 '>These threats can include cyber attacks, supply chain disruptions, and regulatory changes. It&apos;s important for businesses to have robust security measures, diversify their supply chain, and have a strong compliance program to mitigate these risks.</p>
            <div className='mt-5 p-6 pt-10 relative' style={{boxShadow: '0px 0px 10px 2px #efefef'}}>
              {/* <Image className='text-stone-200 text-7xl absolute end-0 top-0' src={aboutIcon1} alt='' /> */}
              <p className='text-stone-200 text-7xl absolute end-0 top-0'>01</p>
              <h1 className='font-bold'>Increased And Evolving Threat</h1>
              <p className='mt-3 text-stone-700'>Cyber attacks, supply chain disruptions, and regulatory changes, can impact businesses significantly. Companies must be proactive in addressing these risks to protect themselves and their bottom line.</p>
            </div>
            <div className='mt-5 p-6 pt-10 relative' style={{boxShadow: '0px 0px 10px 2px #efefef'}}>
              <p className='text-stone-200 text-7xl absolute end-0 top-0'>02</p>
              <h1 className='font-bold'>Widening Attack Surface</h1>
              <p className='mt-3 text-stone-700'>Widening attack can have significant consequences, including widespread disruption and damage to a company&apos;s reputation. It&apos;s essential for businesses to have robust security measures in place to protect against widening attacks.</p>
            </div>
            <div className='mt-5 p-6 pt-10 relative' style={{boxShadow: '0px 0px 10px 2px #efefef'}}>
              <p className='text-stone-200 text-7xl absolute end-0 top-0'>03</p>
              <h1 className='font-bold'>Structural Weaknesses</h1>
              <p className='mt-3 text-stone-700'>Structural weaknesses can be internal, such as a lack of proper policies or procedures, or external, such as a lack of diversity in the supply chain. Identifying and addressing structural weaknesses can help businesses strengthen their operations and mitigate potential risks.</p>
            </div>

          </div>
          <div className='flex items-center justify-center p-10'>
            <Image className='w-[100%]' src={aboutImage} alt='' />
          </div>
        </div>
      </div>



{/* Counter Section -------------------- */}


    <div className="container-fluid counter_bg lg:p-20 md:p-20 p-5 bg-cover bg-center" >
      <p className='text-center text-white'>Our Challenges</p>
      <h1 className='text-center text-white lg:w-[70%] md:-[100%] m-auto mt-5 lg:text-5xl text-3xl sm:text-4xl '>You Can Protect Your Organization’s Cybersecurity By Us</h1>
      <div className="w-[80%] m-auto grid lg:grid-cols-4 mt-10 md:grid-cols-2 sm:grid-cols-1 ">
        <div className='p-2'>
          <div className="bg-white p-5 text-center">
            <Image className='w-[40px] m-auto' src={counterIcon1} alt='' style={{filter: 'brightness(0)'}} />
            <h1 className='text-center font-bold text-5xl m-2 text-black'>2K+</h1>
            <p className='text-black'>Cyber Security Projects</p>
          </div>
        </div>
        <div className='p-2'>
          <div className="bg-white p-5 text-center">
            <Image className='w-[40px] m-auto' src={counterIcon2} alt='' style={{filter: 'brightness(0)'}} />
            <h1 className='text-center font-bold text-5xl m-2 text-black'>997</h1>
            <p className='text-black'>Customers Globally</p>
          </div>
        </div>
        <div className='p-2'>
          <div className="bg-white p-5 text-center">
            <Image className='w-[40px] m-auto' src={counterIcon3} alt='' style={{filter: 'brightness(0)'}} />
            <h1 className='text-center font-bold text-5xl m-2 text-black'>100+</h1>
            <p className='text-black'>Cyber Security Experts</p>
          </div>
        </div>
        <div className='p-2'>
          <div className="bg-white p-5 text-center">
            <Image className='w-[40px] m-auto' src={counterIcon4} alt='' style={{filter: 'brightness(0)'}} />
            <h1 className='text-center font-bold text-5xl m-2 text-black'>100%</h1>
            <p className='text-black'>Client Retention Rate</p>
          </div>
        </div>
      </div>
    </div>





{/* Solution Section -------------------- */}



<div className="container-fluid lg:p-20 md:p-10 p-3" >
      <h1 className='text-center text-black lg:w-[70%] md:-[100%] m-auto mt-5 lg:text-5xl text-3xl sm:text-4xl'>We Offer Professional Security Solutions</h1>
      <p className='text-center text-black m-auto mt-3'>Get Privacy & Performance Tips, From our Experts</p>
      <div className="xl:w-[80%] lg:[100%] m-auto grid lg:grid-cols-3 mt-10 md:grid-cols-2 sm:grid-cols-1 ">
        <div className='p-4'>
          <div className='solution_card1 h-[500px] relative bg-cover bg-center'>
          <div className="solution_content absolute p-5 bottom-0 start-0">
              <h1 className='text-2xl m-2 text-white'>Application Security</h1>
              <p className='m-2 text-white'>A crucial component of a company&apos;s success is its website. These apps often pose a serious risk to your cyber security given that there are</p>
              <a href="#" className='flex text-underline m-2 text-[#E21F36] duration-500'>Read More <HiArrowNarrowRight className='mt-1' /></a>
          </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='solution_card2 h-[500px] relative bg-cover bg-center'>
          <div className="solution_content absolute p-5 bottom-0 start-0">
              <h1 className='text-2xl m-2 text-white'>Cloud Security</h1>
              <p className='m-2 text-white'>While many businesses today are using cloud-based systems to store important operational data, it&apos;s important to recognize that these systems can be vulnerable to attacks.</p>
              <a href="#" className='flex text-underline m-2 text-[#E21F36] duration-500'>Read More <HiArrowNarrowRight className='mt-1' /></a>
          </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='solution_card3 h-[500px] relative bg-cover bg-center'>
          <div className="solution_content absolute p-5 bottom-0 start-0">
              <h1 className='text-2xl m-2 text-white'>Infrastructure Security</h1>
              <p className='m-2 text-white'>A key component of your company&apos;s operations is the internal and external network infrastructure. The necessity for a strong infrastructure has never been stronger due</p>
              <a href="#" className='flex text-underline m-2 text-[#E21F36] duration-500'>Read More <HiArrowNarrowRight className='mt-1' /></a>
          </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='solution_card4 h-[500px] relative bg-cover bg-center'>
          <div className="solution_content absolute p-5 bottom-0 start-0">
              <h1 className='text-2xl m-2 text-white'>Threat Hunter</h1>
              <p className='m-2 text-white'>Threat hunting services providers manage the process of outlining existing threats and discovering new ones to help businesses better protect their IT systems.</p>
              <a href="#" className='flex text-underline m-2 text-[#E21F36] duration-500'>Read More <HiArrowNarrowRight className='mt-1' /></a>
          </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='solution_card5 h-[500px] relative bg-cover bg-center'>
          <div className="solution_content absolute p-5 bottom-0 start-0">
              <h1 className='text-2xl m-2 text-white'>Disaster Planning</h1>
              <p className='m-2 text-white'>Fast and effective action is crucial when facing a cyber incident. The ERICSON cyber incident response team can help minimize the impact of a cyber</p>
              <a href="#" className='flex text-underline m-2 text-[#E21F36] duration-500'>Read More <HiArrowNarrowRight className='mt-1' /></a>
          </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='solution_card6 h-[500px] relative bg-cover bg-center'>
          <div className="solution_content absolute p-5 bottom-0 start-0">
              <h1 className='text-2xl m-2 text-white'>Incident Responder</h1>
              <p className='m-2 text-white'>Incident response services are designed to assist in the remediation efforts following a cyberattack or similar damaging ordeal within a company&apos;s IT infrastructure.</p>
              <a href="#" className='flex text-underline m-2 text-[#E21F36] duration-500'>Read More <HiArrowNarrowRight className='mt-1' /></a>
          </div>
          </div>
        </div>
      </div>
    </div>





{/* Website Security -------------------- */}



    <div className="container-fluid web_sec_bg bg-cover bg-center">
    <div className="container m-auto py-10 w-[80%] ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <h1 className='text-3xl mt-10 font-bold text-white'>Complete Website Security</h1>
            <p className='mt-3 text-white'>24/7 website security with zero hidden costs – built for small businesses, web professionals and enterprise organizations.</p>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10">
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Malware Detection Removal</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Managing Cloud Security</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Content Delivery Network</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Testing Cyber Security</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Security Management</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Identifying Threats</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>SIEM Threat Detection</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Server Security</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>Website Hack Repair</p>
                </div>
              </div>
              <div className='p-3'>
                <div className="securityItem bg-slate-600 bg-opacity-50 flex px-2 rounded items-center">
                  <BsCheckCircleFill className='text-white text-3xl m-2' />
                  <p className='text-white'>24/7 Security Support</p>
                </div>
              </div>
            </div>
          

          </div>
          <div className='flex items-center justify-center p-10'>
            <Image className='w-[100%]' src={web_sec_Image} alt='' />
          </div>
        </div>
      </div>

    </div>










    </HomeLayout>
  )
}
