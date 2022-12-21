const React = require('react');

const head={
  textAlign:"center"
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head > <title >{this.props.title}</title>
         {/* <link rel="stylesheet" href="../style.css" />      */}
        </head>
        <body>
        <h1 style={head}>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout