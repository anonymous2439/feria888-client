export default defineEventHandler(async (event) => {
    const data = await $fetch("http://localhost/api/public/api/user/1");
    console.log(data)
    return data;
  });