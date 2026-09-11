import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  User,
  Mail,
  Lock,
  Briefcase,
  Droplets,
  IdCard,
  Building2,
  GraduationCap,
  MapPin,
  CalendarDays,
  Upload,
  Loader2,
} from "lucide-react";
import type { StudentFormData } from "../types/LoignType";

// API Call Function
const postStudentData = async (data: StudentFormData) => {
  const response = await fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Registration failed!");
  }

  return response.json();
};

const StudentRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentFormData>();

  // TanStack Query Mutation
  const { mutate, isPending } = useMutation({
    mutationFn: postStudentData,
    onSuccess: () => {
      // Premium Modern Toast Notification
      toast.success("Student Profile Created!", {
        description:
          "The student has been successfully registered to the system.",
      });
      reset();
    },
    onError: (err: Error) => {
      toast.error("Registration Failed", {
        description: err.message || "Something went wrong during registration.",
      });
    },
  });

  const onSubmit = (data: StudentFormData) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900">
            <GraduationCap size={30} />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Student Registration
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Create a student profile by providing the information below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Form Header */}
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/70 sm:px-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Student Information
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Please fill in all required information carefully.
            </p>
          </div>

          <div className="space-y-10 p-6 sm:p-8">
            {/* PHOTO SECTION */}
            <section>
              <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
                Profile Photo
              </h3>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                  <User
                    size={45}
                    className="text-slate-300 dark:text-slate-600"
                  />
                </div>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 px-8 py-6 text-center transition hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-800">
                  <Upload
                    size={25}
                    className="mb-2 text-slate-500 dark:text-slate-400"
                  />

                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Choose Photo
                  </span>

                  <span className="mt-1 text-xs text-slate-400">
                    PNG, JPG or JPEG
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    {...register("photo")}
                    className="hidden"
                  />
                </label>
              </div>
            </section>

            {/* PERSONAL INFO */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-6 w-1 rounded-full bg-slate-900 dark:bg-white" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Enter full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      placeholder="student@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      placeholder="Enter password"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Position */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Position
                  </label>
                  <div className="relative">
                    <Briefcase
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      {...register("position")}
                      placeholder="e.g. Student / CR"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                </div>

                {/* Blood Group */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Blood Group <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Droplets
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      {...register("blood_group", {
                        required: "Blood group is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  {errors.blood_group && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.blood_group.message}
                    </p>
                  )}
                </div>

                {/* Student ID */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Student ID Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IdCard
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      {...register("student_id", {
                        required: "Student ID is required",
                      })}
                      placeholder="Enter student ID"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                  {errors.student_id && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.student_id.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ACADEMIC INFO */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-6 w-1 rounded-full bg-slate-900 dark:bg-white" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Academic Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Department */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      {...register("department", {
                        required: "Department is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    >
                      <option value="">Select Department</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Management">Management</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Finance">Finance & Banking</option>
                      <option value="Economics">Economics</option>
                      <option value="English">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="History">History</option>
                      <option value="Political Science">
                        Political Science
                      </option>
                    </select>
                  </div>
                  {errors.department && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                {/* Class Role */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Class Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      {...register("class_role", {
                        required: "Class role is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    >
                      <option value="">Select Class Role</option>
                      <option value="General Student">General Student</option>
                      <option value="Class Representative">
                        Class Representative
                      </option>
                      <option value="Assistant Class Representative">
                        Assistant Class Representative
                      </option>
                      <option value="Group Leader">Group Leader</option>
                    </select>
                  </div>
                  {errors.class_role && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.class_role.message}
                    </p>
                  )}
                </div>

                {/* academic_year */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Academic academic_year{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      {...register("academic_year", {
                        required: "Academic academic_year is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    >
                      <option value="">Select academic_year</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                  {errors.academic_year && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.academic_year.message}
                    </p>
                  )}
                </div>

                {/* System Role */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      {...register("role", {
                        required: "Role is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    >
                      <option value="">Select Role</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>
                  {errors.role && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.role.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* FAMILY INFO */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-6 w-1 rounded-full bg-slate-900 dark:bg-white" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Family Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Father */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      {...register("father_name", {
                        required: "Father's name is required",
                      })}
                      placeholder="Enter father's name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                  {errors.father_name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.father_name.message}
                    </p>
                  )}
                </div>

                {/* Mother */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Mother's Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      {...register("mother_name", {
                        required: "Mother's name is required",
                      })}
                      placeholder="Enter mother's name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                    />
                  </div>
                  {errors.mother_name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.mother_name.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ADDRESS */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-6 w-1 rounded-full bg-slate-900 dark:bg-white" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Address Information
                </h3>
              </div>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />
                <textarea
                  {...register("address", {
                    required: "Address is required",
                  })}
                  rows={4}
                  placeholder="Enter your full address..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:bg-slate-800"
                />
              </div>
              {errors.address && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.address.message}
                </p>
              )}
            </section>
          </div>

          {/* Footer */}
          <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/70 sm:px-8">
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 active:scale-95 disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              {isPending ? "Registering..." : "Register Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
