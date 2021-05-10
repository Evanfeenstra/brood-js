<script lang="ts">  
  import Coin from '../views/Coin.svelte'
  import {connected, initialized} from '../store'
  import {fade} from 'svelte/transition'
  import Connect from './Connect.svelte'

  import * as api from "../api"
  import * as store from '../store'

  async function getAccounts(){
    const r = await api.getAccounts();
    console.log(r)
    if(r.payload && r.payload[0]) {
      const first = r.payload[0]
      // alert(JSON.stringify(first, null, 2))
      store.account.set(first)
    }
  }
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
    <header>
      {#if $connected}
        <Connect getAccounts={getAccounts} />
      {/if}
    </header>
    <section>
      <Coin coin={{name:'IOTA',balance:186624}} getAccounts={getAccounts} />
    </section> 
  </main>
{/if}
