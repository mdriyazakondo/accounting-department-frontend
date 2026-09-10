import { useForm } from "react-hook-form";
import { User, Mail, Lock, ShieldCheck, LogIn } from "lucide-react";
import type { LoginFormData } from "../types/LoignType";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      role: "Student",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <LogIn size={30} />
          </div>

          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Login to your college account
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="mb-2 block text-sm font-medium">Role</label>

              <div className="relative">
                <ShieldCheck
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  {...register("role", {
                    required: "Department is required",
                  })}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="office-assistant">Office Assistant</option>
                </select>
              </div>

              {errors.role && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              <LogIn size={20} />
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
