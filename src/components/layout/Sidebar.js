import React from 'react';
import { NavLink } from 'react-router-dom';
export default () => {
  return (
    // <Link to="/client/add" className="btn btn-success btn-block">
    //   <i className="fas fa-plus" /> New
    // </Link>
    <nav className='navbar navbar-expand-lg navbar-dark bg-default fixed-top' id='mainNav'>
      <a className='navbar-brand' href='index.html'>
        <img src='cbclogo.png' data-retina='true' alt='' width='' height='40'/>
      </a>
      <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive'
        aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav navbar-sidenav' id='exampleAccordion'>
          <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Configure'>
            <NavLink to='/createQuiz' className='nav-link'>
              <i className='fa fa-fw fa-edit'></i>
              <span className='nav-link-text'>Create new Quiz</span>
            </NavLink>
          </li>
     
          <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Questions'>
            <NavLink exact to='/quiz' className='nav-link' href='#'>
              <i className='fa fa-fw fa-calendar-check-o'></i>
              <span className='nav-link-text'>Quiz Example </span>
            </NavLink>
          </li>
          <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Pick'>
            <NavLink exact to='/pickQuiz' className='nav-link'>
              <i className='fa fa-fw fa-check'></i>
              <span className='nav-link-text'>Pick A quiz</span>
            </NavLink>
          </li>
          <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Review & Publish'>
            <NavLink exact to='/pickQuiz' className='nav-link' href='#'>
              <i className='fa fa-fw fa-clone'></i>
              <span className='nav-link-text'>Review & Publish</span>
            </NavLink>
          </li>
        </ul>
      
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' data-toggle='modal' data-target='#exampleModal'>
              <i className='fa fa-fw fa-sign-out'></i>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


