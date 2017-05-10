var React = require('react');

import Lane from './Lane'
import Card from './Card'

export default class Board extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        Trello board
        <div>
          <Lane>
            <Card />
            <Card />
          </Lane>
          <Lane>
            <Card />
            <Card />
          </Lane>
        </div>
      </div>
    )
  }
}
