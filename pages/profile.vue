<template>
    <div class="profile-page">
        <div class="wrapper">
            <h2 class="page-title">User Profile</h2> 
            <div class="profile-nav">
                <a @click="editProfile" class="btn-input btn-input--edit">Edit</a>
                <a @click="cpassword_is_active = true" class="btn-input btn-input--change">Change Password</a>
                <a>Cash-In</a>
                <a>Cash-Out</a>
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

    profile_form.value = {
        email: user_info.user.email,
        phone_number: user_info.user.phone_number,
        coins: user_info.user.coins.length > 0 ? user_info.user.coins[0].coin_balance : 0,
    }

    console.log(profile_form.value)


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

</script>
<style scoped>
    .profile-page {color: #000;}

    .profile-nav { display: flex; column-gap: 20px; text-decoration: underline; } 
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
    .btn-input--change{
        background: #c8371a;
        color: #fff;
        font-size: 12px;
        margin-left: 15px;
        padding-top: 7px;
        padding-bottom: 13px;
    }
    .btn-input--submit{
        background: #00e300;
        color: #fff;
        font-size: 12px;
        padding: 10px 0px 25px 0px;
        margin-top: 10px;
        margin-left: 10px;
    }
    
</style>