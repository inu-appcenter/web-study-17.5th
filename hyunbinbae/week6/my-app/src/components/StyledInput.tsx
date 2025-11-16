type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function StyledInput(props: StyledInputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        bg-white
        border-0
        border-b
        border-[#454545]
        text-[#565656]
        placeholder-black
        text-[14px]
        leading-[17px]
        font-normal
        focus:outline-none
      `}
    />
  );
}
