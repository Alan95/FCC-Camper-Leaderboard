import React, { Component } from 'react';
import TableLine from './TableLine.js';

class TableRow extends Component {

constructor(props){
    super(props);
}


render(){


let counter = 1;
let array = [];
this.props.json.forEach((item) => {
array.push(<TableLine key={counter} {...item} counter={counter}/>);
counter++;
});

  return(


    <tbody>{array}</tbody>

  );


}

}

export default TableRow;
