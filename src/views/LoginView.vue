<template>
  <div>
    <h1>Log into your account...</h1>
    <amplify-authenticator usernameAlias="email">
      <amplify-sign-out/>
    </amplify-authenticator>
  </div>
</template>

<script>
export default {
  name: 'LogIn'
}
</script>
