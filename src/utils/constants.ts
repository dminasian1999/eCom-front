import { NavItemT } from "./types.ts"
import stationary from "../images/categories/stationary.jpg"
import toysGames from "../images/categories/toys&Games.jpg"
import artCraft from "../images/categories/art&Craft.jpg"

import jewelry from "../images/categories/jewelry.jpg"

import logo from "../images/logo/logo.jpg"
import banner1 from "../images/slideshow-banners/banner1.jpg"
import banner2 from "../images/slideshow-banners/banner2.jpg"
import banner3 from "../images/slideshow-banners/banner3.jpg"
import banner4 from "../images/slideshow-banners/banner4.jpg"

export const banner1Img = banner1
export const banner2Img = banner2
export const banner3Img = banner3
export const banner4Img = banner4
export const logoImg = logo

export const navItems: NavItemT[] = [
  // { title: 'Home',            route: 'home' },
  // { title: 'Shop',             route: 'shop' },
  // { title: 'Sells',               route: 'sells' },
  // { title: 'Admin',               route: 'admin' },
  // { title: 'Products',               route: 'products' },
  // { title: 'Cart',               route: 'cart' },
  // { title: 'Checkout',               route: 'checkout' },
  // { title: 'About',               route: 'about' },
  // { title: 'Contact',               route: 'contact' },
  // { title: 'WishList',               route: 'wishlist' },
  // { title: 'Account',               route: 'account' },
  { title: "Stationery", route: "stationery" },
  { title: "For Children", route: "children" },
  { title: "Dishes and Kitchen", route: "dish-kitchen" },
  { title: "Festive accessories", route: "festive" },
]

export const categories = [
  {
    title: "Stationery",
    imageUrl: stationary,
    route: "stationery",
    types: [
      { title: "School Supplies", route: "school-supplies", icon: "fa fa-school" },
      { title: "Writing & Drawing Tools", route: "writing-drawing-tools", icon: "fa fa-pen" },
      { title: "Notebooks & Paper", route: "notebooks-paper", icon: "fa fa-book" },
      { title: "Bags & Pencil Cases", route: "bags-pencil-cases", icon: "fa fa-briefcase" },
      { title: "Office Essentials", route: "office-essentials", icon: "fa fa-archive" },
      { title: "Binding & Laminating", route: "binding-laminating", icon: "fa fa-paperclip" },
      { title: "Art & Craft Supplies", route: "art-craft-supplies", icon: "fa fa-paintbrush" }
    ]
  },
  {
    title: "For Children",
    imageUrl: toysGames,
    route: "children",
    types: [
      { title: "Toys & Games", route: "toys-games", icon: "fa fa-gamepad" },
      { title: "Creative & Educational Supplies", route: "creative-educational-supplies", icon: "fa fa-puzzle-piece" },
      { title: "Feeding & Food Accessories", route: "feeding-accessories", icon: "fa fa-bottle-water" },
      { title: "Swimming & Outdoor Accessories", route: "swimming-outdoor-accessories", icon: "fa fa-life-ring" },
      { title: "General Children’s Accessories", route: "children-accessories", icon: "fa fa-smile" }
    ]
  },
  {
    title: "Dishes and Kitchen",
    imageUrl: artCraft,
    route: "dish-kitchen",
    types: [
      { title: "Products from Glass", route: "glass-products", icon: "fa fa-wine-glass" },
      { title: "Coffee, Tea Utensils", route: "coffee-tea-utensils", icon: "fa fa-mug-hot" },
    ]
  },
  {
    title: "Festive Accessories",
    imageUrl: jewelry,
    route: "festive",
    types: [
      { title: "Greeting & Postcards", route: "greeting-postcards", icon: "fa fa-envelope" },
      { title: "Gift Packaging", route: "gift-packaging", icon: "fa fa-box" },
      { title: "Gifts & Souvenirs", route: "gifts-souvenirs", icon: "fa fa-gift" },
      { title: "Jewelry", route: "festive-jewelry", icon: "fa fa-gem" }
    ]
  }
]

export const baseUrl = "http://localhost:8080/users"
export const baseUrlBlog = "http://localhost:8080"
// export const baseUrl = "https://ecom-back-bafx.onrender.com/users";
// export const baseUrlBlog = "https://ecom-back-bafx.onrender.com";
export const createToken = (login: string, password: string) =>
  `Basic ${window.btoa(login + ":" + password)}`

export const defaultPic = ""

export const periodMinute = 10000 * 60 * 10

export const adminInfo = {
  username: "admin",
  firstName: "Admin",
  lastName: "Admin",
  phone: " +37494923322",
  address: " Avshar 0605, Armenia",
  city: "Admin",
  email: " tamar@gmail.com",
}

