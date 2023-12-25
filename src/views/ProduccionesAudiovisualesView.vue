<template>
    <h2>
        Producciones audiovisuales
    </h2>
    Edite, entreviste y conduje en el programa audiovisual “El peso en cuestión” realizado en el Taller Audiovisual de TV. 
    
    Grabación y edición con celular en el curso “Videomaking creativo”.
    <video-player src="/videomaking-creativo.mov" controls :loop="true"/>
    
    (Entrevistas de atemporales) 
    
    (Entrevistas con fortineros)

    Coconducción en Cumbre Digital de Juventear
    <YouTube src="https://www.youtube.com/watch?v=lzxt3w0QvZc&t=4665s&ab_channel=Juventear" @ready="onReady" ref="youtube" />

</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


<script>

import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default defineComponent({
    components: {
        YouTube,
        VideoPlayer
    },
    methods: {
        onReady() {
            //this.$refs.youtube.playVideo()
        },
    },
})
</script>