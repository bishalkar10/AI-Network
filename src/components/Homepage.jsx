import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Homepage() {
  return (
    <div className='bg-[url("ai-home-image.jpg")] bg-cover bg-center min-h-screen relative px-3 flex items-center'>
      <div className=''>
        <h2 className='text-white text-4xl md:text-5xl font-bold md:w-[460px]'>
          AI and Robotics can change your
          <span className='ml-5 inline-block bg-[#59C09D] mt-5 py-1 px-5 rounded-[15px] text-[#060a14] uppercase'>Thinking</span>
        </h2>
        <ul className='flex text-white gap-5 mt-5'>
          <li>
            <a className='hover:text-[#F6AE64] transition-all ease duration-500' href="">
              <FontAwesomeIcon className='mr-1' icon={faFacebook} /> Facebook
            </a>
          </li>
          <li>
            <a className='hover:text-[#F6AE64] transition-all ease duration-500' href="">
              <FontAwesomeIcon className='mr-1' icon={faLinkedin} />Linkedin
            </a>
          </li>
          <li>
            <a className='hover:text-[#F6AE64] transition-all ease duration-500' href="">
              <FontAwesomeIcon className='mr-1' icon={faTwitter} />Twitter
            </a>
          </li>
          <li>
            <a className='hover:text-[#F6AE64] transition-all ease duration-500' href="">
              <FontAwesomeIcon className='mr-1' icon={faYoutube} />Youtube
            </a>
          </li>
        </ul>
        <div className='mt-[30px] p-[25px] bg-[rgba(6,10,20,0.5)] max-w-[730px] rounded-[15px] md:max-w-[360px] md:absolute md:bottom-0 md:right-0'>
          <p className='text-white'>AI and robotic technologies have gained significant traction across industries, revolutionizing the way work is performed, improving efficiency and increasing safety.</p>
        </div>
      </div>

    </div>
  )
}