import React, {useEffect, useState} from 'react';

function PlayersPage() {

    const  [data,setData]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5026/api/Players/getall')
            .then((res) => res.json())
            .then((data) => {setData(data)})
    },[])

    return (
        <>

            <table className="table table-secondary table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Adı</th>
                    <th scope="col">Soyadı</th>
                    <th scope="col">Takım Adı</th>
                    <th scope="col">Mevki</th>
                    <th scope="col">Numara</th>
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

                        </tr>
                    ))
                }


                </tbody>
            </table>
        </>
    );
}

export default PlayersPage;
