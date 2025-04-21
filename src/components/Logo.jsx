"use client";
const Logo = ({ className = "" }) => {
  return (
    <h1
      className={`text-[33px] font-semibold ${className} transition-colors duration-200`}
    >
      <span className="text-brand-default">S</span>
      <span className="dark:text-white">oftlance</span>
      <span className="inline-block scale-75 dark:text-white">®</span>
    </h1>
  );
};

export default Logo;
