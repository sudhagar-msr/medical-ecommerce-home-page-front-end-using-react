import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faCartPlus} from "@fortawesome/free-solid-svg-icons";

function Icons(props){
    const x=<FontAwesomeIcon icon={props.icone} />;
    console.log(props);
    return (x);
}

export default Icons;