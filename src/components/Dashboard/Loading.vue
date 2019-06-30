<template>
  <div style="display: flex; flex-flow: column; height: 100vh;">
    <Searchbar/>
    <Sidebar />
    <div class="thai inside-container">
      Loading...
    </div>
  </div>
</template>

<script>
import Searchbar from './Searchbar'
import Sidebar from './Sidebar'
export default {
  components: {
    Searchbar,
    Sidebar
  }
}
</script>
