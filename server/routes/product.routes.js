import express from 'express';
import productCtrl from '../controller/product.controller';
const router = express.Router();

    router.route('/api/product/')
      .post(productCtrl.products)
    
    router.route('/api/products/latest/')
      .get(productCtrl.listLatest)

   
    router.route('/api/products/:productId')
      .get(productCtrl.read)

    router.route('/api/products/related/:productId')
      .get(productCtrl.listRelated)

      
    router.route('/api/products')
      .get(productCtrl.list)
    
    router.route('/sendEmail')
      .post(productCtrl.EmailService)

      router.param('productId', productCtrl.productByID)

export default router;