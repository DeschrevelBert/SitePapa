<template>
    <nav class=" flex flex-wrap items-center justify-between px-2 py-3 bg-darkgrey shadow-lg">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full z-50 flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase" href="#pablo">
            Deschrevel Freddy BV
          </a>
          <button class="text-white cursor-pointer text-xl leading-none  py-1 border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none gap-1 flex flex-col  justify-center" type="button" v-on:click="toggleNavbar()">
            <div v-bind:class="{'rotate-45 translate-y-2': showMenu}" class="bg-white rounded h-1 w-8 transition-all ease-in-out duration-300 shadow-lg"></div>
            <div v-bind:class="{'opacity-0 -translate-x-8': showMenu}" class="bg-white rounded h-1  w-6 transition-all ease-in-out duration-300 shadow-lg"></div>
            <div v-bind:class="{'-rotate-45 -translate-y-2 w-8': showMenu, 'w-4': !showMenu}" class="bg-white rounded h-1  transition-all ease-in-out duration-300 shadow-lg"></div>
          </button>
        </div>
        <!--  v-bind:class="{'translate-x-[150%]': !showMenu, 'translate-x-0': showMenu}" -->
        <div class="lg:flex lg:flex-grow hidden items-center overflow-hidden transition-all duration-300 ease-in-out">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">Share</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Tweet</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Pin</span>
              </a>
            </li>
          </ul>
        </div>

        <div  v-bind:class="{'top-0 left-full hidden': !showMenu, 'top-0 left-0 flex': showMenu}" class="absolute bg-darkgrey w-screen h-screen justify-center items-center transition-all duration-300 ease-in-out">
            <ul class="flex list-none flex-col">
                <li>
                    <a href="">Optie 1</a>
                </li>
                <li>
                    <a href="">Optie 2</a>
                </li>
                <li>
                    <a href="">Optie 3</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "pink-navbar",
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
  </script>