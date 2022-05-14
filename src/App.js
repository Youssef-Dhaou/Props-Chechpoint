
import './App.css';
import Profile from './Component/profile/Profile';
import photo from "./profile/photo.jpeg"
import photo3 from "./profile/photo3.jpeg"





function App() {
  const handleName  = name => alert(name)
 const style={display: "flex", justifyContent:"center", gap: "15px"}
  return (
    <div className="App">
      <Profile fullName="Youssef DHAOU" bio="Actually, I'm a graduated Engineer but now, I'm a web full stack JS learner" profession="Web developer" handleName ={handleName}>
      
      <div style={style}>
        <img className="images" src={photo}  alt=""/>
        <img className="images" src={photo3} alt="" />
   
    
        </div> 
      
      </Profile>

    </div>
  );
}

export default App;
