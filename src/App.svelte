<script lang="ts">
  import Grid from "./bits/Grid.svelte";
  import Sidebar from "./views/Sidebar.svelte";
  import Content from "./views/Content.svelte";
  import { initialized } from "./store";
  import { onMount } from "svelte";
  import * as api from "./api";
  import {connected} from './store'

  function subscribeEvents() {
    api.subscribeEvents({
      connected: function(e) {
        connected.set(true)
      },
      disconnected: function(e) {
        connected.set(false)
      }
    });
  }

  onMount(() => {
    setTimeout(subscribeEvents, 1000);
  });
</script>

<style>
  :root {
    --primary: #f5f5f5;
    --headheight: 56px;
    --bodyheight: calc(100% - 57px);
    --sidewidth: 280px;
    --mainwidth: calc(100vw - 280px);
  }
  main {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: calc(100% - 1px);
    position: relative;
  }
  section {
    position: relative;
    z-index: 100;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<main>
  <Grid onDone={() => initialized.set(true)} />

  <section>
    <Sidebar />
    <Content />
  </section>
</main>
