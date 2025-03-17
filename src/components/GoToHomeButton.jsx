import React from 'react';
import {Link} from "react-router";

function GoToHomeButton(props) {
    return (
        <Link to={props.url} className={"btn btn-outline-primary mx-2"}>
            Anasayfaya git <i className="bi bi-house"></i>
        </Link>
    );
}

export default GoToHomeButton;