import './App.css'

import Header from "./components/Header.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import PlayersPage from "./pages/PlayersPage.jsx";

function App() {




  return (
      <>




              <Header/>
        <div className="container">
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/teams" element={<TeamsPage/>}/>
                <Route path="/players" element={<PlayersPage/>}/>

            </Routes>


        </div>

      </>
  )
}

export default App
