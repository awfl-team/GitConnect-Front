<template>
    <div id="app">
        <v-app>
            <v-content>
                <router-view />
            </v-content>
        </v-app>
    </div>
</template>

<style lang="scss">
@import 'scss/main.scss';
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'App'
})
</script>
