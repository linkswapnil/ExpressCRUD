var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors());
var student1 = {
    id: 1,
    name: 'abc',
    "roll-id": 21,
    address:{
        city: 'Pune',
        zipcode: 411037
    },
    trainings: ['JAVA', 'HTML']
};
var student2 = {
    "id": 2,
    name: 'xyz',
    "roll-id": 21,
    address:{
        city: 'Pune',
        zipcode: 411037
    },
    trainings: ['JAVA', 'HTML']
};
 var student3 = {
    "id": 3,
    name: 'pqr',
    "roll-id": 21,
    address:{
        city: 'Pune',
        zipcode: 411037
    },
    trainings: ['HTML']
};

var students = [student1, student2, student3];

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/students', function (req, res) {
    res.status(200).json(students);
});

app.post('/student', function (req, res) {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(200).json(students);
});

app.delete('/student/:id', function (req, res) {
 students = students.filter(student => student.id !== parseInt(req.params.id))
    res.status(200).json(students);
});

app.put('/student/:id', function (req, res) {
    const idToUpdate =  parseInt(req.params.id);
    const newStudent = req.body;
    students = students.map(student=> {
        if(student.id === idToUpdate){
            student = newStudent;
        }
        return student;
    })
    res.status(200).json(students);
});

app.listen(5555);
console.log('Hello');