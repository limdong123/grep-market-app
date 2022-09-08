import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import "./index.css"


const ProductPage = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://d1b56405-b5ef-4209-9497-dbcc2b6ecf01.mock.pstmn.io/product/${id}`)
            .then((result) => {
                console.log(result.data)
                setProduct(result.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    console.log("product = ", product)

    if (product === null) {
        return <h1>상품 정보를 받고 있습니다...</h1>
    }

    return (
        <div>
            <div id="image-box">
                <img src={"/" + product.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">
                    {product.name}
                </div>
                <div id="price">
                    {product.price}
                </div>
                <div id="createdAt">
                    2022년 9월 8일
                </div>
                <div id="description">
                    {product.description}
                </div>
            </div>
        </div>
    )
}

export default ProductPage