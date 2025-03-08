/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  SoftDelete: { input: any; output: any; }
  Time: { input: any; output: any; }
};

/** AddAdmin result with filterable data and affected rows */
export type AddAdminPayload = {
  __typename?: 'AddAdminPayload';
  admin: AdminQueryResult;
  affected: Array<Admin>;
};


/** AddAdmin result with filterable data and affected rows */
export type AddAdminPayloadAdminArgs = {
  filter?: InputMaybe<AdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<AdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AdminOrder>;
};

/** AddJob result with filterable data and affected rows */
export type AddJobPayload = {
  __typename?: 'AddJobPayload';
  affected: Array<Job>;
  job: JobQueryResult;
};


/** AddJob result with filterable data and affected rows */
export type AddJobPayloadJobArgs = {
  filter?: InputMaybe<JobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<JobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
};

/** AddSchool result with filterable data and affected rows */
export type AddSchoolPayload = {
  __typename?: 'AddSchoolPayload';
  affected: Array<School>;
  school: SchoolQueryResult;
};


/** AddSchool result with filterable data and affected rows */
export type AddSchoolPayloadSchoolArgs = {
  filter?: InputMaybe<SchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<SchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SchoolOrder>;
};

/** AddStudent result with filterable data and affected rows */
export type AddStudentPayload = {
  __typename?: 'AddStudentPayload';
  affected: Array<Student>;
  student: StudentQueryResult;
};


/** AddStudent result with filterable data and affected rows */
export type AddStudentPayloadStudentArgs = {
  filter?: InputMaybe<StudentFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<StudentGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StudentOrder>;
};

/** AddUnapprovedJob result with filterable data and affected rows */
export type AddUnapprovedJobPayload = {
  __typename?: 'AddUnapprovedJobPayload';
  affected: Array<UnapprovedJob>;
  unapprovedJob: UnapprovedJobQueryResult;
};


/** AddUnapprovedJob result with filterable data and affected rows */
export type AddUnapprovedJobPayloadUnapprovedJobArgs = {
  filter?: InputMaybe<UnapprovedJobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnapprovedJobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnapprovedJobOrder>;
};

/** AddUnverifiedAdmin result with filterable data and affected rows */
export type AddUnverifiedAdminPayload = {
  __typename?: 'AddUnverifiedAdminPayload';
  affected: Array<UnverifiedAdmin>;
  unverifiedAdmin: UnverifiedAdminQueryResult;
};


/** AddUnverifiedAdmin result with filterable data and affected rows */
export type AddUnverifiedAdminPayloadUnverifiedAdminArgs = {
  filter?: InputMaybe<UnverifiedAdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedAdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedAdminOrder>;
};

/** AddUnverifiedSchool result with filterable data and affected rows */
export type AddUnverifiedSchoolPayload = {
  __typename?: 'AddUnverifiedSchoolPayload';
  affected: Array<UnverifiedSchool>;
  unverifiedSchool: UnverifiedSchoolQueryResult;
};


