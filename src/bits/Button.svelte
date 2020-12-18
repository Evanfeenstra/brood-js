<script lang="ts">
  import Icon from './Icon.svelte'
  import type {IconName} from '../types'

  export let icon:IconName|'' = ''
</script>

<style>
  button {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    padding:11px 16px 9px 16px;
    border-radius: 6px;
    font-size: 16px;
    border: 1px solid white;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: white;
    cursor: pointer;
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
</style>

<button on:click>
  {#if icon}
    <div class="icon-wrap">
      <Icon name={icon} size={17} />
    </div>
  {/if}
  <slot />
</button>