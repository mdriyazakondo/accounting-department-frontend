import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Lock,
  Briefcase,
  IdCard,
  Building2,
  GraduationCap,
  MapPin,
  CalendarDays,
  Upload,
  Phone,
  BookOpen,
} from "lucide-react";

interface TeacherFormData {
  photo: FileList;
  name: string;
  email: string;
  password: string;
  teacherId: string;
  designation: string;
  department: string;
  subject: string;
  phone: string;
  qualification: string;
  joiningYear: string;
  address: string;
}

const TeacherRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherFormData>();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900">
            <GraduationCap size={30} />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Teacher Registration
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Create a teacher profile by providing the information below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Form Header */}
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/70 sm:px-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Teacher Information
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Please provide accurate professional information.
            </p>
          </div>

          <div className="space-y-10 p-6 sm:p-8">
            {/* ================= PROFILE PHOTO ================= */}
            <section>
              <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
                Profile Photo
              </h3>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Photo Preview Box */}
                <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                  <User
                    size={45}
                    className="text-slate-300 dark:text-slate-600"
                  />
                </div>

                {/* Upload */}
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 px-8 py-6 text-center transition hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-800">
                  <Upload
                    size={25}
                    className="mb-2 text-slate-500 dark:text-slate-400"
                  />

                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Choose Teacher Photo
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

            {/* ================= PERSONAL INFORMATION ================= */}
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
                      {...register("name", {
                        required: "Teacher name is required",
                      })}
                      placeholder="Enter full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
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
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder="teacher@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
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
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    />
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ================= PROFESSIONAL INFORMATION ================= */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-6 w-1 rounded-full bg-slate-900 dark:bg-white" />

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Professional Information
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Teacher ID */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Teacher ID <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <IdCard
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      {...register("teacherId", {
                        required: "Teacher ID is required",
                      })}
                      placeholder="Enter teacher ID"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    />
                  </div>

                  {errors.teacherId && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.teacherId.message}
                    </p>
                  )}
                </div>

                {/* Designation */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Designation <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <Briefcase
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      {...register("designation", {
                        required: "Designation is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="">Select Designation</option>
                      <option value="Professor">Professor</option>
                      <option value="Associate Professor">
                        Associate Professor
                      </option>
                      <option value="Assistant Professor">
                        Assistant Professor
                      </option>
                      <option value="Lecturer">Lecturer</option>
                      <option value="Instructor">Instructor</option>
                    </select>
                  </div>

                  {errors.designation && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.designation.message}
                    </p>
                  )}
                </div>

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
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="">Select Department</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Management">Management</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Finance & Banking">
                        Finance & Banking
                      </option>
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

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Teaching Subject <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <BookOpen
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      {...register("subject", {
                        required: "Teaching subject is required",
                      })}
                      placeholder="e.g. Accounting"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    />
                  </div>

                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Qualification */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Highest Qualification{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      {...register("qualification", {
                        required: "Qualification is required",
                      })}
                      placeholder="e.g. Master's / PhD"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
                    />
                  </div>

                  {errors.qualification && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.qualification.message}
                    </p>
                  )}
                </div>

                {/* Joining Year */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Joining Year <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      {...register("joiningYear", {
                        required: "Joining year is required",
                      })}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="">Select Joining Year</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                  </div>

                  {errors.joiningYear && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.joiningYear.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* ================= ADDRESS ================= */}
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
                  placeholder="Enter teacher's full address..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-white"
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
              className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Register Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
