export default function NetworkSide({ side }) {
  return (
    <div
      className={[
        'pointer-events-none absolute top-[20%] hidden h-[520px] w-[180px] opacity-35 md:block',
        side === 'left' ? 'left-0' : 'right-0 scale-x-[-1]',
      ].join(' ')}
    >
      <svg viewBox="0 0 180 520" className="h-full w-full">
        <g stroke="#7fa5d8" strokeWidth="1" fill="none">
          <path d="M0 120 L60 100 L105 145 L160 115" />
          <path d="M20 170 L68 150 L110 195 L175 165" />
          <path d="M0 300 L55 275 L108 320 L165 290" />
          <path d="M12 350 L60 328 L110 375 L176 345" />
          <path d="M32 90 L32 195" />
          <path d="M88 130 L88 226" />
          <path d="M58 260 L58 372" />
          <path d="M118 300 L118 405" />
        </g>
        {['32,90', '60,100', '105,145', '160,115', '20,170', '68,150', '110,195', '55,275', '108,320', '60,328', '110,375'].map((point) => {
          const [cx, cy] = point.split(',')
          return <circle key={point} cx={cx} cy={cy} r="2.5" fill="#dabe73" />
        })}
      </svg>
    </div>
  )
}