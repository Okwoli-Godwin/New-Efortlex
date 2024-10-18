import { Eye, EyeOff } from "lucide-react";

type Props = {
  isVisible: boolean;
  onClick: () => void;
};

export const PasswordEye = (props: Props) => {
  const { isVisible, onClick } = props;
  return (
    <button
      type="button"
      className="flex items-center justify-center w-[25px] h-[25px]"
      onClick={onClick}
    >
      {isVisible ? (
        <EyeOff size={25} className="text-subtle-light text-[20px] px-[2px]" />
      ) : (
        <Eye size={25} className="text-subtle-light text-[20px] px-[2px]" />
      )}
    </button>
  );
};
