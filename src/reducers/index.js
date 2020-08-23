import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-catr";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer;