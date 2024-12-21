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

/** Boolean Filter simple datatypes */
export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
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

export type Mutation = {
  __typename?: 'Mutation';
  AddStudents?: Maybe<Array<Student>>;
  /** Add new School */
  addSchool?: Maybe<AddSchoolPayload>;
  /** Add new Student */
  addStudent?: Maybe<AddStudentPayload>;
  /** Add new UnverifiedSchool */
  addUnverifiedSchool?: Maybe<AddUnverifiedSchoolPayload>;
  createDummy?: Maybe<Dummy>;
  createSchool?: Maybe<UnverifiedSchool>;
  /** delete School filtered by selection and delete all matched values */
  deleteSchool?: Maybe<DeleteSchoolPayload>;
  /** delete Student filtered by selection and delete all matched values */
  deleteStudent?: Maybe<DeleteStudentPayload>;
  /** delete UnverifiedSchool filtered by selection and delete all matched values */
  deleteUnverifiedSchool?: Maybe<DeleteUnverifiedSchoolPayload>;
  forgotSchoolPassword?: Maybe<SendCodeStatus>;
  forgotStudentPassword?: Maybe<SendCodeStatus>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  requestSchoolPasswordReset?: Maybe<Scalars['String']['output']>;
  requestStudentPasswordReset?: Maybe<Scalars['String']['output']>;
  resetSchoolPassword?: Maybe<School>;
  resetStudentPassword?: Maybe<Student>;
  schoolLogin?: Maybe<Scalars['String']['output']>;
  sendCode?: Maybe<SendCodeStatus>;
  studentLogin?: Maybe<Scalars['String']['output']>;
  /** update School filtered by selection and update all matched values */
  updateSchool?: Maybe<UpdateSchoolPayload>;
  /** update Student filtered by selection and update all matched values */
  updateStudent?: Maybe<UpdateStudentPayload>;
  /** update UnverifiedSchool filtered by selection and update all matched values */
  updateUnverifiedSchool?: Maybe<UpdateUnverifiedSchoolPayload>;
  verifySchool?: Maybe<School>;
};


export type MutationAddStudentsArgs = {
  students: Array<NewStudent>;
};


export type MutationAddSchoolArgs = {
  input: Array<SchoolInput>;
};


export type MutationAddStudentArgs = {
  input: Array<StudentInput>;
};


export type MutationAddUnverifiedSchoolArgs = {
  input: Array<UnverifiedSchoolInput>;
};


export type MutationCreateDummyArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateSchoolArgs = {
  input: NewSchool;
};


export type MutationDeleteSchoolArgs = {
  filter: SchoolFiltersInput;
};


export type MutationDeleteStudentArgs = {
  filter: StudentFiltersInput;
};


export type MutationDeleteUnverifiedSchoolArgs = {
  filter: UnverifiedSchoolFiltersInput;
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


export type MutationRequestSchoolPasswordResetArgs = {
  input?: InputMaybe<Verificationinfo>;
};


export type MutationRequestStudentPasswordResetArgs = {
  otp: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  registration_number: Scalars['String']['input'];
  schoolid: Scalars['Int']['input'];
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


export type MutationUpdateSchoolArgs = {
  input: UpdateSchoolInput;
};


export type MutationUpdateStudentArgs = {
  input: UpdateStudentInput;
};


export type MutationUpdateUnverifiedSchoolArgs = {
  input: UpdateUnverifiedSchoolInput;
};


export type MutationVerifySchoolArgs = {
  input: Verificationinfo;
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
  getDummy?: Maybe<Dummy>;
  getDummys: Array<Maybe<Dummy>>;
  /** return one School selected by PrimaryKey(s) */
  getSchool?: Maybe<School>;
  getSchoolProfile?: Maybe<SchoolProfile>;
  getSchoolsProfile?: Maybe<Array<SchoolProfile>>;
  /** return one Student selected by PrimaryKey(s) */
  getStudent?: Maybe<Student>;
  getStudentProfile?: Maybe<StudentProfile>;
  /** return one UnverifiedSchool selected by PrimaryKey(s) */
  getUnverifiedSchool?: Maybe<UnverifiedSchool>;
  /** return a list of  School filterable, pageination, orderbale, groupable ... */
  querySchool?: Maybe<SchoolQueryResult>;
  /** return a list of  Student filterable, pageination, orderbale, groupable ... */
  queryStudent?: Maybe<StudentQueryResult>;
  /** return a list of  UnverifiedSchool filterable, pageination, orderbale, groupable ... */
  queryUnverifiedSchool?: Maybe<UnverifiedSchoolQueryResult>;
  schoolPhoneNumberExists: PhoneNumberExists;
};


export type QueryGetDummyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSchoolArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetStudentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUnverifiedSchoolArgs = {
  id: Scalars['Int']['input'];
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

export type CheckphonenumberQueryVariables = Exact<{
  phone_number: Scalars['String']['input'];
}>;


export type CheckphonenumberQuery = { __typename?: 'Query', schoolPhoneNumberExists: { __typename?: 'PhoneNumberExists', verified: boolean, unverified: boolean } };


export const CheckphonenumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkphonenumber"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schoolPhoneNumberExists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone_number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"unverified"}}]}}]}}]} as unknown as DocumentNode<CheckphonenumberQuery, CheckphonenumberQueryVariables>;