import Home from './pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Layout from './components/layout/layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export function WrappedApp() {
  return (
    <HashRouter> 
      <App /> 
    </HashRouter>
  );
}
