<template>
    <div class="cpassword-modal">
        <div class="cpassword-modal-overlay modal-overlay" @click="() => {cpassword_is_active = false}"></div>
        <div class="cpassword-modal-con">
                <h2>Change Password</h2><br/>
                <input v-model="formData.current_password" placeholder="Current Password" type="password" />
                <input v-model="formData.new_password" placeholder="New Password" type="password" />
                <input v-model="formData.new_password_confirmation" placeholder="Confirm New Password" type="password" />
                <button @click="submitForm" class="btn-input btn-input--submit">Submit</button>

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const cpassword_is_active = useState('cpassword_is_active');
    const user_info = useCookie('user_info')
    let formData = {
        'current_password': '',
        'new_password': '',
        'new_password_confirmation': '',
    }
    
    async function submitForm() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/changepassword`, {
        // const response = await $fetch('https://feria888.com/api/api/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        user_info.value = response.value
        window.location.reload(true)
    }
</script>

<style scoped>
    
    .cpassword-modal { 
        position: absolute; 
        right: 35%;
        left: 35%; 
        top: 10%; 
        z-index: 500; 
    } 
    .cpassword-modal-con { 
        background: #fff; 
        padding: 20px;
        color: #000000; 
        border-radius: 5px;
        position: relative; 
        cursor: default;
    }
    .cpassword-modal-con  h2{ 
        color: #000000;
        margin-left: 10px; 
        
    } 
    .cpassword-modal-overlay { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: #0000001F; 
        cursor: auto; 
    } 
    .cpassword-modal-con input {
        padding: 10px;
        display: block;
        box-sizing: border-box;
        width: 94%;
        margin: 10px;
        border: 1px solid #c8371a;
        border-radius: 5px;
    }
    .cpassword-modal-con input:focus{
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
    .btn-input--submit{
        background: #00e300;
        margin-left: 10px;
        margin-top: 20px;
        padding: 15px 0px 27px 0px;
    }
    
  @media only screen and (max-width: 800px){
    .cpassword-modal { 
        position: fixed; 
        top: 10%;
        left: 0;
        right: 0; 
        width: 100%; 
        height: 100%;
    } 
    .cpassword-modal-con { 
        position: absolute; 
        left: 0; 
        right: 0; 
        top: 31%; 
        transform: translateY(-50%); 
        max-width: 410px; 
        margin: auto; 
    } 
 
    .cpassword-modal-con form { 
        display: flex; 
        flex-direction: column; 
    } 
  }
  @media only screen and (max-width: 600px){
    .cpassword-modal { 
        position: fixed; 
        top: 0;
        left: 0%;
        right: 0%;
        width: 100%; 
        height: 100%; 
    } 
    .cpassword-modal-con { 
        position: absolute; 
        left: 0%; 
        right: 0%; 
        top: 40%; 
        transform: translateY(-50%); 
        max-width: 300px; 
        margin: auto; 
    } 
 
    .cpassword-modal-con form { 
        display: flex; 
        flex-direction: column; 
    }
  }
</style>