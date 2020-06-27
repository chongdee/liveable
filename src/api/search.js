/* 
搜索接口
*/

import base from "./base";
import { getData } from "../utils/http";

const search = {
  searchData(content) {
    return getData(base.search + "?content="+content);
  }
};

export default search;