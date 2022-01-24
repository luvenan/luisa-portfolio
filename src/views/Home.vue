<template>
<div class="grid-container">
  <div class="photo-area">
    <img class="profile-photo" src="../assets/Photo.jpg" alt="">
  </div>

  <div class="profile-container">
    <h1>Luisa Venancio</h1>
    <h2>Front-end Developer</h2>
    <p class="profile-description"> Stack: JavaScript, HTML, CSS, Vue.Js; </p>
    <p class="profile-description"> Software: Figma, Adobe Suite (InDesign, Illustrator, Photoshop), ; </p>
    <p class="profile-description"> Languages: English, French, Brazilian Portuguese (native); </p>
  </div>


</div>

</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'

export default {
  name: 'Home',
  components: { Nav }
}
</script>
