import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router";

function TeamAddForm(props) {

    const  navigate = useNavigate();

    const url = "http://localhost:5026/api/Teams/add"

    const [name, setName] = useState("");

    const [message,setMessage] = useState("");

    const  handleSubmit = (e) =>
    {
        e.preventDefault();
        const  dto = {
            name:name
        }

          axios.post(url,dto)
              .then(res => {setMessage(res.data)})
        navigate("/teams");
    }


    return (<div>


            <form style={{width:'50%'}} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Takım Adı</label>
                    <input

                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        className="form-control"/>
                </div>
                <button type="submit" className="btn btn-outline-success">Ekle
                    <i className="bi bi-plus-square-fill mx-1"></i>
                </button>

                <Link to={'/teams'} className={"btn btn-outline-primary mx-2"}>
                    Anasayfaya git <i className="bi bi-house"></i>
                </Link>
            </form>

    </div>);
}

export default TeamAddForm;
