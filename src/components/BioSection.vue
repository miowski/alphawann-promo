<template>
  <div id="bio">
    <main>
      <p>Affichez les sections une par une.</p>
      <p>Usage : formulez l'url comme suit - <code style="padding: 0.125rem; border-radius: 0.25rem; background: lightgrey">localhost:8080/#/bio-section?q=<span style="color: red">0</span></code>
        (où 0 correspond au numéro de la section, à modifier en fonction.)</p>
      <div>
        <h1><code>Section n° : </code> {{ this.$route.query.q }}</h1>
        <h2><code>Date : </code>{{ this.section.year }}</h2>
        <h2><code>Titre : </code>{{ this.section.title }}</h2>
        <p><code>Description : </code><br>{{ this.section.description }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Bio',

  data() {
    return {
      section: null
    }
  },
  created() {
    axios.get('static/bio.json')
      .then(function (response) {
        this.section = response.data[this.$route.query.q];
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  padding: 1rem;
}

code {
  font-style: normal;
}
</style>
