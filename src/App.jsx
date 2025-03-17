import './App.css'

import Header from "./components/Header.jsx";
import TeamsPage from "./pages/teams/TeamsPage.jsx";
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import PlayersPage from "./pages/players/PlayersPage.jsx";
import PlayerDetails from "./pages/players/PlayerDetails.jsx";
import TeamAddForm from "./pages/teams/TeamAddForm.jsx";

function App() {




  return (
      <>




              <Header/>
        <div className="container">
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/teams" element={<TeamsPage/>}/>
                <Route path="/team/add" element={<TeamAddForm/>}/>
                <Route path="/players" element={<PlayersPage/>}/>
                <Route path="/players/:id" element={<PlayerDetails/>}/>

            </Routes>


        </div>

      </>
  )
}

export default App
