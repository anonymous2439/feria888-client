<template>
    <h2 class="page-title">Transfer</h2>
    <form @submit.prevent="searchUser">
        <input v-model="search.value" placeholder="ID / Username" />
        <button type="submit">Search</button>
    </form>
    <div class="user-details">
        <p>ID: <input v-model="user_form.id" disabled /></p>
        <p>Username: <input :value="user_details ? user_details.username : '' " disabled /></p>
        <p>Coin balance: <input :value="user_details ? user_details.coins[0].coin_balance : '' " disabled /></p>
        <form @submit.prevent="loadCoins">
            <input v-model="user_form.amount" placeholder="Amount" />
            <button>Load Coins</button>
        </form>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')
    const user_details = useState('user_details')

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
            user_form.coins = user_data.value.coins[0].coin_balance
        }
        else
            console.log('An error occurred')
    }

    async function loadCoins() {
        submitLoadWallet(user_form.id, user_form.amount)
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
        if(user_data.value)
            user_details.value = user_data.value
        else
            console.log('An error occurred')
    }

    // submit load wallet
    async function submitLoadWallet(id, amount) {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/wallet/load`, {
            method: 'POST',
            body: JSON.stringify({
                user_id: id,
                amount: amount*(-1),
            }),
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        if(!response) {
            console.log("An error occurred")
        }
    }
</script>

