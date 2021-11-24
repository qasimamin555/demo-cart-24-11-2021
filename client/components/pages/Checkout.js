// import React from 'react';
// import request from 'request'

// function Easypaisa(props) {
//     const payment = () => {
//         const options = {
//             method: 'POST',
//             url: 'https://api.eu-de.apiconnect.appdomain.cloud/easypaisaapigw-telenorbankpk-production/gateway/pinless/initiate-link-transaction',
//             headers: {
//               'X-IBM-Client-Id': 'f12fe2e5-ddd0-4c14-9e25-48fc67ef21ee',
//               'X-IBM-Client-Secret': 'W0xK5jX5aM6wB1rH3kT7vL3mJ5kI4aF0bE6gW8mQ6uU1wX1dM3',
//               // Credentials: 'REPLACE_THIS_VALUE',
//               'content-type': 'application/json',
//               accept: 'application/json'
//             },
//             body: {
//               request: {
//                 orderId: '6539888216244224',
//                 storeId: '4453880825905152',
//                 transactionAmount: '1761223297204224',
//                 transactionType: 'dizhocs',
//                 mobileAccountNo: '4903361739317481',
//                 emailAddress: '879 Emve Road',
//                 otp: 'popirsok'
//               },
//               signature: 'awfiudguur'
//             },
//             json: true
//           };
          
//           request(options, function (error, response, body) {
//             if (error) throw new Error(error);
          
//             console.log(body);
//           });
//     }
//     return (
//         <div style={{marginTop:'100px',textAlign:'center'}}>
//             <button onClick={payment}>Payment Method</button>
//         </div>
//     );
// }

// export default Easypaisa;

// // import React from 'react';

// // function Easypaisa(props) {
// //     const getApi = () => {
// //         var url = 'https://newsapi.org/v2/everything?' +
// //           'q=Apple&' +
// //           'from=2021-10-15&' +
// //           'sortBy=popularity&' +
// //           'apiKey=516167e497494080b516c99fda0814bb';

// //            var req = new Request(url);

// //             fetch(req)
// //               .then(function(response) {
// //             console.log(response.json());
// //         })
// //       }
// //     return (
// //         <div style={{textAlign:'center',marginTop:200}}>
// //             <button onClick={getApi}>get news</button>
// //         </div>
// //     );
// // }

// // export default Easypaisa;

import React from 'react';
import { Typography,Button,Container } from '@mui/material';
import auth from '../Api/auth-helper';

function Checkout(props) {
    return (
        <div style={{marginTop:'100px'}}>
              <Container style={{backgroundColor:'orange',height:400}} 
               alignItems="center"
               justify="center"
               >
                hello worlld
              </Container>
        </div>
    );
}

export default Checkout;