<template>
    <div class="details-modal">
        <div class="details-modal-overlay modal-overlay" @click="() => {register_is_active = false}"></div>
        <div class="details-modal-con">
            
            
            <div class="edit-section" v-if="active_section == 1">

                <template v-if="user_info.user.user_type.name == 'admin'">
                    <a @click="editProfile">Edit</a>
                    <a v-if="is_editing_profile" @click="changePassword"> | Change Password</a>
                </template>
                
                <ul>
                    <li>
                        Username:
                        <span v-if="is_editing_profile == false">{{ formData && formData.username }}</span>
                        <input v-else v-model="formData.username" />
                    </li>
                    <li>
                        Email: 
                        <span v-if="is_editing_profile == false">{{ formData && formData.email }}</span>
                        <input v-else v-model="formData.email" type="email" />
                    </li>
                    <li>
                        Phone Number: 
                        <span v-if="is_editing_profile == false">{{ formData && formData.phone_number }}</span>
                        <input v-else v-model="formData.phone_number" />
                    </li>
                    <li>
                        User Type:
                        <select :disabled="is_editing_profile == false" v-model="formData.type_id">                        
                            <option v-for="(user_type, i) in user_types" :key="i" :value="user_type.id">
                                {{ user_type.name }}
                            </option>
                        </select>
                    </li>
                    <li>
                        Wallet Balance:
                        {{ user_to_view.wallets.length ? user_to_view.wallets[0].wallet_balance : 0 }}
                    </li>
                    <li>
                        Coin Balance:
                        {{ user_to_view.coins.length ? user_to_view.coins[0].coin_balance : 0 }}
                    </li>
                    <li v-if="user_info.user.user_type.name == 'admin'">
                        <button @click="load_wallet_is_clicked = !load_wallet_is_clicked">Load Wallet</button>
                        <form v-if="load_wallet_is_clicked" @submit.prevent="submitLoadWallet(user_to_view.id)">
                            <input v-model="wallet_amount" type="number" placeholder="Amount" /><button type="submit">Submit</button>
                        </form>
                    </li>
                </ul>

                <div class="detail_actions">
                    <template v-if="is_editing_profile">
                        <a @click="editProfile">Cancel</a> | 
                        <a @click="submitUserForm">Update</a>  
                    </template>
                    <template v-else>
                        <a @click="details_modal_is_active = false">Close</a>
                    </template>
                </div>
            </div>
            <!-- end edit-section -->

            <div class="change-password-section" v-else>
                <a v-if="is_editing_profile" @click="changePassword">Change Password</a>

                <input v-model="formData.current_password" placeholder="Current Password" type="password" />
                <input v-model="formData.new_password" placeholder="New Password" type="password" />
                <input v-model="formData.new_password_confirmation" placeholder="Confirm New Password" type="password" />
                <button @click="active_section = 1">Cancel</button>
                <button @click="submitChangePassword">Submit</button>
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
                amount: this.wallet_amount,
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
    .details-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .details-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .details-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .details-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .details-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .details-modal-con form { display: flex; flex-direction: column; } 
  }
</style>