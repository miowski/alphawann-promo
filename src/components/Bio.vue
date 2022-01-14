<template>
  <div id="bio">
    <main>
      <div class="fs-section intro dark">
        <div class="section-text">
          <h1>Biographie</h1>
        </div>
      </div>
      <div class="timeline dark">
        <div v-for="section in sections" :key="section.year" class="timeline-block">
          <h2>{{ section.year }} - {{ section.title }}</h2>
          <p>{{ section.description }}</p>
        </div>
        <!--
        <div class="timeline-block">
          <h2>L'Entourage - 2008</h2>
          <p>Alpha Wann s'illustre d'abord au sein du groupe 1995 dont il est le fondateur avec Areno Jaz3. Le groupe
            accueille par la suite Nekfeu ou encore Sneazzy. Ils sortent l'EP La Source en juin 2011 qui bénéficie
            d'un coup de projecteur grâce à sa diffusion sur Internet. La même année, Wann collabore avec Nekfeu sur
            En sous-marin, net-tape de neuf titres.</p>
        </div>
        <div class="timeline-block">
          <h2>2013 - Don Dada</h2>
          <p>Wann crée son propre label, Don Dada Records, en 2013 avec Hologram Lo' et Marguerite du Bled5. Il se
            lance dans une carrière en solo à partir de 2014. Il sort son premier EP, Alph Lauren. Deux ans plus
            tard, il publie son deuxième EP, Alph Lauren 2. Il est suivi de Alph Lauren 3, paru en 2018.</p>
        </div>
        <div class="timeline-block">
          <h2>Don Dada Athletics - 2015</h2>
          <p>En parallèle à la musique, depuis 2015, toujours avec son acolyte Hologram’ Lo, il produit du textile
            sous l’enseigne Don Dada Athletics. La marque propose entre autres des sweat-shirts, t-shirts et
            casquettes. Au fil des années, elle s’affirme pour aujourd’hui délivrer des gammes plus fournies et
            abouties. Les collections qui sont annoncées sont à chaque fois très attendues par les fans, comme en
            témoignent les ruptures de stocks en quelques minutes, à chaque sortie.</p>
        </div>
        <div class="timeline-block">
          <h2>2018 - UMLA</h2>
          <p>Le 21 septembre 2018, Wann sort son premier album, Une main lave l'autre, aussi stylisé UMLA (prononcer :
            U-M-L-A distinctement). Il est bien reçu par la critique et se classe dixième dans les charts français.
            L'album est certifié disque d'or en juin 2020.</p>
        </div>
        -->

      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Bio',

  data () {
    return {
      sections : []
    }
  },
  created() {
    axios.get('static/bio.json')
      .then(function (response) {
        this.sections = response.data;
        console.log(response.data);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
