const { error } = require("console");
const express = require ("express")
const app  = express();
const routes = require('./routes/tasks')


//middleware
app.use(express.json())

//routes
app.get("/", (req, res) => {
  res.send("Task Manager App") 
} )

// app.use('/api/v1/tasks', tasks)

const port = 3001

app.listen(port, console.log(`Server is listening on port ${port}...`));