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
      {/*      
      <div>
        <h1
          onClick={() => setActive(1)}
          style={active == 1 || showAll ? activeHeading : hiddenHeading}
        >
          heading 1
        </h1>
        <p className={active == 1 || showAll ? 'show' : 'hidden'}>
          <h2>content 2</h2> consectetur adipisicing elit. Labore consequuntur
          quam nesciunt expedita sunt aut fugit delectus maiores quaerat
          recusandae.
        </p>
      </div>
      <div>
        <h1
          onClick={() => setActive(2)}
          style={active == 2 || showAll ? activeHeading : hiddenHeading}
        >
          heading 2
        </h1>
        <p
          // style={active == 2 ? activeStyle : hiddenStyle}
          className={active == 2 || showAll ? 'show' : 'hidden'}
        >
          <h2>place holder for form</h2> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet, natus earum non ullam maxime reiciendis
          voluptatibus eum officia error cumque?
        </p>
      </div>
      <div>
        <h1
          onClick={() => setActive(3)}
          style={active == 3 || showAll ? activeHeading : hiddenHeading}
        >
          heading 2
        </h1>
        <p
          // style={active == 2 ? activeStyle : hiddenStyle}
          className={active == 3 || showAll ? 'show' : 'hidden'}
        >
          <h2>content 3</h2> Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Amet, natus earum non ullam maxime reiciendis voluptatibus eum
          officia error cumque?
        </p>
      </div> */}
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
