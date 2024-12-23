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
    "\nmutation schoolLogin($schoollogin: SchoolLogin!) {   \n  schoolLogin(input: $schoollogin) \n}\n": types.SchoolLoginDocument,
    "\n  mutation createSchool($newschool: NewSchool!) {   \n    createSchool( input: $newschool ) {    \n      id\n      createdAt\n      updatedAt\n      deletedAt\n      name\n      phone_number\n      password\n      badge\n      Website\n     }    \n }\n": types.CreateSchoolDocument,
    "\n  query checkphonenumber($phone_number: String!) {\n    schoolPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n": types.CheckphonenumberDocument,
    "\n  mutation verifySchool ($verificationinfo: verificationinfo!) {   \n  verifySchool(input: $verificationinfo) {    \n    id\n    createdAt\n    updatedAt\n    deletedAt\n    name\n    phone_number\n    password\n    badge\n    Website\n   }    \n}\n": types.VerifySchoolDocument,
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
export function gql(source: "\nmutation schoolLogin($schoollogin: SchoolLogin!) {   \n  schoolLogin(input: $schoollogin) \n}\n"): (typeof documents)["\nmutation schoolLogin($schoollogin: SchoolLogin!) {   \n  schoolLogin(input: $schoollogin) \n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createSchool($newschool: NewSchool!) {   \n    createSchool( input: $newschool ) {    \n      id\n      createdAt\n      updatedAt\n      deletedAt\n      name\n      phone_number\n      password\n      badge\n      Website\n     }    \n }\n"): (typeof documents)["\n  mutation createSchool($newschool: NewSchool!) {   \n    createSchool( input: $newschool ) {    \n      id\n      createdAt\n      updatedAt\n      deletedAt\n      name\n      phone_number\n      password\n      badge\n      Website\n     }    \n }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query checkphonenumber($phone_number: String!) {\n    schoolPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"): (typeof documents)["\n  query checkphonenumber($phone_number: String!) {\n    schoolPhoneNumberExists(phone_number: $phone_number) {\n      verified\n      unverified\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifySchool ($verificationinfo: verificationinfo!) {   \n  verifySchool(input: $verificationinfo) {    \n    id\n    createdAt\n    updatedAt\n    deletedAt\n    name\n    phone_number\n    password\n    badge\n    Website\n   }    \n}\n"): (typeof documents)["\n  mutation verifySchool ($verificationinfo: verificationinfo!) {   \n  verifySchool(input: $verificationinfo) {    \n    id\n    createdAt\n    updatedAt\n    deletedAt\n    name\n    phone_number\n    password\n    badge\n    Website\n   }    \n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n"): (typeof documents)["\n   mutation sendCode($phone_number: String!) {   \n    sendCode(phone_number: $phone_number) {    \n      phone_number\n      success\n     }    \n }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;