<template>
    <img  class="h-10 w-10 rounded-3xl object-contain" :src="imgLink" alt="User profile image">
</template>

<script>
	export default {
		name: "ProfileImg",
		data() {
			 return{
					imgLink:"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			 }
		}
	}
</script>