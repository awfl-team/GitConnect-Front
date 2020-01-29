<template id="signin">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signin">
                <v-col cols="12">
                    <v-text-field label="Username / Mail" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field label="Password" required></v-text-field>
                </v-col>

                <v-col cols="12">
                    <div class="button-submit-container">
                        <button type="submit" class="btn btn-main">Sign in</button>
                    </div>
                </v-col>
            </v-form>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SignIn',
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => /.+@.+\..+/.test(v) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ]
    })
}
</script>

<style scoped></style>
