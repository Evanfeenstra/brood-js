
interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function makePoints() {
  let w = window.innerWidth - 2;
  let h = window.innerHeight - 2;
  return [
    [280, h], [280, 56], [2, 56],
    [2, h], [w, h], [w, 2], [2, 2], [2, 56],
  ]
}

export function len(p1,p2) {
  const xlen = Math.abs(p1[0]-p2[0])
  const ylen = Math.abs(p1[1]-p2[1])
  return Math.abs(xlen-ylen)
}

export function totalLength() {
  const points = makePoints()
  let t = 0
  points.forEach((p, i) => {
    if (i === points.length - 1) return;
    const next = points[i + 1];
    t += len(p,next)
  })
  return t
}

export function makeLines(l:number=0): Line[] {
  const points = makePoints()
  const lines: Line[] = [];
  let place = 0
  points.forEach((p, i) => {
    if (i === points.length - 1) return;
    if (l < place) return
    const next = points[i + 1];
    const length = len(p,next)
    place += length
    lines.push(partLine(p,next,place,l))
  });
  return lines
}

function partLine(p,next,length,l):Line {
  let [x1,y1] = p
  let [x2,y2] = next
  if(y1>y2){ // up
    y2 = Math.max(next[1], next[1] + length - l);
  }
  if(y1<y2) { // down
    y2 = Math.min(next[1], next[1] - length + l);
  }
  if(x1>x2) { // left
    x2 = Math.max(next[0], next[0] + length - l);
  }
  if(x1<x2) { // right
    x2 = Math.min(next[0], next[0] - length + l);
  }
  return {x1,y1,x2,y2}
}