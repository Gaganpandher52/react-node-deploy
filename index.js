const Express = require('express');
const App = Express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 8080;
const request = require('request')
const fs = require('fs');
const employees = require('./apiData/employees.js');

App.use(cors());

App.get('/api',(req,res)=>{

  const arrayOfName = [];
  axios.all([
    axios.get('http://interviewtest.replicon.com/employees/'),
    axios.get('http://interviewtest.replicon.com/time-off/requests/')
  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    const allEmployees = responseArr[0].data;//array of objects
    const allTimeOffs = responseArr[1].data
    for(let key of allEmployees ){
      arrayOfName.push(key.name)
    }
    res.json(arrayOfName);
    fs.writeFile("./apiData/employees.json", JSON.stringify(allEmployees), function(err) {
      if(err) {
          return console.log(err);
      } 
      console.log("The file was saved!");
    });
    fs.writeFile("./apiData/timeOffs.json", JSON.stringify(allTimeOffs), function(err) {
      if(err) {
          return console.log(err);
      } 
      console.log("The file was saved!");
    });
    
  });
});

if(process.env.NODE_ENV ==='production'){
  App.use(Express.static('client/build'));
  App.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

