import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Layout} from './components/Layout';
import {Profile} from './pages/Profile';

export const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
