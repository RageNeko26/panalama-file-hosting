<template>
    <div>
     <NavbarVue />
    <section v-if="loading">
        <div class="loader"></div>
    </section>

 <section style="padding-top: 80px;">
    <form method="POST">
    <div class="card mx-auto " style="width: 18rem; ">
        <div class="card-body">
            <h2 class="card-title"><img src="../assets/image/logo1.png" alt="logo" width="90">Sign up</h2>

                <div v-if="is_message">
                    <div :class="styleMsg">
                        <p>{{msg}} </p>
                    </div>
                </div>


                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" class="form-control"  id="email" required>
                   
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password" required>
                </div>

                <div class="form-group">
                    <label for="confPassword">Confirmation Password</label>
                    <input type="password" v-model="confpassword" class="form-control" id="confpassword" required>
                </div>
                <p>Already have account? Sign in <router-link to="signin">here </router-link></p>
                <ButtonLoginVue :valueProps="value"  v-on:click="signup" />
            
                       
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
        name : "SignUpView",
        data() {
            return {
                value : "Sign Up",
                id: "signUp",
                email: "",
                password: "",
                confpassword: "",
                is_message: false,
                styleMsg: "",
                msg: "",
                loading: false,

            }
        },
        components : {
            NavbarVue,
            ButtonLoginVue,
        },

        methods: {
            signup(e) {
               // this keyword for scoping 
               let self = this;

                // Loading effect
                const wrapper = document.getElementById('wrap-loader');
                wrapper.classList.add('loader');

                // Adding input data to FormData()
                let formData = new FormData();
                formData.append('email', this.email);
                formData.append('password', this.password);

               

                if(this.email !== '' && this.email !== ' ') {
                    if(this.password !== '' && this.email !== ' ') {
                        if(this.confpassword !== ' ') {
                            if(this.password === this.confpassword) {
                            axios({
                                method: 'post',
                                url: 'http://localhost/panalama/signup',
                                data: formData,
                                config: {}
                            })
                                .then(function(response) {
                                    
                                    if(response.data.success == true) {
                                        self.is_message = true;
                                        self.msg = response.data.message;
                                        self.styleMsg = 'msg-info'
                                    } else {
                                        self.is_message = true;
                                        self.msg = response.data.message;
                                        self.styleMsg = 'msg-failed'
                                    }
                                })
                                    .catch(error=> {
                                        console.log(error);
                                    })
                                    
                                    .finally(() =>  wrapper.classList.remove('loader'))
                        } else {
                            self.is_message = true;
                            self.msg = "Password doesn't match!";
                            self.styleMsg = 'msg-failed';
                            wrapper.classList.remove('loader');
                        }
                        } else {
                            self.is_message = true;
                            self.msg = "Please confirm your password!";
                            self.styleMsg  = 'msg-failed';
                            wrapper.classList.remove('loader');
                        }
                    } else {
                        self.is_message = true;
                        self.msg = "Password field can't empty";
                        self.styleMsg = "msg-failed";
                        wrapper.classList.remove('loader');
                    }
                } else {
                    self.is_message = true;
                    self.msg = "Email field can't empty";
                    self.styleMsg = 'msg-failed';
                    wrapper.classList.remove('loader');
                }

                e.preventDefault()
            }
        }
    }

</script>