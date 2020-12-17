<script lang="ts">
  import Button from './bits/Button.svelte'

  let sending = false

  function sendTX(){
    sending = !sending
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
