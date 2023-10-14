import React from 'react';
import '../App.css';
import Header from './Header';
import Content from './content';
import Footer from './Footer';
import Loading from './Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetail';
import About from './About.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <Routes>
        <Route path='/' element={<><Header /><Content /><Footer /></>} />
        <Route path="/:recipeName" element={<><RecipeDetails /><Footer /></>} />
        <Route path="/about" element={<><About /><Footer /></>} />
      </Routes>
    );
  }
}

export default App;
