const answerModel = require("../models/Answer");
const QuestionModel = require("../models/Questions");

async function addAnswer(req, res) {
  const { answerString, questionId } = req.body;
  const user_id = req.user.id;

  const availableQuestion = await QuestionModel.findOne({ _id: questionId });
  if (availableQuestion) {
    try {
      const newAnswer = await answerModel.create({
        user_id,
        answerString,
        questionId,
      });

      console.log(newAnswer.answerString);
    } catch (e) {
      console.log(`Encounterd a error while adding the answer ${e}`);
    }
  } else {
    console.log("Invalid Question");
  }
}

async function listAnswer(req, res) {
  const { questionId } = req.body;
  const availableQuestion = await QuestionModel.find({ _id: questionId });
  if (availableQuestion) {
    try {
      const answerList = await answerModel.find({ questionId: questionId });
      console.log(`Answer list : ${answerList}`);
      res.json({ res: answerList });
    } catch (e) {
      console.log(
        `No answers Found Be the first One to answer to this question`
      );
    }
  } else {
    console.log("The error is occured while fetching the Question");
  }
}
module.exports = {
  listAnswer,
  addAnswer,
};
