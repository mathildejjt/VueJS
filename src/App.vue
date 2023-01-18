<template>

  <nav>
    <div>
    <router-link to="/">Contact</router-link> 
  </div>
  <div>
    <router-link to="/clavier">Clavier</router-link> 
  </div>
  <div>
    <router-link to="/journal">Journal</router-link>
  </div>
  </nav>
  <router-view/>



  <div>

  </div>


</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 50px;

}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: purple;
}
</style>
