import React from 'react'
import hero from "../../assets/Icons/Hero_Walrus.svg"

const Hero = () => {
  return (
    <div>
      <div className='bg-blue-300 h-10 flex justify-center items-center '>
        <p className='hover:underline text-[0.9rem]'> walrus is the developer platform that enables you to monetize and verify your data</p> 
      </div>
       
      <div className='bg-gradient-to-r from-[#160D38] to-[#5939e5] h- w-full'>
          <div className=' flex flex-col  justify-center items-center  '>
                <p className='text-white text-center  font-extralight text-[5rem] leading-tight tracking-wide '>Enabling Data Markets</p> 
                <span className='text-teal-300  text-center  w-full  font-normal text-[6rem] leading-tight tracking-wide -mt-8 '>for the AI Era</span>
          </div>
          <p className=' h-10 text-center text-[1.2rem] text-white font-semibold'> Walrus is Where the World's data becomes <span className='text-purple-300'>reliable,valuable</span> and <span className='text-purple-300'>governable</span>.</p>
          <div className='flex justify-center gap-10 '>
              <button className='h-10 w-40 bg-teal-300 rounded-[5px]'> Use Wal </button>
              <button className='h-10 w-40 bg-teal-300 rounded-[5px]'> Read Docs</button>
          </div>
          <div className='bg-gradient-to-r from-[#160D38] to-[#5939e5] h-96  w-full'> <img className='h-100 ml-49  relative -top-3 ' src={hero} alt="" /> </div>
          <div className='bg-pink-400 h-30 '> </div>
      </div> 
          
        
    </div>
  )
}

export default Hero