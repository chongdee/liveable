/* 
详情接口
*/

import base from "./base";
import { getData } from "../utils/http";

const detail = {
  detailData(id) {
    return getData(base.detail + "?id=" + id);
  },
};

export default detail;
