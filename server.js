const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://umanandeswarikunisetti17_db_user:UmaPavan_1617@cluster0.5smw3lb.mongodb.net/")

.then(() => console.log("DB Connected"))
.catch(() => console.log(error))

// const FirstRoute = require("./src/Routes/FirstRoute")
// app.use("/", FirstRoute);

app.listen(7000, () =>{
    console.log("Server started at port 7000");
})



//TASK-H

// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let students = []; 
// let idCounter = 1;

// app.post("/students", (req, res) => {
//   const student = { id: idCounter++, ...req.body };
//   students.push(student);
//   res.status(201).json(student);
// });

// app.get("/students", (req, res) => {
//   res.json(students);
// });

// app.put("/students/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   students = students.map(s =>
//     s.id === id ? { ...s, ...req.body } : s
//   );
//   res.json({ message: "Updated successfully" });
// });

// app.delete("/students/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   students = students.filter(s => s.id !== id);
//   res.json({ message: "Deleted successfully" });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 5000");
// });