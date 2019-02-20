/**
 *
 * ImageUpload
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import makeSelectImageUpload from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { Button } from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css';

/* eslint-disable react/prefer-stateless-function */
export class ImageUpload extends React.Component {
  state = {};
  render() {
    const {} = this.state;
    const {} = this.props;
    return (
      <div>
        <Helmet>
          <title>ImageUpload</title>
          <meta name="description" content="Description of ImageUpload" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <p>Image Upload</p>
        <Button color='red'>check</Button>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const mapDispatchToProps = (dispatch) => ({
  
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'imageUpload', reducer });
const withSaga = injectSaga({ key: 'imageUpload', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ImageUpload);
