<template>
    <div class="profile-page">
        <div class="wrapper">
            <h2 class="page-title">Agent Panel</h2>
            <br /> 
            <div class="agent-nav">
                <a class="btn-input btn-input--agent-cancel" @click="changeAgentStatus" href="javascript:;">{{ agent_info?.status }}</a>
            </div>
            <ul>
                <li>
                    <b>Coin Balance: </b><span>{{ profile_form.coins }}</span>
                </li>
                <li>
                    <b>Wallet Ballance: </b>
                    <span>{{ user_info?.user?.wallets?.[0]?.wallet_balance || 0 }}</span>
                </li>
                <li>
                    <b>Link : </b>
                    <template v-if="editting_link">
                        <input :href="agent_info?.link || 'javascript:;'" target="_blank" :value="agent_info?.link || 'Link not set'"><br />
                        <a class="btn-input btn-input--agent-cancel" href="javascript:;" @click="editting_link = false">Cancel</a>
                        <a class="btn-input btn-input--submit" href="javascript:;">Save</a>
                    </template>
                    <template v-else>
                        <br />
                        <a class="btn-input btn-input--linknotset" href="agent_info?.link || 'javascript:;'" target="_blank">{{ agent_info?.link || 'Link not set' }}</a>
                        <a class="btn-input btn-input--edit" href="javascript:;" @click="editting_link = true">EDIT</a>
                    </template>
                </li>                
            </ul>
            <div class="agent-panel">
                <!-- transfer -->
                <h2 class="page-title">Transfer</h2>
                <form @submit.prevent="searchUser">
                    <input v-model="search.value" placeholder="ID / Username" />
                    <button class="btn-input btn-input--search" type="submit">Search</button>
                </form>
                <div class="user-details">
                    <p><input v-model="user_form.id" disabled />: ID</p>
                    <p><input :value=" user_search?.username || '' " disabled />: Username</p>
                    <p><input :value="user_search?.coins?.[0]?.coin_balance || 0 " disabled />: Coin Balance</p>
                    <form @submit.prevent="loadCoins">
                        <input v-model="user_form.amount" placeholder="Amount" />
                        <button class="btn-input btn-input--load">Load Coins</button>
                    </form>
                    <p class="error-message">{{ error_message }}</p>
                </div>
                <!-- end transfer -->
            </div>
        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info').value
    const profile_form = useState('profile_form', () => {})
    const user_search = useState('user_search')
    const error_message = ref()
    const agent_info = ref()
    const editting_link = ref(false)

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

    // get agent info
    const {data:user_data} = await useFetch(`${runTimeConfig.public.baseURL}/api/agent/info`, {
        method: 'GET',            
        headers: {
            Authorization: 'Bearer '+user_info.token,
        },
    });
    if(user_data) {
        agent_info.value = user_data
        console.log(agent_info)
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
        agent_info.value = response.value
    }
    

    // change agent status
    async function changeAgentStatus() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/agent/status/change`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        });
        if(response){
            agent_info.value = response.value.agent
        }
    }
</script>
<style scoped>
    
    input {
        margin: 5px 8px;
    }
    .profile-page {color: #000;}

    .agent-nav { display: flex; column-gap: 20px; text-decoration: none;} 
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