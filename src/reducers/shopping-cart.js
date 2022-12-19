
const updateCartItems = (cartItems, item, idx,orderTotal) => {
   if (item.count === 0) {
     return [
       ...cartItems.slice(0, idx), //удаляет элементы из массива
       ...cartItems.slice(idx + 1),
       
     ];
     
   }
   //if (item.count === 0) {
   //   return {
   //      orderTotal:0
   //   }}
   
   
 
   if (idx === -1) {
     return [...cartItems, item]; //добавляет элементы к массиву
   }
   return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]; //обновлять существующий массив
 };
 
 const updateCartItem = (book, item = {}, quantity ) => {
   const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  
   return {
     id,
     title,
     count: count + quantity,
     total: total + quantity * book.price,
     
     
   };
 };
 
 const updateOrder = (state, bookId, quantity) => {
   const {
     bookList: { books },
     shoppingCart: { cartItems },
     
   } = state; 
 
   const book = books.find(({ id }) => id === bookId);
   const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
   //console.log(itemIndex);
   const item = cartItems[itemIndex];
  
  
 
   const newItem = updateCartItem(book, item, quantity);
   
   const totalOrder = state.shoppingCart.cartItems.reduce((item,index)=>  item + index.total ,0)
   console.log(totalOrder);
   
   return {
      ...state,
     orderTotal:  totalOrder,
     cartItems: updateCartItems(cartItems, newItem, itemIndex),
   };
 };
 

 
 function updateShoppingCart(state, action) {
   if (state===undefined){
    return {
       cartItems: [],
       orderTotal: 0,
    }
   }
    switch (action.type) {
     case "BOOK_ADDED_TO_CART":
      //const totalOrder= state.shoppingCart.cartItems.map(({total,i})=>total=+total);
      // console.log(totalOrder);
       return updateOrder(state, action.payload, 1);
       

    
 
     case "BOOK_REMOVED_FROM_CART":
       return updateOrder(state, action.payload, -1);
 
     case "ALL_BOOKS_REMOVED_FROM_CART":
       const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
       return updateOrder(state, action.payload, -item.count);
 
    default:
       return state.shoppingCart;
   }
 }
 export default updateShoppingCart;

 