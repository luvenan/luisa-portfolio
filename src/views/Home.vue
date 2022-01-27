<template>
  <div id="home">
      <div class="photo-area">
        <img class="profile-photo" src="../assets/Photo2.png" alt="">
      </div>
    
      <div class="profile-container">
        <h1>Luisa Venancio</h1>
        <h2>Front-end Developer</h2>
        <p class="profile-description"> Stack: JavaScript, HTML, CSS, Vue.Js; </p>
        <p class="profile-description"> Software: Figma, Adobe Suite (InDesign, Illustrator, Photoshop), ; </p>
        <p class="profile-description"> Languages: English, French, Brazilian Portuguese (native); </p>
      </div>
  </div>

  <div id="projects" class="main-container">

      <ProjectCard />
      <ProjectCard />
      <ProjectCard />

  </div>

  <div id="contact">
      <h2 class="contact-info">luisa.carvalho.venancio@gmail.com</h2>
      <div class="social-media-container">
        <Icon class="social-media-icons" icon="akar-icons:twitter-fill" style="color: #fffffd" />
        <Icon class="social-media-icons" icon="akar-icons:linkedin-fill" style="color: #fffffd"/>
      </div>
    <!-- Add contact me form -->
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import ProjectCard from "../components/ProjectCard.vue"
import { Icon } from '@iconify/vue';

export default {
  name: 'Home',
  components: { Nav, ProjectCard, Icon }
}
</script>