/** AddUnverifiedSchool result with filterable data and affected rows */
export type AddUnverifiedSchoolPayloadUnverifiedSchoolArgs = {
  filter?: InputMaybe<UnverifiedSchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedSchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedSchoolOrder>;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for Admin
 * Can be used f.e.: by queryAdmin
 */
export type AdminFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AdminFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AdminFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdminFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  Admin
 * Can be used f.e.: by queryAdmin
 */
export enum AdminGroup {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  UpdatedAt = 'updatedAt'
}

/** Admin Input value to add new Admin */
export type AdminInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type AdminLogin = {
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order Admin by asc or desc  */
export type AdminOrder = {
  asc?: InputMaybe<AdminOrderable>;
  desc?: InputMaybe<AdminOrderable>;
};

/**
 * for Admin a enum of all orderable entities
 * can be used f.e.: queryAdmin
 */
export enum AdminOrderable {
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number'
}

/** Admin Patch value all values are optional to update Admin entities */
export type AdminPatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type AdminProfile = {
  __typename?: 'AdminProfile';
  createdAt: Scalars['Time']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/** Admin result */
export type AdminQueryResult = {
  __typename?: 'AdminQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Admin>;
  totalCount: Scalars['Int']['output'];
};

/** Boolean Filter simple datatypes */
export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

/** DeleteAdmin result with filterable data and count of affected entries */
export type DeleteAdminPayload = {
  __typename?: 'DeleteAdminPayload';
  admin: AdminQueryResult;
  /** Count of deleted Admin entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
};


/** DeleteAdmin result with filterable data and count of affected entries */
export type DeleteAdminPayloadAdminArgs = {
  filter?: InputMaybe<AdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<AdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AdminOrder>;
};

/** DeleteJob result with filterable data and count of affected entries */
export type DeleteJobPayload = {
  __typename?: 'DeleteJobPayload';
  /** Count of deleted Job entities */
  count: Scalars['Int']['output'];
  job: JobQueryResult;
  msg?: Maybe<Scalars['String']['output']>;
};


/** DeleteJob result with filterable data and count of affected entries */
export type DeleteJobPayloadJobArgs = {
  filter?: InputMaybe<JobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<JobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
};

/** DeleteSchool result with filterable data and count of affected entries */
export type DeleteSchoolPayload = {
  __typename?: 'DeleteSchoolPayload';
  /** Count of deleted School entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  school: SchoolQueryResult;
};


/** DeleteSchool result with filterable data and count of affected entries */
export type DeleteSchoolPayloadSchoolArgs = {
  filter?: InputMaybe<SchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<SchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SchoolOrder>;
};

/** DeleteStudent result with filterable data and count of affected entries */
export type DeleteStudentPayload = {
  __typename?: 'DeleteStudentPayload';
  /** Count of deleted Student entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  student: StudentQueryResult;
};


/** DeleteStudent result with filterable data and count of affected entries */
export type DeleteStudentPayloadStudentArgs = {
  filter?: InputMaybe<StudentFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<StudentGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StudentOrder>;
};

/** DeleteUnapprovedJob result with filterable data and count of affected entries */
export type DeleteUnapprovedJobPayload = {
  __typename?: 'DeleteUnapprovedJobPayload';
  /** Count of deleted UnapprovedJob entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  unapprovedJob: UnapprovedJobQueryResult;
};


/** DeleteUnapprovedJob result with filterable data and count of affected entries */
export type DeleteUnapprovedJobPayloadUnapprovedJobArgs = {
  filter?: InputMaybe<UnapprovedJobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnapprovedJobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnapprovedJobOrder>;
};

/** DeleteUnverifiedAdmin result with filterable data and count of affected entries */
export type DeleteUnverifiedAdminPayload = {
  __typename?: 'DeleteUnverifiedAdminPayload';
  /** Count of deleted UnverifiedAdmin entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  unverifiedAdmin: UnverifiedAdminQueryResult;
};


/** DeleteUnverifiedAdmin result with filterable data and count of affected entries */
export type DeleteUnverifiedAdminPayloadUnverifiedAdminArgs = {
  filter?: InputMaybe<UnverifiedAdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedAdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedAdminOrder>;
};

/** DeleteUnverifiedSchool result with filterable data and count of affected entries */
export type DeleteUnverifiedSchoolPayload = {
  __typename?: 'DeleteUnverifiedSchoolPayload';
  /** Count of deleted UnverifiedSchool entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  unverifiedSchool: UnverifiedSchoolQueryResult;
};


/** DeleteUnverifiedSchool result with filterable data and count of affected entries */
export type DeleteUnverifiedSchoolPayloadUnverifiedSchoolArgs = {
  filter?: InputMaybe<UnverifiedSchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedSchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedSchoolOrder>;
};

export type Dummy = {
  __typename?: 'Dummy';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** Filter between start and end (start > value < end) */
export type FloatFilterBetween = {
  end: Scalars['Float']['input'];
  start: Scalars['Float']['input'];
};

/** Float Filter simple datatypes */
export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<FloatFilterBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** ID Filter simple datatypes */
export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  notin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Filter between start and end (start > value < end) */
export type IntFilterBetween = {
  end: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
};

/** Int Filter simple datatypes */
export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<IntFilterBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Job = {
  __typename?: 'Job';
  createdAt: Scalars['Time']['output'];
  deadline?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  description: Scalars['String']['output'];
  educationLevel?: Maybe<Scalars['String']['output']>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxSalary?: Maybe<Scalars['Int']['output']>;
  minSalary?: Maybe<Scalars['Int']['output']>;
  requirements?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for Job
 * Can be used f.e.: by queryJob
 */
export type JobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  deadline?: InputMaybe<TimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  educationLevel?: InputMaybe<StringFilterInput>;
  experience?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  industry?: InputMaybe<StringFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  maxSalary?: InputMaybe<IntFilterInput>;
  minSalary?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<JobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  requirements?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  Job
 * Can be used f.e.: by queryJob
 */
export enum JobGroup {
  CreatedAt = 'createdAt',
  Deadline = 'deadline',
  Description = 'description',
  EducationLevel = 'educationLevel',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  Level = 'level',
  Location = 'location',
  MaxSalary = 'maxSalary',
  MinSalary = 'minSalary',
  Requirements = 'requirements',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

/** Job Input value to add new Job */
export type JobInput = {
  deadline?: InputMaybe<Scalars['Time']['input']>;
  description: Scalars['String']['input'];
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

/** Order Job by asc or desc  */
export type JobOrder = {
  asc?: InputMaybe<JobOrderable>;
  desc?: InputMaybe<JobOrderable>;
};

/**
 * for Job a enum of all orderable entities
 * can be used f.e.: queryJob
 */
export enum JobOrderable {
  Description = 'description',
  EducationLevel = 'educationLevel',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  Level = 'level',
  Location = 'location',
  MaxSalary = 'maxSalary',
  MinSalary = 'minSalary',
  Requirements = 'requirements',
  Title = 'title'
}

/** Job Patch value all values are optional to update Job entities */
export type JobPatch = {
  deadline?: InputMaybe<Scalars['Time']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobProfile = {
  __typename?: 'JobProfile';
  createdAt: Scalars['Time']['output'];
  deadline?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  description: Scalars['String']['output'];
  educationLevel?: Maybe<Scalars['String']['output']>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxSalary?: Maybe<Scalars['Int']['output']>;
  minSalary?: Maybe<Scalars['Int']['output']>;
  requirements?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/** Job result */
export type JobQueryResult = {
  __typename?: 'JobQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Job>;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddStudents?: Maybe<Array<Student>>;
  /** Add new Admin */
  addAdmin?: Maybe<AddAdminPayload>;
  /** Add new Job */
  addJob?: Maybe<AddJobPayload>;
  /** Add new School */
  addSchool?: Maybe<AddSchoolPayload>;
  /** Add new Student */
  addStudent?: Maybe<AddStudentPayload>;
  /** Add new UnapprovedJob */
  addUnapprovedJob?: Maybe<AddUnapprovedJobPayload>;
  /** Add new UnverifiedAdmin */
  addUnverifiedAdmin?: Maybe<AddUnverifiedAdminPayload>;
  /** Add new UnverifiedSchool */
  addUnverifiedSchool?: Maybe<AddUnverifiedSchoolPayload>;
  adminLogin?: Maybe<Scalars['String']['output']>;
  approveJob: JobProfile;
  createAdmin?: Maybe<UnverifiedAdmin>;
  createDummy?: Maybe<Dummy>;
  createJob: JobProfile;
  createSchool?: Maybe<UnverifiedSchool>;
  createUnapprovedJob: JobProfile;
  /** delete Admin filtered by selection and delete all matched values */
  deleteAdmin?: Maybe<DeleteAdminPayload>;
  /** delete Job filtered by selection and delete all matched values */
  deleteJob?: Maybe<DeleteJobPayload>;
  /** delete School filtered by selection and delete all matched values */
  deleteSchool?: Maybe<DeleteSchoolPayload>;
  /** delete Student filtered by selection and delete all matched values */
  deleteStudent?: Maybe<DeleteStudentPayload>;
  /** delete UnapprovedJob filtered by selection and delete all matched values */
  deleteUnapprovedJob?: Maybe<DeleteUnapprovedJobPayload>;
  /** delete UnverifiedAdmin filtered by selection and delete all matched values */
  deleteUnverifiedAdmin?: Maybe<DeleteUnverifiedAdminPayload>;
  /** delete UnverifiedSchool filtered by selection and delete all matched values */
  deleteUnverifiedSchool?: Maybe<DeleteUnverifiedSchoolPayload>;
  editJob: JobProfile;
  forgotAdminPassword?: Maybe<SendCodeStatus>;
  forgotSchoolPassword?: Maybe<SendCodeStatus>;
  forgotStudentPassword?: Maybe<SendCodeStatus>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  removeJob: JobProfile;
  removeUnapprovedJob: JobProfile;
  requestAdminPasswordReset?: Maybe<Scalars['String']['output']>;
  requestSchoolPasswordReset?: Maybe<Scalars['String']['output']>;
  requestStudentPasswordReset?: Maybe<Scalars['String']['output']>;
  resetAdminPassword?: Maybe<Admin>;
  resetSchoolPassword?: Maybe<School>;
  resetStudentPassword?: Maybe<Student>;
  schoolLogin?: Maybe<Scalars['String']['output']>;
  sendCode?: Maybe<SendCodeStatus>;
  studentLogin?: Maybe<Scalars['String']['output']>;
  /** update Admin filtered by selection and update all matched values */
  updateAdmin?: Maybe<UpdateAdminPayload>;
  /** update Job filtered by selection and update all matched values */
  updateJob?: Maybe<UpdateJobPayload>;
  /** update School filtered by selection and update all matched values */
  updateSchool?: Maybe<UpdateSchoolPayload>;
  /** update Student filtered by selection and update all matched values */
  updateStudent?: Maybe<UpdateStudentPayload>;
  /** update UnapprovedJob filtered by selection and update all matched values */
  updateUnapprovedJob?: Maybe<UpdateUnapprovedJobPayload>;
  /** update UnverifiedAdmin filtered by selection and update all matched values */
  updateUnverifiedAdmin?: Maybe<UpdateUnverifiedAdminPayload>;
  /** update UnverifiedSchool filtered by selection and update all matched values */
  updateUnverifiedSchool?: Maybe<UpdateUnverifiedSchoolPayload>;
  verifyAdmin?: Maybe<Admin>;
  verifySchool?: Maybe<School>;
};


export type MutationAddStudentsArgs = {
  students: Array<NewStudent>;
};


export type MutationAddAdminArgs = {
  input: Array<AdminInput>;
};


export type MutationAddJobArgs = {
  input: Array<JobInput>;
};


export type MutationAddSchoolArgs = {
  input: Array<SchoolInput>;
};


export type MutationAddStudentArgs = {
  input: Array<StudentInput>;
};


export type MutationAddUnapprovedJobArgs = {
  input: Array<UnapprovedJobInput>;
};


export type MutationAddUnverifiedAdminArgs = {
  input: Array<UnverifiedAdminInput>;
};


export type MutationAddUnverifiedSchoolArgs = {
  input: Array<UnverifiedSchoolInput>;
};


export type MutationAdminLoginArgs = {
  input: AdminLogin;
};


export type MutationApproveJobArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCreateAdminArgs = {
  input: NewAdmin;
};


export type MutationCreateDummyArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateJobArgs = {
  input: NewJob;
};


export type MutationCreateSchoolArgs = {
  input: NewSchool;
};


export type MutationCreateUnapprovedJobArgs = {
  input: NewJob;
};


export type MutationDeleteAdminArgs = {
  filter: AdminFiltersInput;
};


export type MutationDeleteJobArgs = {
  filter: JobFiltersInput;
};


export type MutationDeleteSchoolArgs = {
  filter: SchoolFiltersInput;
};


export type MutationDeleteStudentArgs = {
  filter: StudentFiltersInput;
};


export type MutationDeleteUnapprovedJobArgs = {
  filter: UnapprovedJobFiltersInput;
};


export type MutationDeleteUnverifiedAdminArgs = {
  filter: UnverifiedAdminFiltersInput;
};


export type MutationDeleteUnverifiedSchoolArgs = {
  filter: UnverifiedSchoolFiltersInput;
};


export type MutationEditJobArgs = {
  id: Scalars['Int']['input'];
  input: NewJob;
};


export type MutationForgotAdminPasswordArgs = {
  phone_number: Scalars['String']['input'];
};


export type MutationForgotSchoolPasswordArgs = {
  phone_number: Scalars['String']['input'];
};


export type MutationForgotStudentPasswordArgs = {
  registration_number: Scalars['String']['input'];
  schoolid: Scalars['Int']['input'];
};


export type MutationRefreshTokenArgs = {
  input?: InputMaybe<RefreshTokenInput>;
};


export type MutationRemoveJobArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUnapprovedJobArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRequestAdminPasswordResetArgs = {
  input?: InputMaybe<Verificationinfo>;
};


export type MutationRequestSchoolPasswordResetArgs = {
  input?: InputMaybe<Verificationinfo>;
};


export type MutationRequestStudentPasswordResetArgs = {
  otp: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  registration_number: Scalars['String']['input'];
  schoolid: Scalars['Int']['input'];
};


export type MutationResetAdminPasswordArgs = {
  new_password: Scalars['String']['input'];
};


export type MutationResetSchoolPasswordArgs = {
  new_password: Scalars['String']['input'];
};


export type MutationResetStudentPasswordArgs = {
  new_password: Scalars['String']['input'];
};


export type MutationSchoolLoginArgs = {
  input: SchoolLogin;
};


export type MutationSendCodeArgs = {
  phone_number: Scalars['String']['input'];
};


export type MutationStudentLoginArgs = {
  input: StudentLogin;
};


export type MutationUpdateAdminArgs = {
  input: UpdateAdminInput;
};


export type MutationUpdateJobArgs = {
  input: UpdateJobInput;
};


export type MutationUpdateSchoolArgs = {
  input: UpdateSchoolInput;
};


export type MutationUpdateStudentArgs = {
  input: UpdateStudentInput;
};


export type MutationUpdateUnapprovedJobArgs = {
  input: UpdateUnapprovedJobInput;
};


export type MutationUpdateUnverifiedAdminArgs = {
  input: UpdateUnverifiedAdminInput;
};


export type MutationUpdateUnverifiedSchoolArgs = {
  input: UpdateUnverifiedSchoolInput;
};


export type MutationVerifyAdminArgs = {
  input: Verificationinfo;
};


export type MutationVerifySchoolArgs = {
  input: Verificationinfo;
};

export type NewAdmin = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type NewJob = {
  deadline?: InputMaybe<Scalars['Time']['input']>;
  description: Scalars['String']['input'];
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type NewSchool = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type NewStudent = {
  date_of_admission?: InputMaybe<Scalars['Time']['input']>;
  date_of_birth?: InputMaybe<Scalars['Time']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  registration_number: Scalars['String']['input'];
};

export type PhoneNumberExists = {
  __typename?: 'PhoneNumberExists';
  unverified: Scalars['Boolean']['output'];
  verified: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminPhoneNumberExists: PhoneNumberExists;
  findJob: JobProfile;
  findUnapprovedJob: JobProfile;
  /** return one Admin selected by PrimaryKey(s) */
  getAdmin?: Maybe<Admin>;
  getDummy?: Maybe<Dummy>;
  getDummys: Array<Maybe<Dummy>>;
  /** return one Job selected by PrimaryKey(s) */
  getJob?: Maybe<Job>;
  getJobs?: Maybe<Array<JobProfile>>;
  /** return one School selected by PrimaryKey(s) */
  getSchool?: Maybe<School>;
  getSchoolProfile?: Maybe<SchoolProfile>;
  getSchoolsProfile?: Maybe<Array<SchoolProfile>>;
  /** return one Student selected by PrimaryKey(s) */
  getStudent?: Maybe<Student>;
  getStudentProfile?: Maybe<StudentProfile>;
  /** return one UnapprovedJob selected by PrimaryKey(s) */
  getUnapprovedJob?: Maybe<UnapprovedJob>;
  getUnapprovedJobs?: Maybe<Array<JobProfile>>;
  /** return one UnverifiedAdmin selected by PrimaryKey(s) */
  getUnverifiedAdmin?: Maybe<UnverifiedAdmin>;
  /** return one UnverifiedSchool selected by PrimaryKey(s) */
  getUnverifiedSchool?: Maybe<UnverifiedSchool>;
  getadminProfile?: Maybe<SchoolProfile>;
  /** return a list of  Admin filterable, pageination, orderbale, groupable ... */
  queryAdmin?: Maybe<AdminQueryResult>;
  /** return a list of  Job filterable, pageination, orderbale, groupable ... */
  queryJob?: Maybe<JobQueryResult>;
  /** return a list of  School filterable, pageination, orderbale, groupable ... */
  querySchool?: Maybe<SchoolQueryResult>;
  /** return a list of  Student filterable, pageination, orderbale, groupable ... */
  queryStudent?: Maybe<StudentQueryResult>;
  /** return a list of  UnapprovedJob filterable, pageination, orderbale, groupable ... */
  queryUnapprovedJob?: Maybe<UnapprovedJobQueryResult>;
  /** return a list of  UnverifiedAdmin filterable, pageination, orderbale, groupable ... */
  queryUnverifiedAdmin?: Maybe<UnverifiedAdminQueryResult>;
  /** return a list of  UnverifiedSchool filterable, pageination, orderbale, groupable ... */
  queryUnverifiedSchool?: Maybe<UnverifiedSchoolQueryResult>;
  schoolPhoneNumberExists: PhoneNumberExists;
};


export type QueryAdminPhoneNumberExistsArgs = {
  phone_number: Scalars['String']['input'];
};


export type QueryFindJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindUnapprovedJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetAdminArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetDummyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetSchoolArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetStudentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnapprovedJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnverifiedAdminArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnverifiedSchoolArgs = {
  id: Scalars['Int']['input'];
};


export type QueryQueryAdminArgs = {
  filter?: InputMaybe<AdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<AdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AdminOrder>;
};


export type QueryQueryJobArgs = {
  filter?: InputMaybe<JobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<JobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
};


export type QueryQuerySchoolArgs = {
  filter?: InputMaybe<SchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<SchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SchoolOrder>;
};


export type QueryQueryStudentArgs = {
  filter?: InputMaybe<StudentFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<StudentGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StudentOrder>;
};


export type QueryQueryUnapprovedJobArgs = {
  filter?: InputMaybe<UnapprovedJobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnapprovedJobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnapprovedJobOrder>;
};


export type QueryQueryUnverifiedAdminArgs = {
  filter?: InputMaybe<UnverifiedAdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedAdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedAdminOrder>;
};


export type QueryQueryUnverifiedSchoolArgs = {
  filter?: InputMaybe<UnverifiedSchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedSchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedSchoolOrder>;
};


export type QuerySchoolPhoneNumberExistsArgs = {
  phone_number: Scalars['String']['input'];
};

export type RefreshTokenInput = {
  Token: Scalars['String']['input'];
};

export type School = {
  __typename?: 'School';
  Website?: Maybe<Scalars['String']['output']>;
  badge?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for School
 * Can be used f.e.: by querySchool
 */
export type SchoolFiltersInput = {
  Website?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SchoolFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  School
 * Can be used f.e.: by querySchool
 */
export enum SchoolGroup {
  Website = 'Website',
  Badge = 'badge',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  UpdatedAt = 'updatedAt'
}

/** School Input value to add new School */
export type SchoolInput = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type SchoolLogin = {
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order School by asc or desc  */
export type SchoolOrder = {
  asc?: InputMaybe<SchoolOrderable>;
  desc?: InputMaybe<SchoolOrderable>;
};

/**
 * for School a enum of all orderable entities
 * can be used f.e.: querySchool
 */
export enum SchoolOrderable {
  Website = 'Website',
  Badge = 'badge',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number'
}

/** School Patch value all values are optional to update School entities */
export type SchoolPatch = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type SchoolProfile = {
  __typename?: 'SchoolProfile';
  Website?: Maybe<Scalars['String']['output']>;
  badge?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  students?: Maybe<Array<Maybe<StudentProfile>>>;
  updatedAt: Scalars['Time']['output'];
};

/** School result */
export type SchoolQueryResult = {
  __typename?: 'SchoolQueryResult';
  count: Scalars['Int']['output'];
  data: Array<School>;
  totalCount: Scalars['Int']['output'];
};

export type SendCodeStatus = {
  __typename?: 'SendCodeStatus';
  phone_number: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** SoftDelete Filter simple datatypes */
export type SoftDeleteFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<TimeFilterBetween>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<SoftDeleteFilterInput>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
};

export type SqlCreateExtension = {
  directiveExt?: InputMaybe<Array<Scalars['String']['input']>>;
  value: Scalars['Boolean']['input'];
};

export type SqlMutationParams = {
  add?: InputMaybe<SqlCreateExtension>;
  delete?: InputMaybe<SqlCreateExtension>;
  directiveExt?: InputMaybe<Array<Scalars['String']['input']>>;
  update?: InputMaybe<SqlCreateExtension>;
};

export type SqlQueryParams = {
  directiveExt?: InputMaybe<Array<Scalars['String']['input']>>;
  get?: InputMaybe<SqlCreateExtension>;
  query?: InputMaybe<SqlCreateExtension>;
};

/** String Filter simple datatypes */
export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['Time']['output'];
  date_of_admission?: Maybe<Scalars['Time']['output']>;
  date_of_birth?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  profile_picture?: Maybe<Scalars['String']['output']>;
  registration_number: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for Student
 * Can be used f.e.: by queryStudent
 */
export type StudentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  date_of_admission?: InputMaybe<TimeFilterInput>;
  date_of_birth?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StudentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  profile_picture?: InputMaybe<StringFilterInput>;
  registration_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  Student
 * Can be used f.e.: by queryStudent
 */
export enum StudentGroup {
  CreatedAt = 'createdAt',
  DateOfAdmission = 'date_of_admission',
  DateOfBirth = 'date_of_birth',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  ProfilePicture = 'profile_picture',
  RegistrationNumber = 'registration_number',
  UpdatedAt = 'updatedAt'
}

/** Student Input value to add new Student */
export type StudentInput = {
  date_of_admission?: InputMaybe<Scalars['Time']['input']>;
  date_of_birth?: InputMaybe<Scalars['Time']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  registration_number: Scalars['String']['input'];
};

export type StudentLogin = {
  password: Scalars['String']['input'];
  registration_number: Scalars['String']['input'];
  schoolid: Scalars['Int']['input'];
};

/** Order Student by asc or desc  */
export type StudentOrder = {
  asc?: InputMaybe<StudentOrderable>;
  desc?: InputMaybe<StudentOrderable>;
};

/**
 * for Student a enum of all orderable entities
 * can be used f.e.: queryStudent
 */
export enum StudentOrderable {
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  ProfilePicture = 'profile_picture',
  RegistrationNumber = 'registration_number'
}

/** Student Patch value all values are optional to update Student entities */
export type StudentPatch = {
  date_of_admission?: InputMaybe<Scalars['Time']['input']>;
  date_of_birth?: InputMaybe<Scalars['Time']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  registration_number?: InputMaybe<Scalars['String']['input']>;
};

export type StudentProfile = {
  __typename?: 'StudentProfile';
  createdAt: Scalars['Time']['output'];
  date_of_admission?: Maybe<Scalars['Time']['output']>;
  date_of_birth?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  profile_picture?: Maybe<Scalars['String']['output']>;
  registration_number: Scalars['String']['output'];
  school: SchoolProfile;
  updatedAt: Scalars['Time']['output'];
};

/** Student result */
export type StudentQueryResult = {
  __typename?: 'StudentQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Student>;
  totalCount: Scalars['Int']['output'];
};

/** Filter between start and end (start > value < end) */
export type TimeFilterBetween = {
  end: Scalars['Time']['input'];
  start: Scalars['Time']['input'];
};

/** Time Filter simple datatypes */
export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<TimeFilterBetween>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
};

export type UnapprovedJob = {
  __typename?: 'UnapprovedJob';
  createdAt: Scalars['Time']['output'];
  deadline?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  description: Scalars['String']['output'];
  educationLevel?: Maybe<Scalars['String']['output']>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxSalary?: Maybe<Scalars['Int']['output']>;
  minSalary?: Maybe<Scalars['Int']['output']>;
  requirements?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for UnapprovedJob
 * Can be used f.e.: by queryUnapprovedJob
 */
export type UnapprovedJobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UnapprovedJobFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  deadline?: InputMaybe<TimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  educationLevel?: InputMaybe<StringFilterInput>;
  experience?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  industry?: InputMaybe<StringFilterInput>;
  level?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  maxSalary?: InputMaybe<IntFilterInput>;
  minSalary?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<UnapprovedJobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UnapprovedJobFiltersInput>>>;
  requirements?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  UnapprovedJob
 * Can be used f.e.: by queryUnapprovedJob
 */
export enum UnapprovedJobGroup {
  CreatedAt = 'createdAt',
  Deadline = 'deadline',
  Description = 'description',
  EducationLevel = 'educationLevel',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  Level = 'level',
  Location = 'location',
  MaxSalary = 'maxSalary',
  MinSalary = 'minSalary',
  Requirements = 'requirements',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

/** UnapprovedJob Input value to add new UnapprovedJob */
export type UnapprovedJobInput = {
  deadline?: InputMaybe<Scalars['Time']['input']>;
  description: Scalars['String']['input'];
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

/** Order UnapprovedJob by asc or desc  */
export type UnapprovedJobOrder = {
  asc?: InputMaybe<UnapprovedJobOrderable>;
  desc?: InputMaybe<UnapprovedJobOrderable>;
};

/**
 * for UnapprovedJob a enum of all orderable entities
 * can be used f.e.: queryUnapprovedJob
 */
export enum UnapprovedJobOrderable {
  Description = 'description',
  EducationLevel = 'educationLevel',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  Level = 'level',
  Location = 'location',
  MaxSalary = 'maxSalary',
  MinSalary = 'minSalary',
  Requirements = 'requirements',
  Title = 'title'
}

/** UnapprovedJob Patch value all values are optional to update UnapprovedJob entities */
export type UnapprovedJobPatch = {
  deadline?: InputMaybe<Scalars['Time']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** UnapprovedJob result */
export type UnapprovedJobQueryResult = {
  __typename?: 'UnapprovedJobQueryResult';
  count: Scalars['Int']['output'];
  data: Array<UnapprovedJob>;
  totalCount: Scalars['Int']['output'];
};

export type UnverifiedAdmin = {
  __typename?: 'UnverifiedAdmin';
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for UnverifiedAdmin
 * Can be used f.e.: by queryUnverifiedAdmin
 */
export type UnverifiedAdminFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UnverifiedAdminFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UnverifiedAdminFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UnverifiedAdminFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  UnverifiedAdmin
 * Can be used f.e.: by queryUnverifiedAdmin
 */
export enum UnverifiedAdminGroup {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  UpdatedAt = 'updatedAt'
}

/** UnverifiedAdmin Input value to add new UnverifiedAdmin */
export type UnverifiedAdminInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order UnverifiedAdmin by asc or desc  */
export type UnverifiedAdminOrder = {
  asc?: InputMaybe<UnverifiedAdminOrderable>;
  desc?: InputMaybe<UnverifiedAdminOrderable>;
};

/**
 * for UnverifiedAdmin a enum of all orderable entities
 * can be used f.e.: queryUnverifiedAdmin
 */
export enum UnverifiedAdminOrderable {
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number'
}

/** UnverifiedAdmin Patch value all values are optional to update UnverifiedAdmin entities */
export type UnverifiedAdminPatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

/** UnverifiedAdmin result */
export type UnverifiedAdminQueryResult = {
  __typename?: 'UnverifiedAdminQueryResult';
  count: Scalars['Int']['output'];
  data: Array<UnverifiedAdmin>;
  totalCount: Scalars['Int']['output'];
};

export type UnverifiedSchool = {
  __typename?: 'UnverifiedSchool';
  Website?: Maybe<Scalars['String']['output']>;
  badge?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for UnverifiedSchool
 * Can be used f.e.: by queryUnverifiedSchool
 */
export type UnverifiedSchoolFiltersInput = {
  Website?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UnverifiedSchoolFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UnverifiedSchoolFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UnverifiedSchoolFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  UnverifiedSchool
 * Can be used f.e.: by queryUnverifiedSchool
 */
export enum UnverifiedSchoolGroup {
  Website = 'Website',
  Badge = 'badge',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  UpdatedAt = 'updatedAt'
}

/** UnverifiedSchool Input value to add new UnverifiedSchool */
export type UnverifiedSchoolInput = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order UnverifiedSchool by asc or desc  */
export type UnverifiedSchoolOrder = {
  asc?: InputMaybe<UnverifiedSchoolOrderable>;
  desc?: InputMaybe<UnverifiedSchoolOrderable>;
};

/**
 * for UnverifiedSchool a enum of all orderable entities
 * can be used f.e.: queryUnverifiedSchool
 */
export enum UnverifiedSchoolOrderable {
  Website = 'Website',
  Badge = 'badge',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number'
}

/** UnverifiedSchool Patch value all values are optional to update UnverifiedSchool entities */
export type UnverifiedSchoolPatch = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

/** UnverifiedSchool result */
export type UnverifiedSchoolQueryResult = {
  __typename?: 'UnverifiedSchoolQueryResult';
  count: Scalars['Int']['output'];
  data: Array<UnverifiedSchool>;
  totalCount: Scalars['Int']['output'];
};

/** Update rules for Admin multiupdates simple possible by global filtervalue */
export type UpdateAdminInput = {
  filter: AdminFiltersInput;
  set: AdminPatch;
};

/** UpdateAdmin result with filterable data and affected rows */
export type UpdateAdminPayload = {
  __typename?: 'UpdateAdminPayload';
  admin: AdminQueryResult;
  affected: Array<Admin>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
};


/** UpdateAdmin result with filterable data and affected rows */
export type UpdateAdminPayloadAdminArgs = {
  filter?: InputMaybe<AdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<AdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AdminOrder>;
};

/** Update rules for Job multiupdates simple possible by global filtervalue */
export type UpdateJobInput = {
  filter: JobFiltersInput;
  set: JobPatch;
};

/** UpdateJob result with filterable data and affected rows */
export type UpdateJobPayload = {
  __typename?: 'UpdateJobPayload';
  affected: Array<Job>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  job: JobQueryResult;
};


/** UpdateJob result with filterable data and affected rows */
export type UpdateJobPayloadJobArgs = {
  filter?: InputMaybe<JobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<JobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
};

/** Update rules for School multiupdates simple possible by global filtervalue */
export type UpdateSchoolInput = {
  filter: SchoolFiltersInput;
  set: SchoolPatch;
};

/** UpdateSchool result with filterable data and affected rows */
export type UpdateSchoolPayload = {
  __typename?: 'UpdateSchoolPayload';
  affected: Array<School>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  school: SchoolQueryResult;
};


/** UpdateSchool result with filterable data and affected rows */
export type UpdateSchoolPayloadSchoolArgs = {
  filter?: InputMaybe<SchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<SchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SchoolOrder>;
};

/** Update rules for Student multiupdates simple possible by global filtervalue */
export type UpdateStudentInput = {
  filter: StudentFiltersInput;
  set: StudentPatch;
};

/** UpdateStudent result with filterable data and affected rows */
export type UpdateStudentPayload = {
  __typename?: 'UpdateStudentPayload';
  affected: Array<Student>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  student: StudentQueryResult;
};


/** UpdateStudent result with filterable data and affected rows */
export type UpdateStudentPayloadStudentArgs = {
  filter?: InputMaybe<StudentFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<StudentGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<StudentOrder>;
};

/** Update rules for UnapprovedJob multiupdates simple possible by global filtervalue */
export type UpdateUnapprovedJobInput = {
  filter: UnapprovedJobFiltersInput;
  set: UnapprovedJobPatch;
};

/** UpdateUnapprovedJob result with filterable data and affected rows */
export type UpdateUnapprovedJobPayload = {
  __typename?: 'UpdateUnapprovedJobPayload';
  affected: Array<UnapprovedJob>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  unapprovedJob: UnapprovedJobQueryResult;
};


/** UpdateUnapprovedJob result with filterable data and affected rows */
export type UpdateUnapprovedJobPayloadUnapprovedJobArgs = {
  filter?: InputMaybe<UnapprovedJobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnapprovedJobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnapprovedJobOrder>;
};

/** Update rules for UnverifiedAdmin multiupdates simple possible by global filtervalue */
export type UpdateUnverifiedAdminInput = {
  filter: UnverifiedAdminFiltersInput;
  set: UnverifiedAdminPatch;
};

/** UpdateUnverifiedAdmin result with filterable data and affected rows */
export type UpdateUnverifiedAdminPayload = {
  __typename?: 'UpdateUnverifiedAdminPayload';
  affected: Array<UnverifiedAdmin>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  unverifiedAdmin: UnverifiedAdminQueryResult;
};


/** UpdateUnverifiedAdmin result with filterable data and affected rows */
export type UpdateUnverifiedAdminPayloadUnverifiedAdminArgs = {
  filter?: InputMaybe<UnverifiedAdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedAdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedAdminOrder>;
};

/** Update rules for UnverifiedSchool multiupdates simple possible by global filtervalue */
export type UpdateUnverifiedSchoolInput = {
  filter: UnverifiedSchoolFiltersInput;
  set: UnverifiedSchoolPatch;
};

/** UpdateUnverifiedSchool result with filterable data and affected rows */
export type UpdateUnverifiedSchoolPayload = {
  __typename?: 'UpdateUnverifiedSchoolPayload';
  affected: Array<UnverifiedSchool>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  unverifiedSchool: UnverifiedSchoolQueryResult;
};


/** UpdateUnverifiedSchool result with filterable data and affected rows */
export type UpdateUnverifiedSchoolPayloadUnverifiedSchoolArgs = {
  filter?: InputMaybe<UnverifiedSchoolFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedSchoolGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedSchoolOrder>;
};

export type Verificationinfo = {
  otp: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type ResetAdminPasswordMutationVariables = Exact<{
  new_password: Scalars['String']['input'];
}>;


export type ResetAdminPasswordMutation = { __typename?: 'Mutation', resetAdminPassword?: { __typename?: 'Admin', id: number } | null };

export type AdminLoginMutationVariables = Exact<{
  adminlogin: AdminLogin;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin?: string | null };

export type ForgotAdminPasswordMutationVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type ForgotAdminPasswordMutation = { __typename?: 'Mutation', forgotAdminPassword?: { __typename?: 'SendCodeStatus', phone_number: string, success: boolean } | null };

export type RequestAdminPasswordResetMutationVariables = Exact<{
  verificationinfo: Verificationinfo;
}>;


export type RequestAdminPasswordResetMutation = { __typename?: 'Mutation', requestAdminPasswordReset?: string | null };

export type FindUnapprovedJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindUnapprovedJobQuery = { __typename?: 'Query', findUnapprovedJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null } };

export type ApproveJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ApproveJobMutation = { __typename?: 'Mutation', approveJob: { __typename?: 'JobProfile', id: number } };

export type GetUnapprovedJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnapprovedJobsQuery = { __typename?: 'Query', getUnapprovedJobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, industry?: string | null, description: string }> | null };

export type CreateJobMutationVariables = Exact<{
  newjob: NewJob;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'JobProfile', id: number } };

export type SchoolProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type SchoolProfileQuery = { __typename?: 'Query', getSchoolProfile?: { __typename?: 'SchoolProfile', name: string, phone_number: string } | null };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', getJobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, industry?: string | null, description: string }> | null };

export type CreateSchoolMutationVariables = Exact<{
  newschool: NewSchool;
}>;


export type CreateSchoolMutation = { __typename?: 'Mutation', createSchool?: { __typename?: 'UnverifiedSchool', id: number } | null };

export type CheckphonenumberQueryVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type CheckphonenumberQuery = { __typename?: 'Query', schoolPhoneNumberExists: { __typename?: 'PhoneNumberExists', verified: boolean, unverified: boolean } };

export type VerifySchoolMutationVariables = Exact<{
  verificationinfo: Verificationinfo;
}>;


export type VerifySchoolMutation = { __typename?: 'Mutation', verifySchool?: { __typename?: 'School', id: number } | null };

export type StudentLoginMutationVariables = Exact<{
  studentlogin: StudentLogin;
}>;


export type StudentLoginMutation = { __typename?: 'Mutation', studentLogin?: string | null };

export type ResetStudentPasswordMutationVariables = Exact<{
  new_password: Scalars['String']['input'];
}>;


export type ResetStudentPasswordMutation = { __typename?: 'Mutation', resetStudentPassword?: { __typename?: 'Student', id: number } | null };

export type ForgotStudentPasswordMutationVariables = Exact<{
  schoolid: Scalars['Int']['input'];
  registration_number: Scalars['String']['input'];
}>;


export type ForgotStudentPasswordMutation = { __typename?: 'Mutation', forgotStudentPassword?: { __typename?: 'SendCodeStatus', phone_number: string, success: boolean } | null };

export type RequestStudentPasswordResetMutationVariables = Exact<{
  schoolid: Scalars['Int']['input'];
  registration_number: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type RequestStudentPasswordResetMutation = { __typename?: 'Mutation', requestStudentPasswordReset?: string | null };

export type SchoolsProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type SchoolsProfileQuery = { __typename?: 'Query', getSchoolsProfile?: Array<{ __typename?: 'SchoolProfile', id: number, name: string }> | null };

export type StudentProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentProfileQuery = { __typename?: 'Query', getStudentProfile?: { __typename?: 'StudentProfile', name: string, phone_number: string, registration_number: string, school: { __typename?: 'SchoolProfile', name: string, phone_number: string } } | null };

export type FindJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindJobQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null } };

export type GetlistingJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetlistingJobsQuery = { __typename?: 'Query', getJobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, description: string, location?: string | null }> | null };

export type SendCodeMutationVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type SendCodeMutation = { __typename?: 'Mutation', sendCode?: { __typename?: 'SendCodeStatus', phone_number: string, success: boolean } | null };


export const ResetAdminPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetAdminPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetAdminPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"new_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ResetAdminPasswordMutation, ResetAdminPasswordMutationVariables>;
export const AdminLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminlogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminlogin"}}}]}]}}]} as unknown as DocumentNode<AdminLoginMutation, AdminLoginMutationVariables>;
export const ForgotAdminPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgotAdminPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotAdminPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ForgotAdminPasswordMutation, ForgotAdminPasswordMutationVariables>;
export const RequestAdminPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestAdminPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestAdminPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}]}]}}]} as unknown as DocumentNode<RequestAdminPasswordResetMutation, RequestAdminPasswordResetMutationVariables>;
export const FindUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<FindUnapprovedJobQuery, FindUnapprovedJobQueryVariables>;
export const ApproveJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approveJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approveJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ApproveJobMutation, ApproveJobMutationVariables>;
export const GetUnapprovedJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUnapprovedJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUnapprovedJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetUnapprovedJobsQuery, GetUnapprovedJobsQueryVariables>;
export const CreateJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewJob"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateJobMutation, CreateJobMutationVariables>;
export const SchoolProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SchoolProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSchoolProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]} as unknown as DocumentNode<SchoolProfileQuery, SchoolProfileQueryVariables>;
export const GetJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetJobsQuery, GetJobsQueryVariables>;
export const CreateSchoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSchool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newschool"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewSchool"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSchool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newschool"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateSchoolMutation, CreateSchoolMutationVariables>;
export const CheckphonenumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkphonenumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schoolPhoneNumberExists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"unverified"}}]}}]}}]} as unknown as DocumentNode<CheckphonenumberQuery, CheckphonenumberQueryVariables>;
export const VerifySchoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifySchool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifySchool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VerifySchoolMutation, VerifySchoolMutationVariables>;
export const StudentLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"studentLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentlogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StudentLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentlogin"}}}]}]}}]} as unknown as DocumentNode<StudentLoginMutation, StudentLoginMutationVariables>;
export const ResetStudentPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetStudentPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetStudentPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"new_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ResetStudentPasswordMutation, ResetStudentPasswordMutationVariables>;
export const ForgotStudentPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgotStudentPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schoolid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registration_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotStudentPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"schoolid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schoolid"}}},{"kind":"Argument","name":{"kind":"Name","value":"registration_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registration_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ForgotStudentPasswordMutation, ForgotStudentPasswordMutationVariables>;
export const RequestStudentPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestStudentPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schoolid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registration_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"otp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestStudentPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"schoolid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schoolid"}}},{"kind":"Argument","name":{"kind":"Name","value":"registration_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registration_number"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}},{"kind":"Argument","name":{"kind":"Name","value":"otp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"otp"}}}]}]}}]} as unknown as DocumentNode<RequestStudentPasswordResetMutation, RequestStudentPasswordResetMutationVariables>;
export const SchoolsProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SchoolsProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSchoolsProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SchoolsProfileQuery, SchoolsProfileQueryVariables>;
export const StudentProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"studentProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"registration_number"}},{"kind":"Field","name":{"kind":"Name","value":"school"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]}}]} as unknown as DocumentNode<StudentProfileQuery, StudentProfileQueryVariables>;
export const FindJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<FindJobQuery, FindJobQueryVariables>;
export const GetlistingJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getlistingJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<GetlistingJobsQuery, GetlistingJobsQueryVariables>;
export const SendCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SendCodeMutation, SendCodeMutationVariables>;