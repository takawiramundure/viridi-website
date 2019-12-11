<template>
  <section id="intro">
    <div class="intro-text">
      <h2>Welcome to Viridi Solutions</h2>
      <p>We are a Zimbabwean owned Green Energy Innovations Company</p>
      <a href="#about" class="btn-get-started scrollto"><img src="//a.storyblok.com/f/71187/1280x800/685d568ce1/logo-web.png" width="200px" alt /></a>
      
    </div>

    <div class="product-screens">
      <div class="product-screen-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
        <img src="//a.storyblok.com/f/71187/314x600/eaa2218985/product-screen-1.png" alt />
      </div>

      <div class="product-screen-2 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.6s">
        <img src="//a.storyblok.com/f/71187/314x600/b45aa89602/product-screen-2.png" alt />
      </div>

      <div class="product-screen-3 wow fadeInUp" data-wow-duration="0.6s">
        <img src="//a.storyblok.com/f/71187/314x600/6563f70c41/product-screen-3.png" alt />
      </div>
    </div>
  </section>
  <!-- #intro -->
</template>

<style lang="scss" scoped>
#intro {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      45deg,
      rgba(227, 240, 235, 0.8),
      rgba(29, 200, 205, 0.8)
    ),
    url("//a.storyblok.com/f/71187/1920x1280/d144c4c9a3/intro-bg.jpg") center top no-repeat;
  background-size: cover;
  position: relative;
}

#intro .intro-text {
  position: absolute;
  left: 0;
  top: 60px;
  right: 0;
  height: calc(50% - 60px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

#intro h2 {
  margin: 30px 0 10px 0;
  padding: 0 15px;
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;
  color: #fff;
}

#intro p {
  color: #fff;
  margin-bottom: 20px;
  padding: 0 15px;
  font-size: 24px;
}

#intro .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 28px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid #fff;
  color: #fff;
}

#intro .btn-get-started:hover {
  color: #1dc8cd;
  background: #fff;
}

#intro .product-screens {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 50%;
}

#intro .product-screens img {
  box-shadow: 0px -2px 19px 4px rgba(0, 0, 0, 0.29);
}

#intro .product-screens .product-screen-1 {
  position: absolute;
  z-index: 30;
  left: calc(50% + 54px);
  bottom: 0;
  top: 30px;
}

#intro .product-screens .product-screen-2 {
  position: absolute;
  z-index: 20;
  left: calc(50% - 154px);
  bottom: 0;
  top: 90px;
}

#intro .product-screens .product-screen-3 {
  position: absolute;
  z-index: 10;
  left: calc(50% - 374px);
  bottom: 0;
  top: 150px;
}
</style>
