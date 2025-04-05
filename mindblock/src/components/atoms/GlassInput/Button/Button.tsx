import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Light theme variants
        primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        outlined: "border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800/50",
        ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/30 ",
        // Special white variant 
        white: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };