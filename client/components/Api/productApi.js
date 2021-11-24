import queryString from 'query-string';

const ListLatest = () => {
    return fetch('/api/products/latest', {
        method: 'GET',
      }).then(response => {
        return response.json()
      }).catch((err) => console.log(err))
}

const read = async (params) => {
  return await fetch('/api/products/' + params.productId, {
    method: 'GET'
  }).then((response) => {
    return response.json()
  }).catch((err) => console.log(err))
}

const listRelated = async (params, signal) => {
  try {
    let response = await fetch('/api/products/related/'+params.productId, {
    method: 'GET',
    signal: signal
  })
    return response.json()
  }catch(err) {
  console.log(err)  
  }
}

const list = async (params) => {
  const query = queryString.stringify(params)
  try {
    let response = await fetch('/api/products?'+query, {
      method: 'GET',
    })
    return response.json()
  }catch(err) {
    console.log(err)
  }
}

const sendingEmail = async(email) => {
   console.log(email)
  return fetch('/sendEmail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email})
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

export {ListLatest,read,listRelated,list,sendingEmail}