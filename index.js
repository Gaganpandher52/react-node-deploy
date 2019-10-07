const Express = require('express');
const App = Express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 8080;
let json = require('./schedule.json');
// console.log(json)
// Express Configuration
// App.use(BodyParser.urlencoded({ extended: false }));
// App.use(Express.static('public'));

// // Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!", 
// }));
function randGenerator(){
  // let value = 0
  let i =1;
  let arrayOfShifts = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];//two employees per day
  while(i <7){
    value  = Array.from({length: Math.ceil(Math.random()*3)}, () => Math.ceil(Math.random() * arrayOfShifts[Math.floor(Math.random()*arrayOfShifts.length)]));
    i++;
  } 
    // return arrayOfShifts[Math.floor(Math.random()*arrayOfShifts.length)]
    return value;

}
console.log(randGenerator())
App.use(cors());

App.get('/api',(req,res)=>{
  // const user = req.query.name || 'lol'
  const arrayOfName = [];
  const schedule = [
    {'week':23,
     'schedules':[
        
      ]
    },
    {'week':24,
     'schedules':[
        
      ]
    },
    {'week':25,
     'schedules':[
        
      ]
    },
    {'week':2,
     'schedules':[
        
      ]
    }
  ];
  // console.log(schedule[0].schedules[0].schedule) 
  let is = 1;
  for(let i = 0;i < schedule.length;i++){
    while(is <=5 ){
      let obj = {'employee_id':is,
                'schedule':randGenerator()}
      schedule[i].schedules.push(obj)
      is++;
    }
  }
  // console.log(schedule[0].schedules[0].schedule);
  // console.log(schedule[0].schedules[1].schedule);
  // console.log(schedule)
  console.log(schedule[0].schedules)

  axios.all([
    axios.get('http://interviewtest.replicon.com/employees/'),
    axios.get('http://interviewtest.replicon.com/weeks/')
  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    const allEmployees = responseArr[0].data;//array of objects
    for(let key of allEmployees ){
      arrayOfName.push(key.name)
    }
    res.json(arrayOfName);
    // console.log(responseArr[0].data);
    // console.log(responseArr[1].data);

  });
  
  
  // axios.get('http://interviewtest.replicon.com/employees/')
  // .then(response =>{
  //   // res.json(arrayOfName);
  //   const data = response.data;//array of objects
  //   for(let key of data ){
  //     arrayOfName.push(key.name)
  //   }
  //   // console.log(data);
    
  //   res.json(arrayOfName);
  // })
});
 
App.get('/api2.0',(req,res)=>{
  const arrayOfName = [];

  axios.get('http://interviewtest.replicon.com/time-off/requests')
  .then(response =>{
    // res.json(arrayOfName);
    const data2 = response.data;
    let employee_id = [];
    // for(let key of data ){
    //   arrayOfName.push(key.name)
    // }
    for(let key of data2 ){
      employee_id.push(key.employee_id)
    }
    // console.log(employee_id);
    res.json(employee_id);
  })
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
