import '../App.css';
import Header from './Header';
import Content from './content';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';
import RecipeDetails from './RecipeDetail';
import About from './About.js'; // Import the About component

function App() {
  return (

    <Routes>
      
      <Route path='/recipe-react/' element={<><Header /><Content /></>} />
       <Route path="/:recipeName" element={<RecipeDetails />} />
       <Route path="/recipe-react/about" element={<About />} />
    </Routes>
    
    

  );
}

export default App;
