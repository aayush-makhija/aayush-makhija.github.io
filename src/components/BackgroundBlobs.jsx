export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-pulse" />
      <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full bg-accent-vibrant/20 blur-[120px] animate-pulse delay-700" />
      <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse delay-1000" />
    </div>
  )
}