// export const demoProducts =()
// =>{
//     return(
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//       <div className="product-image">
//       <a href="#">
//       <img
//         className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image2.jpg"
//     src="src/images/product-images/product-image2.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image2-1.jpg"
//     src="src/images/product-images/product-image2-1.jpg"
//     alt="image"
//     title="product"
//       />
//       </a>
//
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add To Cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn"
//     >
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Elastic Waist Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$748.00</span>
//     </div>
//     <div className="product-review">
//     <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       </div>
//       <ul className="swatches">
//     <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant2-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant2-2.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant2-3.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant2-4.jpg"
//     alt="image"
//       />
//       </li>
//       </ul>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image3.jpg"
//     src="src/images/product-images/product-image3.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image3-1.jpg"
//     src="src/images/product-images/product-image3-1.jpg"
//     alt="image"
//     title="product"
//     />
//     <div className="product-labels rectangular">
//     <span className="lbl pr-label2">Hot</span>
//       </div>
//       </a>
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add To Cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">3/4 Sleeve Kimono Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$550.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       <ul className="swatches">
//     <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-2.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-3.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-4.jpg"
//     alt="image"
//       />
//       </li>
//       </ul>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image4.jpg"
//     src="src/images/product-images/product-image4.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image4-1.jpg"
//     src="src/images/product-images/product-image4-1.jpg"
//     alt="image"
//     title="product"
//     />
//     <div className="product-labels">
//     <span className="lbl on-sale">Sale</span>
//       </div>
//       </a>
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Select Options
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Cape Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="old-price">$900.00</span>
//     <span className="price">$788.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       <ul className="swatches">
//     <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant4-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant4-2.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant4-3.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant4-4.jpg"
//     alt="image"
//       />
//       </li>
//       </ul>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image5.jpg"
//     src="src/images/product-images/product-image5.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image5-1.jpg"
//     src="src/images/product-images/product-image5-1.jpg"
//     alt="image"
//     title="product"
//     />
//     <div className="product-labels">
//     <span className="lbl on-sale">Sale</span>
//       </div>
//       </a>
//
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add To Cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Paper Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$550.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       <i className="font-13 fa fa-star"></i>
//       </div>
//       <ul className="swatches">
//     <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-2.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-3.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant3-4.jpg"
//     alt="image"
//       />
//       </li>
//       </ul>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image17.jpg"
//     src="src/images/product-images/product-image17.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image17-1.jpg"
//     src="src/images/product-images/product-image17-1.jpg"
//     alt="image"
//     title="product"
//     />
//     <div className="product-labels">
//     <span className="lbl on-sale">Sale</span>
//       </div>
//       </a>
//
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add To Cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Buttercup Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$420.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image18.jpg"
//     src="src/images/product-images/product-image18.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image18-1.jpg"
//     src="src/images/product-images/product-image18-1.jpg"
//     alt="image"
//     title="product"
//       />
//       </a>
//
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add To Cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Lima Shirt</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$698.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       <ul className="swatches">
//     <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant5-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant5-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant5-1.jpg"
//     alt="image"
//       />
//       </li>
//       <li className="swatch medium rounded">
//     <img
//       src="src/images/product-images/variant5-1.jpg"
//     alt="image"
//       />
//       </li>
//       </ul>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image19.jpg"
//     src="src/images/product-images/product-image19.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image19-1.jpg"
//     src="src/images/product-images/product-image19-1.jpg"
//     alt="image"
//     title="product"
//       />
//       </a>
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add To Cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Romary Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$348.60</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="primary blur-up lazyload"
//     data-src="src/images/product-images/product-image20.jpg"
//     src="src/images/product-images/product-image20.jpg"
//     alt="image"
//     title="product"
//     />
//     <img
//       className="hover blur-up lazyload"
//     data-src="src/images/product-images/product-image20-1.jpg"
//     src="src/images/product-images/product-image20-1.jpg"
//     alt="image"
//     title="product"
//     />
//     <div className="product-labels">
//     <span className="lbl pr-label3">Popular</span>
//       </div>
//       </a>
//
//       <form
//     className="variants add"
//     action="#"
//     // onclick="window.location.href='cart.html'"
//     method="post"
//     >
//     <button className="btn btn-addto-cart" type="button">
//       Add to cart
//     </button>
//     </form>
//     <div className="button-set">
//     <a
//       href="javascript:void(0)"
//     title="Quick View"
//     className="quick-view-popup quick-view"
//     data-toggle="modal"
//     data-target="#content_quickview"
//     >
//     <i className="icon anm anm-search-plus-r"></i>
//       </a>
//       <div className="wishlist-btn">
//     <a
//       className="wishlist add-to-wishlist"
//     href="#"
//     title="Add to Wishlist"
//     >
//     <i className="icon anm anm-heart-l"></i>
//       </a>
//       </div>
//       <div className="compare-btn">
//     <a
//       className="compare add-to-compare"
//     href="compare.html"
//     title="Add to Compare"
//     >
//     <i className="icon anm anm-random-r"></i>
//       </a>
//       </div>
//       </div>
//       </div>
//
//       <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Floral Sleeveless Dress</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$380.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       </div>
//       </div>
//       <div className="col-6 col-sm-6 col-md-4 col-lg-3 item grid-view-item--sold-out">
//     <div className="product-image">
//     <a href="#">
//     <img
//       className="grid-view-item__image primary blur-up lazyload"
//     // data-src="src/images/product-images/product-image27.jpg"
//     src="src/images/product-images/product-image27.jpg"
//     alt="image"
//     title="product"
//       />
//       {/*src="src/images/product-images/product-image27.jpg" alt="image" title="product" />*/}
//       <img
//     className="grid-view-item__image hover blur-up lazyload"
//     data-src="src/images/product-images/product-image27-1.jpg"
//     src="src/images/product-images/product-image27-1.jpg"
//     alt="image"
//     title="product"
//     />
//     <span className="sold-out">
//       <span>Sold out</span>
//     </span>
//     </a>
//     </div>
//
//     <div className="product-details text-center">
//     <div className="product-name">
//     <a href="#">Camelia Reversible Jacket in Navy/Blue</a>
//     </div>
//     <div className="product-price">
//     <span className="price">$488.00</span>
//     </div>
//
//     <div className="product-review">
//     <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       <i className="font-13 fa fa-star-o"></i>
//       </div>
//       </div>
//       </div>
//     )
// }
