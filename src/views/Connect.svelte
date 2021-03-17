<script lang="ts">
  import Icon from '../bits/Icon.svelte'
  import {fade} from 'svelte/transition'
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
    height: var(--headheight);
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
  span {
    margin-left:9px;
    font-size: 12px;
  }
</style>

<main transition:fade={{duration:150}}>
  <Icon name="compute" size={14} />
  <span on:click={getAccounts}>CONNECTED</span>
</main>
