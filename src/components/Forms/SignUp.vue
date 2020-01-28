<template id="signup">
    <v-container fluid>
        <v-row align="center">
            <v-form ref="form" id="form-signup">
                <v-col cols="12">
                    <div class="text-input-container" tabindex="2">
                        <label for="input-login">Mail / Username</label>
                        <input id="input-login" type="text" required />
                    </div>
                </v-col>

                <v-col cols="12">
                    <div class="text-input-container">
                        <label for="input-password">Password</label>
                        <input id="input-password" type="text" required />
                    </div>
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
    name: 'SignUp'
}
</script>

<style scoped></style>
