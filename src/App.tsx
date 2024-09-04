import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
