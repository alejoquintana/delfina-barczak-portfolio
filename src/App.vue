<script setup>
import Icon from "@/components/icons.vue";
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <nav>
        <RouterLink to="/"><Icon icon="home" size="lg"/></RouterLink>
      </nav>
    </header>

    <div class="max-width">
        <RouterView />
    </div>
</template>
