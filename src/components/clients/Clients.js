import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import $ from 'jquery';
window.jQuery = window.$ = $;

class Clients extends Component {

  render () {
    const { clients } = this.props;

    if (clients) {
      return (
        <div>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a  >Dashboard</a>
            </li>
            <li className='breadcrumb-item active'>Create New Quiz</li>
          </ol>
          <div className='box_general padding_bottom'>
            <div className='header_box version_2'>
              <h2>
                <i className='fa fa-file'></i>Create New Quiz</h2>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Quiz Name</label>
                  <input type='text' className='form-control'/> 
						    </div>
                <div className='form-group'>
                  <label>Quiz Title</label>
                  <input type='text' className='form-control'/> 
                </div>
                <div className='form-group'>
                  <label>Quiz Description</label>
                  <textarea type='text' className='form-control'/>

                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label>Quiz Background</label>
                        <form action='#' className='dropzone'></form>
                      </div>
                    </div>
                  </div>
                  <div className='box_general padding_bottom'>
                    <div className='header_box version_2'>
                      <h2>
                        <i className='fa fa-fw fa-calendar-check-o'></i>Questions Area</h2>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Question #1</label>
                          <input type='text' className='form-control' />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Answer Type</label>
                          <select name='' id='' className='form-control'>
                            <option value=''>Multiple choice</option>
                            <option value=''>Text</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Choices</label>
                          <input type='text' className='form-control' placeholder='Choice #1' />
                          <input type='text' className='form-control' placeholder='Choice #2' />
                          <input type='text' className='form-control' placeholder='Choice #3' />
                        </div>
                      </div>

                    </div>
                    <a  >
                      <span className='fa fa-plus'></span> Add Question</a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Live Preview</label>
                  <div className='live'></div>
                </div>
              </div>
            </div>

            <div className='row'>
              <p>
                <a href='#0' className='btn_1 medium'>Save</a>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
