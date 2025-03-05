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
    "\n   mutation resetSchoolPassword($new_password: String!){\n    resetSchoolPassword(new_password: $new_password){\n      id\n    }\n  }\n ": types.ResetSchoolPasswordDocument,
    "\nmutation schoolLogin($schoollogin: SchoolLogin!) {   \n  schoolLogin(input: $schoollogin) \n}\n": types.SchoolLoginDocument,
    "\nmutation forgotSchoolPassword($phone_number: String!){\n  forgotSchoolPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n": types.ForgotSchoolPasswordDocument,
    "\n   mutation requestSchoolPasswordReset($verificationinfo: verificationinfo!){\n      requestSchoolPasswordReset(input: $verificationinfo)\n   }\n": types.RequestSchoolPasswordResetDocument,
    "\nquery getUnapprovedJobs{\n  getUnapprovedJobs{\n    id\n    title\n    industry\n    description\n  }\n}\n": types.GetUnapprovedJobsDocument,
    "\n  mutation AddStudent($newstudents: [NewStudent!]!) {   \n    AddStudents( students: $newstudents ) {    \n      name\n     }    \n }\n": types.AddStudentDocument,
    "\n  query SchoolProfile{\n     getSchoolProfile{\n         name\n         phone_number\n    }\n  }\n": types.SchoolProfileDocument,
    "\n  query getJobs{\n    getJobs{\n      id\n      title\n      industry\n      description\n    }\n  }\n  ": types.GetJobsDocument,
    "\n  mutation createSchool($newschool: NewSchool!) {   \n    createSchool( input: $newschool ) {    \n      id\n     }    \n }\n": types.CreateSchoolDocument,
    "\n  query checkphonenumber($phone_number: String!) {\n    schoolPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n": types.CheckphonenumberDocument,
    "\n  mutation verifySchool ($verificationinfo: verificationinfo!) {   \n  verifySchool(input: $verificationinfo) {    \n    id\n   }    \n}\n": types.VerifySchoolDocument,
    "\nmutation studentLogin($studentlogin: StudentLogin!) {   \n  studentLogin(input: $studentlogin)\n}\n": types.StudentLoginDocument,
    "\n  mutation resetStudentPassword($new_password: String!) {   \n    resetStudentPassword(new_password: $new_password){\n      id\n    }\n  }\n": types.ResetStudentPasswordDocument,
    "\nmutation forgotStudentPassword($schoolid: Int!, $registration_number: String!){\n  forgotStudentPassword(schoolid: $schoolid, registration_number: $registration_number){\n    phone_number\n    success\n  }\n}\n  ": types.ForgotStudentPasswordDocument,
    "\nmutation requestStudentPasswordReset($schoolid: Int!, $registration_number: String!, $phone_number: String!, $otp: String!){\n  requestStudentPasswordReset(schoolid: $schoolid, registration_number: $registration_number, phone_number: $phone_number, otp: $otp)\n}\n  ": types.RequestStudentPasswordResetDocument,
    "\nquery SchoolsProfile{\n  getSchoolsProfile{\n    id\n    name\n  }\n}\n": types.SchoolsProfileDocument,
    "\nquery studentProfile{\n  getStudentProfile{\n    name\n    phone_number\n    registration_number\n    school{\n      name\n      phone_number\n    }\n  }\n}\n": types.StudentProfileDocument,
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
export function gql(source: "\n   mutation resetSchoolPassword($new_password: String!){\n    resetSchoolPassword(new_password: $new_password){\n      id\n    }\n  }\n "): (typeof documents)["\n   mutation resetSchoolPassword($new_password: String!){\n    resetSchoolPassword(new_password: $new_password){\n      id\n    }\n  }\n "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation schoolLogin($schoollogin: SchoolLogin!) {   \n  schoolLogin(input: $schoollogin) \n}\n"): (typeof documents)["\nmutation schoolLogin($schoollogin: SchoolLogin!) {   \n  schoolLogin(input: $schoollogin) \n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation forgotSchoolPassword($phone_number: String!){\n  forgotSchoolPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"): (typeof documents)["\nmutation forgotSchoolPassword($phone_number: String!){\n  forgotSchoolPassword(phone_number: $phone_number){\n    phone_number\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation requestSchoolPasswordReset($verificationinfo: verificationinfo!){\n      requestSchoolPasswordReset(input: $verificationinfo)\n   }\n"): (typeof documents)["\n   mutation requestSchoolPasswordReset($verificationinfo: verificationinfo!){\n      requestSchoolPasswordReset(input: $verificationinfo)\n   }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getUnapprovedJobs{\n  getUnapprovedJobs{\n    id\n    title\n    industry\n    description\n  }\n}\n"): (typeof documents)["\nquery getUnapprovedJobs{\n  getUnapprovedJobs{\n    id\n    title\n    industry\n    description\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddStudent($newstudents: [NewStudent!]!) {   \n    AddStudents( students: $newstudents ) {    \n      name\n     }    \n }\n"): (typeof documents)["\n  mutation AddStudent($newstudents: [NewStudent!]!) {   \n    AddStudents( students: $newstudents ) {    \n      name\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SchoolProfile{\n     getSchoolProfile{\n         name\n         phone_number\n    }\n  }\n"): (typeof documents)["\n  query SchoolProfile{\n     getSchoolProfile{\n         name\n         phone_number\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getJobs{\n    getJobs{\n      id\n      title\n      industry\n      description\n    }\n  }\n  "): (typeof documents)["\n  query getJobs{\n    getJobs{\n      id\n      title\n      industry\n      description\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createSchool($newschool: NewSchool!) {   \n    createSchool( input: $newschool ) {    \n      id\n     }    \n }\n"): (typeof documents)["\n  mutation createSchool($newschool: NewSchool!) {   \n    createSchool( input: $newschool ) {    \n      id\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query checkphonenumber($phone_number: String!) {\n    schoolPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"): (typeof documents)["\n  query checkphonenumber($phone_number: String!) {\n    schoolPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifySchool ($verificationinfo: verificationinfo!) {   \n  verifySchool(input: $verificationinfo) {    \n    id\n   }    \n}\n"): (typeof documents)["\n  mutation verifySchool ($verificationinfo: verificationinfo!) {   \n  verifySchool(input: $verificationinfo) {    \n    id\n   }    \n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation studentLogin($studentlogin: StudentLogin!) {   \n  studentLogin(input: $studentlogin)\n}\n"): (typeof documents)["\nmutation studentLogin($studentlogin: StudentLogin!) {   \n  studentLogin(input: $studentlogin)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation resetStudentPassword($new_password: String!) {   \n    resetStudentPassword(new_password: $new_password){\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation resetStudentPassword($new_password: String!) {   \n    resetStudentPassword(new_password: $new_password){\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation forgotStudentPassword($schoolid: Int!, $registration_number: String!){\n  forgotStudentPassword(schoolid: $schoolid, registration_number: $registration_number){\n    phone_number\n    success\n  }\n}\n  "): (typeof documents)["\nmutation forgotStudentPassword($schoolid: Int!, $registration_number: String!){\n  forgotStudentPassword(schoolid: $schoolid, registration_number: $registration_number){\n    phone_number\n    success\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation requestStudentPasswordReset($schoolid: Int!, $registration_number: String!, $phone_number: String!, $otp: String!){\n  requestStudentPasswordReset(schoolid: $schoolid, registration_number: $registration_number, phone_number: $phone_number, otp: $otp)\n}\n  "): (typeof documents)["\nmutation requestStudentPasswordReset($schoolid: Int!, $registration_number: String!, $phone_number: String!, $otp: String!){\n  requestStudentPasswordReset(schoolid: $schoolid, registration_number: $registration_number, phone_number: $phone_number, otp: $otp)\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery SchoolsProfile{\n  getSchoolsProfile{\n    id\n    name\n  }\n}\n"): (typeof documents)["\nquery SchoolsProfile{\n  getSchoolsProfile{\n    id\n    name\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery studentProfile{\n  getStudentProfile{\n    name\n    phone_number\n    registration_number\n    school{\n      name\n      phone_number\n    }\n  }\n}\n"): (typeof documents)["\nquery studentProfile{\n  getStudentProfile{\n    name\n    phone_number\n    registration_number\n    school{\n      name\n      phone_number\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n"): (typeof documents)["\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;