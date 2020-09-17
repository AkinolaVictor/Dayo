import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import Nav from "./components/general/Nav";
import Footer from "./components/general/Footer";
import Products from "./components/products/Products";
import ProdPreview from "./components/products/ProdPreview";
import WishList from "./components/products/WishList";
import Cart from "./components/products/Cart";
import Stores from './components/stores/Stores';
import CreateStore from './components/stores/CreateStore';
import MyStore from './components/stores/MyStore';
import CreateProd from './components/stores/CreateProd';
import Login from './components/login/Login';
import CreateAccount from './components/login/CreateAccount';
import Blog from './components/blog/Blog';
import CreateBlog from './components/blog/CreateBlog';
import BlogPreview from './components/blog/BlogPreview';

export default class Renderer extends Component {
    render() {
        return (
            <div className='myApp'>
                <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/product/previews" component={ProdPreview} />
                    <Route path="/product/wishlist" component={WishList} />
                    <Route path="/product/cart" component={Cart} />
                    <Route path="/stores" component={Stores} />
                    <Route path="/store/createstore" component={CreateStore} />
                    <Route path="/store/mystore" component={MyStore} />
                    <Route path="/store/mystoreproduct/createproduct" component={CreateProd} />
                    <Route path="/login" component={Login} />
                    <Route path="/createaccount" component={CreateAccount} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blogs/createblog" component={CreateBlog} />
                    <Route path="/blogs/blogpreview" component={BlogPreview} />
                </Switch>
                <Footer />
            </div>
        )
    }
}
