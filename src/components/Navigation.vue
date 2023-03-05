<template>
    <header>
        <nav>
            <div>
                <h1>Sketch app</h1>
            </div>
            <ul>
                <router-link :to="{ name: 'Home'}">Home</router-link> 
                <router-link :to="{ name: 'Login' }">Login</router-link>
                <router-link :to="{ name: 'Register' }">Register</router-link>
                <li>Logout</li>
            </ul>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    setup() {
      // Get user from store
      // Setup ref to router
      // Logout function
      return {};
    },
  };
  </script>