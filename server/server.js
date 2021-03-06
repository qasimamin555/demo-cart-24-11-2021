import config from '../config/config';
import app from './express'
import mongoose from 'mongoose'
import { Alarm } from '@material-ui/icons';

// require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', (error) => {
      if(error){console.log('network problem')}
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
