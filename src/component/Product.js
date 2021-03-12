import React from "react";

export default function Product({ label, image, title, price}) {
    return (
        <article className="product">
            <span>{label}</span>
            <img src={image} alt={title}/>
            <p className="product-name">{title}</p>
            <h4 className="product-price">{price}</h4>
        </article>
    );
}