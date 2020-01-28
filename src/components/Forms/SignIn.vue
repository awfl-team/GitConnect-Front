<template id="signin">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signin">
                <v-col cols="12">
                    <v-text-field label="E-mail *" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Name *" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Password *" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Confirm password *" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <div class="button-submit-container">
                        <button type="submit" class="btn btn-main">Submit</button>
                    </div>
                </v-col>
            </v-form>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SignIn'
}
</script>

<style scoped></style>
