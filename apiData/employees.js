//Created by Gaganpreet Pandher
const request = require('request')
const fs = require('fs');
const timeOffData = readFromTimeoffs();
const employeeData = readFromEmployees();
const allShiftData = readFromRules();
let mainSchedule = [];
let employeePerShift;
let eachEmployeeSchedule;
let eachWeekSchedule;

//main logic of feature 1 & feature 2
function generateSchedule(){
  
  const EMPLOYEE_PER_SHIFT = readFromRules();
  
  for(let j=0;j<4;j++){
      eachWeekSchedule = {
        'week':23+j,
        'schedules':[]
      }

      //used for employee per shift tracking 
      employeePerShift = [0,0,0,0,0,0,0];
      for(let i =0;i <employeeData.length;i++){
        //initialize the schedule obj
        eachEmployeeSchedule = {
          'employee_id':null,
          'schedule':[]
        }
        let request = requestForEmployee(23+j,i);
        //if no time off for today, schdedule for that day
        if(request.length > 0){
          for(let k=1; k < 8;k++){
            if(employeePerShift[k-1] < EMPLOYEE_PER_SHIFT ){
              if(!requestPerDay(request,k)){
                eachEmployeeSchedule.employee_id = employeeData[i].id;
                eachEmployeeSchedule.schedule.push(k);
                employeePerShift[k-1] = employeePerShift[k-1] + 1;
              } 
            }
          }
          if(eachEmployeeSchedule.employee_id !=null){
            eachWeekSchedule.schedules.push(eachEmployeeSchedule);
          }
        }//if
        else{
          for(let k=1; k < 8;k++){
            if(employeePerShift[k-1] < EMPLOYEE_PER_SHIFT){
              eachEmployeeSchedule.employee_id = employeeData[i].id
              eachEmployeeSchedule.schedule.push(k);
              employeePerShift[k-1] = employeePerShift[k-1] + 1;
            }
          }
          if(eachEmployeeSchedule.employee_id != null){
            eachWeekSchedule.schedules.push(eachEmployeeSchedule);
          }
        }
      }
      mainSchedule.push(eachWeekSchedule);
      return mainSchedule;
    }  
};


fs.writeFile("./apiData/schedule.json", JSON.stringify(generateSchedule(),null,2), function(err) {
  if(err) {
      return console.log(err);
  } 
  console.log("The file was saved!");
});
//*********************** helper functions ***************************//
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

//**** helper functions
function readFromEmployees(){
  let dataHere = JSON.parse(fs.readFileSync("./apiData/employees.json"));
  return dataHere;
}

function readFromTimeoffs(){
  let dataHere = JSON.parse(fs.readFileSync("./apiData/timeOffs.json"));
  return dataHere;
}

//helper function check for time off 
function requestForEmployee(week, employee){
  let requestNeeded = [];

  for(let i =0;i< timeOffData.length;i++){
    if(timeOffData[i].week === week && timeOffData[i].employee_id === employeeData[employee].id){
      requestNeeded.push(i);
    }
  }
  return requestNeeded;
}

function requestPerDay(list,day){
  let isThere = false;

  if(list.length > 1){
    for(let i=0; i< list.length;i++){
      for(let j=0; timeOffData[list[i]].days.length;j++){
        if(timeOffData[list[i]].days[j] === day){
          isThere = true;
        }
      }
    }
  }
  else{
    let index = list[0];
    for(let k=0;k<timeOffData[index].days.length;k++){
      if(timeOffData[index].days[k] === day){
        isThere = true;
      }
    }
  }
  return isThere;
}
  
module.exports = generateSchedule();