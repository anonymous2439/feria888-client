<template>
    <div class="add-modal">
        <div class="add-modal-overlay modal-overlay" @click="() => {add_modal_is_active = false}"></div>
        <div class="add-modal-con">
            <select v-model="formData.type_id">
                <!-- <option disabled value="">Select user type</option> -->
                <option v-for="(user_type, i) in user_types" :key="i" :value="user_type.id" :selected="i == 0">
                        {{ user_type.name }}
                </option>
            </select>
                <input v-model="formData.username" placeholder="Username" type="text" required />
                <input v-model="formData.email" placeholder="Email" type="email" required />
                <input v-model="formData.password" placeholder="Password" type="password" requuired />
                <input v-model="formData.password_confirmation" placeholder="Confirm Password" type="password" required />
                <input v-model="formData.phone_number" placeholder="Phone Number" type="text" required />
                <button @click="submitForm" class="btn-input btn-input--add">Add</button>
                
        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const add_modal_is_active = useState('add_modal_is_active');    
    const user_info = useCookie('user_info')
    const {value:user_types} = useState('user_types')
    const content_is_loading = useState('content_is_loading', () => false)
    
    let formData = {
        type_id: user_types.length > 0 ? user_types[0].id : null
    }
    
    // submit add user form
    async function submitForm() {
        content_is_loading.value = true
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/user/add`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
            body: JSON.stringify(formData)
        });
        if(response.user){
            window.location.reload(true)
        }
    }
    
</script>

<style scoped>
    .add-modal {
        position: absolute; 
        right: 0px;
        left: 0px; 
        top: 10%; 
        z-index: 500; 
    } 
  .add-modal-con { 
        background: #ffffff; 
        padding: 20px; 
        border-radius: 5px;
        position: relative; 
        cursor: default;
        width: 30%;
        margin:auto;
    }
    
  .add-modal-overlay { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: #0000001F; 
        cursor: auto; 
    } 
  .add-modal-con input {
        display: flex; 
        flex-direction: column;
        width: 100%;
        padding: 10px 10px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 4px;
    }
    .add-modal-con select{
        border: 1px solid #c8371a;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
    }
    .add-modal-con select option{
        border-radius: 5px;
        cursor: pointer;
    }
    .add-modal-con input:focus{
        outline: 2px solid #ebb948;
    }
    .btn-input {
        border: none;
        display: inline-block;
        color: #fff;
        margin-top: 8px;
        padding-top: 13px 0px;
        width: 90px;
        height: 40px;
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
    .btn-input--add{
        background: #00e300;
    }
    @media only screen and (max-width: 1000px){
        .add-modal { 
            position: fixed; 
            top: 0; 
            width: 100%; 
            height: 100%; 
        } 
        .add-modal-con { 
            position: absolute; 
            left: 0; right: 0; 
            margin: 0 4%; 
            top: 31%; 
            transform: translateY(-20%); 
            max-width: 410px; 
            margin: 0 auto; 
        } 
 
        .add-modal-con form { 
            display: flex; 
            flex-direction: column; 
        } 
    }
    @media only screen and (max-width: 800px){
        .add-modal { 
            position: fixed; 
            top: 0; 
            width: 100%; 
            height: 100%; 
        } 
        .add-modal-con { 
            position: absolute; 
            left: 0; right: 0; 
            margin: 0 4%; 
            top: 31%; 
            transform: translateY(-20%); 
            max-width: 410px;
            min-width: 250px; 
            margin: 0 auto; 
        } 
 
        .add-modal-con form { 
            display: flex; 
            flex-direction: column; 
        } 
    }
    @media only screen and (max-width: 600px){
         
        .add-modal-con {
            transform: translateY(-20%); 
            max-width: 410px;
            min-width: 250px;
        }
    }
</style>