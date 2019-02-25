/*
 *
 * ExampleContainer reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false,
  titleList:''
});

function exampleContainerReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.GET_ALL_BLOG_REQUEST:
      return state.merge({
        requesting: true,
        response:'',
        error:'',
        success: false
      });
    case types.GET_ALL_BLOG_SUCCESS:
      console.log(action.response)
      return state.merge({
        requesting: false,
        response: '',
        error: '',
        success: true,
        //dataObj: fromJS(action.response.data.dataList)
      })
    case types.GET_ALL_BLOG_FAILURE:
      return state.merge({
        requesting: false,
        response: '',
        error: action.error.message,
        success: false
      })

    case types.GET_AID_TITLE:
      return state.merge({
        requesting: true,
        response:'',
        error:'',
        success: false

      })

      case types.GET_ALL_TITLE_SUCCESS:
      console.log('title to be displayed in the dashboard received successfully',action.response)
      const newArrayForTitle = []
      action.response.map((title) => {
        return newArrayForTitle.push({ 'key': title._id, 'titlename': title.titleName })
        
      });
     
      return state.merge({
        requesting: false,
        response: '',
        error: '',
        success: true,
        titleList: newArrayForTitle

      })   
      
      case types.GET_ALL_TITLE_FAILURE:
      return state.merge({
        requesting: false,
        response: '',
        error: action.error.message,
        success: false
      })   

      case types.DELETE_AID_BY_ID:
      var temp=[]
      console.log('inside delete handler reducer', state.get('titleList').toJS().length)
      console.log('payload', action )
     // const titleList = state.get('titleList').toJS();
      for(var i = 0; i < state.get('titleList').toJS().length; i++) {
        if(state.get('titleList').toJS()[i].key == action.relevantId) {
          var temp = state.get('titleList').toJS()
          temp.splice(i, 1);
          state.get('titleList').toJS().splice(i,1)
          console.log('direct splice',state.get('titleList').toJS())
         // state.get('titleList').toJS().splice(i,1).set('titleList', temp)
          console.log('inside if block',state.get('titleList').toJS())
          
          break;
        }
       // console.log('looping',temp)
      }
      console.log('new list',state.get('titleList').toJS())
      return state.merge({
      
      }).set()  

    default:
      return state;
  }
}

export default exampleContainerReducer;
