import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Inventory from './components/inventory/Inventory';
import Main from './components/layout/Main';
import { productAndCartLoader } from './components/loaders/productsAndCartLoder';
import Orders from './components/odres/Orders';
import Shop from './components/Shop/Shop';
// import {productsAndCartLoader} from './components/loaders/productsAndCartLoder';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children:[
        {path: '/',
        loader:()=> fetch('products.json'),
        element: <Shop/>
      },
        {path: '/orders',
        loader:productAndCartLoader,
        element: <Orders/>},
        {path: '/inventory',element: <Inventory/>},
      ]
    },
    {
      path: 'about',
      element: <About />
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
