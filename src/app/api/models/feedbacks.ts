import mongoose from 'mongoose';

const {Schema, models, model} = mongoose;

const feedbacksSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = models.Feedbacks || model('Feedbacks', feedbacksSchema);

export default Feedback;
