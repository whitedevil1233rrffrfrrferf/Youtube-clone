import Header from"./components/Header";
import Sidebar from "./components/SideBar";
import Recommendedvideos from "./components/Recommendedvideos";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <div className="app">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
          <div>            
            <div className="app_page">
              <Sidebar />
              <Recommendedvideos />
            </div> 
          </div>}>
          </Route>
          <Route path="/search/:searchTerm" element={
          <div>
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div> 
            
          </div>}>

          </Route>
        </Routes>
      </Router>  
         
    </div>
  );
}

export default App;
