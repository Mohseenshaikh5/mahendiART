import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componts/navbar/nav';
import Banner from './pages/banar';
import Servies from './pages/servies';
import About from './pages/about';
import Gallery from './pages/gallery';
import Videos from './pages/videos';
function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <Banner/>
      <Servies/>
      <About/>
      <Gallery/>
      <Videos/>
    </>
  );
}

export default App;
