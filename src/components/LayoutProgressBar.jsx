import NextTopLoader from "nextjs-toploader";

const LayoutProgressBar = () => {
  return (
    <NextTopLoader
      height={3}
      speed={200}
      crawl={true}
      color="blue"
      easing="ease"
      crawlSpeed={200}
      showSpinner={false}
      initialPosition={0.08}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
};

export default LayoutProgressBar;
