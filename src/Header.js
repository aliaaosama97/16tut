import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindoSize from './hooks/useWindoSize';

const Header = ({title}) => {
  const {width} = useWindoSize();
  
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
            : <FaLaptop />}

    </header>
  )
}

export default Header