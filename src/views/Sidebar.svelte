<script lang="ts">
  import Logo from '../bits/Logo.svelte'
  import {initialized} from '../store'
  import {fade} from 'svelte/transition'
</script>

<style>
  main {
    height:100%;
    display:flex;
    flex-direction: column;
    width: var(--sidewidth);
  }
  header {
    height: var(--headheight);
    display:flex;
    align-items: center;
    padding:0 12px;
  }
  h2 {
    font-size: 16px;
    margin-top:14px;
    margin-left:10px;
    letter-spacing: 1px;
  }
</style>

<main>
  {#if $initialized}
    <header transition:fade={{duration:200}}>
      <Logo />
      <h2>BROOD WALLET</h2>
    </header>
  {/if}
</main>
