<template>
    <div class="details-modal">
        <div class="details-modal-overlay modal-overlay" @click="() => {register_is_active = false}"></div>
        <div class="details-modal-con">
            
            
            <div class="edit-section" v-if="active_section == 1">

                <a>
                    <label class="switch">                        
                        <input type="checkbox" @click="editProfile">
                        <span class="slider round">EDIT</span>
                    </label>
                </a>

                <ul>
                    <li>
                        <b>Username :</b>&nbsp;&nbsp;
                        <span v-if="is_editing_profile == false">{{ formData && formData.username }}</span>
                        <input v-else v-model="formData.username" />
                    </li>
                    <li>
                        <b>Email :</b>&nbsp;&nbsp;
                        <span v-if="is_editing_profile == false">{{ formData && formData.email }}</span>
                        <input v-else v-model="formData.email" type="email" />
                    </li>
                    <li>
                        <b>Phone Number :</b>&nbsp;&nbsp;
                        <span v-if="is_editing_profile == false">{{ formData && formData.phone_number }}</span>
                        <input v-else v-model="formData.phone_number" />
                    </li>
                    <li>
                        <b>User Type :</b>&nbsp;&nbsp;
                        <select :disabled="is_editing_profile == false" v-model="formData.type_id">                        
                            <option v-for="(user_type, i) in user_types" :key="i" :value="user_type.id">
                                {{ user_type.name }}
                            </option>
                        </select>
                    </li>
                    <li>
                        <b>Wallet Balance :</b>&nbsp;&nbsp;
                        {{ user_to_view.wallets.length ? user_to_view.wallets[0].wallet_balance : 0 }}
                    </li>
                    <li>
                        <b>Coin Balance :</b>&nbsp;&nbsp;
                        {{ user_to_view.coins.length ? user_to_view.coins[0].coin_balance : 0 }}
                    </li>
                  
                    <li>
                        <b>Load Wallet</b><br />                        
                        <label class="switch">                        
                            <input type="checkbox" @click="load_wallet_is_clicked = !load_wallet_is_clicked">
                            <span class="slider round"></span>
                        </label>
                        <form v-if="load_wallet_is_clicked" @submit.prevent="submitLoadWallet(user_to_view.id)">
                            <input v-model="wallet_amount" type="number" placeholder="Amount" /><button type="submit" class="btn-input btn-input--load">Load Coins</button>
                        </form>
                    </li>
                </ul>

                <div class="detail_actions">
                    <template v-if="is_editing_profile">
                        <a @click="editProfile" class="btn-input btn-input--close">Cancel</a>
                        <a @click="submitUserForm" class="btn-input btn-input--update">Update</a>
                        <a v-if="is_editing_profile" @click="changePassword" class="btn-input btn-input--change">Change Password</a>  
                    </template>
                    <template v-else>
                        <a @click="details_modal_is_active = false" class="btn-input btn-input--close">Close</a>
                    </template>
                </div>
            </div>
            <!-- end edit-section -->

            <div class="change-password-section" v-else>
                <h2>Change Password</h2>

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
    let wallet_amount = 0
    
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

    // submit change password
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

    // submit load wallet
    async function submitLoadWallet(id) {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/wallet/load`, {
            method: 'POST',
            body: JSON.stringify({
                user_id: id,
                amount: wallet_amount,
            }),
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        if(response) {
            window.location.reload(true)
        }
        else {
            console.log("An error occurred")
        }
    }
</script>

<script>
    export default {
        data() {
            return {
                load_wallet_is_clicked: false,
            }
        }
    }
</script>

<style scoped>
    .edit-section ul{
        margin: 0px;  
    }
    .edit-section ul li{
        text-align: left;
        padding: 10px 0px;
        border-bottom: 1px solid gray; 
        border-width: 2px;
    }
    .edit-section ul li:nth-child(7){
        border-bottom:none;
    }
    .edit-section ul li select{
        border: 1px solid gray;
        padding: 7px;
        border-radius: 5px;
        background: none;
    } 
    .edit-section ul li select:focus{
        border: 1px solid #c8371a;
        outline: 2px solid #ebb948;
        cursor: pointer;
        background: none;
    }
    .edit-section ul li form input{
        margin: 10px 10px 0px 0px;
    }
    .details-modal { 
        position: absolute; 
        right: 15%;
        left: 15%; 
        top: 10%; 
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