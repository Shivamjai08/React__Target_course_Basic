import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
const router= createBrowserRouter([
  {
    path: '/',
    element:<Layout/>, 
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      }, 
      {
        path:"contactus",
        element:<Contact/>
      },
      {
        path:"User/:userId",
        element:<User/>
      },
      {
        path:"Github",
        element:<Github/>
      },
    ]
  }
 ])
 //2 nd path based routing technique
// const router=createBrowserRouter(

//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="About" element={<About/>}/>
//       <Route path="contactus" element={<Contact/>}/>

//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>

  </StrictMode>,
)
