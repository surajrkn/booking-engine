<template>
    <div class="nav container">
        <div class="logo">
          <img src="../assets/svg/logo.svg" alt="Tasty Resturants">
        </div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 15px;
  }
  ul{
    margin: 0;
    padding: 0;
    display: none;

    li {
      display: inline-block;
      padding: 0 15px;
    }
  }
  @media(min-width: 576px) {
    ul {
      display: unset;
    }
  }
</style>
