<template>
    <div class="agents-page">
        <h2 class="page-title">Agents</h2>
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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, i) in users" :key="i">
                        <td>{{ user.id }}</td>
                        <td>{{ user.username }}</td>
                        <td><a :href="user.email" target="_blank">{{ user.email }}</a></td>
                        <td>{{ user.phone_number }}</td>
                        <td><span :class="'status status-'+user?.agent?.status">{{ user?.agent?.status }}</span></td>
                        <td>
                            (
                                <a href="javascript:;">Transactions</a> <a href="javascript:;1=" @click="onDetailsClick(user)">Details</a> <a v-if="user_info.user.user_type.name == 'admin'" href="javascript:;" @click="onDeleteClick(user)">Delete</a>
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
    const {data:users_data, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/agents/all`, {
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
    
    .status {position: relative;display: block;}
    .status::before { content: ""; position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 10px; height: 10px; border-radius: 100%; } 
    .status.status-online::before { background: green; } 
    .status.status-offline::before { background: gray; } 
    .table-nav a img{
        cursor: pointer;
        height: 30px;
    }
    .table-nav a img:hover{
        scale: 1.1;
    }
</style>