<template>
    <div class="users-page">
        <h2 class="page-title">Users</h2>
        <div class="table-nav">
            <a @click="() => add_modal_is_active = !add_modal_is_active"><img src="/images/add.png" /></a>
        </div>
        <!-- <Datatables :onPageChange="handlePageChange"> -->
            <DataTable class="display">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Coin Balance</th>
                        <th>User Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, i) in users" :key="i">
                        <td>{{ user.id }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone_number }}</td>
                        <td>{{ user.coins.length > 0 ? user.coins[0].coin_balance : 0 }}</td>
                        <td>{{ user.user_type.name }}</td>
                        <td>
                            (
                            <a @click="onDetailsClick(user)">Details</a> <a v-if="user_info.user.user_type.name == 'admin'" @click="onDeleteClick(user)">Delete</a>
                            )
                        </td>
                    </tr>
                </tbody>
            </DataTable>
        <!-- </Datatables> -->
    </div>
    <AdminModalUserDetails v-if="details_modal_is_active" />
    <AdminModalAddUser v-if="add_modal_is_active" />
    <AdminModalDeleteUser v-if="delete_modal_is_active" />
</template>

<script setup>
    import DataTable from 'datatables.net-vue3'
    import DataTablesCore from 'datatables.net';
    definePageMeta({
        layout: "admin",
    });
    DataTable.use(DataTablesCore);
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')

    // state
    const details_modal_is_active = useState('details_modal_is_active', () => false)
    const add_modal_is_active = useState('add_modal_is_active', () => false)
    const delete_modal_is_active = useState('delete_modal_is_active', () => false)
    const user_to_view = useState('user_to_view', () => {})
    const user_to_delete = useState('user_to_delete', () => {})
    const content_is_loading = useState('content_is_loading')


    content_is_loading.value = true

    // get users data
    const {data:users_data, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/users/all`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });
    const users = users_data.value

    // get user types data
    const user_types_data = await $fetch(`${runTimeConfig.public.baseURL}/api/user/types`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });
    const user_types = useState('user_types', () => user_types_data)

    content_is_loading.value = false

    // on details click
    function onDetailsClick(user) {
        details_modal_is_active.value = true
        user_to_view.value = user
    }

    // on delete click
    async function onDeleteClick(user){
        delete_modal_is_active.value = true
        user_to_delete.value = user
    }




    // datatable init
    // Callback function to handle page changes
function handlePageChange(page) {
  // Perform any necessary actions with the updated page
  console.log('Current page:', page);
}

// Set the onPageChange callback when the component is mounted
// onMounted(() => {
//   setOnPageChange(handlePageChange);
// });

// Computed property for paginated data
const paginatedData = computed(() => {
  // Calculate the range of items to display based on the current page
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Replace this with your actual data source
  const allData = [
    /* Your data array */
  ];

  return allData.slice(start, end);
});

</script>

<style scoped>
    @import 'datatables.net-dt';
    
    
    .table-nav a img{
        cursor: pointer;
        height: 30px;
    }
    .table-nav a img:hover{
        scale: 1.1;
    }    
    .display thead tr{
        background: #302e39;
        color: #fff;
    }
    .display thead tr th:hover{
        color: #ebb948;
    }
    .display tbody{
        color: #000000;
    }
    .display tbody tr:hover{
        background: #ebb948;
    }
    .display tr:nth-child(even) {
        background-color: #dad9d9;
    }
    .display tbody tr td a:nth-child(1){
        font-weight: bolder;
        cursor: pointer;
        color: green;
        border-right: 1px solid black;
        padding-right: 5px;
    }
    .display tbody tr td a:nth-child(2){
        font-weight: bolder;
        cursor: pointer;
        color: red;
    }
    .display tbody tr td a:hover{
        border-bottom: 2px solid green;
        padding-bottom: 1px;
    }
    .display tbody tr td a:hover:nth-child(2){
        border-bottom: 2px solid red;
        padding-bottom: 1px;
    }

</style>