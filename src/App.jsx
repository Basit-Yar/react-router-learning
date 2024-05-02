import NavigationBar from "./components/Header/NavigationBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
