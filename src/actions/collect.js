import * as collectActions from "../actionTypes/collect";

export function setCollect(data) {
  return {
    type: collectActions.COLLECT,
    data,
  };
}

export function cancelCollect(data) {
  return {
    type: collectActions.UNCOLLECT,
    data,
  };
}
