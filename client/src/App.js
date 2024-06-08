import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
