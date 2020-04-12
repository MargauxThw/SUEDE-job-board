import React, { useState, useEffect } from 'react';
import './App.css';
import './Card.css';
import Card from './Card.js';

const cardList = [
  {
    link: "https://www.facebook.com/careers/",
    logo: "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.2365-6/78040202_579584169534875_7061365506699165696_n.gif?_nc_cat=100&_nc_sid=ad8a9d&_nc_ohc=VtmuerseIXgAX-xMjLq&_nc_ht=scontent.fsyd3-1.fna&oh=7ec820384439526872a8ef266e2433ff&oe=5EB76598",
    title: "Software Engineer, Intern/Co-op",
    date: "25/04/2020",
    level: "Graduate",
    description: "Want to build new features and products that touch more than a billion people around the world? Want to build new features that improve existing products like Photos, Groups, NewsFeed, Search, and Messaging? Want to solve unique, large-scale, highly complex technical problems? Our development cycle is extremely fast, and we've built tools to keep it that way. It's common to write code and have it running live on the site hours later. If you work for us you will make an impact, immediately. Facebook is seeking interns/co-ops to join our engineering team. You can help build the next generation of systems behind Facebook's products, create web applications that reach millions of people, build high volume servers and be a part of a team that’s working to help connect people around the globe. This intern/co-op has a minimum twelve (12) week duration."
  },
  {
    link: "https://www.facebook.com/careers/",
    logo: "https://www.ey.com/ecimages/EY.gif",
    title: "Software Engineer, Intern",
    date: "13/12/2020",
    level: "Graduate",
    description: "Want to build new features and products that touch more than a billion people around the world? Want to build new features that improve existing products like Photos, Groups, NewsFeed, Search, and Messaging? Want to solve unique, large-scale, highly complex technical problems? Our development cycle is extremely fast, and we've built tools to keep it that way. It's common to write code and have it running live on the site hours later. If you work for us you will make an impact, immediately. Facebook is seeking interns/co-ops to join our engineering team. You can help build the next generation of systems behind Facebook's products, create web applications that reach millions of people, build high volume servers and be a part of a team that’s working to help connect people around the globe. This intern/co-op has a minimum twelve (12) week duration."
  },
  {
    link: "https://www.facebook.com/careers/",
    logo: "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.2365-6/78040202_579584169534875_7061365506699165696_n.gif?_nc_cat=100&_nc_sid=ad8a9d&_nc_ohc=VtmuerseIXgAX-xMjLq&_nc_ht=scontent.fsyd3-1.fna&oh=7ec820384439526872a8ef266e2433ff&oe=5EB76598",
    title: "Software Engineer, Intern",
    date: "13/04/2020",
    level: "Graduate",
    description: "Want to build new features and products that touch more than a billion people around the world? Want to build new features that improve existing products like Photos, Groups, NewsFeed, Search, and Messaging? Want to solve unique, large-scale, highly complex technical problems? Our development cycle is extremely fast, and we've built tools to keep it that way. It's common to write code and have it running live on the site hours later. If you work for us you will make an impact, immediately. Facebook is seeking interns/co-ops to join our engineering team. You can help build the next generation of systems behind Facebook's products, create web applications that reach millions of people, build high volume servers and be a part of a team that’s working to help connect people around the globe. This intern/co-op has a minimum twelve (12) week duration."
  },
  {
    link: "https://www.facebook.com/careers/",
    logo: "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.2365-6/78040202_579584169534875_7061365506699165696_n.gif?_nc_cat=100&_nc_sid=ad8a9d&_nc_ohc=VtmuerseIXgAX-xMjLq&_nc_ht=scontent.fsyd3-1.fna&oh=7ec820384439526872a8ef266e2433ff&oe=5EB76598",
    title: "Software Engineer, Intern",
    date: '13/06/2020',
    level: "Pre-penultimate",
    description: "Want to solve unique, large-scale, highly complex technical problems? Our development cycle is extremely fast, and we've built tools to keep it that way. It's common to write code and have it running live on the site hours later. If you work for us you will make an impact, immediately. Facebook is seeking interns/co-ops to join our engineering team. You can help build the next generation of systems behind Facebook's products, create web applications that reach millions of people, build high volume servers and be a part of a team that’s working to help connect people around the globe. This intern/co-op has a minimum twelve (12) week duration."
  },
  {
    link: "https://www.facebook.com/careers/",
    logo: "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.2365-6/78040202_579584169534875_7061365506699165696_n.gif?_nc_cat=100&_nc_sid=ad8a9d&_nc_ohc=VtmuerseIXgAX-xMjLq&_nc_ht=scontent.fsyd3-1.fna&oh=7ec820384439526872a8ef266e2433ff&oe=5EB76598",
    title: "Software Engineer, Intern",
    date: "15/04/2021",
    level: "Unspecified/Other",
    description: "Want to build new features and products that touch more than a billion people around the world? Want to build new features that improve existing products like Photos, Groups, NewsFeed, Search, and Messaging? Want to solve unique, large-scale, highly complex technical problems? Our development cycle is extremely fast, and we've built tools to keep it that way. It's common to write code and have it running live on the site hours later. If you work for us you will make an impact, immediately. Facebook is seeking interns/co-ops to join our engineering team. You can help build the next generation of systems behind Facebook's products, create web applications that reach millions of people, build high volume servers and be a part of a team that’s working to help connect people around the globe. This intern/co-op has a minimum twelve (12) week duration."
  },

]

cardList.sort(function (a, b) {
  var dateASplit = a.date.split("/")
  var dateBSplit = b.date.split("/")
  var dateA = new Date(dateASplit[2], dateASplit[1], dateASplit[0]), dateB = new Date(dateBSplit[2], dateBSplit[1], dateBSplit[0])
  return dateA - dateB
});


const filterOps = [
  { key: 1, name: 'Pre-penultimate', active: true }, 
  { key: 2, name: 'Penultimate', active: false }, 
  { key: 3, name: 'Graduate', active: true }, 
  { key: 4, name: 'Unspecified/Other', active: false }
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
    this.state = { filters: filterOps.filter(op => op.active).map(op => op.name) }
    this.updateState = this.updateState.bind(this);
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

        </div>

        <p className="Num-results">Showing {cardList.filter(card => this.state.filters.includes(card.level)).length} listings</p>

        <div className="Card-container">
          {cardList.filter(unfilteredCard => this.state.filters.includes(unfilteredCard.level)).map(card => Card(card))}
        </div>

      </div>
    );
  }
}

export default App;
