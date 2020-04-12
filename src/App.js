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
    level: "Penultimate",
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

cardList.sort(function(a, b) {
  var dateASplit = a.date.split("/")
  var dateBSplit = b.date.split("/")
  var dateA = new Date(dateASplit[2], dateASplit[1], dateASplit[0]), dateB = new Date(dateBSplit[2], dateBSplit[1], dateBSplit[0])
  return dateA - dateB
});

const filters = ['Unspecified/Other', 'Pre-penultimate']


function App() {

  return (
    <div className="App">

      <div className="Card-container">
        {cardList.filter(unfilteredCard => filters.includes(unfilteredCard.level)).map(card => Card(card))}
      </div>

    </div>
  );
}

export default App;
