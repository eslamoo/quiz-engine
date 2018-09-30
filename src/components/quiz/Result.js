import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
function Result (props) {

  return (
    <ReactCSSTransitionGroup
      className='container result'
      component='div'
      transitionName='fade'
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Thank you! We will contact you soon with the result :)
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
