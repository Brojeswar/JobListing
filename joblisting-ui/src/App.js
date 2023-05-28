import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Create, Login } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employer">
          <Route path="/employer/feed" element={<Feed user="employer" />} />
          <Route path="/employer/create" element={<Create user="employer" />} />
        </Route>
        <Route path="/employee/feed" element={<Feed user="employee" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
