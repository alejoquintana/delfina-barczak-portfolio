import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
    const articulos = ref([])
    async function fetchArticulos() {
        const response = await fetch('articulos.json')
        articulos.value = await response.json()
        console.log(articulos.value);
    }

    return { articulos, fetchArticulos }
})
