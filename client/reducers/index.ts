import { combineReducers } from 'redux'
import subhikes from './hikes'
// import stuff from './stuff'

export default combineReducers({
  // stuff
  subhikes, //This matches with the hikes in the GloablState (stroe) when using the useAppSelector
})
