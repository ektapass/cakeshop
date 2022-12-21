const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div className='new-container'>
         <link rel="stylesheet" type="text/css" href="../styles/new.css"/>
      <h1>New cake page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/cake" method="POST">
        Name: <input className='input' type="text" name="name" /><br />
        Image: <input className='input' type="text" name="image" /><br />
        price: <input className='input' type="text" name="price"/><br/>
        remaining: <input className='input' type="number" name="remaining"/><br/>
        
        <input className='button' type="submit" name="" value="Create cake" />
      </form>
      </div>
    
    );
  }
}

module.exports = New