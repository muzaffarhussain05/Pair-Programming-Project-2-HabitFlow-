import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DateRangeNav({ start, end, onPrev, onNext }) {
  return (
    <div className="flex items-center mt-6 gap-3 text-lg md:text-xl font-medium">
      <button onClick={onPrev} className="btn-nav">
        <FaChevronLeft />
      </button>
      {start} – {end}
      <button onClick={onNext} className="btn-nav">
        <FaChevronRight />
      </button>

      {/* Use Tailwind instead of @apply in <style jsx> */}
    </div>
  );
}
