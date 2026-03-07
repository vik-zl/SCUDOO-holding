export default function ServiceBox({ text, align }) {
  return (
    <div
      className={[
        'min-h-[130px] w-full max-w-[330px] rounded-[30px] border border-[#d3d3d3]/75 bg-[#ececec] px-8 py-6 text-[#2e2e2e] shadow-[0_18px_28px_rgba(0,0,0,0.18)]',
        align === 'right' ? 'ml-auto' : '',
      ].join(' ')}
    >
      <p className="text-[14px] leading-5">{text}</p>
    </div>
  )
}