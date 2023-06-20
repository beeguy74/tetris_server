import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import HomePage from "./components/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginForm from "./components/LoginForm/LoginForm";
import useSocket from "./hooks/useSocket";

const App = () => {
  
  const [isConnected, events] = useSocket();
  console.log(isConnected);
  console.log(events);


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
