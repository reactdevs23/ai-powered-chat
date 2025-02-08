import { Route, Routes } from "react-router-dom";
import MainLayout from "Layout/MainLayout";
import Home from "pages/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
