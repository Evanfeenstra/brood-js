import type {Tx} from './types'

declare global {
  interface Window { iota: any; }
}

export function sendTransfer(tx: Tx) {
  if(!window.iota) return
  window.iota.sendTransfer(tx)
}

interface EventCallbacks {
  connected?: Function
  disconnected?: Function
}
export function subscribeEvents(ec:EventCallbacks, poll?:boolean){
  if(!window.iota && window.iota.events) {
    if(poll) setTimeout(()=> subscribeEvents(ec, true), 500)
    return
  }
  const ET = window.iota.EventTypes
  window.iota.events.on(ET.ADDED_DOMAIN, e=>{
    if(ec.connected) ec.connected(e)
  })
  window.iota.events.on(ET.REMOVED_DOMAIN, e=>{
    if(ec.disconnected) ec.disconnected(e)
  })
}
