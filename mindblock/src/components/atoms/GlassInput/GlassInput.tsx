import { GlassInputProps } from "./types/GlassInput.types";
import { useGlowAnimation } from "./hooks/useGlowAnimation";
import { getDefaultIcon } from "./utils/IconUtils";

export const GlassInput = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  required = false,
  className,
  icon,
  iconPosition = "left",
}: GlassInputProps) => {
  const resolvedIcon = icon ?? getDefaultIcon(type);
  const hasLeftIcon = resolvedIcon && iconPosition === "left";
  const hasRightIcon = resolvedIcon && iconPosition === "right";

  const { glowRef, inputRef, triggerGlow } = useGlowAnimation();

  return (
    <div className={`glow-wrapper relative flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="text-sm text-white/60 font-secondary">
        {label}
      </label>

      <div
        ref={glowRef}
        className="relative w-full rounded-md glow-border"
        onFocus={triggerGlow}
      >
        {hasLeftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
            {resolvedIcon}
          </span>
        )}

        <input
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-label={label}
          className={`
            relative z-10
            w-full
            px-4 py-2.5
            ${hasLeftIcon ? "pl-10" : ""}
            ${hasRightIcon ? "pr-10" : ""}
            rounded-md
            text-white
            bg-secondary-dark
            placeholder-white/50
            border border-white/10
            focus:outline-none
            text-sm
            font-secondary
            transition-all duration-300
          `}
        />

        {hasRightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
            {resolvedIcon}
          </span>
        )}
      </div>
    </div>
  );
};
