<template>
    <div class="profile-page">
        <div class="wrapper">
            <h2 class="page-title">User Profile</h2>
            <br /> 
            <div class="profile-nav">
                <a>
                    <label class="switch">                        
                        <input type="checkbox" @click="editProfile">
                        <span class="slider round">EDIT</span>
                    </label>
                </a>
                <a @click="cpassword_is_active = true" class="btn-input btn-input--change">Change Password</a>
                <template v-if="!isAgent() && !isAdmin()">
                    <a>Cash-In / Cash-Out</a>
                </template>
                <template v-if="isAgent()">
                    <a @click="getOnlineAgents">{{ agent_info.status }}</a>
                    <ul v-if="show_agents">
                        <li>test</li>
                    </ul>
                </template>
            </div>
            <ul>
                <li>
                    <b>Email:</b>&nbsp;&nbsp;
                    <span v-if="is_editing_profile == false">{{ profile_form.email }}</span>
                    <input v-else v-model="profile_form.email" type="email" />                    
                </li>
                <li>
                    <b>Phone Number:</b>&nbsp;&nbsp;                                    
                    <span v-if="is_editing_profile == false">{{ profile_form.phone_number }}</span>
                    <input v-else v-model="profile_form.phone_number" />                                   
                </li>
                <li>
                    <b>Coin Balance:</b>&nbsp;&nbsp; <span>{{ profile_form.coins }}</span>
                </li>
                <!-- agent profile -->
                <template v-if="isAgent()">
                    <li>
                        <b>Wallet Ballance:</b>
                        <span>{{ user_info?.user?.wallets?.[0]?.wallet_balance || 0 }}</span>
                    </li>
                </template>
                <!-- end agent profile -->                
            </ul>
            <button v-if="is_editing_profile" @click="submitEditForm" class="btn-input btn-input--submit">Submit</button>
            <div v-if="isAgent()" class="agent-panel">
                <!-- transfer -->
                <h2 class="page-title">Transfer</h2>
                <form @submit.prevent="searchUser">
                    <input v-model="search.value" placeholder="ID / Username" />
                    <button type="submit">Search</button>
                </form>
                <div class="user-details">
                    <p>ID: <input v-model="user_form.id" disabled /></p>
                    <p>Username: <input :value=" user_search?.username || '' " disabled /></p>
                    <p>Coin balance: <input :value="user_search?.coins?.[0]?.coin_balance || 0 " disabled /></p>
                    <form @submit.prevent="loadCoins">
                        <input v-model="user_form.amount" placeholder="Amount" />
                        <button>Load Coins</button>
                    </form>
                    <p class="error-message">{{ error_message }}</p>
                </div>
                <!-- end transfer -->
            </div>
        </div>
        <ModalChangePassword v-if="cpassword_is_active" />
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info').value
    const is_editing_profile = useState('is_editing_profile', () => false)
    const cpassword_is_active = useState('cpassword_is_active', () => false);
    const profile_form = useState('profile_form', () => {})
    const user_search = useState('user_search')
    const error_message = ref()
    const agent_info = ref()
    const agents = ref()
    const show_agents = ref(false)

    profile_form.value = {
        email: user_info.user.email,
        phone_number: user_info.user.phone_number,
        coins: user_info.user.coins.length > 0 ? user_info.user.coins[0].coin_balance : 0,
    }

    const search = {
        value: null,
    }
    let user_form = {
        id: null,
        username: null,
        coins: null,
        amount: null,
    }

    function editProfile(){
        is_editing_profile.value = !is_editing_profile.value
    }    

    async function submitEditForm(){
        const user_info = useCookie('user_info')
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/update`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
            body: JSON.stringify(profile_form.value)
            
        });
        window.location.reload(true)
    }

    // transfer functionalities
    function isAgent() {
        return user_info?.user?.user_type?.name == 'agent' ? true : false
    }

    function isAdmin() {
        return user_info?.user?.user_type?.name == 'admin' ? true : false
    }

    async function searchUser() {
        const {data:user_data, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/search/${search.value}`, {
            method: 'GET',            
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        });
        if(user_data.value){
            user_search.value = user_data.value
            user_form.id = user_data.value.id
            user_form.username = user_data.value.username
            user_form.email = user_data.value.email
            user_form.phone_number = user_data.value.phone_number
            user_form.coins =  user_data?.value.coins[0]?.coin_balance
        }
        else
            console.log('An error occurred')
    }

    async function loadCoins() {
        const wallet_response = await submitLoadWallet(user_form.amount)
        if(wallet_response.success > 0){
            const {data:user_data, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/coins/load`, {
                method: 'POST',
                body: JSON.stringify({
                    user_id: user_form.id,
                    amount: user_form.amount,
                }),
                headers: {
                    Authorization: 'Bearer '+user_info.token,
                },
            });
            if(user_data.value){
                user_search.value = user_data.value
                // window.location.reload(true)
            }
            else
                console.log('An error occurred')
        }
        else {
            error_message.value = wallet_response.message
        }
    }

    // submit load wallet
    async function submitLoadWallet(amount) {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/wallet/deduct`, {
            method: 'POST',
            body: JSON.stringify({
                amount: amount,
            }),
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        });
        if(!response) {
            console.log("An error occurred")
        }
        else{
            return response.value
        }
    }

    // submit load wallet
    if(isAgent()) {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/agent/info`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        });
        if(!response) {
            console.log("An error occurred")
        }
        else{
            agent_info.value = response.value.agent
        }
    }

    // get all online agents
    async function getOnlineAgents() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/agent/online`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        });
        if(!response) {
            console.log("An error occurred")
        }
        else{
            agents.value = response.value.agents
            console.log(agents)
            show_agents.value = true
            console.log(show_agents)
        }
    }

</script>
<style scoped>
    .profile-page {color: #000;}

    .profile-nav { display: flex; column-gap: 20px; text-decoration: none;} 
    .wrapper{
        padding: 15px;
        color: #000000;
    }
    .wrapper ul{
        margin: 10px; 
    }
    .wrapper ul li{
        text-align: left;
        padding: 6px; 
    }
    .wrapper input {
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 5px;
    }
    .wrapper input:focus{
        outline: 2px solid #ebb948;
    }
    
    
    
</style>