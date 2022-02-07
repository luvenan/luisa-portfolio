<template>
<div class="project-card" v-bind:class="color">
    <div class="grid-container" >
        <div class="project-images-container" v-bind:class="color">
            <img class="project-main-image" src="../assets/getit/getit-fullscreen2.png" alt="">
            <img class="project-main-image" src="../assets/hyhcheck-main.png" alt="">
            <img class="project-main-image" v-bind:src="image" alt="">

        </div>
    
        <div class="project-info-container" v-bind:class="color">
            <h2>{{projectName}}</h2>
            <h3>{{subtitle}}</h3>
            <p class="project-description">{{description}}</p>
            <ul class="tags-container" v-bind:class="color" >
                <li class="tag" v-bind:class="color">#HTML</li>
                <li class="tag" v-bind:class="color">#CSS</li>
                <li class="tag" v-bind:class="color">#Vue.Js</li>
                <li class="tag" v-bind:class="color">#Firebase</li>
            </ul>
            <ul class="tags-container" v-bind:class="color" v-for="tag in tags">
                <li class="tag" v-bind:class="color">#{{tag}}</li>
            </ul>
            <div class="links-container" v-bind:class="color">
                <button class="proj-links" v-bind:class="color">GitHub</button>
                <button class="proj-links" v-bind:class="color">Deployed</button>    
                <a :href="githubUrl" class="proj-links" v-bind:class="color">GitHub</a>
                <a :href="liveUrl" class="proj-links" v-bind:class="color">Live Website</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props: ['color', 'projectName', 'subtitle', 'description', 'image', 'tags', 'githubUrl', 'liveUrl', 'id'],
}
</script>

<style>
.card {
    border: 1 solid black;
}
</style>