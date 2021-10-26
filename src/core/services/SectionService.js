export default {

  get() {
    return require('@/config/settings-data.json');
    // return fetch(`https://raw.githubusercontent.com/maicolbruski/jsondb/main/db.json`).then(response => {
    //   return response.json();
    // }).then(data => {
    //   return data
    // })
  }

}
