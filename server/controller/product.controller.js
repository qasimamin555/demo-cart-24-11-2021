
import Product from '../models/product.model';
import errorHandler from '../helpers/dbErrorHandler';
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'




const EmailService = async (req,res) => {
 

  const tomail=req.body.email
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',

    auth: {
      user: 'qasimamin1477@gmail.com',
      pass: 'xqlkgnnjhzbxvbtf'
    }
  }));

  
  var mailOptions = {
    from: 'qasimamin1477@gmail.com',
    to: tomail,
    subject: 'ZohraJabin Alert',
    html:
     `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
          <h1>ZohraJabin</h1><hr />
          <h2>
              Thankyou for placced order ${tomail} !<br />
              Your order number :u889374857988943
          </h2>
      </body>
    </html>`

      
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.json({
        msg: error
      });
    } 
    else{
      res.json({
        msg: 'success'
      })
    }
  })
}

const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id).populate('shop', '_id name').exec()
    if (!product)
      return res.status('400').json({
        error: "Product not found"
      })
  
    req.product = product
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    })
  }
}



const products = (req,res) => {
    
  const user = new Product(req.body); 

  user.save()
  .then((err,result)=>{
    
       res.json().send(result);
  })

}

const listLatest = async (req,res) =>{

    await Product.find({}).sort('-created').limit(5).exec((err, products) => {
        if (err) {
            
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
          res.json(products)
      })
}

const read = (req,res) => {
    Product.findById({"_id":req.params.productId}).exec((err,result)=>{
         if(err){ return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })}
        return res.json(result);
    })
}


const listRelated = async (req, res) => {
  // console.log(req.product)
  try{
    let products = await Product.find({ "_id": { "$ne": req.product }, "category": req.product.category}).limit(5).populate('shop', '_id name').exec()
    res.json(products)
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


const list = async (req, res) => {

  const query = {}
  if(req.query.search)
    query.name = {'$regex': req.query.search, '$options': "i"}
  // if(req.query.category && req.query.category != 'All')
  //   query.category =  req.query.category
  try {
    let products = await Product.find(query).exec()
    res.json(products)
  } catch (err){
 
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}





export default { products,listLatest,read,listRelated,productByID,list,EmailService }