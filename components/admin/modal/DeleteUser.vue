<template>
    <div class="delete-modal">
        <div class="delete-modal-overlay modal-overlay" @click="() => {delete_modal_is_active = false}"></div>
        <div class="delete-modal-con">
                <p>Are you sure you want to delete?</p><br>
                <button @click="delete_modal_is_active = false" class="btn-input btn-input--cancel">Cancel</button>
                <button @click="onDelete" class="btn-input btn-input--delete">Delete</button>
                
        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const delete_modal_is_active = useState('delete_modal_is_active');    
    const user_info = useCookie('user_info')
    const {value:user_types} = useState('user_types')
    const content_is_loading = useState('content_is_loading', () => false)
    const user_to_delete = useState('user_to_delete').value

    let formData = {
        type_id: user_types.length > 0 ? user_types[0].id : null
    }
    
    // submit delete user form
    async function onDelete() {
        content_is_loading.value = true
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/user/delete/${user_to_delete.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        window.location.reload(true)
    }
    
</script>

<style scoped>
    .delete-modal { 
        position: absolute; 
        right: 35%;
        left: 35%;
        top: 20%; 
        z-index: 500; } 
  .delete-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default; text-align: center;} 
  .delete-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 
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
    .btn-input--cancel{
        background: none;
        color: #000000;
        border: 1px solid #c8371a;
        padding: 15px 0px 27px 0px;
    }
    .btn-input--delete{
        background: #c8371a;
        color: #fff;
        margin-left: 10px;
        padding: 15px 0px 27px 0px;
    }
  @media only screen and (max-width: 800px){
    .delete-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .delete-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .delete-modal-con form { display: flex; flex-direction: column; }
     
  }
</style>