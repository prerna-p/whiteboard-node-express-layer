const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

// removes all the data from the database. Note that you might need to remove documents in a particular order

truncateDatabase = () => {
    answerModel.remove({});
    questionModel.remove({});
    studentModel.remove({});
}

populateStudent = (id,uname,pass,fn,ln,gy,sc) => {
    let student = {
        _id:id,
        username:uname,
        password:pass,
        firstName:fn,
        lastName:ln,
        gradYear:gy,
        scholarship:sc
    }
    return student;
}

populateQuestion = (id,ques,pts,qtype,isTrue1,choices1,correct1) => {
    let multipleChoice1 = {
        choices: choices1,
        correct: correct1
    }

    let trueFalse1 = {
        isTrue: isTrue1
    }

    let question = {
        _id: id,
        question: ques,
        points: pts,
        questionType: qtype,
        multipleChoice: multipleChoice1,
        trueFalse:trueFalse1
    }

    return question;
}
// populates the database with test data as described in a later section
populateDatabase = () => {
    createStudent(populateStudent(123,'alice','alice','Alice','Wonderland',2020,15000));
    createStudent(populateStudent(234,'bob','bob','Bob','Hope',2021,12000));
    createQuestion(populateQuestion(321,'Is the following schema valid?',10,'TRUE_FALSE','false','',''));
    createQuestion(populateQuestion(432,'DAO stands for Dynamic Access Object.',10,'TRUE_FALSE','false','',''));
    createQuestion(populateQuestion(543,'What does JPA stand for?',10,'MULTIPLE_CHOICE','',
        'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations'
        ,'1'));
    createQuestion(populateQuestion(654,'What does ORM stand for?',10,'MULTIPLE_CHOICE','',
        'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping'
        ,'4'));

}





// inserts a student document
createStudent = student =>
    studentModel.create(student).then(newUser =>
        console.log(newUser));


//inserts a question document
createQuestion = (question) => {
    questionModel.create(question)
};

//inserts an answer by student student for question question
answerQuestion = (studentId, questionId, answer) => {
    answerModel.save()
};

// retrieves all students
findAllStudents = () =>
    studentModel.find();

// retrieves a single student document whose ID is id
findStudentById = studentId =>
    studentModel.findId(studentId);

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId}, {$set: student});

deleteStudent = studentId =>
    studentModel.remove({_id: studentId});

// retrieves all questions
findAllQuestions = () => {
    questionModel.find()
};

// retrieves a single question document whose ID is id
findQuestionById = (id) => {
    questionModel.findById(id)
};

updateQuestion = (qid, question) =>
    questionModel.update({_id: qid}, {$set: question});

deleteQuestion = qid => {
    questionModel.remove({_id: qid})
};

// retrieves all the answers
findAllAnswers = () => {
    answerModel.find()
};

// retrieves a single answer document whose ID is id
findAnswerById = (id) => {
    answerModel.findById(id)
};

// retrieves all the answers for a student whose ID is studentId
findAnswersByStudent = (studentId) => {


};

// retrieves all the answers for a question whose ID is questionId
findAnswersByQuestion = (questionId) => {

};

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent,
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    findAllAnswers,
    findAnswerById,
    answerQuestion,
    findAnswersByStudent,
    findAnswersByQuestion
};



/*studentModel.create({
    _id: student.id,
    username: student.username,
    password: student.password,
    firstName: student.firstName,
    lastName: student.lastName,
    gradYear: student.gradYear,
    scholarship: student.scholarship

})*/