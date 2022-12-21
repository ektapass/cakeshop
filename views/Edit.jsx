const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <div className = "edit-container">
      <link rel="stylesheet" type="text/css" href="/styles/edit.css"/>
      <DefaultLayout title="Edit Cake">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      
      <form action={`/cake/${this.props.cake._id}?_method=PUT`} method="POST">
        <div>
          Name: <input className='input' type="text" name="name" defaultValue={this.props.cake.name}/>
          </div> 
         <br/>
         <div>
          Image: <input className='input' type="text" name="image"  defaultValue={this.props.cake.image}/>
          </div> 
          <br />
         <div>
          Price: <input className='input' type="number" name="price" defaultValue={this.props.cake.price}/>
          </div>
          <br/>
          <div>
          Remaining: <input className='input' type="number" name="remaining"  defaultValue={this.props.cake.remaining}/>
          </div>
          <br />
          <div>
          <input className='button' type="submit" value="Submit Changes"/>
          </div>
      </form>
      </DefaultLayout>
      <div className='copyright'>
            <span>&copy; Ekta Bharti</span>
            </div>
      </div>
    );
  
  }
}
module.exports= Edit