<template>
<div class="project-card" v-bind:class="color">
    <div class="grid-container" >
        <div class="project-images-container" v-bind:class="color">
            <a :href="liveUrl" target="_blank">
                <img class="project-main-image" v-bind:src="imagePath" :alt="imageAlt">
            </a>

        </div>
    
        <div class="project-info-container" v-bind:class="color">
            <h2>{{projectName}}</h2>
            <h3>{{subtitle}}</h3>
            <p class="project-description">{{description}}</p>
            <ul class="tags-container" v-bind:class="color" >
                <div class="tags" v-for="(tag, index) in tags" :key="index"> 
                    <li class="tag" v-bind:class="color">#{{tag}}</li>
                </div>
            </ul>
            <div v-if="!githubUrl2" class="links-container" v-bind:class="color">   
                <a :href="githubUrl" class="proj-links" v-bind:class="color" target="_blank">GitHub</a>
                <a :href="liveUrl" class="proj-links" v-bind:class="color" target="_blank">Live Website</a>
            </div>
            <div v-if="githubUrl2" class="links-container" v-bind:class="color">   
                <a :href="githubUrl" class="proj-links" v-bind:class="color" target="_blank">GitHub - Frontend</a>
                <a :href="githubUrl2" class="proj-links" v-bind:class="color" target="_blank">GitHub - Backend</a>
                <a :href="liveUrl" class="proj-links" v-bind:class="color" target="_blank">Live Website</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props: ['color', 'projectName', 'subtitle', 'description', 'imageName', 'tags', 'githubUrl', 'githubUrl2', 'liveUrl', 'id'],

    data() {
        return {
            imageAlt: "Screenshot of " + this.projectName,
            imagePath: require("../assets/images/" + this.imageName),
        }
    }
}
    
</script>

<style>
.card {
    border: 1 solid black;
}
</style>