<template>
    <div class="datatables">
        <table>
            <slot />
        </table>
    </div>
</template>

<script setup>

</script>

<style>
    .datatables {}
    .datatables table{width: 100%;border-collapse: collapse;}
    .datatables table thead{background-color:red ;color: #fff;}
    .datatables table tbody {}
    .datatables table th, .datatables table td {padding: 10px 15px; text-align: left;}
    .datatables table a {cursor: pointer;text-decoration: underline;}
    .datatables table a:hover{text-decoration: none;}
</style>