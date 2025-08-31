export default function BottomBlur() {
  return (
    <>
      {/* Top Blur */}
      {/* <div className="fixed top-0 left-0 w-full h-20 z-50 pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-md bg-white/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
      </div> */}

      {/* Bottom Blur */}
      <div className="fixed bottom-0 left-0 w-full h-20 z-50 pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-md bg-white/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>
    </>
  );
}
