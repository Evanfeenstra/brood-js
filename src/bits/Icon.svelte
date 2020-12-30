<script lang="ts">
  import {names} from './icons'
  import type {IconName} from './icons'

  export let name: IconName = "plus";
  export let size: number = 24;
  export let color: string = "white";
  export let style: string = ""

  $: paths = names[name].ds || [];
  $: vb = names[name].viewBox || ''
  $: className = names[name].class
</script>

<style>
  svg {
    transition: transform 0.2s;
  }
  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
  .loading{
    height:18px;
    width:18px;
    animation-name: spin;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
  }
</style>

<svg
  on:click
  style={style}
  height={size}
  width={size}
  viewBox={vb||"0 0 24 24"}
  class={className}
  fill="none">
  {#each paths as p}
    {#if p.type==='rect'}
      <rect x={p.params.x} y={p.params.y} rx={p.params.rx} height={p.params.height} width={p.params.width} fill={color || p.fill || 'none'} />
    {/if}
    <path d={p.d} fill={color || p.fill || 'none'} />
  {/each}
</svg>
