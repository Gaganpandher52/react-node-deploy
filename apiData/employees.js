const request = require('request')
const fs = require('fs');

function generateSchedule(){
  const schedule = [] ;
  const EMPLOYEE_PER_SHIFT = readFromRules();
    let is = 1;
    // for(let i = 0;i < schedule.length;i++){
    //   while(is <=5 ){
    //     let obj = {'employee_id':is,
    //               'schedule':randGenerator()}
    //     schedule[i].schedules.push(obj)
    //     is++;
    //   }
    // }







    return schedule;
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
}
console.log(readFromRules())



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