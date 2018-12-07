const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');

async function truncateDatabase() {
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

async function populateDatabase(){
    createStudent({
        _id:123,
        username:'alice',
        password:'alice',
        firstName:'Alice',
        lastName:'Wonderland',
        gradYear:2020,
        scholarship:15000
    })

    createStudent({
        _id:234,
        username:'bob',
        password:'bob',
        firstName:'Bob',
        lastName:'Hope',
        gradYear:2021,
        scholarship:12000
    })

    createQuestion({
        _id: 321,
        question: 'Is the following schema valid?',
        points: 10,
        questionType: 'TRUE_FALSE',
        multipleChoice:null,
        trueFalse:{isTrue: false}
    })

    createQuestion({
        _id: 432,
        question: 'DAO stands for Dynamic Access Object.',
        points: 10,
        questionType: 'TRUE_FALSE',
        multipleChoice:null,
        trueFalse:{isTrue: false}
    })
    createQuestion({
        _id: 543,
        question: 'What does JPA stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice:{
            choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
            correct: 1
        },
    })

    createQuestion({
        _id: 654,
        question: 'What does ORM stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice:{
            choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping',
            correct: 4
        },
    })

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

createStudent = student => {
    return studentModel.create(student).then(newUser =>
        console.log(newUser));
};


createQuestion = (question) => {
    return questionModel.create(question).then(newQues =>
        console.log(newQues));
};

answerQuestion = (sid, qid, answer) => {
    answer.student = sid;
    answer.question = qid;
    return answerModel.create(answer).then(newAns =>
        console.log(newAns));
};

findAllStudents = () => {
    return studentModel.find();
}


findStudentById = studentId => {
    return studentModel.findById(studentId);
}

updateStudent = (studentId, student) => {
    return studentModel.update({_id: studentId}, {$set: student});
}


deleteStudent = studentId => {
    return studentModel.remove({_id: studentId});
}


findAllQuestions = () => {
    return questionModel.find()
};

findQuestionById = (id) => {
    return questionModel.findById(id)
};

updateQuestion = (qid, question) => {
    return questionModel.update({_id: qid}, {$set: question});
}


deleteQuestion = qid => {
    return questionModel.remove({_id: qid})
};

findAllAnswers = () => {
    return answerModel.find()
};

findAnswerById = (id) => {
    return answerModel.findById(id)
};

findAnswersByStudent = (studentId) => {
    return answerModel.find({student:studentId})
};

findAnswersByQuestion = (questionId) => {
    return answerModel.find({question:questionId})
};

findAnswersBySidQid = (sid, qid) => {
    return answerModel.find({student:sid,question:qid})
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
    populateDatabase,
    findAnswersBySidQid
};
