<template>

<Transition>
    <div id="wrap-all" class="blur" v-if="isClicked" v-on:click="closeItem">
        <div class="blur"></div>
        <div class="circle-loader-upload" v-if="isUploaded"></div>
    </div>
</Transition>
    <div>
    <Navbar />
    
   <!-- Some message if user doesn't upload anything -->
    <div class="container" >
        <div class="info_page" v-if="!userFiles.length" >
            <h2>{{asyncMsg.message}}</h2>
        </div>

    <!-- List user's file -->
        

        <div class="content" v-if="userFiles.length">

            <!-- Dot button doesn't work -->
            <div class="content-item" v-for="data in userFiles" v-bind:key="data.id">
                <div class="card center" >
                    <div class="card-body" v-if="data.format == '.jpg' || data.format == '.png' || data.format == '.jpeg'">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-file-earmark-image" viewBox="0 0 16 16">
                                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"/>
                            </svg>
                            <p class="card-text mt-3 text-dark">{{ data.filename }} 
                                <span class="float-right">
                                    <button v-on:click="actionFiles" class="reset-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>   
                                    </button>                       
                                </span>               
                            </p> 
                        </div>
                    <div class="card-body" v-else-if="data.format == '.zip' || data.format == '.rar'">
                        <!-- <Transition>
                            <div class="file-action" v-if="fileActions">
                                <p>Action</p>
                                <p>Action</p>
                                <p>Action</p>
                            </div>
                        </Transition> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-file-earmark-zip-fill" viewBox="0 0 16 16">
                            <path d="M5.5 9.438V8.5h1v.938a1 1 0 0 0 .03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 0 0 .03-.243z"/>
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-4-.5V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V8.5a1 1 0 0 1 1-1z"/>
                        </svg>
                        <p class="card-text mt-3 text-dark">{{ data.filename }}
                            <span class="float-right">
                                <button v-on:click="actionFiles" class="reset-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>   
                                </button>                       
                            </span>     
                        </p>                       
                    </div>
                    <div class="card-body" v-else>
                        

                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                            <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
                        </svg>
                        <p class="card-text mt-3 text-dark">{{ data.filename }}
                            <span class="float-right">
                                <button v-on:click="actionFiles" class="reset-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>   
                                </button>                        
                            </span>     
                        </p>                       
                    </div>
                    
                </div>
            </div> 
        </div>
       
        <div class="fixed-wrapper" >
            <Transition>
            <div class="span-wrapper " v-if="isClicked" id="moreAction">
                <!-- More Action Buttons -->
                <span>
                    <!-- Upload Button -->
                   <button class="action" data-toggle="modal" data-target="#uploadModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                   </button>
                </span>

                <span>
                    <!-- New Folder Button -->
                    <button class="action">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
                            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                        </svg>
                    </button>
                </span>
            </div>
        </Transition>
            <!-- Plus Button -->
            <button class="action block" id="plus" >
                <span>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </span>

               

            </button>

        </div>
        
    </div>
    
<!-- Modal -->

<div class="modal fade" id="uploadModal" tabindex="-1" aria-labelledby="uploadModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Upload</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      
      <div class="modal-body">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="email">Upload your file!</label>
                                <input type="file" id="fileInput" class="form-control"  required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" v-on:click="uploadAction" class="btn main-color">Upload</button>
      </div>
    </div>
  </div>
</div>
</div>

<MobileNavbarVue />    


</template>

<style>
.info_page {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.info_page h2 {
    color: gray;
}

.fixed-wrapper {
    position: fixed;
    bottom: 18%;
    right: 10%;
    z-index: 10;
    
}

.action {
    
    border: none;
    background: none;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);
    color: #00AAFF;
    background-color: #fefefe;
}

.span-wrapper {
    margin-bottom: 10px;
    
}

.span-wrapper span {
    margin: 9px 0;
    display:block;
}

#wrap-all {
    width: 100%;
    min-height: 100vh;
    position: fixed;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */ 
    z-index: 1;
}

