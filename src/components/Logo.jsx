const Logo = ({ className = "" }) => {
  return (
    <h1 className={`text-3xl font-semibold ${className}`}>
      <span className="text-brand-default">S</span>
      <span className="transition-colors duration-200 dark:text-white">oftlance</span>
      <span className="inline-block scale-75 transition-colors duration-200 dark:text-white">®</span>
    </h1>
  );
};

export default Logo;
