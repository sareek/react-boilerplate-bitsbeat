/**
 *
 * SignUp
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
// import makeSelectSignUp from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
} from './selectors';
import { sendSignUpInfo } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  Grid,
  Checkbox,
  Header,
  Form,
  Segment,
  Input,
  Button,
  Message,
  Container,
} from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      email: '',
      userName: '',
      password: '',
      passwordtwo: '',
      phone: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }



  submitHandler = () => {
    const data = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone
    }
//console.log('handler',data)
    this.props.sendSignUpInfo(data)


  }

  onChange = (e, se) => {
    // e.stopPropagation();

    //console.log('change handler',{ [e.target.name]: e.target.value })

    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //  const { } = this.state;
    //const { } = this.props;
    return (

      <Container>
        <Grid className="middle aligned" centered>
          <Grid.Column>
            <Form>
              <Form.Field>
                <label>Full Name</label>
                <input
                  placeholder='First Name'
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input
                  placeholder='Username'
                  name="userName"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Email'
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type='password'
                  placeholder='Password'
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Re-enter Password'
                  name="passwordtwo"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <Input >
                  <input
                    type='number'
                    maxLength="10"
                    placeholder='Phone Number'
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />

                </Input>

              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button
                onClick={this.submitHandler}
                type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

SignUp.propTypes = {
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
  sendSignUpInfo: data => dispatch(sendSignUpInfo(data)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignUp);
