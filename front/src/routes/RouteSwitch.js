import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogInPage from './LogInPage';
import NotFoundPage from './NotFoundPage';
import SignUpPage from './SignUpPage';
import WithNav from '../outlet/WithNav';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/barker" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
