<template>
    <h2>
        Producciones audiovisuales
    </h2>
    ¿Cómo me ven los demás? (Sumar en el pie del video “Producción y edición propia 2022”)
    <video-player src="/como-me-ven.mp4" controls :loop="true" />
    ¿Qué hobbie peculiar tengo? (Sumar en el pie del video “Producción y edición propia 2023”)
    <video-player src="/hobbie.mp4" controls :loop="true" />
    Serie autobiográfica
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
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default defineComponent({
    components: {
        VideoPlayer
    },
    methods: {
        onReady() {
            //this.$refs.youtube.playVideo()
        },
    },
})
</script>