type ContentCardProps = {
    image: string;
    rank?: number;
    title?: string;
    size?: "large" | "small";
    episode?: string;
};

export default function ContentCard({
    image,
    rank,
    title,
    size = "small",
    episode,
}: ContentCardProps) {
    const sizeClass =
        size === "large"
            ? "w-[200px] h-[300px]" // TOP10용
            : "w-[200px] h-[300px]"; // 최근 콘텐츠용

    return (
        <div
            className="flex flex-col items-center flex-shrink-0 transition-transform duration-300 hover:-translate-y-3"
            style={{ transformOrigin: "bottom" }}
        >
            {/* 순위 숫자 + 카드 */}
            <div className="relative flex items-end">
                {rank && (
                    <span
                        className="text-white text-[120px] font-black leading-none mr-6 select-none tracking-tight"
                        style={{
                            fontFamily:
                                "'Bebas Neue', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                        }}
                    >
                        {rank}
                    </span>
                )}

                {/* 카드 본체 */}
                <div className="relative pb-6">
                    <img
                        src={image}
                        alt={title}
                        className={`rounded-lg ${sizeClass} object-contain bg-black select-none max-w-none`}
                    />

                    {episode && (
                        <div className="absolute bottom-0 left-0 w-full bg-black/90 px-3 py-1 flex items-center justify-between rounded-b-lg">
                            <span className="text-gray-300 text-sm font-light">{episode}</span>
                            <span className="text-gray-400 text-lg">⋮</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
