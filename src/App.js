import "./App.css";
import Adress from "./Components/Address";
import FullName from "./Components/FullName";
import ProfilePhoto from "./Components/ProfilePhoto";

function App() {
  return (
    <div className="App">
      
      

      <div class="card" >
        <ProfilePhoto />

        <div class="card-body">
          <h4 class="card-title">
            <FullName />
          </h4>

          <p class="card-text">
          <Adress />
          </p>

          <a href="#" class="btn btn-primary">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
