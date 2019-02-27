/**
 *
 * SuperAdminDashboard
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
// import makeSelectSuperAdminDashboard from './selectors';
import { getUsers } from './actions';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectAllUserResult, makeSelectSuccess, 
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Table, Modal, List, Icon, Menu } from 'semantic-ui-react'
import AdminDashboard from '../Dashboard/Admin';
/* eslint-disable react/prefer-stateless-function */
export class SuperAdminDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[]
    };
  }
  


  componentDidMount() {
    
    this.props.getUsers();
  }
  componentWillReceiveProps(nextProps) {
    console.log('check',nextProps)
  
    if (nextProps.usersLoggedIn) {
      console.log('next props ', nextProps.usersLoggedIn.toJS())
      this.setState(state => ({
        users: nextProps.usersLoggedIn.toJS()
      }))
    }
  }


  render() {
    const { } = this.state;
    const { } = this.props;
    
    return (
      <div>

        <Helmet>
          <title>Example Container</title>
          <meta name="description" content="Description of ExampleContainer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <p>inside example</p>
        <Button
          //onClick={this.addAidHandlerRoute}
          color='green'>Add</Button>
          {/* <AdminDashboard /> */}


        <Table celled >
          <Table.Header>
            <Table.Row>

              <Table.HeaderCell>Current Users</Table.HeaderCell>
            </Table.Row>


          </Table.Header>

          <Table.Body >

          {this.state.users.map((item, index) => {
              return (

                <Table.Row key={`un${index}`}>

                  <Table.Cell>
                    <List.Item >
                      <List.Content >{item.userName}</List.Content>
                      <List.Content>


                        <Modal size='tiny'
                          trigger={<Button onClick={(e) => {
                            this.handleOpen(e, item.key)
                          }} color='red'
                            floated='right'
                          >Delete
                           </Button>}
                          open={this.state.modalOpen}
                          onClose={this.handleClose}

                        >
                          <Modal.Header> Delete the Aid</Modal.Header>
                          <Modal.Content>
                            <p>Are you sure you want to delete this Aid?</p>
                          </Modal.Content>

                          <Modal.Actions>
                            <Button
                              onClick={this.handleClose}
                              color='red'>
                              <Icon name='remove' /> No
                                                        </Button>
                            <Button
                              onClick={(e) => {
                                this.deletetheAid(e)
                              }}

                              color='green'>
                              <Icon name='checkmark' /> Yes
                                                        </Button>
                          </Modal.Actions>



                        </Modal>

                        <Button
                          onClick={(e) => {
                            this.editHandler(e, item.key)
                          }}
                          floated='right' color='orange'>Assign Role</Button>



                      </List.Content>

                    </List.Item>
                  </Table.Cell>

                </Table.Row>


              )
            })}


             

          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>


      </div>
    );
  }
}

SuperAdminDashboard.propTypes = {
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
  usersLoggedIn:makeSelectAllUserResult()
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),

})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'superAdminDashboard', reducer });
const withSaga = injectSaga({ key: 'superAdminDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SuperAdminDashboard);
