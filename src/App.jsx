import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/SearchBar/Searchbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
