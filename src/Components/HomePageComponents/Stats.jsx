
const Stats = () => {
  return (
    <div name='stats' className=' w-full mt-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by parents and kids across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>We deliver quality products which is why our customer satisfactory rates are out of the box. Here are some of our stats</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Order Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>126K</p>
                    <p className='text-gray-400 mt-2'>Products Delivered</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats