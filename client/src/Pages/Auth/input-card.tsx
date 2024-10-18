import { Input, InputProps } from "../../components/Ui/input";
import { cn } from "../../lib/utils";

type Props = Omit<InputProps, "error"> & {
  title: string;
  classes?: {
    root?: string;
  };
  error?: string;
  showErrorMessage?: boolean;
  startIcon?: React.ReactNode; // Support start icon
  endIcon?: React.ReactNode; // Support end icon
};

export const InputCard = (props: Props) => {
  const {
    title,
    id,
    name,
    classes,
    className,
    error,
    showErrorMessage = true,
    startIcon, // Icon at the start of input
    endIcon,   // Icon at the end of input
    ...rest
  } = props;

  return (
    <div className={cn("space-y-2 flex flex-col", classes?.root)}>
      <label
        htmlFor={id || name}
        className="text-primary text-sm not-italic font-normal leading-6"
      >
        {title}
      </label>

      <div className="flex items-center relative">
        {/* Start Icon */}
        {startIcon && (
          <div className="flex items-center justify-center w-6 h-6 mr-2">
            {startIcon}
          </div>
        )}

        {/* Input Field */}
        <Input
          id={id}
          name={name}
          className={cn(
            "placeholder:text-primary border-subtle-light shadow-none w-full",
            className
          )}
          {...rest}
        />

        {/* End Icon */}
        {endIcon && (
          <div className="absolute right-0 pr-3 flex items-center justify-center">
            {endIcon}
          </div>
        )}
      </div>

      {/* Error Message */}
      {showErrorMessage && error ? (
        <div className="mt-2">
          <p className="text-red-500">{error}</p>
        </div>
      ) : null}
    </div>
  );
};
