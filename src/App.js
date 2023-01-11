import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './css/style.css';
import Header from "./components/header/header";
import MobileFooterMenu from './components/mobileFooterMenu/mobileFooterMenu';
import ChannelPage from './pages/channelPage';
import HomePage from './pages/homePage';
import VideoPage from './pages/videoPage';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/channel" element={<ChannelPage />}></Route>
          <Route path="/video" element={<VideoPage />}></Route>
        </Routes>
      </BrowserRouter>
      <MobileFooterMenu />
    </>
  );
}

export default App;
