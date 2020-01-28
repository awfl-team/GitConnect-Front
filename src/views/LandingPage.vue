<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12">
                <v-img src="gitconnect.png" class="brand-logo" alt="GitConnect logo"></v-img>
            </v-col>
        </v-row>
        <v-row justify-md="space-around">
            <v-col cols="12" sm="12" md="5">
                <h1>Hello !</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et maiores
                    maiores necessitatibus quam veritatis. Accusamus aliquam, aperiam beatae,
                    blanditiis corporis culpa facilis officiis possimus quaerat quia quod
                    repellendus ut vero?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et maiores
                    maiores necessitatibus quam veritatis. Accusamus aliquam, aperiam beatae,
                    blanditiis corporis culpa facilis officiis possimus quaerat quia quod
                    repellendus ut vero?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et maiores
                    maiores necessitatibus quam veritatis. Accusamus aliquam, aperiam beatae,
                    blanditiis corporis culpa facilis officiis possimus quaerat quia quod
                    repellendus ut vero?
                </p>
            </v-col>
            <v-col cols="12" sm="12" md="5">
                <auth-tabs />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import AuthTabs from '../components/Forms/AuthTabs.vue'

export default {
    name: 'landingPage',
    components: { AuthTabs }
}
</script>

<style scoped>
.brand-logo {
    max-width: 270px;
    min-width: 150px;
    width: 100%;
    margin: 25px auto;
}
</style>
