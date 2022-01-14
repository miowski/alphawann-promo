<template>
  <div id="app">
    <nav class="light">
      <div class="nav-bar">
        <h1 onclick="location.href='index.html'">A.W</h1>
        <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
          <div class="nav-toggle-bar"></div>
        </div>
      </div>
      <div class="menu">
        <div class="menu-content">
          <ul>
            <li>
              <router-link to="/bio">Biographie ></router-link>
            </li>
            <li>
              <router-link to="/discog">Discographie ></router-link>
            </li>
            <li>
              <a href="https://www.instagram.com/alphawann"><i class="fi-xnsuxl-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <footer class=".footer-dark light">
      <div class="footer-content">
        <div>
          <h3>Découvrir</h3>
          <ul>
            <li>
              <router-link to="/bio">Biographie ></router-link>
            </li>
            <li>
              <router-link to="/discog">Discographie ></router-link>
            </li>
          </ul>
        </div>
        <div class="footer-socials">
          <h3>Nous suivre</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/alphawann">
                <i class="fi-xnsuxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AlphonsoTheDon">
                <i class="fi-xnsuxl-twitter-solid"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Plus</h3>
          <p>
            Projet réalisé dans le cadre d'un projet pédagogique au département MMI de Montbéliard
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  transition: .2s;
  overflow-x: hidden;
  width: 100vw;
}

nav {
  height: 6.25rem;
}

nav, .intro, #home-discog, footer, .timeline {
  padding: 0 1rem;
}

nav .menu-open {
  padding: 0;
}

h1 {
  margin: 0;
  padding: 1.5rem;
}

.light, .light .button, .light a, .light p {
  color: #F2F2F2;
}

.dark, .dark .button, .dark a, .dark p {
  color: #202020;
}

.footer-dark {
  background: #202020;
}

.footer-dark > * {
  color: #F2F2F2;
}

ul {
  padding: 0;
  list-style-type: none;
}

#home div.intro.fs-section.light {
  background: url(assets/img/home-bgn-upscaled.jpg) no-repeat top -6.25rem center;
  height: calc(100vh - 6.25rem);
}

#bio div.intro.fs-section.dark {
  background: url(assets/img/bio-bgn-upscaled.jpg) no-repeat top -6.25rem center;
  background-size: cover;
  height: calc(100vh - 6.25rem);
}

#home-discog {
  background: url(assets/img/colors.png) no-repeat top -6.25rem center;
  height: 100vh;
}

#home-discog > div {
  display: flex;
  flex-direction: column;
}

#home nav {
  background: url(assets/img/home-bgn-upscaled.jpg) top;
}

#bio nav {
  background: url(assets/img/bio-bgn-upscaled.jpg) top;
  background-size: cover;
}

.section-text {
  position: relative;
  top: 30%;
}

.button {
  padding: 1.625rem 3.5rem;
  border: solid 2px #F2F2F2;
  border-radius: 0.625rem;
  margin-top: 3.75rem;
  background: none;
  width: fit-content;
}

.button:hover {
  background: rgba(255, 255, 255, 0.1);
  transition: .1s;
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
}

a, p, li, .button {
  font-family: 'Manrope', sans-serif;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  border-radius: 0.125rem;
  padding: 0.125rem;
}

a:hover {
  background: rgba(255, 255, 255, 0.1);
}

ul {
  list-style: none;
}

nav h1, footer h3 {
  font-size: 2.625rem;
}

nav > ul > li {
  display: inline;
}

.nav-toggle {
  position: absolute;
  right: 1rem;
  top: 2rem;
  width: 2.55rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.nav-toggle-bar,
.nav-toggle-bar::before,
.nav-toggle-bar::after {
  content: "";
  background-color: #F2F2F2;
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  transition: all .4s ease;
}

.nav-toggle-bar::before {
  top: -1rem;
}

.nav-toggle-bar::after {
  top: 1rem;
}

.menu-open .nav-toggle-bar {
  transform: rotate(135deg);
}

.menu-open .nav-toggle-bar::before,
.menu-open .nav-toggle-bar::after {
  transform: rotate(90deg);
  top: 0;
}

.menu {
  z-index: 95;
  position: fixed;
  top: 0;
  transform: translateX(100vw);
  transition: all .4s;
  background: #202020;
  height: calc(100% + 0.1rem);
  width: 100vw;
}

.menu-open .menu {
  transform: translateX(0);
}

.menu-open, .menu-open body {
  overflow: hidden;
}

.menu-content {
  display: block;
  margin: auto;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  top: 6.25rem;
  float: right;
}

.menu-content > ul > li {
  list-style: none;
  margin-bottom: 1rem;
}

footer {
  background: #202020;
  color: #F2F2F2;
}

footer h3 {
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
}

.footer-socials > ul {
  display: flex;
  justify-content: space-evenly;
}

@media screen and (min-width: 768px) {
  nav, .intro, #home-discog, footer, .timeline {
    padding: 0 8.75rem;
  }

  nav {
    display: flex;
    height: 6.25rem;
    justify-content: space-between;
    align-items: center;
  }

  .nav-bar > h1 {
    margin-left: 1rem;
  }

  .nav-toggle {
    display: none;
  }

  .menu {
    display: flex;
    position: relative;
    align-items: center;
    height: 6.25rem;
    transform: none;
    width: fit-content;
    background: none;
    top: 0;
  }

  .menu-content {
    display: flex;
    justify-items: center;
    top: 0;
  }

  .menu-content > ul li {
    display: inline;
    width: fit-content;
    transform: none;
    top: auto;
    margin: 1rem;
  }

  .intro h1 {
    font-size: 9.5rem;
    line-height: 7rem;
    margin: 0;
  }

  .intro p {
    margin: 0;
  }

  #home-discog > div {
    max-width: 40%;
    float: right;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
  }

  .footer-content > div {
    width: 30%;
    border-right: solid 2px #F2F2F2;
    padding: 0 3rem;
  }

  .footer-content > div:nth-child(3) {
    border: none;
  }
}

</style>
