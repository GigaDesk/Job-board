/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n   mutation resetAdminPassword($new_password: String!){\n    resetAdminPassword(new_password: $new_password){\n      id\n    }\n  }\n ": types.ResetAdminPasswordDocument,
    "\n  mutation adminLogin($adminlogin: AdminLogin!) {   \n    adminLogin(input: $adminlogin) \n  }\n": types.AdminLoginDocument,
    "\nmutation forgotAdminPassword($phone_number: String!){\n  forgotAdminPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n": types.ForgotAdminPasswordDocument,
    "\n   mutation requestAdminPasswordReset($verificationinfo: verificationinfo!){\n      requestAdminPasswordReset(input: $verificationinfo)\n   }\n": types.RequestAdminPasswordResetDocument,
    "\n    query findUnapprovedJobListing($id: Int!){\n      findUnapprovedJob(id: $id){\n        id\n        title\n        industry\n        deadline\n        description\n        requirements\n        level\n        location\n        educationLevel\n        experience\n        employer{\n            name\n        }\n      }\n    }\n    ": types.FindUnapprovedJobListingDocument,
    "\nquery getunapprovedlistingJobs($filters: JobsFilterParameters) {\n  getUnapprovedJobs(filterparameters: $filters){\n    id\n    title\n    description\n    location\n    employer{\n      name\n    }\n  }\n}\n  ": types.GetunapprovedlistingJobsDocument,
    "\n  query getEmployersProfile{\n    getEmployersProfile{\n      id\n      name\n      phone_number\n    }\n  }\n  ": types.GetEmployersProfileDocument,
    "\n  query findUnapprovedJob($id: Int!){\n    findUnapprovedJob(id: $id){\n      id\n      title\n      industry\n      deadline\n      description\n      requirements\n      level\n      location\n      educationLevel\n      experience\n    }\n  }\n  ": types.FindUnapprovedJobDocument,
    "\n  mutation approveJob($id: Int!) {   \n    approveJob( id: $id ) {    \n      id\n     }    \n }\n": types.ApproveJobDocument,
    "\n  mutation removeUnapprovedJob($id: Int!) {   \n    removeUnapprovedJob( id: $id ) {    \n      id\n     }    \n }\n": types.RemoveUnapprovedJobDocument,
    "\nquery getUnapprovedJobs{\n  getUnapprovedJobs{\n    id\n    title\n    industry\n    employer{\n      name\n    }\n  }\n}\n": types.GetUnapprovedJobsDocument,
    "\n  mutation createJob($newjob: NewJob!) {   \n    createJob( input: $newjob ) {    \n      id\n     }    \n }\n": types.CreateJobDocument,
    "\n  query getJobs{\n    getJobs{\n      id\n      title\n      industry\n      employer{\n      name\n    }\n    }\n  }\n  ": types.GetJobsDocument,
    "\n   mutation resetEmployeePassword($new_password: String!){\n    resetEmployeePassword(new_password: $new_password){\n      id\n    }\n  }\n ": types.ResetEmployeePasswordDocument,
    "\n  mutation employeeLogin($employeelogin: EmployeeLogin!) {   \n    employeeLogin(input: $employeelogin) \n  }\n": types.EmployeeLoginDocument,
    "\nmutation forgotEmployeePassword($phone_number: String!){\n  forgotEmployeePassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n": types.ForgotEmployeePasswordDocument,
    "\n   mutation requestEmployeePasswordReset($verificationinfo: verificationinfo!){\n      requestEmployeePasswordReset(input: $verificationinfo)\n   }\n": types.RequestEmployeePasswordResetDocument,
    "\n  mutation createEmployee($newemployee: NewEmployee!) {   \n    createEmployee( input: $newemployee ) {    \n      id\n     }    \n }\n": types.CreateEmployeeDocument,
    "\n  query checkemployeephonenumber($phone_number: String!) {\n    employeePhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n": types.CheckemployeephonenumberDocument,
    "\n  mutation verifyEmployee ($verificationinfo: verificationinfo!) {   \n  verifyEmployee(input: $verificationinfo) {    \n    id\n   }    \n}\n": types.VerifyEmployeeDocument,
    "\n   mutation resetEmployerPassword($new_password: String!){\n    resetEmployerPassword(new_password: $new_password){\n      id\n    }\n  }\n ": types.ResetEmployerPasswordDocument,
    "\n  mutation employerLogin($employerlogin: EmployerLogin!) {   \n    employerLogin(input: $employerlogin) \n  }\n": types.EmployerLoginDocument,
    "\nmutation forgotEmployerPassword($phone_number: String!){\n  forgotEmployerPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n": types.ForgotEmployerPasswordDocument,
    "\n   mutation requestEmployerPasswordReset($verificationinfo: verificationinfo!){\n      requestEmployerPasswordReset(input: $verificationinfo)\n   }\n": types.RequestEmployerPasswordResetDocument,
    "\n  mutation createEmployer($newemployer: NewEmployer!) {   \n    createEmployer( input: $newemployer ) {    \n      id\n     }    \n }\n": types.CreateEmployerDocument,
    "\n  query checkcompanyphonenumber($phone_number: String!) {\n    employerPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n": types.CheckcompanyphonenumberDocument,
    "\n  mutation verifyEmployer ($verificationinfo: verificationinfo!) {   \n  verifyEmployer(input: $verificationinfo) {    \n    id\n   }    \n}\n": types.VerifyEmployerDocument,
    "\nquery getEmployerProfile2{\n  getEmployerProfile{\n    unapprovedJobs{\n      id\n      title\n      level\n      deadline\n    }\n  }\n}\n": types.GetEmployerProfile2Document,
    "\n  mutation createUnapprovedJob($newjob: NewJob!) {   \n    createUnapprovedJob( input: $newjob ) {    \n      id\n     }    \n }\n": types.CreateUnapprovedJobDocument,
    "\n  query getEmployerProfile{\n  getEmployerProfile{\n    jobs{\n      id\n      title\n      level\n      deadline\n    }\n  }\n}\n  ": types.GetEmployerProfileDocument,
    "\n  query findJob($id: Int!){\n    findJob(id: $id){\n      id\n      title\n      industry\n      deadline\n      description\n      requirements\n      level\n      location\n      educationLevel\n      experience\n      employer{\n        name\n      }\n    }\n  }\n  ": types.FindJobDocument,
    "\nquery getlistingJobs($filters: JobsFilterParameters) {\n  getJobs(filterparameters: $filters){\n    id\n    title\n    description\n    location\n    employer{\n      name\n    }\n  }\n}\n  ": types.GetlistingJobsDocument,
    "\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n": types.SendCodeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation resetAdminPassword($new_password: String!){\n    resetAdminPassword(new_password: $new_password){\n      id\n    }\n  }\n "): (typeof documents)["\n   mutation resetAdminPassword($new_password: String!){\n    resetAdminPassword(new_password: $new_password){\n      id\n    }\n  }\n "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation adminLogin($adminlogin: AdminLogin!) {   \n    adminLogin(input: $adminlogin) \n  }\n"): (typeof documents)["\n  mutation adminLogin($adminlogin: AdminLogin!) {   \n    adminLogin(input: $adminlogin) \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation forgotAdminPassword($phone_number: String!){\n  forgotAdminPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"): (typeof documents)["\nmutation forgotAdminPassword($phone_number: String!){\n  forgotAdminPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation requestAdminPasswordReset($verificationinfo: verificationinfo!){\n      requestAdminPasswordReset(input: $verificationinfo)\n   }\n"): (typeof documents)["\n   mutation requestAdminPasswordReset($verificationinfo: verificationinfo!){\n      requestAdminPasswordReset(input: $verificationinfo)\n   }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query findUnapprovedJobListing($id: Int!){\n      findUnapprovedJob(id: $id){\n        id\n        title\n        industry\n        deadline\n        description\n        requirements\n        level\n        location\n        educationLevel\n        experience\n        employer{\n            name\n        }\n      }\n    }\n    "): (typeof documents)["\n    query findUnapprovedJobListing($id: Int!){\n      findUnapprovedJob(id: $id){\n        id\n        title\n        industry\n        deadline\n        description\n        requirements\n        level\n        location\n        educationLevel\n        experience\n        employer{\n            name\n        }\n      }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getunapprovedlistingJobs($filters: JobsFilterParameters) {\n  getUnapprovedJobs(filterparameters: $filters){\n    id\n    title\n    description\n    location\n    employer{\n      name\n    }\n  }\n}\n  "): (typeof documents)["\nquery getunapprovedlistingJobs($filters: JobsFilterParameters) {\n  getUnapprovedJobs(filterparameters: $filters){\n    id\n    title\n    description\n    location\n    employer{\n      name\n    }\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getEmployersProfile{\n    getEmployersProfile{\n      id\n      name\n      phone_number\n    }\n  }\n  "): (typeof documents)["\n  query getEmployersProfile{\n    getEmployersProfile{\n      id\n      name\n      phone_number\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findUnapprovedJob($id: Int!){\n    findUnapprovedJob(id: $id){\n      id\n      title\n      industry\n      deadline\n      description\n      requirements\n      level\n      location\n      educationLevel\n      experience\n    }\n  }\n  "): (typeof documents)["\n  query findUnapprovedJob($id: Int!){\n    findUnapprovedJob(id: $id){\n      id\n      title\n      industry\n      deadline\n      description\n      requirements\n      level\n      location\n      educationLevel\n      experience\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation approveJob($id: Int!) {   \n    approveJob( id: $id ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation approveJob($id: Int!) {   \n    approveJob( id: $id ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation removeUnapprovedJob($id: Int!) {   \n    removeUnapprovedJob( id: $id ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation removeUnapprovedJob($id: Int!) {   \n    removeUnapprovedJob( id: $id ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getUnapprovedJobs{\n  getUnapprovedJobs{\n    id\n    title\n    industry\n    employer{\n      name\n    }\n  }\n}\n"): (typeof documents)["\nquery getUnapprovedJobs{\n  getUnapprovedJobs{\n    id\n    title\n    industry\n    employer{\n      name\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createJob($newjob: NewJob!) {   \n    createJob( input: $newjob ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation createJob($newjob: NewJob!) {   \n    createJob( input: $newjob ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getJobs{\n    getJobs{\n      id\n      title\n      industry\n      employer{\n      name\n    }\n    }\n  }\n  "): (typeof documents)["\n  query getJobs{\n    getJobs{\n      id\n      title\n      industry\n      employer{\n      name\n    }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation resetEmployeePassword($new_password: String!){\n    resetEmployeePassword(new_password: $new_password){\n      id\n    }\n  }\n "): (typeof documents)["\n   mutation resetEmployeePassword($new_password: String!){\n    resetEmployeePassword(new_password: $new_password){\n      id\n    }\n  }\n "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation employeeLogin($employeelogin: EmployeeLogin!) {   \n    employeeLogin(input: $employeelogin) \n  }\n"): (typeof documents)["\n  mutation employeeLogin($employeelogin: EmployeeLogin!) {   \n    employeeLogin(input: $employeelogin) \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation forgotEmployeePassword($phone_number: String!){\n  forgotEmployeePassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"): (typeof documents)["\nmutation forgotEmployeePassword($phone_number: String!){\n  forgotEmployeePassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation requestEmployeePasswordReset($verificationinfo: verificationinfo!){\n      requestEmployeePasswordReset(input: $verificationinfo)\n   }\n"): (typeof documents)["\n   mutation requestEmployeePasswordReset($verificationinfo: verificationinfo!){\n      requestEmployeePasswordReset(input: $verificationinfo)\n   }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createEmployee($newemployee: NewEmployee!) {   \n    createEmployee( input: $newemployee ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation createEmployee($newemployee: NewEmployee!) {   \n    createEmployee( input: $newemployee ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query checkemployeephonenumber($phone_number: String!) {\n    employeePhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"): (typeof documents)["\n  query checkemployeephonenumber($phone_number: String!) {\n    employeePhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifyEmployee ($verificationinfo: verificationinfo!) {   \n  verifyEmployee(input: $verificationinfo) {    \n    id\n   }    \n}\n"): (typeof documents)["\n  mutation verifyEmployee ($verificationinfo: verificationinfo!) {   \n  verifyEmployee(input: $verificationinfo) {    \n    id\n   }    \n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation resetEmployerPassword($new_password: String!){\n    resetEmployerPassword(new_password: $new_password){\n      id\n    }\n  }\n "): (typeof documents)["\n   mutation resetEmployerPassword($new_password: String!){\n    resetEmployerPassword(new_password: $new_password){\n      id\n    }\n  }\n "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation employerLogin($employerlogin: EmployerLogin!) {   \n    employerLogin(input: $employerlogin) \n  }\n"): (typeof documents)["\n  mutation employerLogin($employerlogin: EmployerLogin!) {   \n    employerLogin(input: $employerlogin) \n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation forgotEmployerPassword($phone_number: String!){\n  forgotEmployerPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"): (typeof documents)["\nmutation forgotEmployerPassword($phone_number: String!){\n  forgotEmployerPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation requestEmployerPasswordReset($verificationinfo: verificationinfo!){\n      requestEmployerPasswordReset(input: $verificationinfo)\n   }\n"): (typeof documents)["\n   mutation requestEmployerPasswordReset($verificationinfo: verificationinfo!){\n      requestEmployerPasswordReset(input: $verificationinfo)\n   }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createEmployer($newemployer: NewEmployer!) {   \n    createEmployer( input: $newemployer ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation createEmployer($newemployer: NewEmployer!) {   \n    createEmployer( input: $newemployer ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query checkcompanyphonenumber($phone_number: String!) {\n    employerPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"): (typeof documents)["\n  query checkcompanyphonenumber($phone_number: String!) {\n    employerPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifyEmployer ($verificationinfo: verificationinfo!) {   \n  verifyEmployer(input: $verificationinfo) {    \n    id\n   }    \n}\n"): (typeof documents)["\n  mutation verifyEmployer ($verificationinfo: verificationinfo!) {   \n  verifyEmployer(input: $verificationinfo) {    \n    id\n   }    \n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getEmployerProfile2{\n  getEmployerProfile{\n    unapprovedJobs{\n      id\n      title\n      level\n      deadline\n    }\n  }\n}\n"): (typeof documents)["\nquery getEmployerProfile2{\n  getEmployerProfile{\n    unapprovedJobs{\n      id\n      title\n      level\n      deadline\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUnapprovedJob($newjob: NewJob!) {   \n    createUnapprovedJob( input: $newjob ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation createUnapprovedJob($newjob: NewJob!) {   \n    createUnapprovedJob( input: $newjob ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getEmployerProfile{\n  getEmployerProfile{\n    jobs{\n      id\n      title\n      level\n      deadline\n    }\n  }\n}\n  "): (typeof documents)["\n  query getEmployerProfile{\n  getEmployerProfile{\n    jobs{\n      id\n      title\n      level\n      deadline\n    }\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query findJob($id: Int!){\n    findJob(id: $id){\n      id\n      title\n      industry\n      deadline\n      description\n      requirements\n      level\n      location\n      educationLevel\n      experience\n      employer{\n        name\n      }\n    }\n  }\n  "): (typeof documents)["\n  query findJob($id: Int!){\n    findJob(id: $id){\n      id\n      title\n      industry\n      deadline\n      description\n      requirements\n      level\n      location\n      educationLevel\n      experience\n      employer{\n        name\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getlistingJobs($filters: JobsFilterParameters) {\n  getJobs(filterparameters: $filters){\n    id\n    title\n    description\n    location\n    employer{\n      name\n    }\n  }\n}\n  "): (typeof documents)["\nquery getlistingJobs($filters: JobsFilterParameters) {\n  getJobs(filterparameters: $filters){\n    id\n    title\n    description\n    location\n    employer{\n      name\n    }\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n"): (typeof documents)["\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;