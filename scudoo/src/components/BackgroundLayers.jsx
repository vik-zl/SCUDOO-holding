export default function BackgroundLayers() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(180deg,#020816_0%,#031126_52%,#04132a_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:radial-gradient(circle_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none fixed left-[-10%] top-[10%] -z-10 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(82,132,214,0.14),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none fixed right-[-6%] top-[0%] -z-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(211,175,103,0.1),transparent_72%)] blur-3xl" />
    </>
  )
}