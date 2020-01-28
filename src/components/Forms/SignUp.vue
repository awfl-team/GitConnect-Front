<template id="signup">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signup">
                <v-col cols="12">
                    <v-text-field label="E-mail / Username" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Password" required></v-text-field>
                </v-col>
            </v-form>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style scoped></style>
