import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

// Header is a simple component, it references the 'SearchForm' component
// and it's the component in the 'middle' used to move down data via props
// from the App to the SearchForm component
const Header = (props) => {
  return (
    <header>
       <h1> Winnie's React Gallery App</h1>
      
       <SearchForm
         handleFetching={props.handleFetching}
         history={props.history} />
       <Nav />
       <hr className="break"/>
    </header>
  );
}


export default Header;
