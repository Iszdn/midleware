import express from 'express'
const app = express()
const port = 3000


app.use(json())
            

export const checkAuthorized = function (req, res, next) {
  const password= req.body.password
 if (password==="1234") {
  next()
 }
 else{
  res.status(403).send("ugursuz")
 }
}
  
app.post('/login',checkAuthorized, (req, res) => {
    console.log("login isleyir");
  res.send('Istifadeci xos geldin')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})