//Created by Gaganpreet Pandher
const Express = require('express');
const App = Express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 8080;
const request = require('request')
const fs = require('fs');
const solutionSchedule = require('./apiData/employees.js');

console.log(JSON.stringify(solutionSchedule))

App.use(cors());

App.get('/solution',(req,res)=>{
  let array = [];
  // for(let key of solutionSchedule ){
  //   array.push(key.schedules)
  // }
  res.send(solutionSchedule);
});


App.get('/api',(req,res)=>{

  const arrayOfName = [];
  axios.all([
    axios.get('http://interviewtest.replicon.com/employees/'),
    axios.get('http://interviewtest.replicon.com/time-off/requests/'),
    axios.get('http://interviewtest.replicon.com/shift-rules/')

  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    const allEmployees = responseArr[0].data;//array of objects
    const allTimeOffs = responseArr[1].data;
    const allShiftData = responseArr[2].data;
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
    fs.writeFile("./apiData/ruleData.json", JSON.stringify(allShiftData), function(err) {
      if(err) {
          return console.log(err);
      } 
      console.log("The file was saved!");
    });
    
  });
});

  const name= 'GaganpreetPandher';
  const email='gaganpandher52@gmail.com';
  const features ='&features[]=1&features[]=2'
  axios({
    method: 'post',
    url: 'http://interviewtest.replicon.com/submit?name='+name +'&email='+email+features+'&solution=false',
    data: solutionSchedule,
    header:{
      "content-type": "application/json"
    }
  })
  .then(function (response) {
    console.log(response);
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

