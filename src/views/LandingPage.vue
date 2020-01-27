<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" sm="12" md="6">
                        <h1>Title</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et
                            maiores maiores necessitatibus quam veritatis. Accusamus aliquam,
                            aperiam beatae, blanditiis corporis culpa facilis officiis possimus
                            quaerat quia quod repellendus ut vero?
                        </p>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <v-tabs>
                            <v-tab href="#signin">Item One</v-tab>
                            <v-tab-item value="signin">
                                <h1>Tab 1 content</h1>
                            </v-tab-item>
                            <v-tab href="#signup">Item two</v-tab>
                            <v-tab-item value="signup">
                                <h1>Tab 2 content</h1>
                            </v-tab-item>
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
export default {
    name: 'landingPage',
    components: {}
}
</script>
