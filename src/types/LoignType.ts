// ================================
// User Role
// ================================
export type UserRole = "Student" | "Teacher" | "Office Assistant";

// ================================
// Common User Data
// ================================
export interface IUser {
  id?: number;

  // Common Information
  name: string;
  email: string;
  password: string;
  phone?: string;
  photo?: string;
  blood_group?: string;

  // Role
  role: UserRole;

  // Student Information
  student_id?: string;
  class_role?: string;
  academic_year?: string;
  father_name?: string;
  mother_name?: string;

  // Teacher Information
  teacher_id?: string;
  subject?: string;
  qualification?: string;

  // Office Assistant Information
  employee_id?: string;
  position?: string;

  // Professional Information
  designation?: string;
  department?: string;
  joining_year?: string;

  // Common Address
  address?: string;

  // Timestamp
  created_at?: Date;
  updated_at?: Date;
}

// ================================
// Student Form Data
// ================================
export interface StudentFormData {
  photo: FileList;
  name: string;
  email: string;
  password: string;
  phone: string;
  blood_group: string;
  role: "Student";

  student_id: string;
  class_role: string;
  academic_year: string;
  father_name: string;
  mother_name: string;

  department: string;
  position: string;
  address: string;
}

// ================================
// Teacher Form Data
// ================================
export interface TeacherFormData {
  photo: FileList;
  name: string;
  email: string;
  password: string;
  phone: string;
  blood_group: string;
  role: "Teacher";

  teacher_id: string;
  designation: string;
  department: string;
  subject: string;
  qualification: string;
  joining_year: string;

  address: string;
}

// ================================
// Office Assistant Form Data
// ================================
export interface OfficeAssistantFormData {
  photo: FileList;
  name: string;
  email: string;
  password: string;
  phone: string;
  blood_group: string;
  role: "Office Assistant";

  employee_id: string;
  designation: string;
  department: string;
  joining_year: string;

  position: string;
  address: string;
}

// ================================
// Login Form Data
// ================================
export interface LoginFormData {
  email: string;
  password: string;
  role: UserRole;
}
