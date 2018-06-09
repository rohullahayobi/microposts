/* 
@version 3.0.0
@author Ayobi
@license MIT
*/

class easyHTTP{
  // Make an HTTP GET Request
    async get(url){
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
   
    }
  
    // Make HTTP Post request
    async post(url){
      const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
            })
      const resData = await response.json();
      return resData;
  
    }
  
      // Make HTTP Put request
      async put(url){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          const resData = await response.json();
          return resData;

      }
  
       // Make HTTP Delete request
      async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })
          const resData = await 'Resource deleted...';
          return resData;
     
      }
  }

  export const http = new easyHTTP();