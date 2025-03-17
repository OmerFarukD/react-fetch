import React, {useEffect, useState} from 'react';
import {Link} from "react-router";
import AddFormLinkButton from "../../components/AddFormLinkButton.jsx";

function TeamsPage(props) {
    const [teams,setTeams]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5026/api/Teams/getall')
            .then(res=>res.json())
            .then(data=>{setTeams(data)})
    })


    return (
        <>
            <AddFormLinkButton url ={"/team/add"}/>
            <table className="table table-danger table-hover table-striped">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Takım Adı</th>
                    <th scope="col">Detaya Git</th>

                </tr>
                </thead>
                <tbody>
                {
                    teams.map((team) => (
                        <tr>
                            <th scope="row">{team.id}</th>
                            <td>{team.name}</td>
                            <td><Link className={"btn btn-outline-secondary"} to={`/teams/${team.id}`}>Detaya Git <i
                                className="bi bi-info-circle-fill"></i>
                            </Link>
                            </td>

                        </tr>
                    ))
                }


                </tbody>
            </table>
        </>

    );
}

export default TeamsPage;
