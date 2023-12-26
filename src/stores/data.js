import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
    const articulos = ref([])
    const routes = ref([
        {
            path: '/redacciones',
            name: 'redacciones',
        },
        {
            path: '/imagenes',
            name: 'imagenes',
        },
        {
            path: '/curiosidades-sobre-mi',
            name: 'curiosidades sobre mi',
        },
        {
            path: '/producciones-audiovisuales',
            name: 'producciones audiovisuales',
        },
        /* {
            path: '/actividades',
            name: 'actividades',
        }, */
        {
            path: '/publicaciones-argentina',
            name: 'publicaciones y diseño de argentina.gob.ar',
        }
    ])
    async function fetchArticulos() {
        const response = await fetch('articulos.json')
        articulos.value = await shuffle(await response.json())
    }

    return { articulos, routes, fetchArticulos }
})


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}