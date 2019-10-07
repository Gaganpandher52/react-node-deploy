const request = require('request')
const fs = require('fs');

function generateSchedule(){
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

    return schedule;
}

fs.writeFile("./apiData/schedule.json", JSON.stringify(generateSchedule()), function(err) {
  if(err) {
      return console.log(err);
  } 
  console.log("The file was saved!");
});



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


  // function randGenerator(){
  //   // let value = 0
  //   let i =1;
  //   let arrayOfShifts = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];//two employees per day
  //   while(i <7){
  //     value  = Array.from({length: Math.ceil(Math.random()*3)}, () => Math.ceil(Math.random() * arrayOfShifts[Math.floor(Math.random()*arrayOfShifts.length)]));
  //     i++;
  //   } 
  //     // return arrayOfShifts[Math.floor(Math.random()*arrayOfShifts.length)]
  //     return value;
  // }

  module.exports = generateSchedule();