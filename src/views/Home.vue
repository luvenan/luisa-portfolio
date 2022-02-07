<template>
  <div id="home">
      <div class="photo-area">
        <img class="profile-photo" src="../assets/Photo2.png" alt="">
      </div>
    
      <div class="profile-container">
        <h1>Luisa Venancio</h1>
        <h2>Front-end Developer</h2>
        <p class="profile-description"> Stack: JavaScript, HTML, CSS, Vue.Js, Firebase; </p>
        <p class="profile-description"> Software: Figma, Adobe Suite (InDesign, Illustrator, Photoshop); </p>
        <p class="profile-description"> Drafting and 3d modeling: AutoCAD, Sketchup, TinkerCAD, UltimateCura; </p>
        <p class="profile-description"> Languages: English, French, Brazilian Portuguese (native); </p>
      </div>
  </div>

  <div id="projects" class="main-container">
 
    <div class="cards-loop" v-for="project in projects" :key="project.id">
         <p>{{project.image}}</p>
    <img class="project-main-image" :src="project.image" alt="">
      <ProjectCard :projectName="project.title" :subtitle="project.subtitle" :description="project.description" :image="project.image" :githubUrl="project.githubUrl" :liveUrl="project.liveUrl" :tags="project.tags" :id="project.id" color="dark-card"/>
    </div>

  </div>

  <div id="contact">
      <h2 class="contact-info">luisa.carvalho.venancio@gmail.com</h2>
      <div class="social-media-container">
        <a href="https://github.com/luvenan"><Icon class="social-media-icons" icon="akar-icons:github-fill" style="color: #fffffd" /></a>
        <a href="https://www.linkedin.com/in/luisa-venancio-5b110088/"><Icon class="social-media-icons" icon="akar-icons:linkedin-fill" style="color: #fffffd"/></a>
        <a href="https://twitter.com/LuisaVenancio" ><Icon class="social-media-icons" icon="akar-icons:twitter-fill" style="color: #fffffd" /></a>
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
  components: { Nav, ProjectCard, Icon }, 
  data() {
    return {
      projects: [
        {
            title: "Get-it-done App",
            subtitle: "To Do Web App in Vue.Js",
            description: "will write one soon",
            image: "../assets/getit/getit-fullscreen2.png",
            tags: ["HTML", "CSS", "Vue.Js", "Firebase", "Vue-Router"],
            githubUrl: "https://github.com/luvenan/get-it-done",
            liveUrl: "https://get-it-done-fb970.web.app/",
            id: 1
        },
        {
            title: "HYH Diet Check",
            subtitle: "Web App in Vanilla JavaScript",
            description: "will write one soon",
            image: "../assets/hyhcheck-main.png",
            tags: ["HTML", "CSS", "Vanilla JavaScript"],
            githubUrl: "https://github.com/luvenan/hyhcheck",
            liveUrl: "https://luvenan.github.io/hyhcheck/",
            id: 2
        }
      ]
    }
  }
}
</script>
