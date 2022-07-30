export default function fetchData(url,method,header = {
    "Content-Type": "application/json",
  },body = undefined,setter) {
    fetch(url, {
        method: method,
        credentials: 'include',
        headers: header,
        body: body
      })
        .then((response) => {
            console.log(response)
          return response.json()
        })
        .then((data) => {
          console.log("DATAATATATATA",data)
          setter(data)
        })
        .catch((error) => console.log(error));
}