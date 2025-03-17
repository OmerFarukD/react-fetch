import React, {useEffect, useState} from 'react';
import {Link} from "react-router";
import AddFormLinkButton from "../../components/AddFormLinkButton.jsx";

function PlayersPage() {

    const  [data,setData]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5026/api/Players/getall')
            .then((res) => res.json())
            .then((data) => {setData(data)})
    },[])

    return (
        <>

            <AddFormLinkButton url={'/player/add'}/>

            <table className="table table-secondary table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Adı</th>
                    <th scope="col">Soyadı</th>
                    <th scope="col">Takım Adı</th>
                    <th scope="col">Mevki</th>
                    <th scope="col">Numara</th>
                    <th scope="col">Detaya Git</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.teamName}</td>
                            <td>{item.position}</td>
                            <td>{item.number}</td>
                            <td>
                                <Link to={`/players/${item.id}`}>Detaya Git</Link>
                            </td>

                        </tr>
                    ))
                }


                </tbody>
            </table>
        </>
    );
}

export default PlayersPage;
