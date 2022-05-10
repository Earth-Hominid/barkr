import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './HomePage';
import NotFound from './NotFound';
import Navigation from '../components/navigation/Navigation';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/barkr" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
