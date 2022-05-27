import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Details from './pages/Details';
import Create from './pages/Create';
import Edit from './pages/Edit';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/:id" element={ <Details />} />
          <Route exact path="/criar" element={ <Create />} />
          <Route exact path="/editar/:id" element={ <Edit />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default AllRoutes;
