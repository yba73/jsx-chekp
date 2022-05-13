
import './App.css';
import './jsx.css';
import imagHunetr from "./image/hunter.jpg";


function App() {
  return (
    <div className="App">
      <div style={{ border :"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">BEN AZOUZ yassine</h1>

<br />

<img src="/img/naruto.jpg" alt="naruto" />

<br />

<img className="imgHuter"  src={imagHunetr} alt='hunter'/>


</div>

<video width="700" height="700" controls>

<source src="THE BAD GUYS - Official Trailer 1.mp4" type="video/mp4" />

</video>
    
    </div>
  );
}

export default App;
