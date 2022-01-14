<template>
  <div id="home">
    <main>
      <div class="fs-section intro light">
        <div class="section-text">
          <p style="font-weight: 700; margin: 0;">Le parcours d'</p>
          <h1>Alpha
            <br>Wann</h1>
          <p style="margin-bottom: 3.75rem">Un rappeur à la plume profonde et inégalable</p>
          <router-link to="/bio">
            Découvrez >
          </router-link>
        </div>
      </div>
      <div class="fs-section light" id="home-discog">
        <div class="section-text">
          <p>Une grande diversité d'albums et de projets</p>
          <img src="../assets/img/discs.png" alt="Discographie : illustration">
          <router-link to="/discogs">
            Discographie >
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
