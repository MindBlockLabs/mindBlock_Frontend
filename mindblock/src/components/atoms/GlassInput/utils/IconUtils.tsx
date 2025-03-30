import { MailIcon, LockIcon } from "lucide-react";
import { JSX } from "react";

export const getDefaultIcon = (type: string): JSX.Element | null => {
  switch (type) {
    case "email":
      return <MailIcon className="w-4 h-4 text-white/50" />;
    case "password":
      return <LockIcon className="w-4 h-4 text-white/50" />;
    default:
      return null;
  }
};
