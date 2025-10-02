import type { LogoInfo } from "../types/card";

type LogoBlockProps = LogoInfo;

const LogoBlock = ({ title, subtitle }: LogoBlockProps) => (
  <div className="text-right">
    <h1 className="m-0 text-3xl font-bold tracking-[0.3em] text-neutral-900">
      {title}
    </h1>
    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-600">
      {subtitle}
    </p>
  </div>
);

export default LogoBlock;
