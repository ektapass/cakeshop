const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Home extends React.Component {
  render() {
    return (
          <div>
          <link rel="stylesheet" type="text/css" href="/styles/home.css"/>
          <DefaultLayout title="Yum-Yum Cakes">
            <div className='home-container'>
            <h2>Try it once, and forget the rest!</h2>
            <p>Welcome to Yum-Yum Cake Shop! Everything we bake, we bake with love!</p>
            <a href="/cake">Cakes Menu</a>
            <img src="\images\Bakery-Taglines.jpg"></img>
            
            </div>
            </DefaultLayout>
            <div className='copyright'>
            <span>&copy; Ekta Bharti</span>
            </div>
        </div>
      
    
    );
  }
}
module.exports = Home;



