<script lang="ts">
  import {makeLines,totalLength,len} from './grid'
  import { onMount } from 'svelte';

  export let onDone = () => {}

  const speed = 99

  let width = window.innerWidth;
  let height = window.innerHeight;
  $: lines = makeLines()
  $: total = totalLength()

  function onResize() {
    width = window.innerWidth
    height = window.innerHeight
    total = totalLength()
    lines = makeLines(total+1)
  }
  let showLastLine = false

  onMount(() => {
    requestAnimationFrame(loop);
    let l = 0
    function loop() {
      if(l>total*2) return
      requestAnimationFrame(loop);
      lines = makeLines(l)
      l = l+speed
      if(l>total) {
        showLastLine = true
        onDone()
      }
    }
  })

</script>

<style>
  svg {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 99;
  }
  line {
    stroke: white;
    stroke-width: 2px;
  }
</style>

<svg {height} {width}>
  {#each lines as l}
    <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
  {/each}
  {#if showLastLine}
    <line x1={280} y1={56} x2={280} y2={1} />
  {/if}
</svg>

<svelte:window on:resize={onResize}/>






