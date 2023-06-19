import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import HomePage from "./components/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StartPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
