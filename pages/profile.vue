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
                <a class="btn-input btn-input--cashin" href="javascript:;" @click="getOnlineAgents">Cash In</a>
                <a class="btn-input btn-input--cashout" href="javascript:;">Cash Out</a>
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
            </ul>
            <button v-if="is_editing_profile" @click="submitEditForm" class="btn-input btn-input--submit">Submit</button>

            <div v-if="show_agents" class="online-agents">
                <h2>Available Agents:</h2>
                <a class="btn-input btn-input--refresh" href="javascript:;" @click="getOnlineAgents">Refresh</a>
                <ul>
                    <li v-for="(agent, i) in agents" :key="i">{{ agent.user.username }} - <a :href="agent.link" target="_blank">{{ agent.link || 'link not set' }} </a></li>
                </ul>
            </div>

            <!-- transactions -->
            <div class="transactions">
                <h2>Transactions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>From</th>
                            <th>Transaction Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(transaction, i) in transactions" :key="i">
                            <td>{{ transaction.id }}</td>
                            <td>{{ transaction.from_user.username }}</td>
                            <td>{{ transaction.type }}</td>
                            <td>{{ transaction.amount }}</td>
                            <td>{{ transaction.formatted_date }}</td>
                        </tr>
                    </tbody>
                </table>
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
    
    const {data:transactions, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/transactions/get`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.token,
        },           
    });
    console.log(transactions)

    async function submitEditForm(){
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/update`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
            body: JSON.stringify(profile_form.value)            
        });
        if(response){
            console.log(user_info)
            console.log(response.value)
            user_info.user = response.value.user
        }
        // window.location.reload(true)
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

    // get all online agents
    async function getOnlineAgents() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/agents/online`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        });
        if(response) {
            agents.value = response.value.agents
            show_agents.value = true          
        }
        else{
            console.log("An error occurred")
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
    
    @media only screen and (max-width: 800px) {
        .profile-nav { 
            display: flex; 
            column-gap: 10px; 
            text-decoration: none;
        } 
        .btn-input--cashout{
            font-size: 15px;
        }
        .btn-input--change{
            font-size: 12px;
            font-weight: 400;
        }
    }
    @media only screen and (max-width: 600px) {
        .btn-input--change{
            font-size: 11px;
            font-weight: 400;
        }
    }
    
</style>