<template>
<div class="project-card" v-bind:class="color">
    <div class="grid-container" >
        <div class="project-images-container" v-bind:class="color">
            <img class="project-main-image" src="../assets/getit/getit-fullscreen2.png" alt="">
            <div class="mobile-images-container">
                <img class="mobile-images" src="../assets/getit/getit-mob1.png" alt="">
                <img class="mobile-images" src="../assets/getit/getit-mob2.png" alt="">
                <img class="mobile-images" src="../assets/getit/getit-mob3.png" alt="">
            </div>
        </div>
    
        <div class="project-info-container" v-bind:class="color">
            <h2>Get-it-done App</h2>
            <h3>Web App in Vue.Js</h3>
            <p class="project-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid libero ipsum error quod accusantium, explicabo temporibus natus sapiente tempore officia officiis inventore praesentium amet optio obcaecati rem quasi aut, molestias sunt sed veritatis omnis animi? Ducimus illum, quibusdam culpa a sapiente voluptatem, mollitia iste perspiciatis eum rerum natus et, vel laudantium dicta debitis earum dolores ipsam ut aperiam maxime repellendus. Aut veritatis, labore nobis voluptatibus repudiandae facere recusandae sequi alias nihil? Iste dolor mollitia eaque, odit voluptas, quod aut doloribus, at et consequuntur non. Soluta dolorum debitis nihil itaque esse quis minus rerum! Qui dolore incidunt aspernatur cumque molestias beatae?</p>
            <ul class="tags-container" v-bind:class="color">
                <li class="tag" v-bind:class="color">#HTML</li>
                <li class="tag" v-bind:class="color">#CSS</li>
                <li class="tag" v-bind:class="color">#Vue.Js</li>
                <li class="tag" v-bind:class="color">#Firebase</li>
            </ul>
            <div class="links-container" v-bind:class="color">
                <button class="proj-links" v-bind:class="color">GitHub</button>
                <button class="proj-links" v-bind:class="color">Deployed</button>    
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props: ['color']
}
</script>

<style>
.card {
    border: 1 solid black;
}
</style>