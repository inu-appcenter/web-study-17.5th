import type { ReactNode } from "react";

type FlippableCardProps = {
  front: ReactNode;
  back: ReactNode;
  isFlipped: boolean;
  onToggle: () => void;
};

const FlippableCard = ({ front, back, isFlipped, onToggle }: FlippableCardProps) => (
  <div
    className="relative h-[320px] w-[560px]"
    style={{ perspective: "2000px" }}
  >
    <button
      type="button"
      onClick={onToggle}
      className="relative h-full w-full cursor-pointer border-none bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      aria-pressed={isFlipped}
      aria-label={isFlipped ? "명함 앞면 보기" : "명함 뒷면 보기"}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </button>
  </div>
);

export default FlippableCard;
