import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ParticlesBg from 'particles-bg'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

function App() {
  const [input, setInput] = useState('');
  const [imgInput, setImgInput] = useState('')
  const [box, setBox] = useState('')
  const [route,setRoute] = useState("signInPage")
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState(
    {
      id: '',
      name: '',
      email: '',
      joinDate: '',
      entries: 0
    }
  )

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  const displayFaceBox = (box) => {
    setBox(box);
  } 

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onSubmit = () => {
    setImgInput(input)
    fetch("http://localhost:3000/clarifai", {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          input:input
      })})
        .then(response => response.json())
        .then(result => {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: user.id,
            })

        }).then((response)=> {console.log(response); return response.json();}).then((response) => {
          if (response.response === 200) {
            console.log("The response is 200!!", response)
            setUser({...user,
              entries: response.entries})    
          }
        })

        ;displayFaceBox(calculateFaceLocation(result))})
        .catch(error => console.log('error', error));
  }

  const onRouteChange = (route) => {
    if (route === "signInPage") {
      setIsSignedIn(false)
      setUser('')
      setImgInput('')
      setInput('')
    } else if (route === 'home') {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
    setRoute(route)
  }

  return (
    <div className="App">
      <ParticlesBg type='cobweb' bg={true}/> 
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      { route==='signInPage'? 
      <SignIn setUser={setUser} onRouteChange={onRouteChange}/> :
      ( route==='registerPage'?
        <Register setUser={setUser} onRouteChange={onRouteChange} /> : 
      <div>
      <Logo />
      <Rank user={user} />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} user={[user,setUser]}/>
      <FaceRecognition imgInput={imgInput} box={box}/>
      </div>)}
    </div>
  );
}

export default App;
