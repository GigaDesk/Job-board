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

/** AddApplication result with filterable data and affected rows */
export type AddApplicationPayload = {
  __typename?: 'AddApplicationPayload';
  affected: Array<Application>;
  application: ApplicationQueryResult;
};


/** AddApplication result with filterable data and affected rows */
export type AddApplicationPayloadApplicationArgs = {
  filter?: InputMaybe<ApplicationFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<ApplicationGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ApplicationOrder>;
};

/** AddEmployee result with filterable data and affected rows */
export type AddEmployeePayload = {
  __typename?: 'AddEmployeePayload';
  affected: Array<Employee>;
  employee: EmployeeQueryResult;
};


/** AddEmployee result with filterable data and affected rows */
export type AddEmployeePayloadEmployeeArgs = {
  filter?: InputMaybe<EmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployeeOrder>;
};

/** AddEmployer result with filterable data and affected rows */
export type AddEmployerPayload = {
  __typename?: 'AddEmployerPayload';
  affected: Array<Employer>;
  employer: EmployerQueryResult;
};


/** AddEmployer result with filterable data and affected rows */
export type AddEmployerPayloadEmployerArgs = {
  filter?: InputMaybe<EmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployerOrder>;
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

/** AddUnverifiedEmployee result with filterable data and affected rows */
export type AddUnverifiedEmployeePayload = {
  __typename?: 'AddUnverifiedEmployeePayload';
  affected: Array<UnverifiedEmployee>;
  unverifiedEmployee: UnverifiedEmployeeQueryResult;
};


/** AddUnverifiedEmployee result with filterable data and affected rows */
export type AddUnverifiedEmployeePayloadUnverifiedEmployeeArgs = {
  filter?: InputMaybe<UnverifiedEmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployeeOrder>;
};

/** AddUnverifiedEmployer result with filterable data and affected rows */
export type AddUnverifiedEmployerPayload = {
  __typename?: 'AddUnverifiedEmployerPayload';
  affected: Array<UnverifiedEmployer>;
  unverifiedEmployer: UnverifiedEmployerQueryResult;
};


/** AddUnverifiedEmployer result with filterable data and affected rows */
export type AddUnverifiedEmployerPayloadUnverifiedEmployerArgs = {
  filter?: InputMaybe<UnverifiedEmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployerOrder>;
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

export type Analytics = {
  __typename?: 'Analytics';
  applications_status: ApplicationAnalytics;
  jobs_approval: JobApprovalAnalytics;
  jobs_education_level: JobEducationLevelAnalytics;
  jobs_experience: JobExperienceAnalytics;
  jobs_seniority: JobSeniorityLevelAnalytics;
  unapprovedjobs_education_level: JobEducationLevelAnalytics;
  unapprovedjobs_experience: JobExperienceAnalytics;
  unapprovedjobs_seniority: JobSeniorityLevelAnalytics;
};

export type Application = {
  __typename?: 'Application';
  coverLetterUrl: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  educationLevel: Scalars['String']['output'];
  employeeID: Scalars['Int']['output'];
  experience: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  jobID: Scalars['Int']['output'];
  resumeeUrl: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type ApplicationAnalytics = {
  __typename?: 'ApplicationAnalytics';
  accepted: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  rejected: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/**
 * Filter input selection for Application
 * Can be used f.e.: by queryApplication
 */
export type ApplicationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ApplicationFiltersInput>>>;
  coverLetterUrl?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<TimeFilterInput>;
  educationLevel?: InputMaybe<StringFilterInput>;
  employeeID?: InputMaybe<IntFilterInput>;
  experience?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  jobID?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ApplicationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ApplicationFiltersInput>>>;
  resumeeUrl?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  Application
 * Can be used f.e.: by queryApplication
 */
export enum ApplicationGroup {
  CoverLetterUrl = 'coverLetterUrl',
  CreatedAt = 'createdAt',
  EducationLevel = 'educationLevel',
  EmployeeId = 'employeeID',
  Experience = 'experience',
  Id = 'id',
  JobId = 'jobID',
  ResumeeUrl = 'resumeeUrl',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Application Input value to add new Application */
export type ApplicationInput = {
  coverLetterUrl: Scalars['String']['input'];
  educationLevel: Scalars['String']['input'];
  employeeID: Scalars['Int']['input'];
  experience: Scalars['Int']['input'];
  jobID: Scalars['Int']['input'];
  resumeeUrl: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

/** Order Application by asc or desc  */
export type ApplicationOrder = {
  asc?: InputMaybe<ApplicationOrderable>;
  desc?: InputMaybe<ApplicationOrderable>;
};

/**
 * for Application a enum of all orderable entities
 * can be used f.e.: queryApplication
 */
export enum ApplicationOrderable {
  CoverLetterUrl = 'coverLetterUrl',
  EducationLevel = 'educationLevel',
  EmployeeId = 'employeeID',
  Experience = 'experience',
  Id = 'id',
  JobId = 'jobID',
  ResumeeUrl = 'resumeeUrl',
  Status = 'status'
}

/** Application Patch value all values are optional to update Application entities */
export type ApplicationPatch = {
  coverLetterUrl?: InputMaybe<Scalars['String']['input']>;
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  employeeID?: InputMaybe<Scalars['Int']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  jobID?: InputMaybe<Scalars['Int']['input']>;
  resumeeUrl?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ApplicationProfile = {
  __typename?: 'ApplicationProfile';
  coverLetterUrl: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  educationLevel: Scalars['String']['output'];
  employee: EmployeeProfile;
  experience: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  job: JobProfile;
  resumeeUrl: Scalars['String']['output'];
  status: ApplicationStatus;
  updatedAt: Scalars['Time']['output'];
};

/** Application result */
export type ApplicationQueryResult = {
  __typename?: 'ApplicationQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Application>;
  totalCount: Scalars['Int']['output'];
};

export enum ApplicationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

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

/** DeleteApplication result with filterable data and count of affected entries */
export type DeleteApplicationPayload = {
  __typename?: 'DeleteApplicationPayload';
  application: ApplicationQueryResult;
  /** Count of deleted Application entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
};


/** DeleteApplication result with filterable data and count of affected entries */
export type DeleteApplicationPayloadApplicationArgs = {
  filter?: InputMaybe<ApplicationFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<ApplicationGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ApplicationOrder>;
};

/** DeleteEmployee result with filterable data and count of affected entries */
export type DeleteEmployeePayload = {
  __typename?: 'DeleteEmployeePayload';
  /** Count of deleted Employee entities */
  count: Scalars['Int']['output'];
  employee: EmployeeQueryResult;
  msg?: Maybe<Scalars['String']['output']>;
};


/** DeleteEmployee result with filterable data and count of affected entries */
export type DeleteEmployeePayloadEmployeeArgs = {
  filter?: InputMaybe<EmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployeeOrder>;
};

/** DeleteEmployer result with filterable data and count of affected entries */
export type DeleteEmployerPayload = {
  __typename?: 'DeleteEmployerPayload';
  /** Count of deleted Employer entities */
  count: Scalars['Int']['output'];
  employer: EmployerQueryResult;
  msg?: Maybe<Scalars['String']['output']>;
};


/** DeleteEmployer result with filterable data and count of affected entries */
export type DeleteEmployerPayloadEmployerArgs = {
  filter?: InputMaybe<EmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployerOrder>;
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

/** DeleteUnverifiedEmployee result with filterable data and count of affected entries */
export type DeleteUnverifiedEmployeePayload = {
  __typename?: 'DeleteUnverifiedEmployeePayload';
  /** Count of deleted UnverifiedEmployee entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  unverifiedEmployee: UnverifiedEmployeeQueryResult;
};


/** DeleteUnverifiedEmployee result with filterable data and count of affected entries */
export type DeleteUnverifiedEmployeePayloadUnverifiedEmployeeArgs = {
  filter?: InputMaybe<UnverifiedEmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployeeOrder>;
};

/** DeleteUnverifiedEmployer result with filterable data and count of affected entries */
export type DeleteUnverifiedEmployerPayload = {
  __typename?: 'DeleteUnverifiedEmployerPayload';
  /** Count of deleted UnverifiedEmployer entities */
  count: Scalars['Int']['output'];
  msg?: Maybe<Scalars['String']['output']>;
  unverifiedEmployer: UnverifiedEmployerQueryResult;
};


/** DeleteUnverifiedEmployer result with filterable data and count of affected entries */
export type DeleteUnverifiedEmployerPayloadUnverifiedEmployerArgs = {
  filter?: InputMaybe<UnverifiedEmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployerOrder>;
};

export type Dummy = {
  __typename?: 'Dummy';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Employee = {
  __typename?: 'Employee';
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  profilepicture?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type EmployeeAnalytics = {
  __typename?: 'EmployeeAnalytics';
  applied_jobs_education_level: JobEducationLevelAnalytics;
  applied_jobs_experience: JobExperienceAnalytics;
  applied_jobs_seniority: JobSeniorityLevelAnalytics;
  job_application_status: ApplicationAnalytics;
};

/**
 * Filter input selection for Employee
 * Can be used f.e.: by queryEmployee
 */
export type EmployeeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmployeeFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmployeeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmployeeFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  profilepicture?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  Employee
 * Can be used f.e.: by queryEmployee
 */
export enum EmployeeGroup {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  Profilepicture = 'profilepicture',
  UpdatedAt = 'updatedAt'
}

/** Employee Input value to add new Employee */
export type EmployeeInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  profilepicture?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeLogin = {
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order Employee by asc or desc  */
export type EmployeeOrder = {
  asc?: InputMaybe<EmployeeOrderable>;
  desc?: InputMaybe<EmployeeOrderable>;
};

/**
 * for Employee a enum of all orderable entities
 * can be used f.e.: queryEmployee
 */
export enum EmployeeOrderable {
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  Profilepicture = 'profilepicture'
}

/** Employee Patch value all values are optional to update Employee entities */
export type EmployeePatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  profilepicture?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeProfile = {
  __typename?: 'EmployeeProfile';
  analytics: EmployeeAnalytics;
  applications?: Maybe<Array<ApplicationProfile>>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  profilepicture?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};


export type EmployeeProfileApplicationsArgs = {
  status?: InputMaybe<ApplicationStatus>;
};

/** Employee result */
export type EmployeeQueryResult = {
  __typename?: 'EmployeeQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Employee>;
  totalCount: Scalars['Int']['output'];
};

export type Employer = {
  __typename?: 'Employer';
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

export type EmployerAnalytics = {
  __typename?: 'EmployerAnalytics';
  applications_status: ApplicationAnalytics;
  jobs_approval: JobApprovalAnalytics;
  jobs_education_level: JobEducationLevelAnalytics;
  jobs_experience: JobExperienceAnalytics;
  jobs_seniority: JobSeniorityLevelAnalytics;
  unapprovedjobs_education_level: JobEducationLevelAnalytics;
  unapprovedjobs_experience: JobExperienceAnalytics;
  unapprovedjobs_seniority: JobSeniorityLevelAnalytics;
};

/**
 * Filter input selection for Employer
 * Can be used f.e.: by queryEmployer
 */
export type EmployerFiltersInput = {
  Website?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EmployerFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmployerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmployerFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  Employer
 * Can be used f.e.: by queryEmployer
 */
export enum EmployerGroup {
  Website = 'Website',
  Badge = 'badge',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  UpdatedAt = 'updatedAt'
}

/** Employer Input value to add new Employer */
export type EmployerInput = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type EmployerLogin = {
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order Employer by asc or desc  */
export type EmployerOrder = {
  asc?: InputMaybe<EmployerOrderable>;
  desc?: InputMaybe<EmployerOrderable>;
};

/**
 * for Employer a enum of all orderable entities
 * can be used f.e.: queryEmployer
 */
export enum EmployerOrderable {
  Website = 'Website',
  Badge = 'badge',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number'
}

/** Employer Patch value all values are optional to update Employer entities */
export type EmployerPatch = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type EmployerProfile = {
  __typename?: 'EmployerProfile';
  Website?: Maybe<Scalars['String']['output']>;
  analytics: EmployerAnalytics;
  badge?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  id: Scalars['Int']['output'];
  jobs?: Maybe<Array<Maybe<JobProfile>>>;
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  unapprovedJobs?: Maybe<Array<Maybe<UnapprovedJobProfile>>>;
  updatedAt: Scalars['Time']['output'];
};

/** Employer result */
export type EmployerQueryResult = {
  __typename?: 'EmployerQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Employer>;
  totalCount: Scalars['Int']['output'];
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
  employerID?: Maybe<Scalars['Int']['output']>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  jobUrl?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxSalary?: Maybe<Scalars['Int']['output']>;
  minSalary?: Maybe<Scalars['Int']['output']>;
  requirements?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type JobApprovalAnalytics = {
  __typename?: 'JobApprovalAnalytics';
  approvedjobs: Scalars['Int']['output'];
  unapprovedJobs: Scalars['Int']['output'];
};

export type JobEducationLevelAnalytics = {
  __typename?: 'JobEducationLevelAnalytics';
  bachelors_degree: Scalars['Int']['output'];
  diploma: Scalars['Int']['output'];
  masters_degree: Scalars['Int']['output'];
  phd: Scalars['Int']['output'];
  unspecified: Scalars['Int']['output'];
};

export type JobExperienceAnalytics = {
  __typename?: 'JobExperienceAnalytics';
  below_one: Scalars['Int']['output'];
  five_to_seven: Scalars['Int']['output'];
  nine_and_above: Scalars['Int']['output'];
  one_to_three: Scalars['Int']['output'];
  seven_to_nine: Scalars['Int']['output'];
  three_to_five: Scalars['Int']['output'];
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
  employerID?: InputMaybe<IntFilterInput>;
  experience?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  industry?: InputMaybe<StringFilterInput>;
  jobUrl?: InputMaybe<StringFilterInput>;
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
  EmployerId = 'employerID',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  JobUrl = 'jobUrl',
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
  employerID?: InputMaybe<Scalars['Int']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  jobUrl?: InputMaybe<Scalars['String']['input']>;
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
  EmployerId = 'employerID',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  JobUrl = 'jobUrl',
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
  employerID?: InputMaybe<Scalars['Int']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  jobUrl?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type JobProfile = {
  __typename?: 'JobProfile';
  applications?: Maybe<Array<ApplicationProfile>>;
  createdAt: Scalars['Time']['output'];
  deadline?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  description: Scalars['String']['output'];
  educationLevel?: Maybe<Scalars['String']['output']>;
  employer?: Maybe<EmployerProfile>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  jobUrl?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxSalary?: Maybe<Scalars['Int']['output']>;
  minSalary?: Maybe<Scalars['Int']['output']>;
  posted: Scalars['String']['output'];
  requirements?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};


export type JobProfileApplicationsArgs = {
  status?: InputMaybe<ApplicationStatus>;
};

/** Job result */
export type JobQueryResult = {
  __typename?: 'JobQueryResult';
  count: Scalars['Int']['output'];
  data: Array<Job>;
  totalCount: Scalars['Int']['output'];
};

export type JobSeniorityLevelAnalytics = {
  __typename?: 'JobSeniorityLevelAnalytics';
  beginner: Scalars['Int']['output'];
  intermediate: Scalars['Int']['output'];
  senior: Scalars['Int']['output'];
  unspecified: Scalars['Int']['output'];
};

export type JobsFilterParameters = {
  educationLevel?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add new Admin */
  addAdmin?: Maybe<AddAdminPayload>;
  /** Add new Application */
  addApplication?: Maybe<AddApplicationPayload>;
  /** Add new Employee */
  addEmployee?: Maybe<AddEmployeePayload>;
  /** Add new Employer */
  addEmployer?: Maybe<AddEmployerPayload>;
  /** Add new Job */
  addJob?: Maybe<AddJobPayload>;
  /** Add new UnapprovedJob */
  addUnapprovedJob?: Maybe<AddUnapprovedJobPayload>;
  /** Add new UnverifiedAdmin */
  addUnverifiedAdmin?: Maybe<AddUnverifiedAdminPayload>;
  /** Add new UnverifiedEmployee */
  addUnverifiedEmployee?: Maybe<AddUnverifiedEmployeePayload>;
  /** Add new UnverifiedEmployer */
  addUnverifiedEmployer?: Maybe<AddUnverifiedEmployerPayload>;
  adminLogin?: Maybe<Scalars['String']['output']>;
  approveJob: JobProfile;
  createAdmin?: Maybe<UnverifiedAdmin>;
  createApplication: ApplicationProfile;
  createDummy?: Maybe<Dummy>;
  createEmployee?: Maybe<UnverifiedEmployee>;
  createEmployer?: Maybe<UnverifiedEmployer>;
  createJob: JobProfile;
  createUnapprovedJob: UnapprovedJobProfile;
  /** delete Admin filtered by selection and delete all matched values */
  deleteAdmin?: Maybe<DeleteAdminPayload>;
  /** delete Application filtered by selection and delete all matched values */
  deleteApplication?: Maybe<DeleteApplicationPayload>;
  /** delete Employee filtered by selection and delete all matched values */
  deleteEmployee?: Maybe<DeleteEmployeePayload>;
  /** delete Employer filtered by selection and delete all matched values */
  deleteEmployer?: Maybe<DeleteEmployerPayload>;
  /** delete Job filtered by selection and delete all matched values */
  deleteJob?: Maybe<DeleteJobPayload>;
  /** delete UnapprovedJob filtered by selection and delete all matched values */
  deleteUnapprovedJob?: Maybe<DeleteUnapprovedJobPayload>;
  /** delete UnverifiedAdmin filtered by selection and delete all matched values */
  deleteUnverifiedAdmin?: Maybe<DeleteUnverifiedAdminPayload>;
  /** delete UnverifiedEmployee filtered by selection and delete all matched values */
  deleteUnverifiedEmployee?: Maybe<DeleteUnverifiedEmployeePayload>;
  /** delete UnverifiedEmployer filtered by selection and delete all matched values */
  deleteUnverifiedEmployer?: Maybe<DeleteUnverifiedEmployerPayload>;
  editApplication: ApplicationProfile;
  editEmployeeProfile?: Maybe<EmployeeProfile>;
  editEmployerProfile?: Maybe<EmployerProfile>;
  editJob: JobProfile;
  editUnapprovedJob: UnapprovedJobProfile;
  employeeLogin?: Maybe<Scalars['String']['output']>;
  employerLogin?: Maybe<Scalars['String']['output']>;
  forgotAdminPassword?: Maybe<SendCodeStatus>;
  forgotEmployeePassword?: Maybe<SendCodeStatus>;
  forgotEmployerPassword?: Maybe<SendCodeStatus>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  removeJob: JobProfile;
  removeUnapprovedJob: UnapprovedJobProfile;
  requestAdminPasswordReset?: Maybe<Scalars['String']['output']>;
  requestEmployeePasswordReset?: Maybe<Scalars['String']['output']>;
  requestEmployerPasswordReset?: Maybe<Scalars['String']['output']>;
  resetAdminPassword?: Maybe<Admin>;
  resetEmployeePassword?: Maybe<Employee>;
  resetEmployerPassword?: Maybe<Employer>;
  sendCode?: Maybe<SendCodeStatus>;
  /** update Admin filtered by selection and update all matched values */
  updateAdmin?: Maybe<UpdateAdminPayload>;
  /** update Application filtered by selection and update all matched values */
  updateApplication?: Maybe<UpdateApplicationPayload>;
  /** update Employee filtered by selection and update all matched values */
  updateEmployee?: Maybe<UpdateEmployeePayload>;
  /** update Employer filtered by selection and update all matched values */
  updateEmployer?: Maybe<UpdateEmployerPayload>;
  /** update Job filtered by selection and update all matched values */
  updateJob?: Maybe<UpdateJobPayload>;
  /** update UnapprovedJob filtered by selection and update all matched values */
  updateUnapprovedJob?: Maybe<UpdateUnapprovedJobPayload>;
  /** update UnverifiedAdmin filtered by selection and update all matched values */
  updateUnverifiedAdmin?: Maybe<UpdateUnverifiedAdminPayload>;
  /** update UnverifiedEmployee filtered by selection and update all matched values */
  updateUnverifiedEmployee?: Maybe<UpdateUnverifiedEmployeePayload>;
  /** update UnverifiedEmployer filtered by selection and update all matched values */
  updateUnverifiedEmployer?: Maybe<UpdateUnverifiedEmployerPayload>;
  verifyAdmin?: Maybe<Admin>;
  verifyEmployee?: Maybe<Employee>;
  verifyEmployer?: Maybe<Employer>;
};


export type MutationAddAdminArgs = {
  input: Array<AdminInput>;
};


export type MutationAddApplicationArgs = {
  input: Array<ApplicationInput>;
};


export type MutationAddEmployeeArgs = {
  input: Array<EmployeeInput>;
};


export type MutationAddEmployerArgs = {
  input: Array<EmployerInput>;
};


export type MutationAddJobArgs = {
  input: Array<JobInput>;
};


export type MutationAddUnapprovedJobArgs = {
  input: Array<UnapprovedJobInput>;
};


export type MutationAddUnverifiedAdminArgs = {
  input: Array<UnverifiedAdminInput>;
};


export type MutationAddUnverifiedEmployeeArgs = {
  input: Array<UnverifiedEmployeeInput>;
};


export type MutationAddUnverifiedEmployerArgs = {
  input: Array<UnverifiedEmployerInput>;
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


export type MutationCreateApplicationArgs = {
  input: NewApplication;
};


export type MutationCreateDummyArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateEmployeeArgs = {
  input: NewEmployee;
};


export type MutationCreateEmployerArgs = {
  input: NewEmployer;
};


export type MutationCreateJobArgs = {
  input: NewJob;
};


export type MutationCreateUnapprovedJobArgs = {
  input: NewJob;
};


export type MutationDeleteAdminArgs = {
  filter: AdminFiltersInput;
};


export type MutationDeleteApplicationArgs = {
  filter: ApplicationFiltersInput;
};


export type MutationDeleteEmployeeArgs = {
  filter: EmployeeFiltersInput;
};


export type MutationDeleteEmployerArgs = {
  filter: EmployerFiltersInput;
};


export type MutationDeleteJobArgs = {
  filter: JobFiltersInput;
};


export type MutationDeleteUnapprovedJobArgs = {
  filter: UnapprovedJobFiltersInput;
};


export type MutationDeleteUnverifiedAdminArgs = {
  filter: UnverifiedAdminFiltersInput;
};


export type MutationDeleteUnverifiedEmployeeArgs = {
  filter: UnverifiedEmployeeFiltersInput;
};


export type MutationDeleteUnverifiedEmployerArgs = {
  filter: UnverifiedEmployerFiltersInput;
};


export type MutationEditApplicationArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<NewApplication>;
  status?: InputMaybe<ApplicationStatus>;
};


export type MutationEditEmployeeProfileArgs = {
  input: UpdateEmployee;
};


export type MutationEditEmployerProfileArgs = {
  input: UpdatedEmployer;
};


export type MutationEditJobArgs = {
  id: Scalars['Int']['input'];
  input: NewJob;
};


export type MutationEditUnapprovedJobArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<NewJob>;
};


export type MutationEmployeeLoginArgs = {
  input: EmployeeLogin;
};


export type MutationEmployerLoginArgs = {
  input: EmployerLogin;
};


export type MutationForgotAdminPasswordArgs = {
  phone_number: Scalars['String']['input'];
};


export type MutationForgotEmployeePasswordArgs = {
  phone_number: Scalars['String']['input'];
};


export type MutationForgotEmployerPasswordArgs = {
  phone_number: Scalars['String']['input'];
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


export type MutationRequestEmployeePasswordResetArgs = {
  input?: InputMaybe<Verificationinfo>;
};


export type MutationRequestEmployerPasswordResetArgs = {
  input?: InputMaybe<Verificationinfo>;
};


export type MutationResetAdminPasswordArgs = {
  new_password: Scalars['String']['input'];
};


export type MutationResetEmployeePasswordArgs = {
  new_password: Scalars['String']['input'];
};


export type MutationResetEmployerPasswordArgs = {
  new_password: Scalars['String']['input'];
};


export type MutationSendCodeArgs = {
  phone_number: Scalars['String']['input'];
};


export type MutationUpdateAdminArgs = {
  input: UpdateAdminInput;
};


export type MutationUpdateApplicationArgs = {
  input: UpdateApplicationInput;
};


export type MutationUpdateEmployeeArgs = {
  input: UpdateEmployeeInput;
};


export type MutationUpdateEmployerArgs = {
  input: UpdateEmployerInput;
};


export type MutationUpdateJobArgs = {
  input: UpdateJobInput;
};


export type MutationUpdateUnapprovedJobArgs = {
  input: UpdateUnapprovedJobInput;
};


export type MutationUpdateUnverifiedAdminArgs = {
  input: UpdateUnverifiedAdminInput;
};


export type MutationUpdateUnverifiedEmployeeArgs = {
  input: UpdateUnverifiedEmployeeInput;
};


export type MutationUpdateUnverifiedEmployerArgs = {
  input: UpdateUnverifiedEmployerInput;
};


export type MutationVerifyAdminArgs = {
  input: Verificationinfo;
};


export type MutationVerifyEmployeeArgs = {
  input: Verificationinfo;
};


export type MutationVerifyEmployerArgs = {
  input: Verificationinfo;
};

export type NewAdmin = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type NewApplication = {
  coverLetterUrl: Scalars['String']['input'];
  educationLevel: Scalars['String']['input'];
  experience: Scalars['Int']['input'];
  jobID: Scalars['Int']['input'];
  resumeeUrl: Scalars['String']['input'];
};

export type NewEmployee = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  profilepicture?: InputMaybe<Scalars['String']['input']>;
};

export type NewEmployer = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
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
  jobUrl?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type PhoneNumberExists = {
  __typename?: 'PhoneNumberExists';
  unverified: Scalars['Boolean']['output'];
  verified: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminPhoneNumberExists: PhoneNumberExists;
  employeePhoneNumberExists: PhoneNumberExists;
  employerPhoneNumberExists: PhoneNumberExists;
  findApplication: ApplicationProfile;
  findEmployer: EmployerProfile;
  findJob: JobProfile;
  findUnapprovedJob: UnapprovedJobProfile;
  /** return one Admin selected by PrimaryKey(s) */
  getAdmin?: Maybe<Admin>;
  getAnalytics: Analytics;
  /** return one Application selected by PrimaryKey(s) */
  getApplication?: Maybe<Application>;
  getDummy?: Maybe<Dummy>;
  getDummys: Array<Maybe<Dummy>>;
  /** return one Employee selected by PrimaryKey(s) */
  getEmployee?: Maybe<Employee>;
  getEmployeeProfile?: Maybe<EmployeeProfile>;
  getEmployeesProfile?: Maybe<Array<EmployeeProfile>>;
  /** return one Employer selected by PrimaryKey(s) */
  getEmployer?: Maybe<Employer>;
  getEmployerProfile?: Maybe<EmployerProfile>;
  getEmployersProfile?: Maybe<Array<EmployerProfile>>;
  /** return one Job selected by PrimaryKey(s) */
  getJob?: Maybe<Job>;
  getJobs?: Maybe<Array<JobProfile>>;
  /** return one UnapprovedJob selected by PrimaryKey(s) */
  getUnapprovedJob?: Maybe<UnapprovedJob>;
  getUnapprovedJobs?: Maybe<Array<UnapprovedJobProfile>>;
  /** return one UnverifiedAdmin selected by PrimaryKey(s) */
  getUnverifiedAdmin?: Maybe<UnverifiedAdmin>;
  /** return one UnverifiedEmployee selected by PrimaryKey(s) */
  getUnverifiedEmployee?: Maybe<UnverifiedEmployee>;
  /** return one UnverifiedEmployer selected by PrimaryKey(s) */
  getUnverifiedEmployer?: Maybe<UnverifiedEmployer>;
  /** return a list of  Admin filterable, pageination, orderbale, groupable ... */
  queryAdmin?: Maybe<AdminQueryResult>;
  /** return a list of  Application filterable, pageination, orderbale, groupable ... */
  queryApplication?: Maybe<ApplicationQueryResult>;
  /** return a list of  Employee filterable, pageination, orderbale, groupable ... */
  queryEmployee?: Maybe<EmployeeQueryResult>;
  /** return a list of  Employer filterable, pageination, orderbale, groupable ... */
  queryEmployer?: Maybe<EmployerQueryResult>;
  /** return a list of  Job filterable, pageination, orderbale, groupable ... */
  queryJob?: Maybe<JobQueryResult>;
  /** return a list of  UnapprovedJob filterable, pageination, orderbale, groupable ... */
  queryUnapprovedJob?: Maybe<UnapprovedJobQueryResult>;
  /** return a list of  UnverifiedAdmin filterable, pageination, orderbale, groupable ... */
  queryUnverifiedAdmin?: Maybe<UnverifiedAdminQueryResult>;
  /** return a list of  UnverifiedEmployee filterable, pageination, orderbale, groupable ... */
  queryUnverifiedEmployee?: Maybe<UnverifiedEmployeeQueryResult>;
  /** return a list of  UnverifiedEmployer filterable, pageination, orderbale, groupable ... */
  queryUnverifiedEmployer?: Maybe<UnverifiedEmployerQueryResult>;
};


export type QueryAdminPhoneNumberExistsArgs = {
  phone_number: Scalars['String']['input'];
};


export type QueryEmployeePhoneNumberExistsArgs = {
  phone_number: Scalars['String']['input'];
};


export type QueryEmployerPhoneNumberExistsArgs = {
  phone_number: Scalars['String']['input'];
};


export type QueryFindApplicationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindEmployerArgs = {
  id: Scalars['Int']['input'];
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


export type QueryGetApplicationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetDummyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEmployeeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetEmployerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetJobsArgs = {
  filterparameters?: InputMaybe<JobsFilterParameters>;
};


export type QueryGetUnapprovedJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnapprovedJobsArgs = {
  filterparameters?: InputMaybe<JobsFilterParameters>;
};


export type QueryGetUnverifiedAdminArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnverifiedEmployeeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnverifiedEmployerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryQueryAdminArgs = {
  filter?: InputMaybe<AdminFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<AdminGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<AdminOrder>;
};


export type QueryQueryApplicationArgs = {
  filter?: InputMaybe<ApplicationFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<ApplicationGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ApplicationOrder>;
};


export type QueryQueryEmployeeArgs = {
  filter?: InputMaybe<EmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployeeOrder>;
};


export type QueryQueryEmployerArgs = {
  filter?: InputMaybe<EmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployerOrder>;
};


export type QueryQueryJobArgs = {
  filter?: InputMaybe<JobFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<JobGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
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


export type QueryQueryUnverifiedEmployeeArgs = {
  filter?: InputMaybe<UnverifiedEmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployeeOrder>;
};


export type QueryQueryUnverifiedEmployerArgs = {
  filter?: InputMaybe<UnverifiedEmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployerOrder>;
};

export type RefreshTokenInput = {
  Token: Scalars['String']['input'];
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
  employerID?: Maybe<Scalars['Int']['output']>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  jobUrl?: Maybe<Scalars['String']['output']>;
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
  employerID?: InputMaybe<IntFilterInput>;
  experience?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  industry?: InputMaybe<StringFilterInput>;
  jobUrl?: InputMaybe<StringFilterInput>;
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
  EmployerId = 'employerID',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  JobUrl = 'jobUrl',
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
  employerID?: InputMaybe<Scalars['Int']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  jobUrl?: InputMaybe<Scalars['String']['input']>;
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
  EmployerId = 'employerID',
  Experience = 'experience',
  Id = 'id',
  Industry = 'industry',
  JobUrl = 'jobUrl',
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
  employerID?: InputMaybe<Scalars['Int']['input']>;
  experience?: InputMaybe<Scalars['Int']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  jobUrl?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  maxSalary?: InputMaybe<Scalars['Int']['input']>;
  minSalary?: InputMaybe<Scalars['Int']['input']>;
  requirements?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UnapprovedJobProfile = {
  __typename?: 'UnapprovedJobProfile';
  createdAt: Scalars['Time']['output'];
  deadline?: Maybe<Scalars['Time']['output']>;
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  description: Scalars['String']['output'];
  educationLevel?: Maybe<Scalars['String']['output']>;
  employer?: Maybe<EmployerProfile>;
  experience?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  jobUrl?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  maxSalary?: Maybe<Scalars['Int']['output']>;
  minSalary?: Maybe<Scalars['Int']['output']>;
  posted: Scalars['String']['output'];
  requirements?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
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

export type UnverifiedEmployee = {
  __typename?: 'UnverifiedEmployee';
  createdAt: Scalars['Time']['output'];
  deletedAt?: Maybe<Scalars['SoftDelete']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  profilepicture?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

/**
 * Filter input selection for UnverifiedEmployee
 * Can be used f.e.: by queryUnverifiedEmployee
 */
export type UnverifiedEmployeeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UnverifiedEmployeeFiltersInput>>>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UnverifiedEmployeeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UnverifiedEmployeeFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  profilepicture?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  UnverifiedEmployee
 * Can be used f.e.: by queryUnverifiedEmployee
 */
export enum UnverifiedEmployeeGroup {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  Profilepicture = 'profilepicture',
  UpdatedAt = 'updatedAt'
}

/** UnverifiedEmployee Input value to add new UnverifiedEmployee */
export type UnverifiedEmployeeInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  profilepicture?: InputMaybe<Scalars['String']['input']>;
};

/** Order UnverifiedEmployee by asc or desc  */
export type UnverifiedEmployeeOrder = {
  asc?: InputMaybe<UnverifiedEmployeeOrderable>;
  desc?: InputMaybe<UnverifiedEmployeeOrderable>;
};

/**
 * for UnverifiedEmployee a enum of all orderable entities
 * can be used f.e.: queryUnverifiedEmployee
 */
export enum UnverifiedEmployeeOrderable {
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  Profilepicture = 'profilepicture'
}

/** UnverifiedEmployee Patch value all values are optional to update UnverifiedEmployee entities */
export type UnverifiedEmployeePatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  profilepicture?: InputMaybe<Scalars['String']['input']>;
};

/** UnverifiedEmployee result */
export type UnverifiedEmployeeQueryResult = {
  __typename?: 'UnverifiedEmployeeQueryResult';
  count: Scalars['Int']['output'];
  data: Array<UnverifiedEmployee>;
  totalCount: Scalars['Int']['output'];
};

export type UnverifiedEmployer = {
  __typename?: 'UnverifiedEmployer';
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
 * Filter input selection for UnverifiedEmployer
 * Can be used f.e.: by queryUnverifiedEmployer
 */
export type UnverifiedEmployerFiltersInput = {
  Website?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UnverifiedEmployerFiltersInput>>>;
  badge?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<TimeFilterInput>;
  id?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UnverifiedEmployerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UnverifiedEmployerFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<TimeFilterInput>;
};

/**
 * Groupable data for  UnverifiedEmployer
 * Can be used f.e.: by queryUnverifiedEmployer
 */
export enum UnverifiedEmployerGroup {
  Website = 'Website',
  Badge = 'badge',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  UpdatedAt = 'updatedAt'
}

/** UnverifiedEmployer Input value to add new UnverifiedEmployer */
export type UnverifiedEmployerInput = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

/** Order UnverifiedEmployer by asc or desc  */
export type UnverifiedEmployerOrder = {
  asc?: InputMaybe<UnverifiedEmployerOrderable>;
  desc?: InputMaybe<UnverifiedEmployerOrderable>;
};

/**
 * for UnverifiedEmployer a enum of all orderable entities
 * can be used f.e.: queryUnverifiedEmployer
 */
export enum UnverifiedEmployerOrderable {
  Website = 'Website',
  Badge = 'badge',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phone_number'
}

/** UnverifiedEmployer Patch value all values are optional to update UnverifiedEmployer entities */
export type UnverifiedEmployerPatch = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

/** UnverifiedEmployer result */
export type UnverifiedEmployerQueryResult = {
  __typename?: 'UnverifiedEmployerQueryResult';
  count: Scalars['Int']['output'];
  data: Array<UnverifiedEmployer>;
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

/** Update rules for Application multiupdates simple possible by global filtervalue */
export type UpdateApplicationInput = {
  filter: ApplicationFiltersInput;
  set: ApplicationPatch;
};

/** UpdateApplication result with filterable data and affected rows */
export type UpdateApplicationPayload = {
  __typename?: 'UpdateApplicationPayload';
  affected: Array<Application>;
  application: ApplicationQueryResult;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
};


/** UpdateApplication result with filterable data and affected rows */
export type UpdateApplicationPayloadApplicationArgs = {
  filter?: InputMaybe<ApplicationFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<ApplicationGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ApplicationOrder>;
};

export type UpdateEmployee = {
  name: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  profilepicture?: InputMaybe<Scalars['String']['input']>;
};

/** Update rules for Employee multiupdates simple possible by global filtervalue */
export type UpdateEmployeeInput = {
  filter: EmployeeFiltersInput;
  set: EmployeePatch;
};

/** UpdateEmployee result with filterable data and affected rows */
export type UpdateEmployeePayload = {
  __typename?: 'UpdateEmployeePayload';
  affected: Array<Employee>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  employee: EmployeeQueryResult;
};


/** UpdateEmployee result with filterable data and affected rows */
export type UpdateEmployeePayloadEmployeeArgs = {
  filter?: InputMaybe<EmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployeeOrder>;
};

/** Update rules for Employer multiupdates simple possible by global filtervalue */
export type UpdateEmployerInput = {
  filter: EmployerFiltersInput;
  set: EmployerPatch;
};

/** UpdateEmployer result with filterable data and affected rows */
export type UpdateEmployerPayload = {
  __typename?: 'UpdateEmployerPayload';
  affected: Array<Employer>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  employer: EmployerQueryResult;
};


/** UpdateEmployer result with filterable data and affected rows */
export type UpdateEmployerPayloadEmployerArgs = {
  filter?: InputMaybe<EmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<EmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<EmployerOrder>;
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

/** Update rules for UnverifiedEmployee multiupdates simple possible by global filtervalue */
export type UpdateUnverifiedEmployeeInput = {
  filter: UnverifiedEmployeeFiltersInput;
  set: UnverifiedEmployeePatch;
};

/** UpdateUnverifiedEmployee result with filterable data and affected rows */
export type UpdateUnverifiedEmployeePayload = {
  __typename?: 'UpdateUnverifiedEmployeePayload';
  affected: Array<UnverifiedEmployee>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  unverifiedEmployee: UnverifiedEmployeeQueryResult;
};


/** UpdateUnverifiedEmployee result with filterable data and affected rows */
export type UpdateUnverifiedEmployeePayloadUnverifiedEmployeeArgs = {
  filter?: InputMaybe<UnverifiedEmployeeFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployeeGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployeeOrder>;
};

/** Update rules for UnverifiedEmployer multiupdates simple possible by global filtervalue */
export type UpdateUnverifiedEmployerInput = {
  filter: UnverifiedEmployerFiltersInput;
  set: UnverifiedEmployerPatch;
};

/** UpdateUnverifiedEmployer result with filterable data and affected rows */
export type UpdateUnverifiedEmployerPayload = {
  __typename?: 'UpdateUnverifiedEmployerPayload';
  affected: Array<UnverifiedEmployer>;
  /** Count of affected updates */
  count: Scalars['Int']['output'];
  unverifiedEmployer: UnverifiedEmployerQueryResult;
};


/** UpdateUnverifiedEmployer result with filterable data and affected rows */
export type UpdateUnverifiedEmployerPayloadUnverifiedEmployerArgs = {
  filter?: InputMaybe<UnverifiedEmployerFiltersInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<UnverifiedEmployerGroup>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UnverifiedEmployerOrder>;
};

export type UpdatedEmployer = {
  Website?: InputMaybe<Scalars['String']['input']>;
  badge?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
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

export type RemoveJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveJobMutation = { __typename?: 'Mutation', removeJob: { __typename?: 'JobProfile', id: number } };

export type FindAdminJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindAdminJobQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null, posted: string, employer?: { __typename?: 'EmployerProfile', name: string, Website?: string | null } | null } };

export type GetAnalyticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnalyticsQuery = { __typename?: 'Query', getAnalytics: { __typename?: 'Analytics', jobs_approval: { __typename?: 'JobApprovalAnalytics', approvedjobs: number, unapprovedJobs: number }, applications_status: { __typename?: 'ApplicationAnalytics', total: number, accepted: number, rejected: number, pending: number }, jobs_education_level: { __typename?: 'JobEducationLevelAnalytics', diploma: number, bachelors_degree: number, masters_degree: number, phd: number, unspecified: number }, unapprovedjobs_education_level: { __typename?: 'JobEducationLevelAnalytics', diploma: number, bachelors_degree: number, masters_degree: number, phd: number, unspecified: number }, jobs_seniority: { __typename?: 'JobSeniorityLevelAnalytics', beginner: number, intermediate: number, senior: number, unspecified: number }, unapprovedjobs_seniority: { __typename?: 'JobSeniorityLevelAnalytics', beginner: number, intermediate: number, senior: number, unspecified: number }, jobs_experience: { __typename?: 'JobExperienceAnalytics', below_one: number, one_to_three: number, three_to_five: number, five_to_seven: number, seven_to_nine: number, nine_and_above: number }, unapprovedjobs_experience: { __typename?: 'JobExperienceAnalytics', below_one: number, one_to_three: number, three_to_five: number, five_to_seven: number, seven_to_nine: number, nine_and_above: number } } };

export type GetEmployersProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployersProfileQuery = { __typename?: 'Query', getEmployersProfile?: Array<{ __typename?: 'EmployerProfile', id: number, name: string, phone_number: string }> | null };

export type FindAdminUnapprovedJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindAdminUnapprovedJobQuery = { __typename?: 'Query', findUnapprovedJob: { __typename?: 'UnapprovedJobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null, posted: string, employer?: { __typename?: 'EmployerProfile', name: string } | null } };

export type ApproveJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ApproveJobMutation = { __typename?: 'Mutation', approveJob: { __typename?: 'JobProfile', id: number } };

export type RemoveUnapprovedJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveUnapprovedJobMutation = { __typename?: 'Mutation', removeUnapprovedJob: { __typename?: 'UnapprovedJobProfile', id: number } };

export type GetUnapprovedJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUnapprovedJobsQuery = { __typename?: 'Query', getUnapprovedJobs?: Array<{ __typename?: 'UnapprovedJobProfile', id: number, title: string, industry?: string | null, employer?: { __typename?: 'EmployerProfile', name: string } | null }> | null };

export type CreateJobMutationVariables = Exact<{
  newjob: NewJob;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'JobProfile', id: number } };

export type FindEemployerEditJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindEemployerEditJobQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null } };

export type EditJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  newjob: NewJob;
}>;


export type EditJobMutation = { __typename?: 'Mutation', editJob: { __typename?: 'JobProfile', id: number } };

export type FindUnapprovedJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindUnapprovedJobQuery = { __typename?: 'Query', findUnapprovedJob: { __typename?: 'UnapprovedJobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null } };

export type EditUnapprovedJobMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  newjob: NewJob;
}>;


export type EditUnapprovedJobMutation = { __typename?: 'Mutation', editUnapprovedJob: { __typename?: 'UnapprovedJobProfile', id: number } };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', getJobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, industry?: string | null, employer?: { __typename?: 'EmployerProfile', name: string } | null }> | null };

export type ResetEmployeePasswordMutationVariables = Exact<{
  new_password: Scalars['String']['input'];
}>;


export type ResetEmployeePasswordMutation = { __typename?: 'Mutation', resetEmployeePassword?: { __typename?: 'Employee', id: number } | null };

export type EmployeeLoginMutationVariables = Exact<{
  employeelogin: EmployeeLogin;
}>;


export type EmployeeLoginMutation = { __typename?: 'Mutation', employeeLogin?: string | null };

export type ForgotEmployeePasswordMutationVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type ForgotEmployeePasswordMutation = { __typename?: 'Mutation', forgotEmployeePassword?: { __typename?: 'SendCodeStatus', phone_number: string, success: boolean } | null };

export type RequestEmployeePasswordResetMutationVariables = Exact<{
  verificationinfo: Verificationinfo;
}>;


export type RequestEmployeePasswordResetMutation = { __typename?: 'Mutation', requestEmployeePasswordReset?: string | null };

export type CreateEmployeeMutationVariables = Exact<{
  newemployee: NewEmployee;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee?: { __typename?: 'UnverifiedEmployee', id: number } | null };

export type CheckemployeephonenumberQueryVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type CheckemployeephonenumberQuery = { __typename?: 'Query', employeePhoneNumberExists: { __typename?: 'PhoneNumberExists', verified: boolean, unverified: boolean } };

export type VerifyEmployeeMutationVariables = Exact<{
  verificationinfo: Verificationinfo;
}>;


export type VerifyEmployeeMutation = { __typename?: 'Mutation', verifyEmployee?: { __typename?: 'Employee', id: number } | null };

export type GetEmployeeProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeProfileQuery = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', id: number } | null };

export type CreateApplicationMutationVariables = Exact<{
  newapplication: NewApplication;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', createApplication: { __typename?: 'ApplicationProfile', id: number } };

export type FindEmployeeJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindEmployeeJobQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, posted: string, educationLevel?: string | null, experience?: number | null, employer?: { __typename?: 'EmployerProfile', name: string, Website?: string | null } | null } };

export type GetEmployeeAnalyticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeAnalyticsQuery = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', analytics: { __typename?: 'EmployeeAnalytics', job_application_status: { __typename?: 'ApplicationAnalytics', total: number, accepted: number, rejected: number, pending: number }, applied_jobs_education_level: { __typename?: 'JobEducationLevelAnalytics', diploma: number, bachelors_degree: number, masters_degree: number, phd: number, unspecified: number }, applied_jobs_seniority: { __typename?: 'JobSeniorityLevelAnalytics', beginner: number, intermediate: number, senior: number, unspecified: number }, applied_jobs_experience: { __typename?: 'JobExperienceAnalytics', below_one: number, one_to_three: number, three_to_five: number, five_to_seven: number, seven_to_nine: number, nine_and_above: number } } } | null };

export type FindApplicationQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindApplicationQuery = { __typename?: 'Query', findApplication: { __typename?: 'ApplicationProfile', id: number, experience: number, educationLevel: string, coverLetterUrl: string, resumeeUrl: string, status: ApplicationStatus, job: { __typename?: 'JobProfile', id: number, title: string, employer?: { __typename?: 'EmployerProfile', id: number, name: string, Website?: string | null } | null } } };

export type GetEmployeeAcceptedApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeAcceptedApplicationsQuery = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', applications?: Array<{ __typename?: 'ApplicationProfile', id: number, job: { __typename?: 'JobProfile', title: string, location?: string | null, employer?: { __typename?: 'EmployerProfile', name: string } | null } }> | null } | null };

export type GetEmployeeApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeApplicationsQuery = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', applications?: Array<{ __typename?: 'ApplicationProfile', id: number, status: ApplicationStatus, job: { __typename?: 'JobProfile', title: string, employer?: { __typename?: 'EmployerProfile', name: string } | null } }> | null } | null };

export type GetEmployeePendingApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeePendingApplicationsQuery = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', applications?: Array<{ __typename?: 'ApplicationProfile', id: number, job: { __typename?: 'JobProfile', title: string, location?: string | null, employer?: { __typename?: 'EmployerProfile', name: string } | null } }> | null } | null };

export type GetEmployeeRejectedApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeRejectedApplicationsQuery = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', applications?: Array<{ __typename?: 'ApplicationProfile', id: number, job: { __typename?: 'JobProfile', title: string, location?: string | null, employer?: { __typename?: 'EmployerProfile', name: string } | null } }> | null } | null };

export type GetEmployeeProfile1QueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeProfile1Query = { __typename?: 'Query', getEmployeeProfile?: { __typename?: 'EmployeeProfile', name: string, phone_number: string, profilepicture?: string | null } | null };

export type EditEmployeeProfileMutationVariables = Exact<{
  input: UpdateEmployee;
}>;


export type EditEmployeeProfileMutation = { __typename?: 'Mutation', editEmployeeProfile?: { __typename?: 'EmployeeProfile', id: number } | null };

export type CreateUnapprovedJobMutationVariables = Exact<{
  newjob: NewJob;
}>;


export type CreateUnapprovedJobMutation = { __typename?: 'Mutation', createUnapprovedJob: { __typename?: 'UnapprovedJobProfile', id: number } };

export type GetlistingJobsQueryVariables = Exact<{
  filters?: InputMaybe<JobsFilterParameters>;
}>;


export type GetlistingJobsQuery = { __typename?: 'Query', getJobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, description: string, location?: string | null, posted: string, employer?: { __typename?: 'EmployerProfile', name: string } | null }> | null };

export type GetEmployerProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployerProfileQuery = { __typename?: 'Query', getEmployerProfile?: { __typename?: 'EmployerProfile', jobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, level?: string | null, deadline?: any | null } | null> | null } | null };

export type ResetEmployerPasswordMutationVariables = Exact<{
  new_password: Scalars['String']['input'];
}>;


export type ResetEmployerPasswordMutation = { __typename?: 'Mutation', resetEmployerPassword?: { __typename?: 'Employer', id: number } | null };

export type EmployerLoginMutationVariables = Exact<{
  employerlogin: EmployerLogin;
}>;


export type EmployerLoginMutation = { __typename?: 'Mutation', employerLogin?: string | null };

export type ForgotEmployerPasswordMutationVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type ForgotEmployerPasswordMutation = { __typename?: 'Mutation', forgotEmployerPassword?: { __typename?: 'SendCodeStatus', phone_number: string, success: boolean } | null };

export type RequestEmployerPasswordResetMutationVariables = Exact<{
  verificationinfo: Verificationinfo;
}>;


export type RequestEmployerPasswordResetMutation = { __typename?: 'Mutation', requestEmployerPasswordReset?: string | null };

export type CreateEmployerMutationVariables = Exact<{
  newemployer: NewEmployer;
}>;


export type CreateEmployerMutation = { __typename?: 'Mutation', createEmployer?: { __typename?: 'UnverifiedEmployer', id: number } | null };

export type CheckcompanyphonenumberQueryVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type CheckcompanyphonenumberQuery = { __typename?: 'Query', employerPhoneNumberExists: { __typename?: 'PhoneNumberExists', verified: boolean, unverified: boolean } };

export type VerifyEmployerMutationVariables = Exact<{
  verificationinfo: Verificationinfo;
}>;


export type VerifyEmployerMutation = { __typename?: 'Mutation', verifyEmployer?: { __typename?: 'Employer', id: number } | null };

export type AcceptApplicationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AcceptApplicationMutation = { __typename?: 'Mutation', editApplication: { __typename?: 'ApplicationProfile', id: number, status: ApplicationStatus } };

export type FindEmployerApplicationQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindEmployerApplicationQuery = { __typename?: 'Query', findApplication: { __typename?: 'ApplicationProfile', id: number, experience: number, educationLevel: string, coverLetterUrl: string, resumeeUrl: string, status: ApplicationStatus, job: { __typename?: 'JobProfile', id: number, title: string }, employee: { __typename?: 'EmployeeProfile', id: number, name: string, phone_number: string } } };

export type PendApplicationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PendApplicationMutation = { __typename?: 'Mutation', editApplication: { __typename?: 'ApplicationProfile', id: number, status: ApplicationStatus } };

export type RejectApplicationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RejectApplicationMutation = { __typename?: 'Mutation', editApplication: { __typename?: 'ApplicationProfile', id: number, status: ApplicationStatus } };

export type FindAcceptedEmployerJobApplicationsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindAcceptedEmployerJobApplicationsQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, applications?: Array<{ __typename?: 'ApplicationProfile', id: number, educationLevel: string, employee: { __typename?: 'EmployeeProfile', name: string, phone_number: string } }> | null } };

export type FindEmployerJobApplicationsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindEmployerJobApplicationsQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, applications?: Array<{ __typename?: 'ApplicationProfile', id: number, status: ApplicationStatus, employee: { __typename?: 'EmployeeProfile', name: string, phone_number: string } }> | null } };

export type FindPendingEmployerJobApplicationsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindPendingEmployerJobApplicationsQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, applications?: Array<{ __typename?: 'ApplicationProfile', id: number, educationLevel: string, employee: { __typename?: 'EmployeeProfile', name: string, phone_number: string } }> | null } };

export type FindRejectedEmployerJobApplicationsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindRejectedEmployerJobApplicationsQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, applications?: Array<{ __typename?: 'ApplicationProfile', id: number, educationLevel: string, employee: { __typename?: 'EmployeeProfile', name: string, phone_number: string } }> | null } };

export type FindEmployerJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindEmployerJobQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, posted: string, educationLevel?: string | null, experience?: number | null } };

export type GetEmployerAnalyticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployerAnalyticsQuery = { __typename?: 'Query', getEmployerProfile?: { __typename?: 'EmployerProfile', analytics: { __typename?: 'EmployerAnalytics', jobs_approval: { __typename?: 'JobApprovalAnalytics', approvedjobs: number, unapprovedJobs: number }, applications_status: { __typename?: 'ApplicationAnalytics', total: number, accepted: number, rejected: number, pending: number }, jobs_education_level: { __typename?: 'JobEducationLevelAnalytics', diploma: number, bachelors_degree: number, masters_degree: number, phd: number, unspecified: number }, unapprovedjobs_education_level: { __typename?: 'JobEducationLevelAnalytics', diploma: number, bachelors_degree: number, masters_degree: number, phd: number, unspecified: number }, jobs_seniority: { __typename?: 'JobSeniorityLevelAnalytics', beginner: number, intermediate: number, senior: number, unspecified: number }, unapprovedjobs_seniority: { __typename?: 'JobSeniorityLevelAnalytics', beginner: number, intermediate: number, senior: number, unspecified: number }, jobs_experience: { __typename?: 'JobExperienceAnalytics', below_one: number, one_to_three: number, three_to_five: number, five_to_seven: number, seven_to_nine: number, nine_and_above: number }, unapprovedjobs_experience: { __typename?: 'JobExperienceAnalytics', below_one: number, one_to_three: number, three_to_five: number, five_to_seven: number, seven_to_nine: number, nine_and_above: number } } } | null };

export type GetEmployerProfile1QueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployerProfile1Query = { __typename?: 'Query', getEmployerProfile?: { __typename?: 'EmployerProfile', name: string, phone_number: string, Website?: string | null } | null };

export type EditEmployerProfileMutationVariables = Exact<{
  input: UpdatedEmployer;
}>;


export type EditEmployerProfileMutation = { __typename?: 'Mutation', editEmployerProfile?: { __typename?: 'EmployerProfile', id: number } | null };

export type FindEmployerUnapprovedJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindEmployerUnapprovedJobQuery = { __typename?: 'Query', findUnapprovedJob: { __typename?: 'UnapprovedJobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, posted: string, location?: string | null, educationLevel?: string | null, experience?: number | null } };

export type GetEmployerProfile2QueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployerProfile2Query = { __typename?: 'Query', getEmployerProfile?: { __typename?: 'EmployerProfile', unapprovedJobs?: Array<{ __typename?: 'UnapprovedJobProfile', id: number, title: string, level?: string | null, deadline?: any | null } | null> | null } | null };

export type FindJobQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FindJobQuery = { __typename?: 'Query', findJob: { __typename?: 'JobProfile', id: number, title: string, industry?: string | null, deadline?: any | null, description: string, requirements?: Array<string> | null, level?: string | null, location?: string | null, educationLevel?: string | null, experience?: number | null, posted: string, employer?: { __typename?: 'EmployerProfile', name: string, Website?: string | null } | null } };

export type GetlistingJobs1QueryVariables = Exact<{
  filters?: InputMaybe<JobsFilterParameters>;
}>;


export type GetlistingJobs1Query = { __typename?: 'Query', getJobs?: Array<{ __typename?: 'JobProfile', id: number, title: string, description: string, location?: string | null, posted: string, employer?: { __typename?: 'EmployerProfile', name: string } | null }> | null };

export type SendCodeMutationVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type SendCodeMutation = { __typename?: 'Mutation', sendCode?: { __typename?: 'SendCodeStatus', phone_number: string, success: boolean } | null };


export const ResetAdminPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetAdminPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetAdminPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"new_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ResetAdminPasswordMutation, ResetAdminPasswordMutationVariables>;
export const AdminLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminlogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminlogin"}}}]}]}}]} as unknown as DocumentNode<AdminLoginMutation, AdminLoginMutationVariables>;
export const ForgotAdminPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgotAdminPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotAdminPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ForgotAdminPasswordMutation, ForgotAdminPasswordMutationVariables>;
export const RequestAdminPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestAdminPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestAdminPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}]}]}}]} as unknown as DocumentNode<RequestAdminPasswordResetMutation, RequestAdminPasswordResetMutationVariables>;
export const RemoveJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveJobMutation, RemoveJobMutationVariables>;
export const FindAdminJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAdminJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Website"}}]}}]}}]}}]} as unknown as DocumentNode<FindAdminJobQuery, FindAdminJobQueryVariables>;
export const GetAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAnalytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAnalytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs_approval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approvedjobs"}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedJobs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applications_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"accepted"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs_education_level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diploma"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors_degree"}},{"kind":"Field","name":{"kind":"Name","value":"masters_degree"}},{"kind":"Field","name":{"kind":"Name","value":"phd"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedjobs_education_level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diploma"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors_degree"}},{"kind":"Field","name":{"kind":"Name","value":"masters_degree"}},{"kind":"Field","name":{"kind":"Name","value":"phd"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs_seniority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginner"}},{"kind":"Field","name":{"kind":"Name","value":"intermediate"}},{"kind":"Field","name":{"kind":"Name","value":"senior"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedjobs_seniority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginner"}},{"kind":"Field","name":{"kind":"Name","value":"intermediate"}},{"kind":"Field","name":{"kind":"Name","value":"senior"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs_experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"below_one"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_three"}},{"kind":"Field","name":{"kind":"Name","value":"three_to_five"}},{"kind":"Field","name":{"kind":"Name","value":"five_to_seven"}},{"kind":"Field","name":{"kind":"Name","value":"seven_to_nine"}},{"kind":"Field","name":{"kind":"Name","value":"nine_and_above"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedjobs_experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"below_one"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_three"}},{"kind":"Field","name":{"kind":"Name","value":"three_to_five"}},{"kind":"Field","name":{"kind":"Name","value":"five_to_seven"}},{"kind":"Field","name":{"kind":"Name","value":"seven_to_nine"}},{"kind":"Field","name":{"kind":"Name","value":"nine_and_above"}}]}}]}}]}}]} as unknown as DocumentNode<GetAnalyticsQuery, GetAnalyticsQueryVariables>;
export const GetEmployersProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployersProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployersProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]} as unknown as DocumentNode<GetEmployersProfileQuery, GetEmployersProfileQueryVariables>;
export const FindAdminUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAdminUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FindAdminUnapprovedJobQuery, FindAdminUnapprovedJobQueryVariables>;
export const ApproveJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approveJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approveJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ApproveJobMutation, ApproveJobMutationVariables>;
export const RemoveUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveUnapprovedJobMutation, RemoveUnapprovedJobMutationVariables>;
export const GetUnapprovedJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUnapprovedJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUnapprovedJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetUnapprovedJobsQuery, GetUnapprovedJobsQueryVariables>;
export const CreateJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewJob"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateJobMutation, CreateJobMutationVariables>;
export const FindEemployerEditJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findEemployerEditJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<FindEemployerEditJobQuery, FindEemployerEditJobQueryVariables>;
export const EditJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewJob"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditJobMutation, EditJobMutationVariables>;
export const FindUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<FindUnapprovedJobQuery, FindUnapprovedJobQueryVariables>;
export const EditUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewJob"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditUnapprovedJobMutation, EditUnapprovedJobMutationVariables>;
export const GetJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetJobsQuery, GetJobsQueryVariables>;
export const ResetEmployeePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetEmployeePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetEmployeePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"new_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ResetEmployeePasswordMutation, ResetEmployeePasswordMutationVariables>;
export const EmployeeLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"employeeLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeelogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeelogin"}}}]}]}}]} as unknown as DocumentNode<EmployeeLoginMutation, EmployeeLoginMutationVariables>;
export const ForgotEmployeePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgotEmployeePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotEmployeePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ForgotEmployeePasswordMutation, ForgotEmployeePasswordMutationVariables>;
export const RequestEmployeePasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestEmployeePasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestEmployeePasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}]}]}}]} as unknown as DocumentNode<RequestEmployeePasswordResetMutation, RequestEmployeePasswordResetMutationVariables>;
export const CreateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newemployee"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewEmployee"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newemployee"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const CheckemployeephonenumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkemployeephonenumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeePhoneNumberExists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"unverified"}}]}}]}}]} as unknown as DocumentNode<CheckemployeephonenumberQuery, CheckemployeephonenumberQueryVariables>;
export const VerifyEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VerifyEmployeeMutation, VerifyEmployeeMutationVariables>;
export const GetEmployeeProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeProfileQuery, GetEmployeeProfileQueryVariables>;
export const CreateApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newapplication"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewApplication"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newapplication"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const FindEmployeeJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findEmployeeJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Website"}}]}}]}}]}}]} as unknown as DocumentNode<FindEmployeeJobQuery, FindEmployeeJobQueryVariables>;
export const GetEmployeeAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeAnalytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"analytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job_application_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"accepted"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applied_jobs_education_level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diploma"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors_degree"}},{"kind":"Field","name":{"kind":"Name","value":"masters_degree"}},{"kind":"Field","name":{"kind":"Name","value":"phd"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applied_jobs_seniority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginner"}},{"kind":"Field","name":{"kind":"Name","value":"intermediate"}},{"kind":"Field","name":{"kind":"Name","value":"senior"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applied_jobs_experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"below_one"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_three"}},{"kind":"Field","name":{"kind":"Name","value":"three_to_five"}},{"kind":"Field","name":{"kind":"Name","value":"five_to_seven"}},{"kind":"Field","name":{"kind":"Name","value":"seven_to_nine"}},{"kind":"Field","name":{"kind":"Name","value":"nine_and_above"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeAnalyticsQuery, GetEmployeeAnalyticsQueryVariables>;
export const FindApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Website"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"coverLetterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"resumeeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FindApplicationQuery, FindApplicationQueryVariables>;
export const GetEmployeeAcceptedApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeAcceptedApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"ACCEPTED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeAcceptedApplicationsQuery, GetEmployeeAcceptedApplicationsQueryVariables>;
export const GetEmployeeApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeApplicationsQuery, GetEmployeeApplicationsQueryVariables>;
export const GetEmployeePendingApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeePendingApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"PENDING"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeePendingApplicationsQuery, GetEmployeePendingApplicationsQueryVariables>;
export const GetEmployeeRejectedApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeRejectedApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"REJECTED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeRejectedApplicationsQuery, GetEmployeeRejectedApplicationsQueryVariables>;
export const GetEmployeeProfile1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeProfile1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"profilepicture"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeProfile1Query, GetEmployeeProfile1QueryVariables>;
export const EditEmployeeProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editEmployeeProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEmployee"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editEmployeeProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditEmployeeProfileMutation, EditEmployeeProfileMutationVariables>;
export const CreateUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewJob"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newjob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUnapprovedJobMutation, CreateUnapprovedJobMutationVariables>;
export const GetlistingJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getlistingJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JobsFilterParameters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filterparameters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetlistingJobsQuery, GetlistingJobsQueryVariables>;
export const GetEmployerProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployerProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployerProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployerProfileQuery, GetEmployerProfileQueryVariables>;
export const ResetEmployerPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resetEmployerPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetEmployerPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"new_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ResetEmployerPasswordMutation, ResetEmployerPasswordMutationVariables>;
export const EmployerLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"employerLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employerlogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployerLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employerLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employerlogin"}}}]}]}}]} as unknown as DocumentNode<EmployerLoginMutation, EmployerLoginMutationVariables>;
export const ForgotEmployerPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"forgotEmployerPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotEmployerPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<ForgotEmployerPasswordMutation, ForgotEmployerPasswordMutationVariables>;
export const RequestEmployerPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestEmployerPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestEmployerPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}]}]}}]} as unknown as DocumentNode<RequestEmployerPasswordResetMutation, RequestEmployerPasswordResetMutationVariables>;
export const CreateEmployerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createEmployer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newemployer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewEmployer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newemployer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateEmployerMutation, CreateEmployerMutationVariables>;
export const CheckcompanyphonenumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkcompanyphonenumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employerPhoneNumberExists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"unverified"}}]}}]}}]} as unknown as DocumentNode<CheckcompanyphonenumberQuery, CheckcompanyphonenumberQueryVariables>;
export const VerifyEmployerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyEmployer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"verificationinfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmployer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verificationinfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<VerifyEmployerMutation, VerifyEmployerMutationVariables>;
export const AcceptApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"ACCEPTED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AcceptApplicationMutation, AcceptApplicationMutationVariables>;
export const FindEmployerApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findEmployerApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"job"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"coverLetterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"resumeeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FindEmployerApplicationQuery, FindEmployerApplicationQueryVariables>;
export const PendApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"pendApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"PENDING"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<PendApplicationMutation, PendApplicationMutationVariables>;
export const RejectApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rejectApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"REJECTED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<RejectApplicationMutation, RejectApplicationMutationVariables>;
export const FindAcceptedEmployerJobApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAcceptedEmployerJobApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"ACCEPTED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}}]}}]}}]}}]} as unknown as DocumentNode<FindAcceptedEmployerJobApplicationsQuery, FindAcceptedEmployerJobApplicationsQueryVariables>;
export const FindEmployerJobApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findEmployerJobApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"applications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<FindEmployerJobApplicationsQuery, FindEmployerJobApplicationsQueryVariables>;
export const FindPendingEmployerJobApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPendingEmployerJobApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"PENDING"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}}]}}]}}]}}]} as unknown as DocumentNode<FindPendingEmployerJobApplicationsQuery, FindPendingEmployerJobApplicationsQueryVariables>;
export const FindRejectedEmployerJobApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findRejectedEmployerJobApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"REJECTED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}}]}}]}}]}}]} as unknown as DocumentNode<FindRejectedEmployerJobApplicationsQuery, FindRejectedEmployerJobApplicationsQueryVariables>;
export const FindEmployerJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findEmployerJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<FindEmployerJobQuery, FindEmployerJobQueryVariables>;
export const GetEmployerAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployerAnalytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployerProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"analytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs_approval"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approvedjobs"}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedJobs"}}]}},{"kind":"Field","name":{"kind":"Name","value":"applications_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"accepted"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs_education_level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diploma"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors_degree"}},{"kind":"Field","name":{"kind":"Name","value":"masters_degree"}},{"kind":"Field","name":{"kind":"Name","value":"phd"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedjobs_education_level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diploma"}},{"kind":"Field","name":{"kind":"Name","value":"bachelors_degree"}},{"kind":"Field","name":{"kind":"Name","value":"masters_degree"}},{"kind":"Field","name":{"kind":"Name","value":"phd"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs_seniority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginner"}},{"kind":"Field","name":{"kind":"Name","value":"intermediate"}},{"kind":"Field","name":{"kind":"Name","value":"senior"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedjobs_seniority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"beginner"}},{"kind":"Field","name":{"kind":"Name","value":"intermediate"}},{"kind":"Field","name":{"kind":"Name","value":"senior"}},{"kind":"Field","name":{"kind":"Name","value":"unspecified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobs_experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"below_one"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_three"}},{"kind":"Field","name":{"kind":"Name","value":"three_to_five"}},{"kind":"Field","name":{"kind":"Name","value":"five_to_seven"}},{"kind":"Field","name":{"kind":"Name","value":"seven_to_nine"}},{"kind":"Field","name":{"kind":"Name","value":"nine_and_above"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unapprovedjobs_experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"below_one"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_three"}},{"kind":"Field","name":{"kind":"Name","value":"three_to_five"}},{"kind":"Field","name":{"kind":"Name","value":"five_to_seven"}},{"kind":"Field","name":{"kind":"Name","value":"seven_to_nine"}},{"kind":"Field","name":{"kind":"Name","value":"nine_and_above"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployerAnalyticsQuery, GetEmployerAnalyticsQueryVariables>;
export const GetEmployerProfile1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployerProfile1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployerProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"Website"}}]}}]}}]} as unknown as DocumentNode<GetEmployerProfile1Query, GetEmployerProfile1QueryVariables>;
export const EditEmployerProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editEmployerProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatedEmployer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editEmployerProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<EditEmployerProfileMutation, EditEmployerProfileMutationVariables>;
export const FindEmployerUnapprovedJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findEmployerUnapprovedJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUnapprovedJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<FindEmployerUnapprovedJobQuery, FindEmployerUnapprovedJobQueryVariables>;
export const GetEmployerProfile2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployerProfile2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployerProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unapprovedJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployerProfile2Query, GetEmployerProfile2QueryVariables>;
export const FindJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requirements"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"educationLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Website"}}]}}]}}]}}]} as unknown as DocumentNode<FindJobQuery, FindJobQueryVariables>;
export const GetlistingJobs1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getlistingJobs1"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JobsFilterParameters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filterparameters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"posted"}},{"kind":"Field","name":{"kind":"Name","value":"employer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetlistingJobs1Query, GetlistingJobs1QueryVariables>;
export const SendCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<SendCodeMutation, SendCodeMutationVariables>;