import React, {useEffect, useState} from 'react';

function TeamsPage(props) {
    const [teams,setTeams]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5026/api/Teams/getall')
            .then(res=>res.json())
            .then(data=>{setTeams(data)})
    })


    return (
        <table className="table table-danger table-hover table-striped">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Takım Adı</th>

            </tr>
            </thead>
            <tbody>
            {
                teams.map((team)=> (
                    <tr>
                        <th scope="row">{team.id}</th>
                        <td>{team.name}</td>

                    </tr>
                ))
            }


            </tbody>
        </table>
    );
}

export default TeamsPage;
