import { useRef } from "react";
import ContentCard from "./ContentCard";
import SectionTitle from "./SectionTitle";

type ContentRowProps = {
    title: string;
    contents: { image: string; rank?: number; title?: string }[];
    type?: "top10" | "recent";
};

export default function ContentRow({ title, contents, type = "recent" }: ContentRowProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const gapClass = type === "top10" ? "gap-16" : "gap-8";
    const cardSize = type === "top10" ? "large" : "small";

    return (
        <div className="relative mb-16">
            <SectionTitle title={title} />

            <div
                ref={scrollRef}
                className={`flex ${gapClass} overflow-x-auto px-4 scrollbar-custom scroll-smooth`}
            >
                {contents.map((item, index) => (
                    <ContentCard key={index} {...item} size={cardSize} />
                ))}
            </div>
        </div>
    );
}
