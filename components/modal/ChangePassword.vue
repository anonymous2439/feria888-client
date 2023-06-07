<template>
    <div class="cpassword-modal">
        <div class="cpassword-modal-overlay modal-overlay" @click="() => {cpassword_is_active = false}"></div>
        <div class="cpassword-modal-con">
            
                <input v-model="formData.current_password" placeholder="Current Password" type="password" />
                <input v-model="formData.new_password" placeholder="New Password" type="password" />
                <input v-model="formData.new_password_confirmation" placeholder="Confirm New Password" type="password" />
                <button @click="submitForm">Submit</button>

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
        console.log(response.value)
        // window.location.reload(true)
    }
</script>

<style scoped>
    .cpassword-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .cpassword-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .cpassword-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .cpassword-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .cpassword-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .cpassword-modal-con form { display: flex; flex-direction: column; } 
  }
</style>