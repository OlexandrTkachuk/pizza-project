// system
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

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

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container>
      <ScrollToTop />

      <Header setSearchValue={setSearchValue} searchValue={searchValue} />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<HomePage searchValue={searchValue} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
