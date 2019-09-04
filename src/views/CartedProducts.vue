<template>
  <div class="carted_products">
    <!--  <div v-for="carted_product in carted_products">
      {{ carted_product.product.name }}
    </div> -->
    <section class="shopping-cart">
      <!-- .shopping-cart -->
      <div class="container">
        <div class="col-md-12">
          <h2>You cart items</h2>
          <table>
            <tr>
              <th></th>
              <th>Product name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th></th>
            </tr>
            <tr v-for="carted_product in carted_products">
              <td><img src="assets/images/cart-img1.jpg" alt="13" /></td>
              <td>{{ carted_product.product.name }}</td>
              <td>
                {{ carted_product.product.description }}
              </td>
              <td>
                <strong>{{ carted_product.product_price }}</strong>
              </td>
              <td>{{ carted_product.quantity }}</td>
              <td>
                <strong>{{ carted_product.product_price * carted_product.quantity }}</strong>
                <span v-if="false">{{ (subtotal += carted_product.product_price * carted_product.quantity) }}</span>
              </td>
              <td>
                <span class="red"><i class="fa fa-times" aria-hidden="true"></i></span>
              </td>
            </tr>
          </table>

          <div class="col-sm-6 col-md-6">
            <a href="#" class="button red">CONTINUE SHOPPING</a>
          </div>
          <div class="col-sm-10 col-md-10 text-right">
            <a href="#" class="button">UPDATE SHOPPING CART</a>
            <a href="#" class="button">CLEAR SHOPPING CART</a>
          </div>
          <!-- <div class="col-sm-4 col-md-4">
            <div class="shipping-outer">
              <h2>Calculate shipping</h2>
              <div class="row">
                <ul>
                  <li> -->
          <
          <!-- div class="col-md-12 counttry"> -->
          <!-- <div class="lable">Select your Counttry:</div>
                      <input name="counttry" placeholder="United States (USA)" type="text" />
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="lable">Select your State:</div>
                      <div class="size State">
                        <div class="select-option">
                          <select>
                            <option value="28">28</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="Featured Pots">State / City</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="lable">Zip Code:</div>
                      <input name="counttry" placeholder="Zip Code" type="text" />
                    </div>
                  </li>
                </ul>
              </div>
              <a href="#" class="button2">Update Shipping</a> -->
          <!--  </div>
          </div> -->
          <div class="col-sm-4 col-md-4">
            <div class="shipping-outer">
              <!-- <h2>Coupon code</h2>
              <ul>
                <li>
                  <div class="col-md-12">
                    <div class="lable">Coupon Code:</div>
                    <input name="Coupon Code" placeholder="Coupon Code" type="text" />
                  </div>
                </li>
              </ul>
              <a href="#" class="button2">REdeem code</a> -->
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="shipping-outer">
              <h2>Cart totals</h2>
              <ul>
                <li>
                  Cart Subtotal:
                  <strong>{{ subtotal }}</strong>
                </li>
                <li>
                  Shipping and Handling:
                  <strong>Free Shipping</strong>
                </li>
                <li>
                  Cart Totals:
                  <strong>$650.00</strong>
                </li>
              </ul>
              <div class="text-center">
                <a href="#" class="redbutton">Proceed to checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.shopping-cart -->
    </section>
    <section class="subscribe text-center">
      <!-- .subscribe -->
      <!-- <div class="container">
        <h2>Get Discount Info</h2>
        <p>
          Subscribe to the Loft and Vine mailing list to receive updates on new arrivals, special offers and
          <br />
          other discount information.
        </p>
        <input type="text" placeholder="Subscribe to our newsletter..." />
        <input type="button" value="Subscribe" />
      </div> -->
      <!-- /.subscribe -->
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    axios.get("/api/carted_products").then(response => {
      console.log(response.data);
      this.carted_products = response.data;
    });
  },
  data: function() {
    return {
      carted_products: [],
      subtotal: 0
    };
  }
};
</script>

<!-- <div class="container">
      <div class="col-md-12">
        <h2>You cart items</h2>
        <table>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th></th>
          </tr>
          <tr>
            <td><img src="assets/images/cart-img1.jpg" alt="13"></td>
            <td>Name product #01</td>
            <td>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.</td>
            <td><strong>$160.00</strong></td>
            <td><input type="number" name="quantity" min="1" max="500"></td>
            <td><strong>$160.00</strong></td>
            <td><span class="red"><i class="fa fa-times" aria-hidden="true"></i></span></td>
          </tr>
          <tr>
            <td><img src="assets/images/cart-img2.jpg" alt="13"></td>
            <td>Name product #02</td>
            <td>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.</td>
            <td><strong>$180.00</strong></td>
            <td><input type="number" name="quantity" min="1" max="500"></td>
            <td><strong>$180.00</strong></td>
            <td><span><i class="fa fa-times" aria-hidden="true"></i></span></td>
          </tr>
        </table>
        <div class="col-sm-6 col-md-6">
          <a href="#" class="button red">CONTINUE SHOPPING</a>
        </div>
        <div class="col-sm-6 col-md-6 text-right">
          <a href="#" class="button">UPDATE SHOPPING CART</a>
          <a href="#" class="button">CLEAR SHOPPING CART</a>
        </div>
        <div class="col-sm-4 col-md-4">
          <div class="shipping-outer">
            <h2>Calculate shipping</h2>
            <div class="row">
              <ul>
                <li>
                  <div class="col-md-12 counttry">
                    <div class="lable">Select your Counttry:</div>
                    <input name="counttry" placeholder="United States (USA)" type="text">
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="lable">Select your State:</div>
                    <div class="size State">
                      <div class="select-option">
                        <select>
                                       <option value="28">28</option>
                                       <option value="32">32</option>
                                       <option value="34">34</option>
                                       <option value="36">36</option>
                                       <option value="Featured Pots">State / City</option>
                                    </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6">
                    <div class="lable">Zip Code:</div>
                    <input name="counttry" placeholder="Zip Code" type="text">
                  </div>
                </li>
              </ul>

            </div>
            <a href="#" class="button2">Update Shipping</a>
          </div>
        </div>
        <div class="col-sm-4 col-md-4">
          <div class="shipping-outer">
            <h2>Coupon code</h2>
            <ul>
              <li>
                <div class="col-md-12">
                  <div class="lable">Coupon Code:</div>
                  <input name="Coupon Code" placeholder="Coupon Code" type="text">
                </div>
              </li>
            </ul>
            <a href="#" class="button2">REdeem code</a>
          </div>
        </div>
        <div class="col-sm-4 col-md-4">
          <div class="shipping-outer">
            <h2>Cart totals</h2>
            <ul>
              <li>Cart Subtotal: <strong>$640.00</strong></li>
              <li>Shipping and Handling: <strong>$10.00</strong></li>
              <li>Cart Totals: <strong>$650.00</strong></li>
            </ul>
            <div class="text-center">
              <a href="#" class="redbutton">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
