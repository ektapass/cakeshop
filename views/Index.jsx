const React = require('react');
const DefaultLayout = require('./default');
//const allPokemon = require('../models/pokemon');
// const myStyle = {
//   color: '#ffffff',
//   backgroundColor: '#000000',
// };

class Index extends React.Component {
  render() {

    const { cake } = this.props
    return (
      <div className='outer'>
        <link rel="stylesheet" type="text/css" href="/styles/index.css"/>
        <DefaultLayout title={"Cakes Menu"}>
<div className='container'> 


          <h1>Yum-Yum Cake Shop</h1>

          <ul className='list-container'>
            {
              this.props.cake.map((cake, i) => {
                return (

                  <li key={cake._id}>
                    <a href={`/cake/${cake.id}`}>{cake.name.charAt(0).toUpperCase() + cake.name.slice(1)}</a>
                    <form action={`/cake/${cake._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="DELETE" />


                      
                    </form>
                    <a href={`/cake/${cake._id}/edit`}>Edit This cake</a>
                  </li>
                );
              })}
          </ul>

          <nav>
            <a className='button' href="/cake/new"> Create a cake</a>
          </nav>

          <br />
          </div>

        </DefaultLayout>
      </div>
    )
  }
}

module.exports = Index




