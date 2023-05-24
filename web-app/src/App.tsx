import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList.tsx';
import ProductAdd from './pages/AddProduct/ProductAdd.tsx';
import Footer from './components/Footer/Footer.tsx';
import NotFoundPage from './pages/404/NotFoundPage.tsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductList />,
    },
    {
      path: 'add-product',
      element: <ProductAdd />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
