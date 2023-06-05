<template>
    <div class="add-modal">
        <div class="add-modal-overlay modal-overlay" @click="() => {add_modal_is_active = false}"></div>
        <div class="add-modal-con">
            
                <input v-model="formData.username" placeholder="Username" type="text" required />
                <input v-model="formData.email" placeholder="Email" type="email" required />
                <input v-model="formData.password" placeholder="Password" type="password" requuired />
                <input v-model="formData.password_confirmation" placeholder="Confirm Password" type="password" required />
                <input v-model="formData.phone_number" placeholder="Phone Number" type="text" required />
                <p style="color:black;">{{ message }}</p>
                <button @click="submitForm">Add</button>

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const add_modal_is_active = useState('add_modal_is_active');
    let formData = {}
    const message = useState('teststate', () => '')
    
    async function submitForm() {
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/add`, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        if(response.user)
            message.value = "You have successfully added a user!"
    }
</script>

<style scoped>
    .add-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .add-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .add-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .add-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .add-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .add-modal-con form { display: flex; flex-direction: column; } 
  }
</style>