import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import '../styles/About.css'


function About() {
    return (
      <><div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron mt-5">
              <h1 className="display-4">A propos de cette application</h1>
              <p className="lead" style={{ color: "white" }}>Il s'agit d'une simple application de recettes construite avec React et Bootstrap.</p>
              <hr className="my-4" />
              <p style={{ color: "white" }}>J'Utilisez l'API TheMealDb pour récupérer et afficher les recettes. TheMealDb est une merveilleuse API RESTful qui donne accès à une vaste collection de recettes du monde entier. C'est une ressource formidable pour les développeurs qui cherchent à créer des applications liées à l'alimentation.</p>
              <a className='link' href='https://www.themealdb.com'>Plus d'infos sur leur site</a>
              <br />
              <br />
              <Link to="/" className="btn btn-outline-warning">Retour à l'accueil</Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
   
      </>
    );
  }
  
  export default About;