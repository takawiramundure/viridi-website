<template>
  <section id="contact">
    <div class="container">
      <div class="row wow fadeInUp">
        <div class="col-lg-4 col-md-4">
          <div class="contact-about">
            <h4>Viridi Solutions</h4>
            <p>Viridi Solutions (Private) Limited herein also referred to as Innoregar is a company incorporated and domiciled in Zimbabwe. Viridi Solutions started operations in 2017 and the company specializes in production of green innovative solutions in the energy sector.</p>
            <div class="social-links">
              <a href="#" class="twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#" class="google-plus">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-3 col-md-4">
            <div class="contact-about">
              <h4>Our Values</h4>
              <div>
                <i class="ion-ios-location-outline"></i>
                <p>Innovation<br>
                Innovation<br>
                Innovation<br>
                Innovation</p>
              </div>
            </div>
        </div>-->

        <div class="col-lg-5 col-md-8">
          <div class="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action method="post" role="form" class="contactForm">
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-lg-6">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center">
                <button type="submit" title="Send Message">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="contact-about">
            <div>
              <img
              style="top: 20;"
                src="//a.storyblok.com/f/71187/1280x800/685d568ce1/logo-web.png"
                width="200px"
                alt
                title
              />
              <p>Cell :	<a href="tel:+263713118873">+263713118873</a></p>
              <p>Email: <a href="mailto:info@viridisolutions.com">info@viridisolutions.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Contact Section
--------------------------------*/

#contact {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 60px 0;
  overflow: hidden;
}

#contact .contact-about h3 {
  font-size: 36px;
  margin: 0 0 10px 0;
  padding: 0;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #1dc8cd;
}

#contact .contact-about p {
  font-size: 14px;
  line-height: 24px;
  font-family: "Montserrat", sans-serif;
  color: #888;
}

#contact .social-links {
  padding-bottom: 20px;
}

#contact .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #fff;
  color: #1dc8cd;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  border: 1px solid #1dc8cd;
}

#contact .social-links a:hover {
  background: #1dc8cd;
  color: #fff;
}

#contact .info {
  color: #333333;
}

#contact .info i {
  font-size: 32px;
  color: #1dc8cd;
  float: left;
  line-height: 1;
}

#contact .info p {
  padding: 0 0 10px 42px;
  line-height: 28px;
  font-size: 14px;
}

#contact .form #sendmessage {
  color: #1dc8cd;
  border: 1px solid #1dc8cd;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #sendmessage.show,
#contact .form #errormessage.show,
#contact .form .show {
  display: block;
}

#contact .form .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#contact .form input,
#contact .form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

#contact .form button[type="submit"] {
  background: linear-gradient(45deg, #1de099, #1dc8cd);
  border: 0;
  border-radius: 20px;
  padding: 8px 30px;
  color: #fff;
}

#contact .form button[type="submit"]:hover {
  cursor: pointer;
}
</style>