
const cart = {


    addCart(item, cb) {
      let cart = []
      if (typeof window !== "undefined") {
        if (localStorage.getItem('cart')) {
          cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.push({
          product: item,
          quantity: 1,
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        cb()
      }
      },

      getCart() {
        if (typeof window !== "undefined") {
          if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
          }
        }
        return []
      },
      
      
      updateCart(itemIndex,quantity){
        let cart = []
        if (typeof window !== "undefined") {
          if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
          }
          cart[itemIndex].quantity = quantity
          localStorage.setItem('cart', JSON.stringify(cart))
        }
      },

      removeItem(itemIndex) {
        let cart = []
        if (typeof window !== "undefined") {
          if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
          }
          cart.splice(itemIndex, 1)
          localStorage.setItem('cart', JSON.stringify(cart))
        }
        return cart
      },

      itemTotal() {
        if (typeof window !== "undefined") {
          if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).length
          }
        }
        return 0
      },

     orderSucess(cb){
       if(typeof window !== "undefined") {
         if(localStorage.getItem('cart')) {
           localStorage.removeItem('cart')
           cb()
         }
       }
     }

}


export default cart