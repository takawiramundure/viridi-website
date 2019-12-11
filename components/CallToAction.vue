<template>
  <section id="call-to-action">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-left">
          <h3 class="cta-title">Call To Action</h3>
          <p
            class="cta-text"
          >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
          <a class="cta-btn align-middle" href="#">Call To Action</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Call To Action Section
--------------------------------*/

#call-to-action {
  overflow: hidden;
  background: linear-gradient(rgba(29, 200, 205, 0.65), rgba(29, 205, 89, 0.2)),
    url(//a.storyblok.com/f/71187/1920x1223/a56cf158e0/call-to-action-bg.jpg) fixed center center;
  background-size: cover;
  padding: 80px 0;
}

#call-to-action .cta-title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

#call-to-action .cta-text {
  color: #fff;
}

#call-to-action .cta-btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 25px;
  transition: background 0.5s;
  margin: 10px;
  border: 2px solid #fff;
  color: #fff;
}

#call-to-action .cta-btn:hover {
  background: #1dc8cd;
  border: 2px solid #1dc8cd;
}
</style>