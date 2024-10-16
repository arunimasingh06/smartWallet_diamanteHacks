const express = require("express")
const app = express();
const PORT =  3000;


app.get('/' , (req , res ) => {
  res.send("hi there server is listening")
})






console.log("app is listening")
app.listen(PORT , console.log(`Server is listening on port ${PORT}`))