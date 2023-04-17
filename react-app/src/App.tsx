import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Layout from "./components/layout/layout";
import FormPage from "./pages/FormPage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
