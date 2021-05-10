<script lang="ts">
  import Icon from '../bits/Icon.svelte'
  import {fade} from 'svelte/transition'
  
  export let getAccounts = () => {}

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
