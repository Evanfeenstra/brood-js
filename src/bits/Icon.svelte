<script lang="ts">
  import type {IconName} from '../types'
  import {names} from './icons'

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
</style>

<svg
  on:click
  style={style}
  height={size}
  width={size}
  viewBox={vb||"0 0 24 24"}
  class={className}
  fill="none">
  {#each paths as path}
    <path d={path.d} fill={color || path.fill || 'none'} />
  {/each}
</svg>

