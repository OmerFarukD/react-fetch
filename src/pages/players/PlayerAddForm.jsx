import React, {useEffect, useState} from 'react';
import AddFormButton from "../../components/AddFormButton.jsx";
import GoToHomeButton from "../../components/GoToHomeButton.jsx";
import axios from "axios";
import {useNavigate} from "react-router";

function PlayerAddForm() {

    const  url = "http://localhost:5026/api/Players/add"

    const  navigate = useNavigate();

    const  [teams,setTeams]=useState([]);

    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        teamId:0,
        number:0,
        position:""
    });

    useEffect(()=>{
        fetch('http://localhost:5026/api/Teams/getall')
            .then(res=>res.json())
            .then(data=>{setTeams(data)})
    })

    const handleOnChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }


    const handleOnSubmit = (e)=>{
        e.preventDefault();
        axios.post(url,formData).then((response) => {alert(response.data)})

        navigate("/players");
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label className="form-label">Oyuncu Adı</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Oyuncu Soyadı</label>
                <input
                    name="surname"
                    value={formData.surname}
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Takım Id</label>
                <select
                    onChange={handleOnChange}
                    name="teamId"
                    value={formData.teamId}
                    className="form-select"
                >
                    {
                        teams.map((team)=> (
                            <option value={team.id}>{team.name}</option>
                        ))
                    }


                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Forma Numarası</label>
                <input
                    name="number"
                    value={formData.number}
                    onChange={handleOnChange}
                    type="number"
                    className="form-control"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Pozisyon</label>
                <input
                    name="position"
                    value={formData.position}
                    onChange={handleOnChange}
                    type="text" className="form-control"/>
            </div>
            <AddFormButton/>
            <GoToHomeButton url={'/players'}/>
        </form>
    );
}

export default PlayerAddForm;
