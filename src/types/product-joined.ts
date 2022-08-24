import Product from "./product";

type JoinedProduct = Product & {
    categories: string,
}

export default JoinedProduct;