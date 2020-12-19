
declare global {
  interface Window { iota: any; }
}

export function sendTransfer() {
  if(!window.iota) return
  window.iota.sendTransfer()
}
