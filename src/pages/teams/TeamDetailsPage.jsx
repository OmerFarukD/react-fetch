import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

function TeamDetailsPage(props) {


    const [teamDetail, setTeamDetail] = useState({});
    const  [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5026/api/Teams/details?id=${id}`)
            .then(res => res.json())
            .then(json => setTeamDetail(json))
            .catch(err => console.log(err))
            .finally(() =>setLoading(false));
    },[id])

    console.log(teamDetail)
    console.log(players)
    console.log(loading)
    return (
        <div>
            <h2 className="text-warning text-center">{teamDetail.name}</h2>


            <table className="table table-secondary table-striped">
                <thead>
                <tr>

                    <th scope="col">Oyuncu Adı</th>
                    <th scope="col"> Numarası</th>
                    <th scope="col">Pozisyonu</th>
                </tr>
                </thead>
                <tbody>
                {
                   players.map(player => {
                        return <tr key={player.id}>
                            <td> {player.fullName}</td>
                            <td>{player.number}</td>
                            <td>{player.position}</td>
                        </tr>

                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default TeamDetailsPage;
