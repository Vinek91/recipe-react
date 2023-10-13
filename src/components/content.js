import '../styles/Content.css';
import lasagne from '../assets/lasagne.avif';
import pizza from '../assets/pizza.avif';
import lapiadina from '../assets/lapiadina.jpg';


function Presentation(){
    console.log("azertyudexiop")
    return(
        <div className='Content'>
            <h2>Nos recettes du moment !</h2>
            <hr></hr>
        </div>
        
    )
}


function Carroussel(){
    return(

            
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <img
                                src={lasagne}
                                className="card-img-top"
                                alt="lasagne"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Lasagnes à la bolognaise</h5>
                                <p className="card-text">
                                Lasagnes Bolognaise : Fusion exquise de pâtes, viande mijotée et béchamel. Un hymne à la gourmandise italienne.
                                </p>
                                <a href="#!" className="btn btn-outline-warning">Voir la recette !</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 d-lg-block">
                        <div className="card">
                            <img
                                src={pizza}
                                className="card-img-top"
                                alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Pizza Orientale</h5>
                                <p className="card-text">
                                La Pizza Orientale : Un voyage en Méditerranée avec des saveurs épicées, merguez savoureuses, poivrons colorés et olives parfumées. 
                                </p>
                                <a href="#!" className="btn btn-outline-warning">Voir la recette !</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 d-lg-block">
                        <div className="card">
                            <img
                                src={lapiadina}
                                className="card-img-top"
                                alt="Sunset over the Sea"
                            />
                            <div className="card-body">
                                <h5 className="card-title">La Piadina</h5>
                                <p className="card-text">
                                La Padina : Une merveille de la cuisine italienne. Pâte moelleuse, jambon croustillant et fromage fondu. Un délice authentique qui séduit à chaque bouchée.
                                </p>
                                <a href="#!" className="btn btn-outline-warning">Voir la recette !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}


function Content(){
    return(
        <><Presentation /><Carroussel /></>
    )
}


export default Content;