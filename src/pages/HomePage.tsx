import { ArrowRight, BookOpenCheck, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-screen flex items-center bg-slate-950 text-white">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.5)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />

        <section className="w-full">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              {/* Small Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <GraduationCap className="h-5 w-5" />
                Welcome to Our College
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Build Your Future
                <span className="block text-blue-400">
                  With Quality Education
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Discover a place where knowledge meets opportunity. Our college
                provides quality education, experienced teachers, modern
                facilities, and a supportive environment to help students
                achieve their dreams.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/admission"
                  className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                >
                  Apply for Admission
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  Explore College
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <BookOpenCheck className="mb-3 h-7 w-7 text-blue-400" />
                  <h3 className="text-2xl font-bold">24+</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Academic Programs
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <Users className="mb-3 h-7 w-7 text-blue-400" />
                  <h3 className="text-2xl font-bold">3,200+</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Students Learning
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <GraduationCap className="mb-3 h-7 w-7 text-blue-400" />
                  <h3 className="text-2xl font-bold">98%</h3>
                  <p className="mt-1 text-sm text-slate-300">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
