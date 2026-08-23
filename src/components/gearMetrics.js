/* Gear geometry helper. Teeth are drawn with a dashed circle stroke;
   a fixed pitch keeps teeth consistent so gears of different sizes can mesh. */
export function gearMetrics(teeth = 12) {
  const pitch = 19.9
  const r = (teeth * pitch) / (2 * Math.PI)
  const toothDepth = r * 0.395
  const ringR = r * 0.763
  const hubR = r * 0.289
  const dotR = r * 0.092
  const detailSw = Math.max(1, r * 0.0395)
  const box = r + toothDepth / 2 + 2
  return { pitch, r, toothDepth, ringR, hubR, dotR, detailSw, box }
}