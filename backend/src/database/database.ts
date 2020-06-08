import mongoose from 'mongoose';

const connected = mongoose.connect(`mongodb+srv://cgmgit:xMhBc7iuu8d7hBd@cluster0-ekysc.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connected;
