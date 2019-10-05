const Express = require('express');
const App = Express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 8080;

// Express Configuration
// App.use(BodyParser.urlencoded({ extended: false }));
// App.use(Express.static('public'));

// // Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));
App.use(cors());

App.get('/api',(req,res)=>{
  const user = req.query.name || 'lol'
  const arrayOfName = [];
  
  axios.get('http://interviewtest.replicon.com/employees/')
  .then(response =>{
    // res.json(arrayOfName);
    const data = response.data;
    for(let key of data ){
      arrayOfName.push(key.name)
    }
    console.log(arrayOfName);
    res.json(arrayOfName);
  
    
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
