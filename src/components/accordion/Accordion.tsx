import { useState } from 'react';

import Section from './Section';

import './Accordion.scss';

interface accProps {
  width?: string | undefined;
}

function Accordion(props: accProps) {
  // const [active, setActive] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const accWidth = props.width ? props.width : '100%';

  function handleShowAll() {
    setShowAll(!showAll);
    console.log(showAll);
  }

  return (
    <div className='Accordion' style={{ width: `${accWidth}` }}>
      <Section
        isActive={showAll ? true : false}
        key='1'
        heading='test heading'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum quasi placeat veniam unde minus ducimus suscipit corrupti vel provident.'
      />
      <Section
        isActive={showAll ? true : false}
        key='2'
        heading='test heading2'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum quasi placeat veniam unde minus ducimus suscipit corrupti vel provident.'
      />
      <button onClick={handleShowAll}>show all</button>
    </div>
  );
}

export { Accordion };
export default Accordion;
