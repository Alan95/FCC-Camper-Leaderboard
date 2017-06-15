import React, { Component } from 'react';
import Ajax from 'ajax-promise-es6';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import TableRow from './TableRow.js';
import './Tables.css';

const tableStyle = {
  margin: '0 auto',
  width: '500px',
  textAlign: 'center',

}




class Tables extends Component {

  constructor(props){
    super(props);
    this.sortByAllTime = this.sortByAllTime.bind(this);
    this.sortByRecent= this.sortByRecent.bind(this);
    this.state = {
      parsed : [],

    }
  }

 fetchData() {
 Ajax.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then((res)=> {
    let jsondata = JSON.parse(res);
    this.setState({
      parsed : jsondata
    })
}).catch((err)=> {
    console.log(err);
  });

}

componentDidMount() {
this.fetchData();
}

sortByAllTime() {



  this.setState({
   parsed:   this.state.parsed.sort((a, b) => {
       return b.alltime - a.alltime;
     })
 });


}

sortByRecent() {

  this.setState({
   parsed:   this.state.parsed.sort((a, b) => {
       return b.recent - a.recent;
     })
 });

  }



render(){


  return(
    <div className="table">
    <Table style={tableStyle} bordered>
     <thead>
       <tr>
         <th>#</th>
         <th></th>
         <th>Username</th>
         <th><Button onClick={this.sortByAllTime} color='primary'>Alltime</Button></th>
         <th><Button onClick={this.sortByRecent} color='primary'>Recent </Button></th>
       </tr>
     </thead>

    <TableRow json={this.state.parsed} sort={this.state.allTimeOn}/>
   </Table>
   <Button color='danger'>Infos</Button>
    </div>

  );


}

}

export default Tables;
