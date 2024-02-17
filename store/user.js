// import { defineStore } from 'pinia'

// // Define your store
// export const useUserStore = defineStore('user', {
//   state: () => ({
//     userName: 'Guest' // Initial state
//   }),
//   actions: {
//     setName(newName) {
//       this.userName = newName
//     }
//   }
// })
import { defineStore } from 'pinia';

export const useTestStore = defineStore('darkmodetoggle' ,{
  state: () => ({
    darkModeEnabled: false // Initial value
  }),
  actions: {
    updateDarkMode(value) {
      this.darkModeEnabled = value; // Update state
    }
  }

})
