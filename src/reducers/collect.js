import * as collectActions from "../actionTypes/collect";

const initialState = []
export default function collect(state = initialState, action) {
  switch (action.type) {
    case collectActions.COLLECT:
      state.push(action.data)  //[{0:'323252523523'}]
      return state;
    
      case collectActions.UNCOLLECT:
      return state.filter((item)=>{
        if (item.id !== action.data.id) {
          return item;
        }
      })
    default:
      return state;
  }
}
