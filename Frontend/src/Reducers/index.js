import fieldReducer from './fieldsReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    fieldsData : fieldReducer
});


export default allReducers