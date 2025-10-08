import Image from "next/image";



interface AvatarProps {
  src?: string; // Image URL (optional)
  name?: string; // User's full name (optional)
  size?: number; // Avatar size in px
  bgColor?: string; // Fallback background color
  textColor?: string; // Fallback text color
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name = "",
  size = 40,
  bgColor = "#e2e8f0",
  textColor = "#1a202c",
}) => {
  // Extract initials if name provided
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: src ? "transparent" : bgColor,
        color: textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        fontSize: size / 2.5,
        textTransform: "uppercase",
        userSelect: "none",
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : initials ? (
        initials
      ) : (
        "👤"
      )}
    </div>
  );
};

export default Avatar;
