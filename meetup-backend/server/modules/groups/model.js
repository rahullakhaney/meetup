import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be at least 5 character long']
  },
  description: {
    type: String,
    required: true,
    minLength: [30, 'Description must be at least 30 character long']
  },
  eventDate: {
    type: Date
  },
  category: {
    type: String
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }]
}, { timestamps: true });

GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');

  const group = await this.findById(id);

  console.log(group);

  const meetup = await new Meetup({ ...args, group });

  group.meetups.push(meetup);

  const result = await Promise.all([meetup.save(), group.save()]);

  return result;
};

export default mongoose.model('Group', GroupSchema);