.hidden {
    display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.circle-loader-upload {
    position: absolute;
    top: 40%;
    left: 35%;
    border: 16px solid #f3f3f3;;
    border-radius: 50%;
    border-top : 16px solid #00AAFF;
    width: 110px;
    height: 110px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
}

@keyframes spin {
 0% {
    transform: rotate(0deg);
}

100% {
    transform: rotate(360deg);
}

}

.content {
    
    display: flex;
    flex-wrap : wrap;
    margin-bottom: 105px;
    
}

.content-item {
    width: 45%;
    margin: 7px;
    justify-content: center;
    color: #00AAFF;
}

.center {
    text-align:center;
    margin: 0 auto;
}

.card:hover {
    border: 1px solid #00AAFF;
}

.full {
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */ 
}

.reset-btn {
    border: 1px solid red;
    background: none;
    
    
}

.blur {
    
    backdrop-filter: blur(8px);
}

.file-action {
    background-color: #ffff;
    width: 70%;
    padding: 15px;
    position: absolute;
    top: -47px;
    right: 15px;
    border-radius: 8px;
    border: 1px solid rgb(211, 206, 206);
    
}

.file-action p {
    color: black;

}


</style>

<script>
import axios from 'axios';
import {ref} from 'vue';
import Navbar from '../components/Navbar.vue'
import MobileNavbarVue from '../components/MobileNavbar.vue';

const infoPage = async() => {
 return new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      message : " There's nothing in here\n  ¯\\_(ツ)_/¯ "
        })
        },1500)
    })
}

export default {
    name : "DashboardDefault",
    components: {
        MobileNavbarVue,
        Navbar
    },

    data() {
        return {
            isClicked: false,
            isUploaded: false,
            fileActions: false,
            userFiles : [],
        }
    },
    
    methods: {
        getFiles() {
            const self = this;
            axios({
                method: 'get',
                url : `http://localhost/panalama/upload/${self.$cookies.get('panalama_session')}`,
               
                config: {},

            }).then(res => {
                res.data.forEach( el => {
                    if(el.filename.length > 10) {
                        el.filename = el.filename.substring(0,5) + "..."
            }
           })
                self.userFiles = res.data
                
            })
        },

        uploadAction() {
            // Getting upload input
            const fileInput = document.getElementById('fileInput').files[0];
            let formData = new FormData();
            let self = this;

            this.isUploaded = true;

            $('#fileInput').val('');

            $('#uploadModal').modal('hide');
            // Adding into form data
            formData.append('userfile', fileInput);

            setTimeout(() => {
                axios({
                method: 'post',
                url : `http://localhost/panalama/upload/${self.$cookies.get('panalama_session')}`,
                data: formData,
                config: {},
            }).then(res => {
                console.log(res.data);
            })
             .finally(() => {
                self.isClicked = false;
                self.isUploaded = false;
                self.getFiles();
                })
            },3500)
            
        },

        closeItem() {
            if(this.isUploaded) {
                return;
            }
            this.isClicked = !this.isClicked;
        },

        showMoreAction() {
            

            this.isClicked = !this.isClicked;
        },

        actionFiles(e) {
          const parent = e.currentTarget
         const closestElement = parent.closest(".card")
            // this.fileActions = !this.fileActions;
            console.log(closestElement)
        },

        
    },

    beforeCreate() {
        // Scoping
        const self = this;

        // Checking if user already sign in
        if(!self.$cookies.get('panalama_session')) {
            self.$router.push('/signin')
        }       
        
        const token = self.$cookies.get('panalama_session')

        // Token 
        axios({
            method: 'get',
            url: `http://localhost/panalama/check_jwt/${token}`,
           
           
           
        }).then(res => {
            if(res.data.success == false) {
                self.$router.push('/signin')
            }
        })
    },
    async setup() {
        const asyncMsg = ref(await infoPage());

        return {
            asyncMsg
        }
    },

    mounted() {
         const plus = document.getElementById('plus');
         
         const self = this;
         plus.addEventListener('click', this.showMoreAction);

        this.getFiles();
        
        
        
       
         
    }
}
</script>