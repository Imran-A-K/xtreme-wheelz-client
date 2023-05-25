import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='text-white bg-indigo-900'>
      <div data-aos="fade-left"  className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-green-300 font-bold text-xl p-2'>
          One of the leading toy car sellers
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>
          XtremeWheelz
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-4xl text-lg font-bold py-4 text-yellow-400'>
            Your one step solution for toy Sport
          </p>
          <Typed
          className='md:text-3xl sm:text-4xl text-lg font-bold md:pl-4 pl-2'
            strings={['Cars']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-white-500'>We offer a range of sport car toys including replicas of famous cars</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;