<template>
<section>
    <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-lg-left text-center">
          <div class="copyright">
            &copy; Copyright <strong>Viridi Solutions - Formerly Innoregar</strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://takaMuInc.biz">takaMuInc</a>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" class="scrollto">Home</a>
            <a href="#about" class="scrollto">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer><!-- #footer -->
  <div><a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a></div>
</section>
</template>

<style lang="scss">
#footer {
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 0;
  color: #333;
  font-size: 14px;
}

#footer .credits {
  font-size: 13px;
  color: #888;
}

#footer .footer-links a {
  color: #666;
  padding-left: 15px;
}

#footer .footer-links a:first-child {
  padding-left: 0;
}

#footer .footer-links a:hover {
  color: #1dc8cd;
}

/* Back to top button */

.back-to-top {
  position: fixed;
  display: none;
  background: linear-gradient(45deg, #1de099, #1dc8cd);
  color: #fff;
  padding: 2px 20px 8px 20px;
  font-size: 16px;
  border-radius: 4px 4px 0 0;
  right: 15px;
  bottom: 0;
  transition: none;
}

.back-to-top:focus {
  background: linear-gradient(45deg, #1de099, #1dc8cd);
  color: #fff;
  outline: none;
}

.back-to-top:hover {
  background: #1dc8cd;
  color: #fff;
}
</style>