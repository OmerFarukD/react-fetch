import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";

function PlayerDetails() {
    const [player, setPlayer] = useState({});
    const [color,setColor] = useState({
        firstColor:"",
        secondColor:"",
        firstText: "",
        secondText: "",
    });
    const  {id} = useParams()


    function  getTeamColor(teamId){

        if (teamId==1){
            setColor({
                firstColor:"badge text-bg-warning",
                secondColor: "badge text-bg-danger",
                firstText:'G',
                secondText:'S'})
        }

        if (teamId==2){
            setColor({firstColor:"badge text-bg-warning",
                secondColor: "badge text-bg-primary",
            firstText:'F',
            secondText:'B'})
        }

    }



    useEffect(()=>{
        axios.get(`http://localhost:5026/api/Players/getbyid?id=${id}`)
            .then(res=> setPlayer(res.data))
              getTeamColor(player.teamId)
    },[id])


    return (
        <div>
            <div className="card border-success mb-3" style={{maxWidth:"18rem;"}}>
                <div className="card-header bg-transparent border-success">{player.name} {player.surname}</div>
                <div className="card-body text-success">
                    <h5 className="card-title">{player.teamName}</h5>
                    <p className="card-text">Mevki : {player.position}</p>
                    <p className="card-text">Forma Numarası : {player.number}</p>
                </div>


                <div className="card-footer bg-transparent border-success">

                    <span className={color.firstColor}>{color.firstText}</span>
                    <span className={color.secondColor}>{color.secondText}</span>
                </div>
            </div>
        </div>
    );
}

export default PlayerDetails;
