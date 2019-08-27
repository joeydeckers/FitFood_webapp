<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">FitFood</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                <b-dropdown-item>
                    <Button buttonText="Login" />
                </b-dropdown-item>
                <b-dropdown-item>
                    <Button 
                        buttonText="Register" 
                        buttonColor="#FF9900" 
                        buttonBorderColor="#FF9900" 
                        buttonFontColor="#fff"
                    />
                </b-dropdown-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import Button from './Button'

export default {
    components:{
        Button
    }
}
</script>