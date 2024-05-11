import "./App.css";
import { MyProvider } from "./Context/MyContextProvider";
import Layout from "./Component/Layout";
import FIndCard from "./Component/FIndCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Component/Create";
function App() {
  return (
    <>
      <main>
        <MyProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} />   {/* main page route */}
              <Route path="/find" element={<FIndCard />} /> {/* find post page route */}
              <Route path="/create" element={<Create />} /> {/* create post route */}
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </main>
    </>
  );
}

export default App;
