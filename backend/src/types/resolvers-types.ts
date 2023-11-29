import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AdDeleted = {
  __typename?: 'AdDeleted';
  category: Category;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AdWithFilter = {
  __typename?: 'AdWithFilter';
  category: PartialCategoryForFilter;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateAdInput = {
  category: PartialCategoryInput;
  description?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type FilterAd = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createCategory: Category;
  deleteAd: AdDeleted;
  updateAd: Ad;
};


export type MutationCreateAdArgs = {
  data: CreateAdInput;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAdArgs = {
  data: UpdateAdInput;
};

export type PartialCategoryForFilter = {
  __typename?: 'PartialCategoryForFilter';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PartialCategoryInput = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  findAdById: Ad;
  findCategory: Category;
  listAds: Array<Ad>;
  listAdsByCategory: Array<Ad>;
  listAdsWithFilter: Array<AdWithFilter>;
  listCategories: Array<Category>;
};


export type QueryFindAdByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryListAdsByCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryListAdsWithFilterArgs = {
  filter: FilterAd;
};


export type QueryListCategoriesArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  ads: Array<Ad>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UpdateAdInput = {
  category?: InputMaybe<PartialCategoryInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Ad: ResolverTypeWrapper<Ad>;
  AdDeleted: ResolverTypeWrapper<AdDeleted>;
  AdWithFilter: ResolverTypeWrapper<AdWithFilter>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CreateAdInput: CreateAdInput;
  CreateCategoryInput: CreateCategoryInput;
  FilterAd: FilterAd;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PartialCategoryForFilter: ResolverTypeWrapper<PartialCategoryForFilter>;
  PartialCategoryInput: PartialCategoryInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  UpdateAdInput: UpdateAdInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Ad: Ad;
  AdDeleted: AdDeleted;
  AdWithFilter: AdWithFilter;
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  CreateAdInput: CreateAdInput;
  CreateCategoryInput: CreateCategoryInput;
  FilterAd: FilterAd;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  PartialCategoryForFilter: PartialCategoryForFilter;
  PartialCategoryInput: PartialCategoryInput;
  Query: {};
  String: Scalars['String']['output'];
  Tag: Tag;
  UpdateAdInput: UpdateAdInput;
}>;

export type AdResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ad'] = ResolversParentTypes['Ad']> = ResolversObject<{
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdDeletedResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdDeleted'] = ResolversParentTypes['AdDeleted']> = ResolversObject<{
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdWithFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdWithFilter'] = ResolversParentTypes['AdWithFilter']> = ResolversObject<{
  category?: Resolver<ResolversTypes['PartialCategoryForFilter'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  ads?: Resolver<Array<ResolversTypes['Ad']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAd?: Resolver<ResolversTypes['Ad'], ParentType, ContextType, RequireFields<MutationCreateAdArgs, 'data'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  deleteAd?: Resolver<ResolversTypes['AdDeleted'], ParentType, ContextType, RequireFields<MutationDeleteAdArgs, 'id'>>;
  updateAd?: Resolver<ResolversTypes['Ad'], ParentType, ContextType, RequireFields<MutationUpdateAdArgs, 'data'>>;
}>;

export type PartialCategoryForFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartialCategoryForFilter'] = ResolversParentTypes['PartialCategoryForFilter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  findAdById?: Resolver<ResolversTypes['Ad'], ParentType, ContextType, RequireFields<QueryFindAdByIdArgs, 'id'>>;
  findCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryFindCategoryArgs, 'id'>>;
  listAds?: Resolver<Array<ResolversTypes['Ad']>, ParentType, ContextType>;
  listAdsByCategory?: Resolver<Array<ResolversTypes['Ad']>, ParentType, ContextType, RequireFields<QueryListAdsByCategoryArgs, 'id'>>;
  listAdsWithFilter?: Resolver<Array<ResolversTypes['AdWithFilter']>, ParentType, ContextType, RequireFields<QueryListAdsWithFilterArgs, 'filter'>>;
  listCategories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<QueryListCategoriesArgs>>;
}>;

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  ads?: Resolver<Array<ResolversTypes['Ad']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Ad?: AdResolvers<ContextType>;
  AdDeleted?: AdDeletedResolvers<ContextType>;
  AdWithFilter?: AdWithFilterResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PartialCategoryForFilter?: PartialCategoryForFilterResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
}>;

