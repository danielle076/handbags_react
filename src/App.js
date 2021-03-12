import React from 'react';
import Button from "./component/Button";
import Product from "./component/Product";
import Footer from "./component/Footer";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';
import './App.css';

// Stap 1 Buttons
// Buttons aangemaakt binnen een <div>
// function App() {
//     return (
//         <>
//             <h1>Handbags & Purses</h1>
//             <nav className="button">
//             <button type="button"
//                     onClick={() => console.log("Naar de collectie")}
//             >to the collection
//             </button>
//             <button type="button"
//                     onClick={() => console.log("Shop alle tassen")}
//             >shop all bags
//             </button>
//             <button
//                 disabled={true}
//             >pre-orders
//             </button>
//         </nav>
//         </>
//     );
// }


// Stap 2 Buttons
// Map component aangemaakt + file Button.js
// Button export Button.js en Button import App.js
// function App() {
//     return (
//         <>
//             <h1>Handbags & Purses</h1>
//             <Button/>
//         </>
//     );
// }

// Stap 1 + 2 Producten
// File Product.js aangemaakt + function
// Product export Product.js en Product import App.js
// function App() {
//     return (
//         <>
//             <h1>Handbags & Purses</h1>
//             <Button/>
//
//             <main>
//                 <Product
//                     label="Best seller"
//                     image={bag1}
//                     title="The handy bag"
//                     price="€400,-"
//                 />
//                 <Product
//                     label="Best seller"
//                     image={bag2}
//                     title="The stylish bag"
//                     price="€250,-"
//                 />
//                 <Product
//                     label="New collection"
//                     image={bag3}
//                     title="The simple bag"
//                     price="€300,-"
//                 />
//                 <Product
//                     label="New collection"
//                     image={bag4}
//                     title="The trendy bag"
//                     price="€150,-"
//                 />
//             </main>
//         </>
//     );
// }

// Stap 1 + 2 Tegels
// File Footer.js aangemaakt + function
// Product export Footer.js en Footer import App.js
function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <Button/>

            <main>
                <Product
                    label="Best seller"
                    image={bag1}
                    title="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    image={bag2}
                    title="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="New collection"
                    image={bag3}
                    title="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New collection"
                    image={bag4}
                    title="The trendy bag"
                    price="€150,-"
                />
            </main>

            <footer>
                <Footer
                    titleFooter="THE BRAND"
                    textFooter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus turpis, tempor a diam quis, euismod blandit erat. Vestibulum bibendum."
                />
                <Footer
                    image={brand}
                />
                <Footer
                    titleFooter="OUR STORY"
                    textFooter="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus turpis, tempor a diam quis, euismod blandit erat. Vestibulum bibendum."
                />
                <Footer
                    image={story}
                />
            </footer>
        </>
    );
}

export default App;