import React from 'react'

const Homepage = () => {
  return (
    <div className='h-[90vh] bg-transparent'>
        <div className='text-xl font-semibold w-[40vw] relative left-10 top-1/3'>Welcome to a culinary journey where every recipe tells a story, and every bite is a chapter in your own kitchen adventure.</div>
        <div className='text-md w-[40vw] relative left-10 top-1/3 text-gray-500'>CookBook is your ultimate destination for culinary exploration and inspiration. Here, you'll find a vast collection of recipes spanning cuisines from around the globe, curated to suit every taste and dietary preference.</div>
        <div className='bg-darkred rounded-xl relative left-10 top-1/3 mt-10 w-fit p-1 px-4 text-white' role='button'><a href='/signup'>SignUp</a></div>                                               
        <div className='text-md  relative top-1/3 left-10 mt-5' role='button'>Do You Have Account? <span className='text-darkred'><a href='/login'>Log In</a></span></div>
    </div>
  )
}

export default Homepage