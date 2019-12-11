<template>
  <section id="products" class="section-bg">
    <div class="container">
      <div class="section-header">
        <h3 class="section-title">Products</h3>
        <span class="section-divider"></span>
        <p
          class="section-description"
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="box wow fadeInLeft">
            <h3>Vi-Fuels</h3>
            <h4>
              <!-- <sup>$</sup>0 -->
              <span>Biodiesel</span>
            </h4>
            <p>We intend on building the second production plat Bio transformer oil in SADC ,which will supply the region and rest of Africa. Currently we have outsourced the supply of soya beans as it is the main raw material. At the moment we are in search of a financier who will join us and making this big project a reality.</p>
            <a href="#" class="get-started-btn">Get Started</a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="box featured wow fadeInUp">
            <h3>Vi-Oils</h3>
            <h4>
              <!-- <sup>$</sup>29 -->
              <span>Organic Transformer oil</span>
            </h4>
            <p>It is a biofuel  that is produced through eco-friendly biological processes. It is a derivative of agricultural produce and is manufactured through a process of anaerobic digestation. MOIL is an alternative to insulating oils and lubricants produced be geological processes such as those involved in the formation of fossil fuels, such as coal and petroleum.  Its main purpose is to be used as transformer oil. </p>
            <a href="#" class="get-started-btn">Get Started</a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="box wow fadeInRight">
            <h3>Vi-Safety</h3>
            <h4>
              <!-- <sup>$</sup>49 -->
              <span>Oil spill recovery kits</span>
            </h4>
            <p>We intend on building the second production plat Bio transformer oil in SADC ,which will supply the region and rest of Africa. Currently we have outsourced the supply of soya beans as it is the main raw material. At the moment we are in search of a financier who will join us and making this big project a reality.</p>
            <a href="#" class="get-started-btn">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Pricing Section
--------------------------------*/

#products {
  padding: 60px 0 60px 0;
  overflow: hidden;
}

#products .box {
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
  background: #fff;
  text-align: center;
}

#products h3 {
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 28px;
}

#products h4 {
  font-size: 46px;
  color: #1dc8cd;
  font-weight: 300;
}

#products h4 sup {
  font-size: 20px;
  top: -20px;
}

#products h4 span {
  color: #bababa;
  font-size: 20px;
}

#products ul {
  padding: 0;
  list-style: none;
  color: #999;
  text-align: left;
  line-height: 20px;
}

#products ul li {
  padding-bottom: 12px;
}

#products ul i {
  color: #1dc8cd;
  font-size: 18px;
  padding-right: 4px;
}

#products .get-started-btn {
  background: #515e61;
  display: inline-block;
  padding: 6px 30px;
  border-radius: 20px;
  color: #fff;
  transition: none;
  font-size: 14px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
}

#products .featured {
  border: 2px solid #1dc8cd;
}

#products .featured .get-started-btn {
  background: linear-gradient(45deg, #1de099, #1dc8cd);
}
</style>