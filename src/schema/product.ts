export type ProductType = {
    prodId: string,
    prodName: string
    prodImageUrl: string,
    prodDesc: string,
    prodPrice: number,
    prodWeights: number[],
    prodCategory: string,
}

export type CartItemType = {
    prodId: string,
    prodName: string,
    prodPrice: number,
    prodWeight: number,
    quantity: number,
    prodImageUrl: string,

}

export type CartType = {
    cartList: CartItemType[],
}