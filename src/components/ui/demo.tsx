import SpinnerMorph from "@/components/ui/spinner-morph";

export default function DemoOne() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-sm mx-auto">
      <h3 className="text-sm font-semibold text-gray-500 mb-4 tracking-wider uppercase">Morphing Spinner Preview</h3>
      <SpinnerMorph 
        size={240} 
        fill="#2563eb" 
        bg="#ffffff" 
        rotateDur="6s" 
        morphDur="6s" 
      />
      <p className="text-xs text-gray-400 mt-4 text-center">Seamless SVG morphing & rotation active.</p>
    </div>
  );
}
