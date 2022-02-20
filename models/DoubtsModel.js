const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentsDoubtSchema = new Schema({
    name: {
        type: String,
    },
    studentID: {
        type: String,
        required: [true, 'Roll field is required']
    },
    teacherID: {
        type: String,
        required: [true, 'Roll field is required']
    },
    class: {
        type: String,
    },
    doubts: {
        type: String,
    },
});


const Student = mongoose.model('studentsDoubt',StudentsDoubtSchema);

module.exports = Student;