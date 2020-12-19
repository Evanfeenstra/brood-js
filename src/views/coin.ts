
export function validAmount(a:string, max:number): string {
  const amt = parseInt(a)
  if(!amt) return ''
  if(amt>max) return max+''
  return amt+''
}