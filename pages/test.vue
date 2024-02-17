<template>
    <div>
        <p>Welcome, {{ userName }}</p>
        <button @click="changeUserName('John')">Change Name</button>
                <p>Welcome, {{ userName }}</p>

    </div>
</template>

<script setup>
// Import the Pinia store
import { useUserStore } from '~/store/user'
const userStore = useUserStore()

    // Access state
    const userName = userStore.userName

    console.log(userName)
    const xyz = userStore.setName
    // Access actions
    const changeUserName = (newName) => {
        console.log(newName)
      userStore.setName(newName)
    }
    // return changeUserName,userName;
</script>

