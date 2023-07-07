<template>
    <h2 class="page-title">Transfer</h2>
    <form @submit.prevent="searchUser">
        <input v-model="search.value" placeholder="ID / Username" />
        <button class="btn-input btn-input--search" type="submit">Search</button>
    </form>
    <div class="user-details">
        <p><input v-model="user_form.id" disabled />: ID</p>
        <p> <input :value=" user_details?.username || '' " disabled />: Username</p>
        <p> <input :value="user_details?.coins?.[0]?.coin_balance || 0 " disabled />: Coin balance</p>
        <form @submit.prevent="loadCoins">
            <input v-model="user_form.amount" placeholder="Amount" />
            <button class="btn-input btn-input--load">Load Coins</button>
        </form>
        <p class="error-message">{{ error_message }}</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')
    const user_details = useState('user_details')
    const error_message = ref()
    console.log(user_info)

    const search = {
        value: null,
    }
    let user_form = {
        id: null,
        username: null,
        coins: null,
        amount: null,
    }

    async function searchUser() {
        const {data:user_data, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/search/${search.value}`, {
            method: 'GET',            
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        if(user_data.value){
            user_details.value = user_data.value
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
                    Authorization: 'Bearer '+user_info.value.token,
                },
            });
            if(user_data.value){
                user_details.value = user_data.value
                window.location.reload(true)
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
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        if(!response) {
            console.log("An error occurred")
        }
        else{
            return response.value
        }
    }
</script>
<style scoped>
    input {
        width: 200px;
        padding: 10px;
        margin: 8px 8px;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 4px;
    }
    input:focus{
        outline: 2px solid #ebb948;
    }
    
</style>

