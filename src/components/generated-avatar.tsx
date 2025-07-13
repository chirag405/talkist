import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  name: string;
  email?: string;
  size?: number;
  className?: string;
}

export function GeneratedAvatar({
  name,
  email: _email, // eslint-disable-line @typescript-eslint/no-unused-vars
  size = 40,
  className,
}: GeneratedAvatarProps) {
  // Generate avatar URL using DiceBear API
  const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundColor=10b981&textColor=ffffff`;

  // Get initials as fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Avatar className={className} style={{ width: size, height: size }}>
      <AvatarImage src={avatarUrl} alt={`${name}'s avatar`} />
      <AvatarFallback className="bg-emerald-500 text-white">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
