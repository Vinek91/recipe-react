import '../styles/Header.css'
import background from '../assets/header_background.png'
import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";

import SearchRecipe from './RestApi' 

function Navbar(){
    
    const navbarStyle = {
        backgroundImage: `url(${background})`, // Utilisez la variable 'logo' ici
        backgroundSize: "cover",
        backgroundColor: "black", // Ajoutez la couleur de fond ici
 
      };
    return(
        
        <nav className="navbar navbar-expand-lg navbar sticky-top" style={navbarStyle}>
            <div className="navbar-brand" href="#" style={{ color: '#F2A007',marginLeft:'0.5em', padding:'3px', fontSize:"50px",fontFamily:'Brush Script MT, Brush Script Std, cursive' }}>Recipes</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{backgroundColor:"#0909099e"}}>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link" style={{ color: '#F2F2F2' }}>Accueil</Link></li>
                    <li className="nav-item active"><Link to="/recettes" className="nav-link" style={{ color: '#F2F2F2' }}>Recettes</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link" style={{ color: '#F2F2F2' }}>À propos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

// ...


// ...


function Fond() {
    var [recipe, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const clear = () => {
        setValue(''); // Efface la valeur de l'input
    };

    console.log("le recipe est : " + recipe)

    return (
        <div className="fond">
            <h1>Bienvenue sur notre site RECIPES :</h1>
            <p>Vous trouverez toutes les recettes du moment !</p>
            <div className='searchBar'>
                <input
                    type="text"
                    id="name"
                    name="name"
                    size="60"
                    placeholder='Rechercher une recette'
                    value={recipe}
                    onChange={handleInputChange}
                />
                <div className='croix' onClick={clear}>X</div>
            </div>

            {recipe && <SearchRecipe recipe={recipe} />}
        </div>
    );
}



function Header(){
    return(
        <><Navbar /><Fond /></>
    );
    
    
}


export default Header;