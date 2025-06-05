export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center pointer-events-none">
      <a
        href="#contact"
        className="pointer-events-auto px-8 py-3 rounded-full bg-brand text-white font-bold shadow-lg hover:bg-accent transition"
      >
        Book a Free Session
      </a>
    </div>
  );
}
