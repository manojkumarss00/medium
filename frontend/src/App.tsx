import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import SignIn from './pages/SignIn'
import  Blogs  from './pages/Blogs'
import { Publish } from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/blog/:id' element={<Blog />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/publish' element={<Publish />}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
