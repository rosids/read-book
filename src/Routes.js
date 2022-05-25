import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default AllRoutes;
