import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

  const signin = (req,res,next) => {
    
       User.findOne({
          'email':req.body.email
        },(err,user)=>{
            if (err || !user)
            return res.status('401').json({
              error: "User not found"
            })
            
            if (!user.authenticate(req.body.password)) {
                return res.status('401').send({
                  error: "Email and password don't match."
                })
              }
              
            const token = jwt.sign({
                _id:user._id
            },config.jwtSecret)
              

            var expires = (new Date(Date.now()+ 18400*1000)).toUTCString()
            res.cookie("token",token,{
               
                    maxAge: 18090* 1000,
                    // expires works the same as the maxAge
                    expires: new Date(),
                    secure: true,
                    httpOnly: true,
            })

            return res.json({
                token,
                user: {_id: user._id, name: user.firstName, email: user.email}
              })
      })
  }

  const signout = (req, res) => {
    res.clearCookie("token")
    return res.status('200').json({
      message: "signed out"
    })
  }
  export default {signin,signout}