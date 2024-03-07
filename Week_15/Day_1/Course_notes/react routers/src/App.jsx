import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import Product from './Components/Product'
import {Link, createBrowserRouter, RouterProvider, Outlet, Router} from "react-router-dom"


const Root = () =>{
  return(
    <>
      <h2>Root</h2>
      <div style={{color: "black"}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/gggg'}>Error</Link>
      </div>
      <Outlet/>

    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <h2>404 Not Found</h2>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/shop',
        element:<Shop/>
      },
      {
        path: '/product/:id',
        element:<Product/>
      }
    ]
  }
])

function App() {


  return (
    <>
<RouterProvider router={router}/>
    </>
  )
}

export default App

// function App() {


//   return (
//     <>


//       <div>
//         <nav>
//           <Link style={{margin: '22px'}} to={'/'}>Home</Link> 
//           <Link style={{margin: '22px'}} to={'/about'}>About</Link> 
//           <Link style={{margin: '22px'}} to={'/shop'}>Shop</Link>
//         </nav>
//       </div>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/shop' element={<Shop />}/>
//         <Route path='/product/:id' element={<Product />}/>
//         <Route path='*' element={<h2>404 Not Found</h2>}/>
//       </Routes>
//     </>
//   )
// }