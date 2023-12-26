<template>
    <main>
        <h2>
            Producciones audiovisuales
        </h2>
        <ul class="mt-4" style="line-height: 2;">
            <li>
                Edite, entreviste y conduje en el programa audiovisual “El peso en cuestión” realizado en el Taller Audiovisual de TV. 
            </li>
            <li>
                Grabación y edición con celular en el curso “Videomaking creativo”.
            </li>
            <video-player src="/videomaking-creativo.mov" controls :loop="true"/>
            <li>
                (Entrevistas de atemporales) 
            </li>
            <li>
                (Entrevistas con fortineros)
            </li>
            <li>
                Coconducción en Cumbre Digital de Juventear
            </li>
            <YouTube src="https://www.youtube.com/watch?v=lzxt3w0QvZc&t=4665s&ab_channel=Juventear" @ready="onReady" ref="youtube" />
        </ul>
    </main>
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