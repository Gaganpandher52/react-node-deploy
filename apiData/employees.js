// const Express = require('express');
// const App = Express();
// const cors = require('cors');
// const axios = require('axios');
// const PORT = process.env.PORT || 8080;
// const request = require('request')
// const fs = require('fs');

// App.get('/api2.0',(req,res)=>{
//   const arrayOfName = [];

//   axios.get('http://interviewtest.replicon.com/time-off/requests')
//   .then(response =>{
     
//     const data2 = response.data;
//     let employee_id = [];
//     for(let key of data2 ){
//       employee_id.push(key.employee_id)
//     }
//     res.json(employee_id);
//     // data2.pipe(fs.createWriteStream("./apiData/employees.json"));
//     fs.writeFile("./apiData/employees.json", JSON.stringify(data2), function(err) {

//       if(err) {
//           return console.log(err);
//       } 
//       console.log("The file was saved!");
//     });
//   }) 
// });

// module.exports = App;