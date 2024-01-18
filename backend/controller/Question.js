const QuestionModel = require("../models/Questions");

async function addQuestion(req, res) {
  const { questionString } = req.body;
  const user_id = req.user.id;
  console.log(user_id);
  try {
    const newQuestion = await QuestionModel.create({
      questionString,
      user_id,
    });
    console.log(newQuestion.id);
    res.status(200).send("Question added");
  } catch (e) {
    console.log(`Question do not get added ${e}`);
  }
}

async function listQuestion(req, res) {
  try {
    let questionString = req.body.questionString;
    let filter;
    if (questionString != null) {
      filter = {
        questionString: {
          $regex: questionString,
        },
      };
    } else {
      filter = {};
    }

    let { limit, page } = req.query;
    let QuestionList = await QuestionModel.find(filter).populate({
      path: "answer_id",
    });
    // .limit((limit = 0))
    // .skip((page - 1) * limit);
    // .populate({
    //   path: "answer_id",
    //   model: "Answer",
    // select: ["answerString"],
    // });
    // let count = await QuestionModel.countDocuments();
    // let totalPages = Math.ceil(count / limit);
    // let Question = { totalPages, data: QuestionList };
    if (QuestionList) {
      res.json({
        res: QuestionList,
      });
    }
  } catch (e) {
    console.log(`Error occured ${e}`);
  }
}

module.exports = {
  listQuestion,
  addQuestion,
};
