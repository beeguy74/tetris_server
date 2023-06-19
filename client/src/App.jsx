import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonStart from "./components/ButtonStart";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout mode={mode} setMode={setMode} />}>
          <NavBar />
          <ButtonStart />
          <LoginForm />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
