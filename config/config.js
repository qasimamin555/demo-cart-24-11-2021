require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri:process.env.MONGODB_URI || process.env.atlas_URI,
    // mongoUri: process.env.MONGODB_URI ||
    //   process.env.MONGO_HOST ||
    //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
    //   (process.env.MONGO_PORT || '27017') +
    //   '/mernprojectsss',

    stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
    stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
    stripe_test_api_key: 'YOUR_stripe_test_api_key',
    strip_key:"sk_test_51Jea9HClD5kfNQcfZOm4k2BBxJpZtc8SGV2KJjtTDT09EScSYXl6uQq07B0YMKT7FhrDszky7YMRTd3oC2KnFWYg0015ENB0vk"
    ,
    gmail:"qasimamin1477@gmail.com",
    pass:"xqlkgnnjhzbxvbtf"
  }
  
  export default config