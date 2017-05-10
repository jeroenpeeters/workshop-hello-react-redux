var React = require('react');

export default class Lane extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{height:'100%', float:'left', width:400, border:'1px solid blue'}}>
        Lane
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
