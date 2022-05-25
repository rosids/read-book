import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Details from './pages/Details';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/:id" element={ <Details />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default AllRoutes;
