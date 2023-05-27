// system
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from 'components/Header/Header';

// units
import ScrollToTop from 'units/scrollToTop';

// styles
import { Container } from 'components/Container/Container.styled';

// lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const CartPage = lazy(() => import('./pages/Cart'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const FullPizza = lazy(() => import('./pages/FullPizza'));

const App = () => {
  return (
    <Container>
      <ScrollToTop />

      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<FullPizza />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default App;
