
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {css} from './utils'

  export let className: string = '';
  export let placeholder:string = '';
  export let disabled:boolean = false;
  export let value = '';
  export let validate = (a:string|boolean)=> a
  export let style:{[k:string]:any} = {}

  const dispatch = createEventDispatcher();

  let prev = ''
  function onInput(e) {
    const valid = validate(e.target.value)
    if(!disabled && (valid||valid==='')) {
      value = valid+''
      dispatch('change', value)
      prev = value
    } else {
      value = prev
    }
  }
</script>

<style>
  input {
    height: 40px;
    user-select: text;
    -webkit-user-select: text;
    cursor: text;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 15px;
    color: white;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input:focus{
    border-bottom: 1px solid white;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:focus::placeholder {
    color: #aaa;
  }
  /* input[type=number] {
    -moz-appearance: textfield;
  } */
</style>

<input 
  style={css(style)}
  class={className}
  placeholder={placeholder}
  bind:value={value}
  on:input={onInput}
/>



