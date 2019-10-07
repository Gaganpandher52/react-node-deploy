const request = require('request')
const fs = require('fs');

function generateSchedule(){
  let eachWeekSchedule = [];
  const EMPLOYEE_PER_SHIFT = readFromRules();
  const employeeData = readFromEmployees();
  const timeOffData = readFromTimeoffs();
  
  const totalWeeks = 4;
  // let val = 0;
  //   while(val < totalWeeks){
  //     let obj = { 
  //       'week':23+val,
  //       'schedules':[]
  //     }
      
  //     val++;
  //   }


  let employeePerShift = [0,0,0,0,0,0,0];
    for(let i =0;i <employeeData.length;i++){
      let eachEmployeeSchedule = {
        'employee_id':null,
        'schedule':[]
      }
      let request = requestForEmployee
      
      
    }

  




  

    // let is = 1;
    // for(let i = 0;i < schedule.length;i++){
    //   while(is <=5 ){
    //     let obj = {'employee_id':is,
    //               'schedule':randGenerator()}
    //     schedule[i].schedules.push(obj)
    //     is++;
    //   }
    // }







    return eachWeekSchedule;
}

fs.writeFile("./apiData/schedule.json", JSON.stringify(generateSchedule()), function(err) {
  if(err) {
      return console.log(err);
  } 
  console.log("The file was saved!");
});

//this function read the file to check for the rules of EMPLOYEE_PER_SHIFT
function readFromRules(){
  let dataHere = JSON.parse(fs.readFileSync("./apiData/ruleData.json"));
  let value;
  for(let i = 0;i < dataHere.length;i++){
    if(dataHere[i].rule_id === 7){
      value = dataHere[i].value
    }
  }
  return value;
}

//helper function
function readFromEmployees(){
  let dataHere = JSON.parse(fs.readFileSync("./apiData/employees.json"));
  return dataHere;
}

function readFromTimeoffs(){
  let dataHere = JSON.parse(fs.readFileSync("./apiData/timeOffs.json"));
  return dataHere;
}

function requestForEmployee(week, employee){
  let requestNeeded = [];

  for(let i =0;i< timeOffData.length;i++){
    if(timeOffData[i].week === week && timeOffData[i].employee_id=== employeeData[employee].id){
      requestNeeded.push(i);
    }
  }
  return requestNeeded;
}



// const schedule = [
  //   {'week':23,
  //    'schedules':[
        
  //     ]
  //   },
  //   {'week':24,
  //    'schedules':[
        
  //     ]
  //   },
  //   {'week':25,
  //    'schedules':[
        
  //     ]
  //   },
  //   {'week':2,
  //    'schedules':[
        
  //     ]
  //   }
  // ];
  // console.log(schedule[0].schedules[0].schedule) 
  // let is = 1;
  // for(let i = 0;i < schedule.length;i++){
  //   while(is <=5 ){
  //     let obj = {'employee_id':is,
  //               'schedule':randGenerator()}
  //     schedule[i].schedules.push(obj)
  //     is++;
  //   }
  // }


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

  module.exports = generateSchedule();