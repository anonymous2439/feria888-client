<template>
    <div class="details-modal">
        <div class="details-modal-overlay modal-overlay" @click="() => {register_is_active = false}"></div>
        <div class="details-modal-con">
            
            
            <div class="edit-section" v-if="active_section == 1">

                <a @click="editProfile" class="btn-input btn-input--edit">Edit</a>
                <a v-if="is_editing_profile" @click="changePassword" class="btn-input btn-input--change">Change Password</a>
                
                <ul>
                    <li>
                        <b>Username:</b>&nbsp;&nbsp; 
                        <span v-if="is_editing_profile == false">{{ formData && formData.username }}</span>
                        <input v-else v-model="formData.username" />
                    </li>
                    <hr>
                    <li>
                        <b>Email:</b>&nbsp;&nbsp;
                        <span v-if="is_editing_profile == false">{{ formData && formData.email }}</span>
                        <input v-else v-model="formData.email" type="email" />
                    </li>
                    <hr>
                    <li>
                        <b>Phone Number:</b>&nbsp;&nbsp;
                        <span v-if="is_editing_profile == false">{{ formData && formData.phone_number }}</span>
                        <input v-else v-model="formData.phone_number" />
                    </li>
                    <hr>
                    <li>
                        <b>User Type:</b>&nbsp;&nbsp;
                        <select :disabled="is_editing_profile == false" v-model="formData.type_id">                        
                            <option v-for="(user_type, i) in user_types" :key="i" :value="user_type.id">
                                {{ user_type.name }}
                            </option>
                        </select>
                    </li>
                    <hr>
                </ul>

                <div class="detail_actions">
                    <template v-if="is_editing_profile">
                        <a @click="editProfile" class="btn-input btn-input--close">Cancel</a>
                        <a @click="submitUserForm" class="btn-input btn-input--update">Update</a>  
                    </template>
                    <template v-else>
                        <a @click="details_modal_is_active = false" class="btn-input btn-input--close">Close</a>
                    </template>
                </div>
            </div>
            <!-- end edit-section -->

            <div class="change-password-section" v-else>
                <a v-if="is_editing_profile" @click="changePassword" class="btn-input btn-input--change">Change Password</a>

                <input v-model="formData.current_password" placeholder="Current Password" type="password" />
                <input v-model="formData.new_password" placeholder="New Password" type="password" />
                <input v-model="formData.new_password_confirmation" placeholder="Confirm New Password" type="password" />
                <button @click="active_section = 1" class="btn-input btn-input--cancel">Cancel</button>
                <button @click="submitChangePassword" class="btn-input btn-input--submit">Submit</button>
            </div>
            
            

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()    
    const user_info = useCookie('user_info')

    // states
    const details_modal_is_active = useState('details_modal_is_active');
    const {value:user_types} = useState('user_types')
    const user_to_view = useState('user_to_view').value
    const is_editing_profile = useState('is_editing_profile', () => false)
    const active_section = useState('active_section', () => 1)


    let formData = {
        username: user_to_view.username,
        email: user_to_view.email,
        phone_number: user_to_view.phone_number,
        type_id: user_to_view.type_id ? user_to_view.type_id : 1,
    }
    
    // submit update user form
    async function submitUserForm() {
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/user/edit/${user_to_view.id}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
            body: JSON.stringify(formData)
        });
        window.location.reload(true)
    }

    function editProfile(){
        is_editing_profile.value = !is_editing_profile.value
    }

    function changePassword() {
        active_section.value = 2
    }

    async function submitChangePassword() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/changepassword/${user_to_view.id}`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        window.location.reload(true)
    }
</script>

<style scoped>
    .edit-section ul{
        margin: 10px;  
    }
    .edit-section ul li{
        text-align: left;
        padding: 6px; 
    }
    .edit-section ul li select{
        border: 1px solid #c8371a;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer; 
    }
    input {
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 5px;
    }
    input:focus{
        outline: 2px solid #ebb948;
    }
    .btn-input {
        border: none;
        display: inline-block;
        color: #fff;
        width: 90px;
        height: 20px;
        padding: 10px;
        margin: 8px 0;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Helvetica;
        text-align:center;
        cursor: pointer;
    }
    .btn-input:before {
        content: "";
        position: absolute;
        top: -30px;
        left: -80px;
        height: 100px;
        width: 70px;
        background: rgba(255, 255, 255, .3);
        transform: rotate(20deg);
    }
    .btn-input:hover:before {
        left: 210px;
        transition: all .7s;
    }
    .btn-input--edit{
        background: #ebb948;
    }
    .btn-input--update{
        background: #00e300;
        padding-top: 13px;
        margin-left: 15px;
        margin-bottom: 8px;
    }
    .btn-input--close{
        border: 2px solid #c8371a;
        color: #000000;
    }
    .btn-input--change{
        background: #c8371a;
        color: #fff;
        font-size: 12px;
        margin-left: 15px;
        padding-top: 7px;
        padding-bottom: 13px;
    }
    .btn-input--cancel{
        background: none;
        color: #000000;
        border: 1px solid #c8371a;
        padding: 10px 0px 25px 0px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .btn-input--submit{
        background: #ebb948;
        color: #fff;
        font-size: 12px;
        padding: 10px 0px 25px 0px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .details-modal { 
        position: absolute; 
        right: 15%;
        left: 15%; 
        top: 20%; 
        z-index: 500; 
    } 
  .details-modal-con { 
        background: #fff; 
        padding: 20px; 
        border-radius: 5px;
        position: relative; 
        cursor: default;
    } 
  .details-modal-overlay { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: #0000001F; 
        cursor: auto; 
    }
    @media only screen and (max-width: 1400px){
      
    .change-password-section{
        margin: auto;
        max-width: 300px;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 0 18px -4px #000000;
    }
    .change-password-section input {
        padding: 10px;
        display: block;
        box-sizing: border-box;
        width: 94%;
        margin: 10px;
        border: 1px solid #c8371a;
        border-radius: 5px;
    }
    .change-password-section input:focus{
        outline: 2px solid #ebb948;
    }
    }
    @media only screen and (max-width: 800px){
    .details-modal { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 100%; 
    } 
    .details-modal-con { 
        position: absolute;
        top: 40%;
        left: 0%;
        right: 0; 
        transform: translateY(-40%);
        max-width: 300px;
        margin: 0 auto; 
    } 
 
    .details-modal-con form { 
        display: flex; 
        flex-direction: column; 
    }
    .change-password-section{
        box-shadow: none; 
    } 
  }
  @media only screen and (max-width: 600px){
    .details-modal { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 100%; 
    } 
    .details-modal-con { 
        position: absolute;
        top: 40%;
        left: -25%;
        right: 0; 
        transform: translateY(-40%);
        max-width: 300px;
        margin: 0 auto; 
    } 
 
    .details-modal-con form { 
        display: flex; 
        flex-direction: column; 
    }
    .change-password-section{
        box-shadow: none; 
    }
     
  }
</style>