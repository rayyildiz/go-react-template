import {LOCALSTORAGE_TOKEN} from "./Constants";

export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}


export const http = <T>(url: string, method: string, body?: any, contentType: string = "application/json"): Promise<IHttpResponse<T>> => {

  const request = new Request(url, {
    method: method,
    body: body ? JSON.stringify(body) : null
  });
  request.headers.set("Content-Type", contentType);

  const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
  if (token != null) {
    request.headers.set("Authorization", "Bearer " + token);
  }

  return new Promise((resolve, reject) => {
    let response: IHttpResponse<T>;
    fetch(request)
    .then(res => {
      response = res;
      return res.json();
    })
    .then(body => {
      if (response.ok) {
        response.parsedBody = body;
        resolve(response);
      } else {
        reject(response);
      }
    })
    .catch(err => {
      reject(err);
    });
  });
};
