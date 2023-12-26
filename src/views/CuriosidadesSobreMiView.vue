<template>
    <main>

        <h2>
            Curiosiodades sobre mi
        </h2>
        <h3 class="ms-4 mt-4">
            ·  Producción y edición propia 2022
        </h3>
        <div class="mt-4 d-flex flex-column align-items-center">
            <h4>
                ¿Cómo me ven los demás?
            </h4>
            <video-player src="/como-me-ven.mp4" width="720" controls :loop="true" />
        </div>
        <h3 class="ms-4 mt-4">
            ·  Producción y edición propia 2023
        </h3>
        <div class="mt-4 d-flex flex-column align-items-center">
            <h4>
                ¿Qué hobbie peculiar tengo?
            </h4>
            <video-player src="/hobbie.mp4" controls :loop="true" />
        </div>
        <h3 class="ms-4 mt-4">
            Serie autobiográfica
        </h3>
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