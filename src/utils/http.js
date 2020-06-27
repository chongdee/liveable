import qs from "querystring";

export function getData(url) {
  const result = fetch(url);
  return result;
}

export function postData(url, params) {
  console.log(params);

  const result = fetch(url, {
    method: "post",
    headers: {
      'Accept': "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: qs.stringify(params),
  });
  return result;
}
