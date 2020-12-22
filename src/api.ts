
declare global {
  interface Window { iota: any; }
}

export function sendTransfer() {
  if(!window.iota) return
  window.iota.sendTransfer()
}

export function subscribeEvents({
  connected,
  disconnected
}){
  if(!window.iota) return
  const ET = window.iota.EventTypes
  window.iota.events.on(ET.ADDED_DOMAIN, e=>{
    if(connected) connected(e)
  })
  window.iota.events.on(ET.REMOVED_DOMAIN, e=>{
    if(disconnected) disconnected(e)
  })
}
