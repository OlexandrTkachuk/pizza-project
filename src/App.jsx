// system
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Header from 'components/Header/Header';

// styles
import { Container } from 'components/Container/Container.styled';

// lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const CartPage = lazy(() => import('./pages/Cart'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Container>
      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
