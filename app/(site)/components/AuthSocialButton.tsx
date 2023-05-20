import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-gray-200
        hover:bg-gray-300
        px-4 
        py-2 
        text-gray-600 
        shadow-md
        ring-1 
        ring-inset 
        ring-gray-300 
        focus:outline-offset-0
        text-xl
      "
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
