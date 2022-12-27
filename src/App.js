import './App.css';
import Header from "./components/header/header";
import MobileFooterMenu from './components/mobileFooterMenu/mobileFooterMenu';
import ChannelPage from './pages/channelPage';
import HomePage from './pages/homePage';
import VideoPage from './pages/videoPage';
function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <ChannelPage />
      {/* <VideoPage/> */}
      <MobileFooterMenu/>
    </>
  );
}

export default App;
