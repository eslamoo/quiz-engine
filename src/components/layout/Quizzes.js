import React, { Component } from 'react'
import image from '../../assets/04.png'
import { NavLink } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Sidebar from './Sidebar';
export default class Quizzes extends Component {
  render () {
    return (
      <div>
        <AppNavbar/>
        <Sidebar/>
        <div className='col-md-10 quizzes'>
          <div className='row'>
            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt=''/>
                  <div className='listing-badge now-open'>Recommended!!</div>
                  <div className='listing-item-content'>
                    <span className='tag'>Business</span>
                    <h3>Template #1
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt=''/>
                  <div className='listing-item-content'>
                    <span className='tag'>Education</span>
                    <h3>Template #2
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt=''/>
                  <div className='listing-item-content'>
                    <span className='tag'>Sport</span>
                    <h3>Template #3
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt='' />
                  <div className='listing-badge now-open'>Recommended!!</div>
                  <div className='listing-item-content'>
                    <span className='tag'>Business</span>
                    <h3>Template #1
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt='' />
                  <div className='listing-item-content'>
                    <span className='tag'>Education</span>
                    <h3>Template #2
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt='' />
                  <div className='listing-item-content'>
                    <span className='tag'>Sport</span>
                    <h3>Template #3
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt='' />
                  <div className='listing-badge now-open'>Recommended!!</div>
                  <div className='listing-item-content'>
                    <span className='tag'>Business</span>
                    <h3>Template #1
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt='' />
                  <div className='listing-item-content'>
                    <span className='tag'>Education</span>
                    <h3>Template #2
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className='col-xl-4 col-sm-6 mb-3'>
              <NavLink to='/quiz' className='listing-item-container' tabIndex='0'>
                <div className='listing-item'>
                  <img src={image} alt='' />
                  <div className='listing-item-content'>
                    <span className='tag'>Sport</span>
                    <h3>Template #3
                      <i className='verified-icon'></i>
                    </h3>
                    <span>Lorem ipsum dolor emet set</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
