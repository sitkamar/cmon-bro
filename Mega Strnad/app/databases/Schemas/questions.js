const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionsSchema = new Schema(
  {
    id: { type: Schema.ObjectId, required: true },
    question: { type: String },
    answer: { type: String },
  },
  { versionKey: false }
);
QuestionsSchema.methods.findQuestionByID = function(id){
    return mongoose.model("Questions").find({id: id}, question);
}

QuestionsSchema.methods.findAnswerByID = function(id){
    return mongoose.model("Questions").find({id: id}, answer);
}
const Questions = mongoose.model("Questions", QuestionsSchema);

module.exports = Questions;