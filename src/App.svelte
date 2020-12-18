<script lang="ts">
  import Button from './bits/Button.svelte'
  import * as api from './api'

  let sending = false

  function sendTX(){
    sending = true
    setTimeout(()=>sending=false,2000)
    api.sendTransfer()
  }
</script>

<style>
  main {
    display:flex;
    flex:1;
    align-items: center;
    justify-content: center;
  }
</style>

<main>
  <Button icon={sending?'loading':'send'} on:click={sendTX}>
    Send Transaction
  </Button>
</main>
