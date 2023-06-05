<template>
    <div class="edit-modal">
        <div class="edit-modal-overlay modal-overlay" @click="() => {register_is_active = false}"></div>
        <div class="edit-modal-con">
            
                <input v-model="formData.phone_number" placeholder="Phone Number" type="text" required />
                <p style="color:black;">{{ message }}</p>
                <button @click="submitForm">Submit</button>

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    let formData = {}
    const message = useState('teststate', () => '')
    
    async function submitForm() {
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/register`, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        if(response.user)
            message.value = "You have successfully registered!"
    }
</script>

<style scoped>
    .edit-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .edit-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .edit-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .edit-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .edit-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .edit-modal-con form { display: flex; flex-direction: column; } 
  }
</style>