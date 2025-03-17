import React from 'react';
import {Link} from "react-router";

function AddFormLinkButton(props) {
    return (
        <Link className="btn btn-success mb-2" to={props.url}>Ekle <i
            className="bi bi-plus-square-fill mx-1"></i></Link>
    );
}

export default AddFormLinkButton;
