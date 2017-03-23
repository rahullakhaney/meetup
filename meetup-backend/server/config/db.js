import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/meetupMe');
  mongoose.connection
    .once('open', () => console.log('Mongodb is running'))
    .on('error', err => console.error(err))
};
