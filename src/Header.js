import React from 'react';

const headerLinks = [
  {
    name: 'Github',
    link: 'https://github.com/debel',
    image: 'images/github.svg',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/debelbot',
    image: 'images/twitter.svg',
  },
  {
    name: 'Board Game Geek',
    link: 'https://boardgamegeek.com/collection/user/debelbot?gallery=large&sort=rating&sortdir=desc&rankobjecttype=subtype&rankobjectid=1&columns=title%7Cstatus%7Cversion%7Crating%7Cbggrating%7Cplays%7Ccomment%7Ccommands&geekranks=Board%20Game%20Rank&excludesubtype=boardgameexpansion&own=1&objecttype=thing&ff=1&subtype=boardgame',
    image: 'images/bgg.svg',
  },
];

const HeaderLinks = () => (
  headerLinks.map(({ link, name, image }) => (
    <a href={link} target="_blank"><img class="header-img" src={image} alt={name} /></a>
  ))
);

const Header = () => (
  <header class="margined padded-top padded-bottom w40">
    <img class="avatar" src="images/mihail-mikov.jpg" alt="me" />
    <div class="hello">
      <h1>Hi, I'm Mihail</h1>
      <p>software engineer, juggler, board game geek</p>
      <HeaderLinks />
    </div>
  </header>
);

export default Header;
