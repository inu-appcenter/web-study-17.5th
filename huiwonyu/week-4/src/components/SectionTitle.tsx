type SectionTitleProps = {
    title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
    );
}
