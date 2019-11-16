import React from 'react';

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
  const [opened, setOpened] = React.useState(false);
  const toggleVisibility = React.useCallback(() => setOpened(open => !open));

  return (<table class="margined w75 cleared">
    <TableTitle opened={opened} text={title} onClick={toggleVisibility}/>
    {opened && items.map(item => <TableItem {...item} />)}
  </table>);
};

export default Table;
