<template>
  <section id="about" class="section-bg">
    <div class="container-fluid">
      <div class="section-header">
        <h3 class="section-title">About Us</h3>
        <span class="section-divider"></span>
        <p class="section-description">
          <!-- about_section_description = storyblok -->
          Viridi started operations in 2016 and the company specialises
          in production of green innovative solutions in the energy sector.
          <br />
        </p>
      </div>

      <div class="row">
        <div class="col-lg-6 about-img wow fadeInLeft">
          <!-- about_image = storyblok -->
          <img src="//a.storyblok.com/f/71187/1280x813/432eca7981/about-img.jpg" alt />
        </div>

        <div class="col-lg-6 content wow fadeInRight">
          <!-- about_title = storyblok -->
          <h2>{{about_title}}</h2>
          <!-- about_subtitle = storyblok -->
          <h3>At Viridi Solutions (Private) Limited, quality and innovation is our hallmark. As a company we are cognizant of the fact that success is the ability of a company to innovate and develop quality products that stay ahead of market expectations.</h3>
          <!-- about_description = storyblok -->
          <p>The quality, effectiveness and impact of products on offer were tested by different accredited institutions which include</p>

          <ul>
            <li>
              <i class="fas fa-recycle"></i> The Standard Association of Zimbabwe (SAZ);
            </li>
            <li>
              <i class="fas fa-recycle"></i> The Government Analyst (Under Ministry of Health and Child Welfare)
            </li>
            <li>
              <i class="fas fa-recycle"></i> Zimbabwe Electricity Transmission and Distribution Centre (ZETDC)
            </li>
          </ul>
          <!-- about_content = storyblok -->
          <p>
            <b>Our Strategic intent:</b> To be the most dominant player in the production and marketing of vegetable transformer oil in the energy and related sectors within Africa and beyond.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about_title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#about {
  padding: 60px 0;
  overflow: hidden;
}

#about .about-img {
  height: 510px;
  overflow: hidden;
}

#about .about-img img {
  margin-left: -15px;
  max-width: 100%;
}

#about .content .h2 {
  color: #333;
  font-weight: 300;
  font-size: 24px;
}

#about .content h3 {
  color: #777;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  font-style: italic;
}

#about .content p {
  line-height: 26px;
}

#about .content p:last-child {
  margin-bottom: 0;
}

#about .content i {
  font-size: 20px;
  padding-right: 4px;
  color: #1dc8cd;
}

#about .content ul {
  list-style: none;
  padding: 0;
}

#about .content ul li {
  padding-bottom: 10px;
}

#about p {
  white-space: pre-line;
}
</style>