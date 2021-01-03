<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom">
      <router-link :to=" {name:'home'} " class="navbar-brand">SFV</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to=" {name:'login'} " class="nav-link">Log in</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Register</a>
        </li>
      </ul>
    </nav>
    <div class="container mt-4 mb-4 pr-4 pl-4">
      <router-view></router-view>
    </div>
  </div>
</template>