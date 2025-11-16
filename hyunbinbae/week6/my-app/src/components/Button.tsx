type ButtonProps = {
  ButtonName: string;
  onClick: () => void;
};

export default function Button({ ButtonName, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-[280px]
        h-[50px]
        flex
        justify-center
        items-center
        px-10
        py-[7px]
        bg-[#00499B]
        text-white
        rounded-[30px]
        font-medium
        text-[20px]
        leading-6
        cursor-pointer
        hover:bg-[#003d84]
        transition
      "
    >
      {ButtonName}
    </button>
  );
}
