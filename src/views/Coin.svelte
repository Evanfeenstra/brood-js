<script lang="ts">
  import type { Coin } from "../types"
  import Button from "../bits/Button.svelte"
  import * as api from "../api"
  import Input from '../bits/Input.svelte'
  import {account} from '../store'
  import { derived } from 'svelte/store'

  export let getAccounts = () => {}

  let balance = 0
  account.subscribe(a=>{
    if(a && a.addresses && a.addresses.length) {
      balance = a.addresses.reduce((total,addy)=>{
        return total + addy.balance
      }, 0)
    }
  })

  $: miota = balance ? (balance/1000000)+' MI' : ''

  export let coin: Coin;

  let sending = false;
  let address = '127NVqnjf8gB9BFAW2dnQeM6wqmy1gbGtv'
  let amount = ''

  async function sendTX() {
    sending = true;
    const rr = await api.send({
      address,
      amount: parseInt(amount)
    });
    console.log("SEND REPSONSE", rr)
    sending = false
    amount = ''
    // getAccounts()
  }

  function validAmount(v) {
    const i = parseInt(v)
    console.log(i, balance)
    if(i > balance) return false
    return i || i===0 ? i + '' : ''
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
    flex-direction: column;
    align-items: center;
    margin-top: 62px;
    width: 280px;
  }
  .lower{
    display: flex;
    align-items: center;
    margin-top:20px;
    width:100%;
  }
</style>

{#if coin}
  <main>
    <div class="name-wrap">
      <div class="name">{coin.name}</div>
    </div>

    {#if miota}
      <div class="balance">Balance: <b>{miota}</b></div>
    {/if}

    <section class="send">
      
      <Input placeholder="Address"
        bind:value={address}
        style={{width:'100%'}}
      />
      <div class="lower">
        <Input placeholder="Amount"
          bind:value={amount}
          validate={validAmount}
          style={{marginRight:18}}
        />
        <Button icon={sending ? 'loading' : 'send'} style={{width:100}}
          on:click={sendTX} disabled={!amount || !address}>
          Send
        </Button>
      </div>

    </section>
  </main>
{/if}
