import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='p-10 w-full h-full'>
        <div className="box h-full w-full flex bg-[#26373A] p-10">
          <div className="text flex flex-col gap-3">
            <h1 style={{ fontSize: '4rem', color: 'white' }}>Subscribe now and get 10% off <br /> all items</h1>
            <h2 style={{ fontSize: '1rem', color: 'white' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text.</h2>
            <div className='flex gap-5'>
              <input className='w-72 h-10 p-2' type="text" placeholder='Your email here ...' />
              <button className='w-32 p-2 bg-red-600 text-white'>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="two flex flex-row items-start text-white bg-black h-[60vh] justify-start gap-20 w-full p-10 align-top ">
        <div>
          <h1 style={{ fontSize: '3rem' }}>Furnit.</h1>
          <p>Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi <br /> vivamus proin lit laoreet phasel alilus porttitor inter, facilisis <br /> condiment tarime egestas rhoncus dapibus iaculis alemir.</p>
        </div>
        <div className='flex flex-col gap-5' >
          <h1 style={{ fontSize: '20px' }}>Customer</h1>
          <h2 style={{ fontSize: '12px' }}>Order Status</h2>
          <h2 style={{ fontSize: '12px' }}>collections</h2>
          <h2 style={{ fontSize: '12px' }}>Our Story</h2>
          <h2 style={{ fontSize: '12px' }}>Affiliates</h2>
          <h2 style={{ fontSize: '12px' }}>Security</h2>
        </div>
        <div className='flex flex-col gap-5' >
          <h1 style={{ fontSize: '20px' }}>Information</h1>
          <h2 style={{ fontSize: '12px' }}>Customer Service</h2>
          <h2 style={{ fontSize: '12px' }}>Careers</h2>
          <h2 style={{ fontSize: '12px' }}>FAQ</h2>
        </div>
        <div></div>
      </div>
      <div className='bg-black p-10 -mt-20 text-white flex justify-between ' >
        <div className="o">
            <h1>© Copyright 2022. All Rights Reserved.</h1>
        </div>
        <div className="t flex gap-10">
            <h1>Terms Of Condition</h1>
            <h1>Privacy Policy</h1>
        </div>
      </div>
    </>
  )
}

export default Footer
