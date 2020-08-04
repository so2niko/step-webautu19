import Publisher from './helpers/publisher.js';
import ControllerProduct from './components/product/controller_product.js';
import ControllerCart from './components/cart/controller_cart.js';
import ControllerForm from './components/form/controller_form.js';

const publisher = new Publisher();

const products = new ControllerProduct(publisher.methods);
const cart = new ControllerCart(publisher.methods);
const form = new ControllerForm(publisher.methods);
