<template>
  <header id="main-header">
    <div id="logo" class="pull-left">
      <a href="/home">
        <img src="//a.storyblok.com/f/71187/1280x800/685d568ce1/logo-web.png" alt title />
        <!-- <img src="/assets/img/logo-web.png" alt title /> -->
      </a>
    </div>
    <nav id="main-nav">
      <ul class="nav-links">
        <nuxt-link to="#intro" tag="li" class="nav-link">
          <a>Home</a>
        </nuxt-link>
        <nuxt-link to="#about" tag="li" class="nav-link">
          <a>About Us</a>
        </nuxt-link>
        <nuxt-link to="#features" tag="li" class="nav-link">
          <a>Features</a>
        </nuxt-link>
        <nuxt-link to="#products" tag="li" class="nav-link">
          <a>Products</a>
        </nuxt-link>
        <nuxt-link to="#team" tag="li" class="nav-link">
          <a>Team</a>
        </nuxt-link>
        <nuxt-link to="#gallery" tag="li" class="nav-link">
          <a>Gallery</a>
        </nuxt-link>
        <nuxt-link to="#contact" tag="li" class="nav-link">
          <a>Contact Us</a>
        </nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link">
          <a>AboutPage</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
#main-header {
  height: 4.5rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  width: 100%;
  background: linear-gradient(45deg, #ecf3f1, #1dc8cd);
  padding: 20px 0;
  transition: all 0.5s;
}

#main-header #logo {
  float: left;
}

#main-header #logo img {
  padding-left: 15px;
  margin: -10px;
  height: 74px;
}

#main-nav {
  width: 100%;
}

/* Nav Menu Styling */

.nav-links {
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-link {
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color:black;
}

</style>