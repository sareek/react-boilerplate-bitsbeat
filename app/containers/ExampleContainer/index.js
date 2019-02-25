/**
 *
 * ExampleContainer
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
// import makeSelectExampleContainer from './selectors';
import {
  makeSelectRequesting,
  makeSelectError,
  makeSelectResponse,
  makeSelectSuccess,
  makeSelectAllBlogResult,
  makeSelectAidTitleResult
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getAllBlogRequest, getAidTitle, deleteCallForAid } from './actions';
import { Button, Table, Modal, List, Icon, Menu } from 'semantic-ui-react'

/* eslint-disable react/prefer-stateless-function */
export class ExampleContainer extends React.Component {

  constructor(props) {
    super(props);
  this.state = {
    modalOpen: false,
    deleteCalled: false,
    idofbuttonpassed:'',
    titleList: [
      {
        key: '',
        titlename: ''
      }

    ],

    blog: []
  };

  this.deletetheAid = this.deletetheAid.bind(this);
}

  addAidHandlerRoute = () => {
    console.log('adding aid through this button')
  }

  deleteHandler = (se, idofbutton) => {
    //se.stopPropagation();


    console.log('delete handlerhhhhhhh', this.state.idofbuttonpassed)
    this.setState({ deleteCalled: false }, () => {
      //console.log('deleting this id ', this.state.idofbuttonpassed)


    })


    this.props.deleteCallForAid(this.state.idofbuttonpassed)
    this.handleClose();
   


  }

  handleClose = () => this.setState({ modalOpen: false })

  handleOpen = (se, idofbutton) => {
    this.setState({ modalOpen: true, idofbuttonpassed: idofbutton }, () => {
        console.log('handle open', this.state.idofbuttonpassed)


    })


}

  deletetheAid(e, se) {
    console.log('delete it delete it ')
    this.setState({ deleteCalled: true })
    this.deleteHandler(se);
  }
  componentDidMount() {
    this.props.getAllBlogRequest();
    this.props.getAidTitle();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.allBlogResult !== nextProps.allBlogResult) {
      // console.log(nextProps.allBlogResult.toJS())
      this.setState(state => ({
        blog: nextProps.allBlogResult.toJS()
      }))
    }
    if (nextProps.titleList) {
      console.log('next props ', nextProps.titleList.toJS())
      this.setState(state => ({
        titleList: nextProps.titleList.toJS()
      }))
    }
  }
  render() {
    const { blog } = this.state;
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
          onClick={this.addAidHandlerRoute}
          color='green'>Add Aid Info with Route</Button>


        <Table celled >
          <Table.Header>
            <Table.Row>

              <Table.HeaderCell>Current Aids</Table.HeaderCell>
            </Table.Row>

          </Table.Header>

          <Table.Body >

            {this.state.titleList.map((item, index) => {
              return (

                <Table.Row key={`un${index}`}>

                  <Table.Cell>
                    <List.Item >
                      <List.Content >{item.titlename}</List.Content>
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
                          floated='right' color='orange'>Edit</Button>



                      </List.Content>

                    </List.Item>
                  </Table.Cell>

                </Table.Row>


              )
            })}
            {/* <List.Item>
                                    <List.Content>{this.state.titleList.map(item => item.titlename)}</List.Content>
                                    <List.Content>
                                    <Button floated='right' color='red'>Delete</Button>
                                    <Button floated='right' color='orange'>Edit</Button>
                                        
                                    </List.Content>
                                    
                                </List.Item>
                            </Table.Cell>

                        </Table.Row> */}

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

ExampleContainer.propTypes = {
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
  allBlogResult: makeSelectAllBlogResult(),
  titleList: makeSelectAidTitleResult(),
});

const mapDispatchToProps = (dispatch) => ({
  getAllBlogRequest: () => dispatch(getAllBlogRequest()),
  getAidTitle: () => dispatch(getAidTitle()),
  deleteCallForAid: (deleteButtonId) => dispatch(deleteCallForAid(deleteButtonId))
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'exampleContainer', reducer });
const withSaga = injectSaga({ key: 'exampleContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ExampleContainer);
