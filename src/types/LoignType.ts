export interface StudentFormData {
  photo: FileList;
  name: string;
  email: string;
  password: string;
  position: string;
  bloodGroup: string;
  studentId: string;
  department: string;
  classRole: string;
  address: string;
  fatherName: string;
  motherName: string;
  year: string;
  role: string;
}

export interface TeacherFormData {
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
  role: string;
  bloodGroup: string;
}
export interface OfficeAssistantFormData {
  photo: FileList;
  name: string;
  email: string;
  password: string;
  phone: string;
  bloodGroup: string;
  role: string;
  employeeId: string;
  designation: string;
  department: string;
  joiningYear: string;
  address: string;
}

export interface LoginFormData {
  name: string;
  email: string;
  password: string;
  role: string;
}
