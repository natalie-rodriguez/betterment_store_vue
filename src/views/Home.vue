<template>
  <div class="home">
    <section class="banner-outer">
      <!-- .banner-outer -->
      <div class="elcontainer">
        <!-- .banner-bg -->
        <div class="banner-bg">
          <div class="col-sm-4 col-md-4">
            <!-- .banner-img -->
            <div class="banner-img animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
              <img
                src="https://cdn.shopify.com/s/files/1/1025/1611/products/bella-palm-windowsill-white_2000x.jpg?v=1535902228"
                alt="about-img1"
              />
              <div class="banner-text">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Bella Palm Windowsill White</h3>
                <p><a href="#">Discover Now</a></p>
              </div>
            </div>
            <!-- /.banner-outer -->
          </div>
          <div class="col-sm-4 col-md-4">
            <!-- .banner-img -->
            <div class="banner-img animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
              <img
                src="https://cdn.shopify.com/s/files/1/1025/1611/products/bella-plam-rondo-white_2000x.jpg?v=1566834896"
                alt="about-img1"
              />
              <div class="banner-text">
                <br />
                <br />
                <br />
                <br />
                <br />

                <h3>Bella Palm Rondo - white</h3>
                <p><a href="#">Discover Now</a></p>
              </div>
            </div>
            <!-- /.banner-outer -->
          </div>
          <div class="col-sm-4 col-md-4 animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
            <!-- .banner-img -->
            <div class="banner-img">
              <img
                src="https://cdn.shopify.com/s/files/1/1025/1611/products/bird-of-paradise-classico-charcoal_ef59719d-88c5-488f-8c8c-48863767f140_2000x.jpg?v=1535912129"
                alt="about-img1"
              />
              <div class="banner-text">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h3>Bird of Paradise</h3>
                <p><a href="#">Discover Now</a></p>
              </div>
            </div>
            <!-- /.banner-outer -->
          </div>
        </div>
        <!-- /.banner-bg -->
      </div>
      <!-- /.banner -->
    </section>
    <section class="new-arrivals">
      <!-- .new-arrivals -->
      <div class="container">
        <div class="tittle text-center">
          <h2>PLANTS DELIVERED THE RIGHT WAY</h2>
          <p>Hand-delivered. By our team of professionals. From our plant studio in Long Island City.</p>
          <br />

          <p>
            If you’ve ordered plants from a big box plant shipping service, you already know — they have a bad habit of
            delivering damaged plants.
          </p>
          <br />

          <p>We want you and your plant to live happily together, so we do things differently.</p>

          <br />

          <p>
            Your plant will be hand-delivered from our studio— in Long Island City. So you get to enjoy your plant right
            away. (Not the headache of a damaged plant and a shady return policy.)
          </p>
        </div>

        <div class="container">
          <div class="tittle text-center">
            <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
            <p>
              I had tried ordering plants from other companies, but they kept arriving with a damaged planter or brown
              leaves. When I saw that My City Plants used white glove, local delivery — I knew it would be different.
              Thankfully, I was right!”
            </p>
            <br />

            <p>Devanté, Manhattan.</p>

            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bZvL1wM0wSc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="row animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
          <div v-for="product in products" class="col-md-3">
            <!-- .pro-text -->
            <div class="pro-text">
              <!-- .pro-img -->
              <div class="pro-img">
                <img v-bind:src="product.image_url" alt="2" />

                <!-- .hover-img -->
                <div class="hover-img">
                  <ul>
                    <li>
                      <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="new tage">
                  <span class="new-text">NEW</span>
                  <span class="pres-text">-15%</span>
                </div>
                <!-- /.hover-img -->
              </div>
              <!-- /.pro-img -->
              <a v-bind:href="'/products/' + product.id">{{ product.name }}</a>
              <a href="#" class="addtocart">+ Add to cart</a>
              <div class="price">$160.00</div>
            </div>
            <!-- /.pro-text -->
          </div>

          <!--  <div class="col-md-12 text-center">
            <a href="#" class="lbtn">load more</a>
          </div> -->
        </div>
      </div>
      <!-- /.new-arrivals -->
    </section>
    <section class="banner-outer">
      <!-- .banner-outer -->
      <div class="col-sm-6 col-md-6">
        <!-- .banner-img -->
        <div class="banner-img">
          <!-- <img src="assets/images/bg-banner.jpg" alt="about-img1" /> -->
          <div class="banner-text2">
            <!-- <h4>Products Essentials</h4>
            <h3>Bottle With Wooden Cork</h3>
            <p>
              The Newtown sofa range is the first product Jonas Wagell has designed for Zaozuo, but one of the last to
              be finalized and launched.
            </p>
            <p>
              <a href="#">
                Buy now /
                <span>$196.98</span>
              </a>
            </p> -->
          </div>
        </div>
        <!-- /.banner-outer -->
      </div>

      <div class="col-sm-6 col-md-6">
        <!-- .banner-img -->
        <div class="banner-img">
          <!-- <img src="assets/images/bg-banner2.jpg" alt="about-img1" /> -->
          <div class="banner-text2">
            <!-- <h4>Products Essentials</h4>
            <h3>Hauteville Plywood Chair</h3>
            <p>
              The Newtown sofa range is the first product Jonas Wagell has designed for Zaozuo, but one of the last to
              be finalized and launched.
            </p>
            <p>
              <a href="#">
                Buy now /
                <span>$196.98</span> -->
            <!--  </a> -->
            <!--  </p> -->
          </div>
        </div>
        <!-- /.banner-outer -->
      </div>
      <!-- /.banner -->
    </section>
     <!-- <section class="new-arrivals">
       .new-arrivals -->
    <!-- <div class="container">
      <div class="tittle text-center"> -->
        <!-- <h2>Sale Off</h2>
        <p>tester est notare quam littera gothica quam nunc putamus parum claram!</p> -->
      <!-- </div> -->
      <!-- <div class="row animated wow zoomIn" data-wow-duration=".5s" data-wow-delay=".2s">
        <div class="col-5">
          .pro-text -->
          <!-- <div class="pro-text"> -->
            <!-- .pro-img -->
           <!--  <div class="pro-img"> -->
              <!-- <img src="assets/images/Products/21.jpg" alt="2" /> -->
              <!-- .hover-img -->
              <!-- <div class="hover-img">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
                      <i class="fa fa-search" aria-hidden="true"></i> -->
                 <!--    </a>
                  </li>
                </ul>
              </div>
              <div class="new tage">
                <span class="new-text">NEW</span>
                <span class="pres-text">-15%</span>
              </div> -->
              <!-- /.hover-img -->
            <!-- </div> -->
            <!-- /.pro-img -->
           <!--  <a href="#">Wooden container Bowl</a>
            <a href="#" class="addtocart">+ Add to cart</a>
            <div class="price">
              $160.00
              <span>200</span>
            </div>
          </div> -->
          <!-- /.pro-text -->
        <!-- </div>
        <div class="col-5"> -->
          <!-- .pro-text -->
         <!-- <div class="pro-text"> -->
            <!-- .pro-img -->
            <!-- <div class="pro-img">
              <img src="assets/images/Products/26.jpg" alt="2" /> -->
              <!-- .hover-img -->
              <!-- <div class="hover-img">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="discount tage"><span class="discount-text">-15%</span></div> -->
              <!-- /.hover-img -->
           <!--  </div> -->
            <!-- /.pro-img -->
            <!-- <a href="#">Wooden container Bowl</a>
            <a href="#" class="addtocart">+ Add to cart</a>
            <div class="price">
              $160.00
              <span></span>
            </div>
          </div> -->
          <!-- /.pro-text -->
        <!-- /div>
        <div class="col-5"> -->
          <!-- .pro-text -->
          <!-- div class="pro-text"> -->
            <!-- .pro-img -->
            <!-- div class="pro-img">
              <img src="assets/images/Products/24.jpg" alt="2" /> -->
              <!-- .hover-img -->
              <!-- <div class="hover-img">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="new tage">
                <span class="new-text">NEW</span>
                <span class="pres-text">-15%</span>
              </div> -->

              <!-- /.hover-img -->
           <!--  </div> -->
            <!-- /.pro-img -->
            <!-- <a href="#">Wooden container Bowl</a>
            <a href="#" class="addtocart">+ Add to cart</a>
            <div class="price">
              $160.00
              <span>200</span>
            </div>
          </div> -->
          <!-- /.pro-text -->
        <!-- </div>
        <div class="col-5"> -->
          <!-- .pro-text -->
         <!--  <div class="pro-text"> -->
            <!-- .pro-img -->
            <!-- <div class="pro-img">
              <img src="assets/images/Products/17.jpg" alt="2" /> -->
              <!-- .hover-img -->
              <!-- <div class="hover-img">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="discount tage"><span class="discount-text">-15%</span></div> -->
              <!-- /.hover-img -->
           <!--  </div> -->
            <!-- /.pro-img -->
            <!-- <a href="#">Wooden container Bowl</a>
            <a href="#" class="addtocart">+ Add to cart</a>
            <div class="price">$160.00</div>
          </div> -->
          <!-- /.pro-text -->
        <!-- </div>
        <div class="col-5"> -->
          <!-- .pro-text -->
          <!-- <div class="pro-text"> -->
            <!-- .pro-img -->
            <!-- <div class="pro-img">
              <img src="assets/images/Products/22.jpg" alt="2" /> -->
              <!-- .hover-img -->
              <!-- <div class="hover-img">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#quickModal" data-whatever="@mdo">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="new tage">
                <span class="new-text">NEW</span>
                <span class="pres-text">-15%</span>
              </div> -->
              <!-- /.hover-img -->
         <!--    </div> -->
            <!-- /.pro-img -->
            <!-- <a href="#">Wooden container Bowl</a>
            <a href="#" class="addtocart">+ Add to cart</a>
            <div class="price">$160.00</div>
          </div> -->
          <!-- /.pro-text -->
        <!-- </div>
      </div>
    </div> -->
    <!-- /.new-arrivals -->
    <!-- </section> -->
    <!-- <section class="client-icon">
      <div class="container">
        <ul>
          <li>
            <a href="#"><img src="assets/images/client-logo1.png" alt="client-logo1" /></a>
          </li>
          <li>
            <a href="#"><img src="assets/images/client-logo2.png" alt="client-logo2" /></a>
          </li>
          <li>
            <a href="#" class="active"><img src="assets/images/client-logo3.png" alt="client-logo3" /></a>
          </li>
          <li>
            <a href="#"><img src="assets/images/client-logo4.png" alt="client-logo4" /></a>
          </li>
          <li>
            <a href="#"><img src="assets/images/client-logo5.png" alt="client-logo4" /></a>
          </li>
        </ul>
      </div> -->
    <!--     </section> -->
   

    <!-- <section class="section-padding"> -->
    <!-- Latest News -->
    <!--    <div class="container">
        <div class="tittle text-center">
          <h2>Our Blog Posts</h2>
          <p>testingg est notare quam littera gothica quam nunc putamus parum claram!</p>
        </div>
        <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">
          <div class="news-box">
            <div class="news-img">
              <img src="assets/images/blog-img1.jpg" alt="news-img1" />
            </div>
            <div class="news-text">
              <a href="#">Anteposuerit litterarum formas.</a>
              <p>
                By
                <span>Zcubedesign</span>
                / September 11, 2017
              </p>
              <div class="news-text-content">
                hellooo est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum.
              </div>
              <a href="#" class="readbtn">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration=".2s" data-wow-delay=".1s">
          <div class="news-box">
            <div class="news-img">
              <img src="assets/images/blog-img2.jpg" alt="news-img1" />
            </div>
            <div class="news-text">
              <a href="#">Anteposuerit litterarum formas.</a>
              <p>
                By
                <span>Zcubedesign</span>
                / September 11, 2017
              </p>
              <div class="news-text-content">
                find this
              </div>
              <a href="#" class="readbtn">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration=".4s" data-wow-delay=".3s">
          <div class="news-box">
            <div class="news-img">
              <img src="assets/images/blog-img3.jpg" alt="news-img1" />
            </div>
            <div class="news-text">
              <a href="#">Anteposuerit litterarum formas.</a>
              <p>
                By
                <span>Zcubedesign</span>
                / September 11, 2017
              </p>
              <div class="news-text-content">
                hhhhhhhhhhhelllooo
              </div>
              <a href="#" class="readbtn">Read More</a>
            </div>
          </div>
        </div>
      </div> -->
    <!-- /Latest News -->
    <!--  </section> -->
    <!-- <section class="subscribe text-center"> -->
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

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Plant Lovers",
      products: [],
      currentProduct: {},
      searchTerm: "",
      sortAttribute: "",
      sortOrder: 1
    };
  },
  created: function() {
    console.log("hello from the created!");
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    showProductDetails: function(product) {
      console.log("hello from ShowProductDetails");
      if (this.currentProduct === product) {
        this.currentProduct = {};
      } else {
        this.currentProduct = product;
      }
    },
    updateProduct: function(theProduct) {
      console.log("The updateProduct action says helloooooooo");
      console.log(theProduct);
      axios.patch("api/products/" + theProduct.id, theProduct).then(response => {
        console.log(response.data);
        theProduct.name = response.data.name;
        theProduct.price = response.data.price;
        theProduct.description = response.data.description;
        theProduct.instock = response.data.instock;
        theProduct.supplier_id = response.data.supplier_id;
      });
    },
    destroyProduct: function(theProduct) {
      axios.delete("/api/products/" + theProduct.id, theProduct).then(response => {
        console.log(response.data);
        var index = this.products.indexOf(theProduct);
        this.products.splice(index, 1);
      });
    },
    setSortAttribute: function(attribute) {
      console.log(attribute);
      this.sortAttribute = attribute;
      if (this.sortOrder === 1) {
        this.sortOrder = -1;
      } else {
        this.sortOrder = 1;
      }
    }
  }
};
</script>
