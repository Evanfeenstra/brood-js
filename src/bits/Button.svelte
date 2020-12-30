<script lang="ts">
  import Icon from './Icon.svelte'
  import type {IconName} from './icons'
  import {css} from './utils'

  export let icon:IconName|'' = '';
  export let disabled:boolean = false;
  export let style:{[k:string]:any} = {}
  
</script>

<style>
  button {
    height: 40px;
    font-family: Avenir, Arial, Helvetica, sans-serif;
    padding:11px 16px 9px 16px;
    border-radius: 6px;
    font-size: 16px;
    border: 1px solid white;
    outline: none;
    background: transparent;
    color: white;
    cursor: pointer;
    position: relative;
  }
  button:hover {
    border: 2px solid white;
    background: rgba(255, 255, 255, 0.4);
  }
  button:focus {
    outline: none;
  }
  button[disabled] {
    border: 1px solid grey;
    color: grey;
    cursor: default;
  }
  button:hover * {
    cursor: pointer;
  }
  button[disabled] * {
    cursor: default;
  }
  button[disabled] svg {
    fill: grey;
  }
  button[active="true"] {
    border: 2px solid white;
    background: rgba(255, 255, 255, 0.4);
    cursor: default;
  }
  button[active="true"] * {
    cursor: default;
  }
  .icon-wrap{
    width:29px;
    display:flex;
    align-items: center;
  }
  section {
    position:absolute;
    top:0px;left:0px;right:0px;bottom:0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<button on:click {disabled} style={css(style)}>
  <section>
    {#if icon}
      <div class="icon-wrap">
        <Icon name={icon} size={17} color={disabled?'grey':'white'}/>
      </div>
    {/if}
    <slot />
  </section>
</button>