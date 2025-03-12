import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ParticlesBg from 'particles-bg'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <ParticlesBg type='cobweb' bg={true}/>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/* <FaceRecgonition /> */}
    </div>
  );
}

export default App;
