import React from 'react';
import { Route, Switch, Link } from "react-router-dom";



function About() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron mt-5">
              <h1 className="display-4">A propos de cette application</h1>
              <p className="lead"  style={{color:"white"}}>Il s'agit d'une simple application de recettes construite avec React et Bootstrap.</p>
              <hr className="my-4" />
              <p  style={{color:"white"}}>Nous utilisons l'API TheMealDb pour récupérer et afficher les recettes. TheMealDb est une merveilleuse API RESTful qui donne accès à une vaste collection de recettes du monde entier. C'est une ressource formidable pour les développeurs qui cherchent à créer des applications liées à l'alimentation.</p>
              <Link to="/" className="btn btn-outline-warning">Retour à l'accueil</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;