export function Starfield() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none" role="presentation">
      <div className="space-stars space-stars-distant"><span className="space-star-twinkle space-star-twinkle-distant-one" /><span className="space-star-twinkle space-star-twinkle-distant-two" /></div>
      <div className="space-stars space-stars-mid"><span className="space-star-twinkle space-star-twinkle-mid-one" /><span className="space-star-twinkle space-star-twinkle-mid-two" /></div>
      <div className="space-stars space-stars-near"><span className="space-star-twinkle space-star-twinkle-near-one" /><span className="space-star-twinkle space-star-twinkle-near-two" /></div>
    </div>
  )
}
