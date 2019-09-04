<template>
  <div class="contact">
    <!--  <button v-on:click="contact()">contact</button> -->
    <section>
      <!-- .contact form -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-form">
              <div class="contact-title">
                <h2>
                  Contact Info
                </h2>
              </div>
            </div>
            <div class="col-md-12 contact-info">
              <ul>
                <li>
                  <div class="img-icon">
                    <img src="assets/images/contact-icon1.jpg" alt="phone-icon" />
                  </div>
                  <strong>Our Address</strong>
                  <br />
                  61 west 23rd Street New York , NY 10010
                </li>
                <li>
                  <div class="img-icon">
                    <img src="assets/images/contact-icon2.jpg" alt="phone-icon" />
                  </div>
                  <strong>Phone</strong>
                  <br />
                  Office: (800) 123 456 789
                </li>
                <li>
                  <div class="img-icon">
                    <img src="assets/images/contact-icon3.jpg" alt="phone-icon" />
                  </div>
                  <strong>email Address</strong>
                  <br />
                  Email: support@loftandvine.com
                </li>
              </ul>
              <p>
                Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to
                use and fully responsive and retina ready. Vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi.
              </p>
              <div class="f-sicon2">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <div class="contact-title">
                <h2>
                  Contact From
                </h2>
              </div>
              <form action="#" method="post" id="commentform" class="comment-form">
                <div class="col-md-6">
                  <p>
                    Name
                    <span>*</span>
                  </p>
                  <p class="comment-form-author">
                    <input id="author" name="author" value="" size="30" type="text" />
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    Email
                    <span>*</span>
                  </p>
                  <p class="comment-form-email">
                    <input id="email" name="email" value="" size="30" type="text" />
                  </p>
                </div>
                <div class="col-md-12">
                  <p>
                    Comments
                    <span>*</span>
                  </p>
                  <p class="comment-form-comment">
                    <textarea
                      id="comment"
                      name="comment"
                      cols="45"
                      rows="6"
                      placeholder="Comment"
                      aria-required="true"
                    ></textarea>
                  </p>
                </div>
                <div class="col-md-12">
                  <p class="form-submit">
                    <input name="submit" id="submit" class="btn btn-secondary" value="send messages" type="submit" />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- /.contact form  -->
    </section>
    <section>
      <img src="assets/images/contact-map.jpg" alt="map" />
    </section>
    <!--  <h1>{{ message }}</h1>
    <a href="support@betterplants.com?Subject=Hey%There">Send Mail</a> -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Contact Us!"
    };
  },
  created: function() {},
  methods: {}
};
</script>
