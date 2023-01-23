import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import { Contact } from './components/Contact';
import Error from './components/Error';
import { Header, Title } from './components/Header'; // named import with {} and default export as Header
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
// Lazy loading
// Dynamic import
// chunking
// dynamic bundling
const InstaMart = lazy(() => import('./components/InstaMart'));

// Upon on demand loading --> upon render --> suspnd loading --> use SUSPENCE from react
//
/* or import * as XYZ from "./components/Header";
 * and use <XYZ.Title /> and <XYZ.Header /> just like <React.Fragment>
 */

// Config driven UI
const config = [
  {
    type: 'carousel',
    cards: [
      {
        offerName: '50% off',
      },
      {
        offerName: 'No delivery charge',
      },
      {
        type: 'restaurant',
        cards: [
          {
            name: 'BK',
            image: 'https://s1.stabroeknews.com/images/2017/10/burgerking.jpg',
            cuisine: ['Burger', 'American'],
            rating: '4.2',
          },
          {
            name: 'chowking',
            image: 'https://s1.stabroeknews.com/images/2017/10/burgerking.jpg',
            cuisine: ['Burger', 'American'],
            rating: '4.2',
          },
          {
            name: 'BK',
            image: 'https://s1.stabroeknews.com/images/2017/10/burgerking.jpg',
            cuisine: ['Burger', 'American'],
            rating: '4.2',
          },
        ],
      },
    ],
  },
];

const Footer = () => <h4>Footer</h4>;

const AppLayout = () => {
  {
    /* JSX can have only one parent container*/
  }
  {
    /* or user React.Fragment which is a component exported by React */
  }
  return (
    <React.Fragment>
      <Title />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
  {
    /* This is same as above <React.Fragment > is an empty tag 
        and can be replaced with <>
     return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )   
    */
  }
};
// Always load
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      { path: '/', element: <Body /> },
      {
        path: '/about', // slash means from the root localhost:1234/aboout
        element: <About />,
        children: [
          {
            path: 'profile', // parentpath/{profile}
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: 'instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //     path: "/about",
  //     element: <About />
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
