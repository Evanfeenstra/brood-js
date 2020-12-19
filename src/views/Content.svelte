<script lang="ts">  
  import Coin from '../views/Coin.svelte'
  import {initialized} from '../store'
  import {fade} from 'svelte/transition'
</script>

<style>
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    height:100%;
  }
  header {
    height: var(--headheight);
    min-height: var(--headheight);
    max-height: var(--headheight);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  section {
    height: var(--bodyheight);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

{#if $initialized}
  <main transition:fade={{duration:100}}>
    <header></header>
    <section>
      <Coin coin={{name:'IOTA',balance:100}} />
    </section> 
  </main>
{/if}
