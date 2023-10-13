import '../App.css';
import Header from './Header';
import Content from './content';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import RecipeDetails from './RecipeDetail';
import About from './About.js'; // Import the About component

function App() {
  return (

    <Routes>
      
      <Route path='/' element={<><Header /><Content /></>} />
       <Route path="/:recipeName" element={<RecipeDetails />} />
       <Route path="/about" element={<About />} />
    </Routes>
    
    

  );
}

export default App;
