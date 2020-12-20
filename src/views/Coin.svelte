<script lang="ts">
  import type { Coin } from "../types"
  import Button from "../bits/Button.svelte"
  import * as api from "../api"
  import {validAmount} from './coin'

  export let coin: Coin;

  let sending = false;
  let address = ''
  let amount = ''

  function sendTX() {
    sending = true;
    setTimeout(() => (sending = false), 2000);
    api.sendTransfer();
  }

  function amountInput(e){
    amount = validAmount(e.target.value, coin.balance)
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name-wrap {
    max-width: 580px;
    min-width: 150px;
    position: relative;
  }
  .name {
    font-size: 54px;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .balance {
    margin: 42px 0 22px 0;
    letter-spacing: 0.5px;
  }
  .send {
    display: flex;
    margin-top: 62px;
  }
  .send-input {
    width: 200px;
  }
  .amount-input {
    width: 96px;
    margin: 0 10px;
  }
</style>

{#if coin}
  <main>
    <div class="name-wrap">
      <div class="name">{coin.name}</div>
    </div>

    <div class="balance">Balance: <b>{coin.balance}</b></div>

    <div class="send">
      <input class="send-input"
        placeholder="Address"
        bind:value={address}
      />
      <input class="amount-input" 
        placeholder="Amount"
        bind:value={amount}
        on:input={amountInput}
      />
      <Button icon={sending ? 'loading' : 'send'} width="100"
        on:click={sendTX} disabled={!amount || !address}>
        Send
      </Button>
    </div>
  </main>
{/if}
