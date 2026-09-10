import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    badge: "Welcome to ABC College",
    title: "Build Your Future",
    highlight: "With Quality Education",
    description:
      "Discover a modern learning environment where knowledge, creativity, and innovation come together to shape tomorrow's leaders.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85",
    badge: "Learn • Grow • Succeed",
    title: "Education That",
    highlight: "Inspires Excellence",
    description:
      "Our dedicated teachers, modern facilities, and supportive campus help students achieve their academic and personal goals.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=2000&q=85",
    badge: "A Better Tomorrow Starts Here",
    title: "Your Journey",
    highlight: "Starts With Us",
    description:
      "Join a vibrant academic community and take the next step toward a successful and meaningful future.",
  },
];

const HomeHero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[650px] overflow-hidden bg-slate-950">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* =====================================================
                  BACKGROUND IMAGE
              ====================================================== */}

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* =====================================================
                  DARK OVERLAY
              ====================================================== */}

              <div className="absolute inset-0 bg-slate-950/65" />

              {/* Left Gradient */}

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />

              {/* Bottom Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20" />

              {/* =====================================================
                  CONTENT
              ====================================================== */}

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                  <div className="max-w-3xl">
                    {/* Badge */}

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
                        <GraduationCap size={15} />
                      </span>

                      <span>{slide.badge}</span>
                    </div>

                    {/* Heading */}

                    <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}

                      <span className="mt-2 block text-blue-400">
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Description */}

                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                      {slide.description}
                    </p>

                    {/* Buttons */}

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        to="/about"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
                      >
                        Explore Our College
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                      >
                        Contact Us
                      </Link>
                    </div>

                    {/* Stats */}

                    <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/15 pt-6 sm:gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white">24+</h3>

                        <p className="mt-1 text-xs text-slate-400">
                          Academic Programs
                        </p>
                      </div>

                      <div className="h-9 w-px bg-white/20" />

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          3,200+
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">Students</p>
                      </div>

                      <div className="h-9 w-px bg-white/20" />

                      <div>
                        <h3 className="text-2xl font-bold text-white">96%</h3>

                        <p className="mt-1 text-xs text-slate-400">
                          Graduate Success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =====================================================
          PREVIOUS BUTTON
      ====================================================== */}

      <button
        type="button"
        aria-label="Previous slide"
        className="hero-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-blue-600 sm:left-6"
      >
        <ChevronLeft size={23} />
      </button>

      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}

      <button
        type="button"
        aria-label="Next slide"
        className="hero-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-blue-600 sm:right-6"
      >
        <ChevronRight size={23} />
      </button>

      {/* =====================================================
          PAGINATION
      ====================================================== */}

      <div className="hero-pagination absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" />
    </section>
  );
};

export default HomeHero;
