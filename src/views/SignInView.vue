<template>
    <div>
    <NavbarVue />
    
    
    
    <section style="padding-top: 80px">
    <form method="POST">
    <div class="card mx-auto " style="width: 18rem; ">
        <div class="card-body">
            <h2 class="card-title"><img src="../assets/image/logo1.png" alt="logo" width="90">Sign In</h2>
           
            <div v-if="is_message">
               <div :class="styleMsg">
                 <p> {{msg}} </p>
               </div>
            </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" class="form-control" id="email" required>
                   
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password" required>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <p>Don't have account yet? Sign up <router-link to="/signup">here</router-link> </p>
                <ButtonLoginVue :valueProps="textButton" v-on:click="signin" />
            
                       
        </div>
    </div>
</form>
</section>
</div>
</template>

<script>
import axios from 'axios';

import NavbarVue from '../components/Navbar.vue'; 
import ButtonLoginVue from '../components/ButtonLogin.vue';

export default {
        name : "SignInView",
        
        data() {

            return {
                textButton : "Sign In",
                id : "signIn",
                email : "",
                password: "",
                loading: false,
                is_message: false,
                msg : "",
                styleMsg: ""
               
            };
        },
        components: {
            NavbarVue,
            ButtonLoginVue
           
        },
        beforeCreate() {
            const self = this;
            if(self.$cookies.get('panalama_session')) {
                axios.get(`http://localhost/panalama/check_jwt/${self.$cookies.get('panalama_session')}`)
                .then(res => {
                    if(res.data.success == true) {
                        self.$router.push('/dashboard')
                    }
                })
            }
        },

        methods : {
            signin(e) {
                // this keyword for scoping 
                let self = this;

                // Loading effect
                const wrapper = document.getElementById('wrap-loader');
                wrapper.classList.add('loader');
               

                // Adding input field form to FormData()
                let formData = new FormData();
                formData.append('email', this.email);
                formData.append('password', this.password);
                           

                // Form Validation.
                if(this.email !== '' && this.email !== ' ') {
                    if(this.password !== '' && this.password != ' ') {
                        // API Calls 
                       axios({
                        method: 'post',
                        url: 'http://localhost/panalama/login',
                        data: formData,
                        config: {}
                       })
                       .then(function(response) {
                       
                        // Redirect to dashboard if user credential is true
                        if(response.data.success != false) {
                            self.$cookies.set("panalama_session", response.data.token);
                            self.$router.push('/dashboard');
                            
                        // Some message if user credential is untrue or false 
                        } else {
                            self.is_message = true;
                            self.msg = response.data.message;
                            self.styleMsg = 'msg-failed';
                           
                        }
                       })
                       .catch(error => {
                        console.log(error)
                       })
                       
                       .finally(() => {
                        wrapper.classList.remove('loader');
                        
                    })

                    // Error messages form validation
                    } else {
                        self.is_message = true;
                        self.msg = "Password field can't empty";
                        self.styleMsg = "msg-failed";
                        wrapper.classList.remove('loader');
                    }
                } else {
                        self.is_message = true;
                        self.msg = "Email field can't empty";
                        self.styleMsg = "msg-failed";
                        wrapper.classList.remove('loader');
                    
                }
                e.preventDefault();
            }
        },
        
    }
</script>