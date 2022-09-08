import React from "react"
import "./index.css"
import axios from "axios"
import { Link } from "react-router-dom"


const MainComponet = () => {
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios.get("https://d1b56405-b5ef-4209-9497-dbcc2b6ecf01.mock.pstmn.io/product")
            .then((result) => {
                console.log(result)
                const products = result.data.products;
                setProducts(products)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div id="banner">
                <img src="./images/banners/banner1.png" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map((product, index) => {
                        return (
                            <div className="product-card">
                                <Link className="product-link" to={`/product/${product.id}`}>
                                    <div>
                                        <img className="product-img" src={product.imageUrl} />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">
                                            {product.name}
                                        </span>
                                        <span className="product-price">
                                            {product.price}원
                                        </span>
                                        <div className="product-seller">
                                            <img className="product-avatar" src="images/icons/avatar.png" />
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainComponet