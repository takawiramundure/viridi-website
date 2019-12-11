<template>
  <section id="gallery">
      <div class="container-fluid">
        <div class="section-header">
          <h3 class="section-title">Gallery</h3>
          <span class="section-divider"></span>
          <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div class="row no-gutters">

          <div class="col-lg-4 col-md-6">
            <div class="gallery-item wow fadeInUp">
              <a href="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" class="gallery-popup">
                <img src="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="gallery-item wow fadeInUp">
              <a href="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" class="gallery-popup">
                <img src="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="gallery-item wow fadeInUp">
              <a href="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" class="gallery-popup">
                <img src="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="gallery-item wow fadeInUp">
              <a href="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" class="gallery-popup">
                <img src="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="gallery-item wow fadeInUp">
              <a href="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" class="gallery-popup">
                <img src="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" alt="">
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="gallery-item wow fadeInUp">
              <a href="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" class="gallery-popup">
                <img src="//a.storyblok.com/f/71187/800x600/2a881cd160/gallery-1.jpg" alt="">
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
</template>

<style>
  /* Gallery Section
--------------------------------*/

#gallery {
  background: #fff;
  padding: 60px 0 0 0;
  overflow: hidden;
}

#gallery .container-fluid {
  padding: 0px;
}

#gallery .gallery-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: all ease-in-out 0.4s;
}

#gallery .gallery-item {
  overflow: hidden;
  position: relative;
  padding: 0;
  vertical-align: middle;
  text-align: center;
}

#gallery .gallery-item img {
  transition: all ease-in-out 0.4s;
  width: 100%;
}

#gallery .gallery-item:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

#gallery .gallery-item:hover .gallery-overlay {
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
}
</style>