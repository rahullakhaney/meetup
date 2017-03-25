import mongoose, { Schema } from 'mongoose';

const meetupSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model('Meetup', MeetupSchema);
