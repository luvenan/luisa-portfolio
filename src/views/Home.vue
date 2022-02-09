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
 
    <div class="cards-loop" v-for="(project, index) in projects" :key="project.id">
        <ProjectCard :projectName="project.title" :subtitle="project.subtitle" :description="project.description" :imageName="project.imageName" :imageAlt="imageAlt" :githubUrl="project.githubUrl" :liveUrl="project.liveUrl" :tags="project.tags" :id="project.id" :color="determineColor(index)" />
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
  setup() {
    const projects = [
      {
            title: "Get-it-done App",
            subtitle: "To Do Web App in Vue.Js",
            description: "I wrote this project in Vue.Js and Firebase 9, at the request of family members who wanted a simple to-do app with a \"standby\" category. I used Firebase Auth for registering, login, and making sure to show only your own tasks. Tasks can be added to either the \"to do\" or \"standby\" categories, moved from one category to another, or checked off as done. They can also be edited in place, in any of the categories. The \"done\" items can be \"undone\" and are sent back to their original category.",
            imageName: "get-it-done.png",
            imageAlt: "Screenshot of Get it Done App",
            tags: ["HTML", "CSS", "Vue.Js", "Firebase", "Vue-Router"],
            githubUrl: "https://github.com/luvenan/get-it-done",
            liveUrl: "https://get-it-done-fb970.web.app/",
            id: 1
        },
        {
            title: "HYH Diet Check",
            subtitle: "Web App in Vanilla JavaScript",
            description: "I wrote this project in partnership with the blog Migraine Strong. It is a web app for people who follow the Heal Your Headache Diet where the most common migraine triggers are avoided. This was my first real-world project, so I used the tools and knowledge I had at the time. It is written in HTML, CSS, and Vanilla JavaScript. The database is in a CSV file and parsed into JavaScript using a plugin called Papa Parse.",
            imageName: "hyhcheck.png",
            imageAlt: "Screenshot of HYH Diet Check",
            tags: ["HTML", "CSS", "Vanilla JavaScript"],
            githubUrl: "https://github.com/luvenan/hyhcheck",
            liveUrl: "https://luvenan.github.io/hyhcheck/",
            id: 2
        }
    ]

    const determineColor = (index) => {
      if (index === 0 || index % 2 === 0) {
        return "dark-card"
      } else {
        return "light-card"
      }
    }


    return { projects, determineColor }
  }
}

</script>
