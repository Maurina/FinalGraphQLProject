/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CardCreateInput: { // input type
    dateCreated: string; // String!
    description: string; // String!
    id?: string | null; // String
    image?: string | null; // String
    keywords?: NexusGenInputs['CardCreatekeywordsInput'] | null; // CardCreatekeywordsInput
    source: string; // String!
    title: string; // String!
  }
  CardCreatekeywordsInput: { // input type
    set?: string[] | null; // [String!]
  }
  CardUpdateInput: { // input type
    dateCreated?: string | null; // String
    description?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    keywords?: NexusGenInputs['CardUpdatekeywordsInput'] | null; // CardUpdatekeywordsInput
    source?: string | null; // String
    title?: string | null; // String
  }
  CardUpdatekeywordsInput: { // input type
    set?: string[] | null; // [String!]
  }
  CardWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Card: prisma.Card;
  Mutation: {};
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CardCreateInput: NexusGenInputs['CardCreateInput'];
  CardCreatekeywordsInput: NexusGenInputs['CardCreatekeywordsInput'];
  CardUpdateInput: NexusGenInputs['CardUpdateInput'];
  CardUpdatekeywordsInput: NexusGenInputs['CardUpdatekeywordsInput'];
  CardWhereUniqueInput: NexusGenInputs['CardWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Card: { // field return type
    dateCreated: string; // String!
    description: string; // String!
    id: string; // String!
    image: string | null; // String
    keywords: string[]; // [String!]!
    source: string; // String!
    title: string; // String!
  }
  Mutation: { // field return type
    createOneCard: NexusGenRootTypes['Card']; // Card!
    deleteOneCard: NexusGenRootTypes['Card'] | null; // Card
    updateOneCard: NexusGenRootTypes['Card'] | null; // Card
  }
  Query: { // field return type
    card: NexusGenRootTypes['Card'] | null; // Card
    Card: NexusGenRootTypes['Card'] | null; // Card
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    Cards: NexusGenRootTypes['Card'][]; // [Card!]!
    Source: NexusGenRootTypes['Card'][]; // [Card!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneCard: { // args
      data: NexusGenInputs['CardCreateInput']; // CardCreateInput!
    }
    deleteOneCard: { // args
      where: NexusGenInputs['CardWhereUniqueInput']; // CardWhereUniqueInput!
    }
    updateOneCard: { // args
      data: NexusGenInputs['CardUpdateInput']; // CardUpdateInput!
      where: NexusGenInputs['CardWhereUniqueInput']; // CardWhereUniqueInput!
    }
  }
  Query: {
    card: { // args
      where: NexusGenInputs['CardWhereUniqueInput']; // CardWhereUniqueInput!
    }
    Card: { // args
      id?: string | null; // ID
    }
    cards: { // args
      after?: NexusGenInputs['CardWhereUniqueInput'] | null; // CardWhereUniqueInput
      before?: NexusGenInputs['CardWhereUniqueInput'] | null; // CardWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    Cards: { // args
      searchString?: string | null; // String
    }
    Source: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Card" | "Mutation" | "Query";

export type NexusGenInputNames = "CardCreateInput" | "CardCreatekeywordsInput" | "CardUpdateInput" | "CardUpdatekeywordsInput" | "CardWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}