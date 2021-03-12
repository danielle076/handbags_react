import React from "react";

export default function Footer({titleFooter, textFooter, image}) {
    return (
        <section>
            <h2 className="title-footer">{titleFooter}</h2>
            <p className="text-footer">{textFooter}</p>
            <img src={image} />
        </section>
    );
}