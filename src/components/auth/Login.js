import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { notifyUser } from '../../actions/notifyActions';
import Alert from '../layout/Alert';
import './login.css';
import logo from '../../assets/cbclogo.png';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onSubmit = e => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .catch(err => notifyUser('Invalid Login Credentials', 'error'));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    const { message, messageType } = this.props.notify;
    return (
      <div className='loginBody'>
        <div className='container'>
          <div className='headd'>
            <div className='col-lg-12 col-xs-12 text-center logo'>
              <a className='float-shadow' href='login.html' title='Logo'>
                <img src={logo} title='Logo' alt='Logo' className='img-responsive center-block' width='200px' />
              </a>
            </div>
          </div>
          <h3 className='headline'>Dashboard Login | CBC Quiz Engine
            <span></span>
          </h3>
          <div className='logg col-lg-4 offset-md-4'>
            {message ? (
              <Alert message={message} messageType={messageType} />
            ) : null}
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control auth'
                  name='email'
                  required
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control auth'
                  name='password'
                  required
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <input
                type='submit'
                value='Login'
                className='btn btn-primary btn-block auth-submit'
              />
              <Link to='/register' className='register'>
                Or Create your Account now...
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);
