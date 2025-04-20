import Image from "next/image";

const Icon = ({
  src,
  size = 24,
  style = {},
  alt = "Icon",
  className = "size-6",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={style}
      className={className}
    />
  );
};

export default Icon;
