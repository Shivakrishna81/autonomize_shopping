import React, { useState ,useEffect} from 'react'
import Header from './Header'
import Products from './Products'
import './Main.css'


const Main = () => {
     
    const [products,setProducts]=useState([])

    useEffect(()=>{
        const func=async()=>{
            const url = "https://dummyjson.com/products?skip=0&limit=52";
            const response = await fetch(url);
          const Data = await response.json();
          setProducts(Data.products)
        }

        func()
    })

    return (

        <div className="homepage-main-container">
            <Header />
            <ul className="homepage-sub-container">
                {products.map((eachItem) => {
                    return <Products key={eachItem.id} details={eachItem} />;
                })}
            </ul>
        </div>

    )
}

export default Main