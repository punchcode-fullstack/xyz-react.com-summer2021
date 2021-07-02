import { useState } from 'react';

import './Section.scss';

interface sectionInterface {
  isActive?: boolean;
  heading?: string;
  key: string;
  content?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

function Section(props: sectionInterface) {
  const [isActive, setIsActive] = useState(props.isActive);
  function handleClick() {
    setIsActive(!isActive);
    console.log('clicked');
  }
  return (
    <div className='Section' key={props.key}>
      <h1
        className={isActive ? 'activeHeading' : 'defaultHeading'}
        onClick={handleClick}
      >
        {props.heading}
      </h1>
      <p className={isActive ? 'show' : 'hidden'}>{props.content}</p>
    </div>
  );
}

export { Section };
export default Section;
