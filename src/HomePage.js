import React from 'react';
import './HomePage.css';

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

const TableTitle = ({ opened, text, onClick }) => (
  <tr class="handed" onClick={onClick}>
    <td colspan="2" class="centered bolded larger">{opened ? '➖' : '➕'}{text}</td>
  </tr>
);

const TableItem = ({ name, link, description }) => (
  <a class="item tabled" href={link}>
    <tr>
      <td class="w33 bolded colored">{name}</td>
      <td>{description}</td>
    </tr>
  </a>
);

const Table = ({ title, items }) => {
  const [opened, setOpened] = React.useState(true);
  const toggleVisibility = React.useCallback(() => setOpened(open => !open));

  return (<table class="margined w75 cleared">
    <TableTitle opened={opened} text={title} onClick={toggleVisibility}/>
    {opened && items.map(item => <TableItem {...item} />)}
  </table>);
};

const presentations = [
  {
    name: 'The evolution of an API',
    link: 'https://debel.github.io/react-evolution/#/',
    description: 'A presentation about the evolution of React\'s APIs (with a focus on hooks)',
  },
  {
    name: 'Concurrency Parallelism and Scheduling in JavaScript',
    link: 'https://debel.github.io/concurrency-parallelism-and-scheduling-js/#/',
    description: 'A presentation about JavaScript execution and concurrency model with some actors and csp thrown in',
  },
  {
    name: 'Overview of the micro front-ends architecture',
    link: 'https://debel.github.io/micro-frontends/#/',
    description: 'A presentation about building sites as a collection of independently deliverable and deployable components',
  },
  {
    name: 'Building resilient JavaScript APIs',
    link: 'https://debel.github.io/resilient-js/#/',
    description: 'A presentation about practises and patterns that can help make an API more resilient',
  },
  {
    name: 'Git Panic and how to avoid it',
    link: 'https://debel.github.io/git-panic-and-how-to-avoid-it/',
    description: 'A presentation about using git without stress, helpful command options, and best practises',
  },
];

const item = {
  name: '',
  link: '',
  description: '',
};

const courses = [
  {
    name: 'Modern JavaScript',
    link: 'https://modern-js.github.io/',
    description: 'A collection of presentations about JavaScript: langauge features and design, libraries and patterns.',
  },
  {
    name: 'Full-stack JavaScript: React and Express',
    link: 'https://debel.github.io/fullstack-js/',
    description: 'A short course about building web applications with the popular React and Express libraries',
  },
  {
    name: 'Intro to Git',
    link: 'https://intro-to-git.github.io/#/',
    description: 'A short course about version control with Git',
  },
];

const HomePage = () => {
  return (<>
    <Header />
    <Table
      title="Conference talks and presentations"
      items={presentations} />
    <Table
      title="Short courses and learning materials"
      items={courses} />
  </>);
};

export default HomePage;
