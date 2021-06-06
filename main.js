const express = require('express')
const app = express()
const port = 3000

app.get('/number', (req, res) => {
  res.send('Go to /number/:num to check if :num is odd or even')
})

app.get('/number/:num', (req, res) => {
    console.log(req.params.num);
    var number = Number(req.params.num) ;
    var returnNumber= checkOddEven(number);
    res.send(returnNumber);
  })

function checkOddEven(number){
    console.log(number);
    if (number % 2 == 0){
        return(number + " is even");
    }else{
        return(number + " is odd");
    }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

