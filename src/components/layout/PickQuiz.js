import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom';
import './pick.css';
export default class PickQuiz extends Component {
  render () {
    return (
      <div className='pick'>
        <div className='container'>

          <h3 className='headline'>GENERATE YOUR FIRST QUIZ OVERVIEW OF OPTIONS

            <span></span>
          </h3>
          <p>What do you need reach your goals? Take the quiz to find out!</p>
          <div className='col-lg-4 offset-md-4'>
            <NavLink className='pickk' to='/quizzes'>Pick A Quiz Now</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
