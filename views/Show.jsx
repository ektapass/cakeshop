const React = require('react');

// const myStyle = {
//   color: '#ffffff',
//   backgroundColor: '#000000',
// };

class Show extends React.Component {
  render() {
    const { cake } = this.props
    
    return (
      <div className='container'>
        <link rel="stylesheet" type="text/css" href="/styles/show.css" />
        <h1 >Yum-Yum Cakes</h1>

        <br/>
        <div className='cakesList'>
        {/* <a href="/cake">Back to cake list </a> */}
        <h2>{cake.name.charAt(0).toUpperCase() + cake.name.slice(1)}</h2>
        </div>
        
        <br/>
       
          {cake.remaining > 0 ? <h3>{cake.remaining} Ready to buy!</h3> : <h3>Sold Out!</h3>}

          {cake.remaining > 0 && (
            <form action={`/cake/${cake.id}?_method=PUT`} method="POST">
              {/* if({this.props.cake.remaining > 0 ? `It is ready to buy` : `It is not ready to buy`}) */}
              <input className='buy-button' type="submit" name="remaining" value="BUY" />
            </form>
          )}
          <br/>
      
        <nav className="nav-container"> 
        <a href='/cake/'>Back to Menu</a> <a href='/'> Home </a>
        <a href={`/cake/${cake.id}/edit`}>Edit Cake</a>
        </nav>
         
        <br/>
        
        {/* <form action={`/cake/${cake._id}?_method=DELETE`} method="POST">
          <input className='delete-button' type="submit" value="DELETE" />
          
        </form> */}
        <br/>
        <div className='image-div'>
        <img src={cake.image}></img>
        </div>
        <div className='copyright'>
            <span>&copy; Ekta Bharti</span>
            </div>
      </div>
    );
  }
}

module.exports = Show;