const express = require('express');
const app = express();

app.use(express.json());

app.get ('/',(req, res) => {
    const student_ID = req.query.student_ID;
    res.send(student_ID + '!');
    console.log (student_ID);
});

const student_detailes = [];

app.post('/create_user',(req, res) => {
    const studentID = {username, password};
    const { username, password } = req.body ;

    student_detailes.push({ username, password });

    console.log (student_detailes);
    

    res.json({loggedIn: true, status: 'registered as new student'})
});

app.get("/student_detailes",( req,res) => {
    res.json(student_detailes);

})

app.put("/update_old", (req,res) => {
    const student_ID = req.query.student_ID;

    const student = student_detailes.find(student => student.student_ID === student_ID);

  student.username = req.body.username;
  student.password = req.body.password;

  res.json({ success: true, message: 'Student details updated' });
});



app.listen(5000,() =>{
    console.log('server started on port 5000');
});


