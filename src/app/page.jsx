import Link from "next/link";

const Home = () => {
  return (
    <div
      className={`flex items-center h-[488px] bg-hero-pattern bg-cover bg-top bg-no-repeat transition-colors duration-200 dark:bg-hero-pattern-dark`}
    >
      <div className="container">
        <div className="flex items-center gap-2.5 mb-6">
          {/* 1 */}
          <p className="transition-colors duration-200 dark:text-white/70">
            7+ Xizmatlar
          </p>

          <span className="inline-block size-1 rounded-full bg-brand-dark transition-colors duration-200 dark:bg-white/50" />

          {/* 2 */}
          <p className="transition-colors duration-200 dark:text-white/70">
            20+ Hamkorlar
          </p>

          <span className="inline-block size-1 rounded-full bg-brand-dark transition-colors duration-200 dark:bg-white/50" />

          {/* 3 */}
          <p className="transition-colors duration-200 dark:text-white/70">
            60+ Loyihalar
          </p>
        </div>

        {/* Title */}
        <h2 className="mb-6 text-5xl leading-tight font-semibold">
          Haqiqiy professionallar <br /> bilan yig'ilgan jamoa.
        </h2>

        {/* Links */}
        <div className="flex items-center gap-5 -ml-1.5">
          <Link
            href="/services"
            className="flex items-center gap-3 py-1.5 px-2 rounded-lg text-brand-default transition-colors duration-200 hover:bg-brand-light dark:hover:bg-white/10"
          >
            <svg
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[26px] transition-colors duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <span className="text-[17px] font-medium transition-colors duration-200">
              Barcha xizmatlar
            </span>
          </Link>

          <Link
            href="/pricing"
            className="flex items-center gap-3 py-1.5 px-2 rounded-lg text-brand-dark transition-colors duration-200 hover:bg-brand-light dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10"
          >
            <svg
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="size-[26px] transition-colors duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span className="text-[17px] font-medium transition-colors duration-200">
              Xizmatlar narxi
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
