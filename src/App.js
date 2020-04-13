import React from 'react';
import './App.css';
import './Card.css';
import Card from './Card.js';
import Tabletop from 'tabletop'

const filterOps = [
  { key: 1, name: 'Pre-penultimate', active: true }, 
  { key: 2, name: 'Penultimate', active: true }, 
  { key: 3, name: 'Graduate', active: true }, 
  { key: 4, name: 'Unspecified/Other', active: true }
]

function FilterOp(props) {

  const handleEvent = () => {
    filterOps[props.id-1].active = !filterOps[props.id-1].active
    props.update(props.id)
  }

    return (
      <button className={props.active ? 'filterSelected' : 'filterUnselected'} onClick={handleEvent}>
        {props.name}
      </button>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      filters: filterOps.filter(op => op.active).map(op => op.name), 
      data: []
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    Tabletop.init({
      key: '1tvPlx3bY2eitUijRGHsCwnSrz0WYVLAfITzF_dNX2wA',
      callback: googleData => {
        googleData.sort(function (a, b) {
          var dateASplit = a.date.split("/")
          var dateBSplit = b.date.split("/")
          var dateA = new Date(dateASplit[2], dateASplit[1], dateASplit[0]), dateB = new Date(dateBSplit[2], dateBSplit[1], dateBSplit[0])
          return dateA - dateB
        });

        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  updateState(id) {
    this.setState({filters: filterOps.filter(op => op.active).map(op => op.name)})
  }

  render() {
    return (
      <div className="App">

        <h1>Filter by level:</h1>
        <div className="Filter-container">
          {/* {filterOps.map(op => <FilterOp id={op.id} name={op.name} active={op.active} update={this.updateState}/>)} */}

          <FilterOp id={1} name={filterOps[0].name} active={filterOps[0].active} update={this.updateState}/>
          <FilterOp id={2} name={filterOps[1].name} active={filterOps[1].active} update={this.updateState}/>
          <FilterOp id={3} name={filterOps[2].name} active={filterOps[2].active} update={this.updateState}/>
          <FilterOp id={4} name={filterOps[3].name} active={filterOps[3].active} update={this.updateState}/>


    <p className="Num-results">Showing {this.state.data.filter(card => this.state.filters.includes(card.level)).length} listing{this.state.data.filter(card => this.state.filters.includes(card.level)).length == 1 ? "" : "s" }
     </p>
        </div>

        

        <div className="Card-container">
          {this.state.data.filter(unfilteredCard => this.state.filters.includes(unfilteredCard.level)).map(card => Card(card))}
        </div>

      </div>
    );
  }
}

export default App;
