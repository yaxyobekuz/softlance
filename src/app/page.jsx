import Link from "next/link";

// Images
import Image from "next/image";
import devs1Img from "../assets/backgrounds/devs-1.jpg";
import devs2Img from "../assets/backgrounds/devs-2.jpg";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div
        className={`flex items-center relative h-[calc(100vh-80px)] bg-hero-pattern bg-cover bg-top bg-no-repeat transition-colors duration-200 dark:bg-hero-pattern-dark`}
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

        {/* Handle scroll button */}
        <a
          href="#about"
          className="flex items-start justify-center absolute bottom-10 left-1/2 -translate-x-1/2 w-7 h-11 p-1.5 border-4 border-brand-default/70 rounded-full"
        >
          <span className="inline-block size-2 bg-brand-default rounded-full custom-animate-bounce" />
        </a>
      </div>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            {/* Left */}
            <div className="space-y-5">
              {/* Top */}
              <div className="flex gap-5">
                <Image
                  width={160}
                  height={160}
                  src={devs1Img}
                  alt="Softlance dasturchilari (Rasm 1)"
                  className="w-full h-60 bg-white col-span-2 object-cover rounded-2xl"
                />

                <div className="flex flex-col items-center justify-center gap-3.5 size-60 aspect-square bg-gradient-to-b from-white to-dark-mode-primary-default/5 rounded-2xl text-dark-mode-primary-light dark:to-white/5">
                  <b className="text-5xl font-semibold">4yil+</b>
                  <p className="text-xl text-center">
                    Tajribaga ega <br />
                    professionallar
                  </p>
                </div>
              </div>

              {/* Down */}
              <div className="flex gap-5">
                <div className="flex flex-col items-center justify-center gap-3.5 size-60 aspect-square bg-gradient-to-b from-brand-default to-[#002199] text-white rounded-2xl">
                  <b className="text-5xl font-semibold">10+</b>
                  <p className="text-xl text-center">
                    Aktiv jamoa <br /> a'zolari
                  </p>
                </div>

                <Image
                  width={160}
                  height={160}
                  src={devs2Img}
                  alt="Softlance dasturchilari (Rasm 2)"
                  className="w-full h-60 bg-white col-span-2 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center items-start gap-6">
              {/* Section title */}
              <h2 className="flex items-center gap-2 text-[26px] font-medium text-brand-default before:content-[''] before:w-[3px] before:h-6 before:bg-brand-default">
                Jamoa maqsadi
              </h2>

              {/* Subtitle */}
              <p className="text-5xl leading-tight font-semibold">
                Biz mijozlar manfaatini <br /> birinchi o'ringa qo'yamiz.
              </p>

              {/* Description */}
              <p className="max-w-2xl text-xl leading-8 text-brand-dark/70 dark:text-white/70">
                Avval mijoz manfaatlari so'ngra bizning manfaatlarimiz shiori
                ostida bizning jamoamiz biznesingiz muammolariga zamonaviy
                uslubda samarali va innovatsion yechimlar taklif etadi.
              </p>

              {/* Buttons */}
              <div className="flex gap-5">
                {/* Services */}
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-3 min-w-56 bg-gradient-to-r from-brand-default to-brand-default-dark py-2 px-5 rounded-lg text-white transition-colors duration-200 hover:to-brand-default dark:hover:to-brand-default-dark"
                >
                  <span className="text-lg font-medium transition-colors duration-200">
                    Barcha xizmatlar
                  </span>

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
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className="flex items-center justify-center gap-3 min-w-56 py-2 px-5 border-2 border-brand-default rounded-lg text-brand-default transition-colors duration-200 hover:bg-brand-default/10 dark:hover:bg-white/10 dark:border-white dark:text-white"
                >
                  <span className="text-lg font-medium transition-colors duration-200">
                    Ba'tafsil o'qish
                  </span>

                  <svg
                    fill="none"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-[26px] transition-colors duration-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
