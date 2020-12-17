<script lang="ts">
  import type {IconName} from '../types'

  export let name: IconName = "plus";
  export let size: number = 24;
  export let color: string = "white";
  export let style: string = ""

  $: console.log(name)

  interface Path {
    d:string
    fill?:string
  }
  interface SVG {
    ds: Path[]
    viewBox?: string
    class?: string
  }
  const names:{[k:string]:SVG} = {
    plus: {
      ds: [
        { d: "M0 0h24v24H0z", fill: "none" },
        { fill: color, d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},
      ],
    },
    "arrow-back": {
      ds: [
        { d: "M0 0h24v24H0z", fill: "none" },
        { fill: color, d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"},
      ],
    },
    burger: {
      ds: [
        { d: "M0 0h24v24H0z", fill: "none" },
        { fill: color, d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
      ],
    },
    send: {
      viewBox:"0 0 1024 1024",
      ds: [
        { fill: color, d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"},
      ],
    },
    loading: {
      class:'loading',
      viewBox:"0 0 1024 1024",
      ds:[
        { fill: color, d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}
      ] 
    }
  };

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
    <path d={path.d} fill={path.fill || 'none'} />
  {/each}
</svg>
