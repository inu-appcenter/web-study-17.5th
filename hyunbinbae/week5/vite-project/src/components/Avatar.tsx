export default function Avatar({
  src,
  size = 40,
}: {
  src: string;
  size?: number;
}) {
  return (
    <img
      src={src}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
      alt="avatar"
    />
  );
}
