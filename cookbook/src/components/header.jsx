import React from 'react'
import Baking from '../assets/baking.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-transparent flex justify-between pt-5'>
        <Link to='/'>
        <div role='button' className='m-3 pl-3 text-3xl flex content-center'>
            <img src={Baking} className='w-[50px] h-[50px] p-1'/>
            <div className='ml-2'>Cook</div> 
            <div className='text-darkred ml-1'>Book</div>
        </div>
        </Link>
        
        <div className='flex justify-between m-3 gap-10'>
            <Link to='/'><div className='text-xl hover:text-darkred' role='button'>Home</div></Link>
            <Link to='/recipe'><div className='text-xl hover:text-darkred' role='button'>Recipe</div></Link>
            <Link to='/addrecipe'><div className='text-xl hover:text-darkred' role='button'>Add Recipe</div></Link>
            <Link to='/favourite'><div className='text-xl hover:text-darkred' role='button'>Favourites</div></Link>
        </div>

        <div className='flex justify-between m-3 gap-4'>
            <Link to='/login'><div className='bg-white rounded-lg p-1 h-fit' role='button'>Login</div></Link>
            <Link to='/signup'><div className='bg-darkred text-white rounded-lg p-1 h-fit' role='button'>SignUp</div></Link>
        </div>

    </div>
  )
}

export default Header