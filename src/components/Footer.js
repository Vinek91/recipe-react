import '../styles/Footer.css';

function Content(){
    const year = new Date().getFullYear();
    return(
        <footer className="footer">
            <div className="container">
                <div className='content'>
                    <p>
                        Copyright &copy; {year} <span>Kévin SALMON</span>
                    </p>
                    <p>
                        Utilisation de l'API <span>TheMealDB</span>
                    </p>
                </div>
                <div className='content2'>
                    <p>
                        GitHub Page : <span>RecipesAPP</span>
                    </p>

                    
                </div>
            </div>
        </footer>
    )
}

function Footer(){
    return(
        <Content />
    )
}

export default Footer;
