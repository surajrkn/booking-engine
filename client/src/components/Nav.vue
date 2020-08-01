<template>
    <div class="nav">
        <div class="logo">Logo</div>
        <ul>
            <li>Login</li>
            <li>Register</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Nav'

}
</script>
<style lang="scss" scoped>
  .nav {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto
  }
  ul{
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 15px;
    }
  }
</style>
