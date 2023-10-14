import '../styles/Content.css';
import lasagne from '../assets/lasagne.avif';
import pizza from '../assets/pizza.jpg';
import koshari from '../assets/koshari.jpg';
import { Routes, Route, Link } from 'react-router-dom';


function Presentation(){

    return(
        <><br /><div className='Content'>
            <h2>Nos recettes du moment !</h2>
            <hr></hr>
        </div></>
        
    )
}


function Carroussel(){
    return(

            
            <><div className="container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="card">
                        <img
                            src={lasagne}
                            className="card-img-top"
                            alt="lasagne" />
                        <div className="card-body">
                            <h5 className="card-title">Lasagnes à la bolognaise</h5>
                            <p className="card-text">
                                Lasagnes Bolognaise : Fusion exquise de pâtes, viande mijotée et béchamel. Un hymne à la gourmandise italienne.
                            </p>
                            <Link to="/Lasagne" className="btn btn-outline-warning">Voir la recette !</Link>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-lg-block">
                    <div className="card">
                        <img
                            src={koshari}
                            className="card-img-top"
                            alt="Sunset over the Sea" />
                        <div className="card-body">
                            <h5 className="card-title">Koshari</h5>
                            <p className="card-text">
                                Le Koshari est un plat traditionnel de la cuisine égyptienne, reconnu pour son mélange unique de saveurs et de textures. C'est un plat végétarien, souvent considéré comme un plat de rue réconfortant et économique.
                            </p>
                            <Link to="/koshari" className="btn btn-outline-warning">Voir la recette !</Link>


                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 d-lg-block">
                    <div className="card">
                        <img
                            src={pizza}
                            className="card-img-top"
                            alt="Sunset Over the Sea" />
                        <div className="card-body">
                            <h5 className="card-title">Pizza Margherita</h5>
                            <p className="card-text">
                                La Pizza Margherita Express : Une option excellente et pratique, idéale pour les étudiants !
                            </p>
                            <Link to="/Pizza" className="btn btn-outline-warning">Voir la recette !</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div><br /></>

    )
}


function Content(){
    const contentStyle = {
        backgroundColor: "#292929", // Ajoutez la couleur de fond ici
    };

    return(
        <div style={contentStyle}>
            <Presentation />
            <Carroussel />
        </div>
    )
}


export default Content;