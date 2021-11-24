import User from '../models/user.model';
import errorHandler from './../helpers/dbErrorHandler';

const create = (req,res,next) => {

  const user = new User(req.body);

  user.save((err, result) => {
     if (err) {
       return res.json({
         error: errorHandler.getErrorMessage(err)
       })
     }
     res.json({
       message: "Successfully signed up!!!"
     })
   })

}

export default {create}