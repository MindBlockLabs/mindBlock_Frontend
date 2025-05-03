import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  // Base styles
  const baseClasses = "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none";
  
  // Variant styles
  const variantClasses = {
    primary: "bg-cyan-400 text-black hover:bg-cyan-300 shadow-md shadow-cyan-400/30",
    secondary: "bg-gray-800 text-white border border-gray-700 hover:border-gray-600",
    outline: "bg-transparent text-cyan-400 border border-cyan-400 hover:bg-cyan-400/10 shadow-sm shadow-cyan-400/20"
  };
  
  // Size styles
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3"
  };
  
  // Width styles
  const widthClasses = fullWidth ? "w-full" : "";
  
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClasses,
    className
  ].join(" ");

  return (
    <button 
      className={buttonClasses}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;