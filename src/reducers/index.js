
const initialState = {
   books: [
      {
         id: 1,
         title: "Production-Ready Microser",
         author: "Susan J. Fower",
       },
       {
         id: 2,
         title: "Relese It",
         author: "Michel T.Nygard",
       },
     ]
   
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case 'BOOKS_LOADED':
      return {
         books: action.payload
      };
      default:
         return state
  }
  
 
};

export default reducer;