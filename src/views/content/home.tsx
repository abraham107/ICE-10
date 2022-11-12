import React, { useEffect, useInsertionEffect } from "react";
import { Link } from "react-router-dom";

import User from '../../views/Models/User';

function Home(props:User)
{
    useEffect(() =>{
        document.title = "Home";
},[]);
    return(
        <div className="container">
            <h1 id="WelcomeHeader">Welcome to our site, {props.displayName}</h1>
            <hr/>
            <Link to={"/about"}>
                <button className="btn btn-primary btn-large">Lear about us</button>
            </Link>
        </div>
    );
}

export default Home;