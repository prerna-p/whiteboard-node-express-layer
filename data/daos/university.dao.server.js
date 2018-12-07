const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

truncateDatabase = () => {
    studentModel.deleteMany({},(err) => {
        if(err){
            console.log(err);
        }else{
            console.log('deleted students');
        }
    });

    questionModel.deleteMany({},(err) => {
        if(err){
            console.log(err);
        }else{
            console.log('deleted questions');
        }
    });

    answerModel.deleteMany({},(err) => {
        if(err){
            console.log(err);
        }else{
            console.log('deleted answers');
        }
    });
};



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

    //console.log("*******************" + qtype)
    if(qtype === 'TRUE_FALSE') {
        return {
            _id: id,
            question: ques,
            points: pts,
            questionType: qtype,
            multipleChoice:null,
            trueFalse:trueFalse1
        }
    }

    else {
        return {
            _id: id,
            question: ques,
            points: pts,
            questionType: qtype,
            multipleChoice: multipleChoice1,
        }
    }

}

populateAnswers = (id,sid,qid,ans1,ans2,) => {

    console.log(id + " " + sid + " " + qid + " " + ans1 + " " + ans2 )
    if(ans1 === true || ans1 === false) {
        return {
            _id: id,
            trueFalseAnswer: ans1,
            student: { _id: sid },
            question:{ _id: qid }
        }
    }
    else {
        return {
            _id: id,
            trueFalseAnswer: ans1,
            multipleChoiceAnswer: ans2,
            student: { _id: sid },
            question:{ _id: qid }
        }
    }

}

populateDatabase = () => {
    createStudent(populateStudent(123,'alice','alice','Alice','Wonderland',2020,15000));
    createStudent(populateStudent(234,'bob','bob','Bob','Hope',2021,12000));
    createQuestion(populateQuestion(321,'Is the following schema valid?',10,'TRUE_FALSE',false,'',''));
    createQuestion(populateQuestion(432,'DAO stands for Dynamic Access Object.',10,'TRUE_FALSE',false,'',''));
    createQuestion(populateQuestion(543,'What does JPA stand for?',10,'MULTIPLE_CHOICE','',
        'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations'
         ,1));
    createQuestion(populateQuestion(654,'What does ORM stand for?',10,'MULTIPLE_CHOICE','',
        'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping'
        ,4));

    answerQuestion(123,321,{
        _id: 123,
        trueFalseAnswer: true
    });
        answerQuestion(123,432,{
        _id: 234,
        trueFalseAnswer: false
    });

    answerQuestion(123,543,{
        _id: 345,
        multipleChoiceAnswer: 1
    });

    answerQuestion(123,654,{
        _id: 456,
        multipleChoiceAnswer: 2
    });

    answerQuestion(234,321,{
        _id: 567,
        trueFalseAnswer: false
    });

    answerQuestion(234,432,{
        _id: 678,
        trueFalseAnswer: true
    });

    answerQuestion(234,543,{
        _id: 789,
        multipleChoiceAnswer: 3
    });

    answerQuestion(234,654,{
        _id: 890,
        multipleChoiceAnswer:4
    });

}

createStudent = student =>
    studentModel.create(student).then(newUser =>
        console.log(newUser));


createQuestion = (question) => {
    questionModel.create(question).then(newQues =>
        console.log(newQues));
};

answerQuestion = (sid, qid, answer) => {
    answer.student = sid;
    answer.question = qid;
    answerModel.create(answer).then(newAns =>
        console.log(newAns));
};

findAllStudents = () =>
    studentModel.find();

findStudentById = studentId =>
    studentModel.findId(studentId);

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId}, {$set: student});

deleteStudent = studentId =>
    studentModel.remove({_id: studentId});

findAllQuestions = () => {
    questionModel.find()
};

findQuestionById = (id) => {
    questionModel.findById(id)
};

updateQuestion = (qid, question) =>
    questionModel.update({_id: qid}, {$set: question});

deleteQuestion = qid => {
    questionModel.remove({_id: qid})
};

findAllAnswers = () => {
    answerModel.find()
};

findAnswerById = (id) => {
    answerModel.findById(id)
};

findAnswersByStudent = (studentId) => {


};

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
    populateAnswers,
    findAnswersByStudent,
    findAnswersByQuestion,
    truncateDatabase,
    populateDatabase
};
