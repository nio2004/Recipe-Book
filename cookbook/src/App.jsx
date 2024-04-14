import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Homepage from './pages/homepage'
import { Route, Routes } from "react-router-dom"
import Login from './pages/login'
import Signup from './pages/signup'
import Recipe from './pages/recipe'
import Recipedetail from './pages/recipedetail'
import Addrecipe from './pages/addrecipe'
import backimg from './assets/dishwallpaper.jpg'
function App() {
  
  return (
    <div>
      <div className='bg-cover bg-center h-fit min-h-[100vh] p-4' style={{ backgroundImage: `url(${backimg})` }}>    
        {/* header */}
        <Header />
        {/* homepage */}
        {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/recipe" element={<Recipe/>}></Route>
        <Route path="/recipes/:id" element={<Recipedetail/>}></Route>
        <Route path="/addrecipe" element={<Addrecipe/>}></Route>
      </Routes>
      </div>
      {/* footer */}
      <Footer />
      {/* <div className='bg-home h-[67vh] bg-contain bg-no-repeat'></div> */}
    </div>
  )
}

export default App
