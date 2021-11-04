<template>
  <Navbar/>
  <div class="container py-32 mx-auto text-center sm:px-4">
          <h1
            class="
              text-4xl
              font-extrabold
              leading-10
              tracking-tight
              text-indigo-400
              dark:text-white
              sm:text-5xl sm:leading-none
              md:text-6xl
              xl:text-7xl 
            "
          >
            <span class="block">404</span> <span class=""></span>
          </h1>
          <div
            class="
              max-w-lg
              mx-auto
              mt-6
              text-sm text-center text-indigo-300 dark:text-indigo-200
              md:mt-12
              sm:text-base
              md:max-w-xl md:text-lg
              xl:text-xl
            "
          >
            Deze pagina bestaat niet!<br><br>Als u denkt dat dit niet klopt, laat het dan weten via deze <a class="text-indigo-400 dark:text-indigo-300 hover:text-red-300" href="https://bhcshop.ga/admin/contact">link</a>
          </div>
          <div
            class="
              relative
              flex
              items-center
              max-w-md
              mx-auto
              mt-12
              overflow-hidden
              text-center
              rounded-full
            "
          >
        </div>
      </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PageNotFound',
  components: {
    Navbar,
    Footer
  },
  title: 'BHC Shop - 404'
}
</script>
