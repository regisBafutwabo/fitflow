import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  interval: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "exercise_logs" */
export type Exercise_Logs = {
  __typename?: 'exercise_logs';
  completed: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['interval']['output']>;
  /** An object relationship */
  exercise: Exercises;
  exercise_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  weight?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  workout_log: Workout_Logs;
  workout_log_id: Scalars['uuid']['output'];
};

/** aggregated selection of "exercise_logs" */
export type Exercise_Logs_Aggregate = {
  __typename?: 'exercise_logs_aggregate';
  aggregate?: Maybe<Exercise_Logs_Aggregate_Fields>;
  nodes: Array<Exercise_Logs>;
};

export type Exercise_Logs_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Exercise_Logs_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Exercise_Logs_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Exercise_Logs_Aggregate_Bool_Exp_Count>;
};

export type Exercise_Logs_Aggregate_Bool_Exp_Bool_And = {
  arguments: Exercise_Logs_Select_Column_Exercise_Logs_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exercise_Logs_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Exercise_Logs_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Exercise_Logs_Select_Column_Exercise_Logs_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exercise_Logs_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Exercise_Logs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exercise_Logs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "exercise_logs" */
export type Exercise_Logs_Aggregate_Fields = {
  __typename?: 'exercise_logs_aggregate_fields';
  avg?: Maybe<Exercise_Logs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exercise_Logs_Max_Fields>;
  min?: Maybe<Exercise_Logs_Min_Fields>;
  stddev?: Maybe<Exercise_Logs_Stddev_Fields>;
  stddev_pop?: Maybe<Exercise_Logs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exercise_Logs_Stddev_Samp_Fields>;
  sum?: Maybe<Exercise_Logs_Sum_Fields>;
  var_pop?: Maybe<Exercise_Logs_Var_Pop_Fields>;
  var_samp?: Maybe<Exercise_Logs_Var_Samp_Fields>;
  variance?: Maybe<Exercise_Logs_Variance_Fields>;
};


/** aggregate fields of "exercise_logs" */
export type Exercise_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "exercise_logs" */
export type Exercise_Logs_Aggregate_Order_By = {
  avg?: InputMaybe<Exercise_Logs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Logs_Max_Order_By>;
  min?: InputMaybe<Exercise_Logs_Min_Order_By>;
  stddev?: InputMaybe<Exercise_Logs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Exercise_Logs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Exercise_Logs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Exercise_Logs_Sum_Order_By>;
  var_pop?: InputMaybe<Exercise_Logs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Exercise_Logs_Var_Samp_Order_By>;
  variance?: InputMaybe<Exercise_Logs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_logs" */
export type Exercise_Logs_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Logs_On_Conflict>;
};

/** aggregate avg on columns */
export type Exercise_Logs_Avg_Fields = {
  __typename?: 'exercise_logs_avg_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "exercise_logs" */
export type Exercise_Logs_Avg_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exercise_logs". All fields are combined with a logical 'AND'. */
export type Exercise_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Logs_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Logs_Bool_Exp>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration?: InputMaybe<Interval_Comparison_Exp>;
  exercise?: InputMaybe<Exercises_Bool_Exp>;
  exercise_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reps?: InputMaybe<Int_Comparison_Exp>;
  sets?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
  workout_log?: InputMaybe<Workout_Logs_Bool_Exp>;
  workout_log_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_logs" */
export enum Exercise_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExerciseLogsPkey = 'exercise_logs_pkey'
}

/** input type for incrementing numeric columns in table "exercise_logs" */
export type Exercise_Logs_Inc_Input = {
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "exercise_logs" */
export type Exercise_Logs_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  exercise?: InputMaybe<Exercises_Obj_Rel_Insert_Input>;
  exercise_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
  workout_log?: InputMaybe<Workout_Logs_Obj_Rel_Insert_Input>;
  workout_log_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Exercise_Logs_Max_Fields = {
  __typename?: 'exercise_logs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  exercise_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
  workout_log_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "exercise_logs" */
export type Exercise_Logs_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  workout_log_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Logs_Min_Fields = {
  __typename?: 'exercise_logs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  exercise_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
  workout_log_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "exercise_logs" */
export type Exercise_Logs_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  workout_log_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_logs" */
export type Exercise_Logs_Mutation_Response = {
  __typename?: 'exercise_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Logs>;
};

/** on_conflict condition type for table "exercise_logs" */
export type Exercise_Logs_On_Conflict = {
  constraint: Exercise_Logs_Constraint;
  update_columns?: Array<Exercise_Logs_Update_Column>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_logs". */
export type Exercise_Logs_Order_By = {
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  exercise?: InputMaybe<Exercises_Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  workout_log?: InputMaybe<Workout_Logs_Order_By>;
  workout_log_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_logs */
export type Exercise_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "exercise_logs" */
export enum Exercise_Logs_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Id = 'id',
  /** column name */
  Reps = 'reps',
  /** column name */
  Sets = 'sets',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight',
  /** column name */
  WorkoutLogId = 'workout_log_id'
}

/** select "exercise_logs_aggregate_bool_exp_bool_and_arguments_columns" columns of table "exercise_logs" */
export enum Exercise_Logs_Select_Column_Exercise_Logs_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Completed = 'completed'
}

/** select "exercise_logs_aggregate_bool_exp_bool_or_arguments_columns" columns of table "exercise_logs" */
export enum Exercise_Logs_Select_Column_Exercise_Logs_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Completed = 'completed'
}

/** input type for updating data in table "exercise_logs" */
export type Exercise_Logs_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  exercise_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
  workout_log_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Exercise_Logs_Stddev_Fields = {
  __typename?: 'exercise_logs_stddev_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "exercise_logs" */
export type Exercise_Logs_Stddev_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exercise_Logs_Stddev_Pop_Fields = {
  __typename?: 'exercise_logs_stddev_pop_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "exercise_logs" */
export type Exercise_Logs_Stddev_Pop_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exercise_Logs_Stddev_Samp_Fields = {
  __typename?: 'exercise_logs_stddev_samp_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "exercise_logs" */
export type Exercise_Logs_Stddev_Samp_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "exercise_logs" */
export type Exercise_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exercise_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exercise_Logs_Stream_Cursor_Value_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  exercise_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
  workout_log_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Exercise_Logs_Sum_Fields = {
  __typename?: 'exercise_logs_sum_fields';
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "exercise_logs" */
export type Exercise_Logs_Sum_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "exercise_logs" */
export enum Exercise_Logs_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Id = 'id',
  /** column name */
  Reps = 'reps',
  /** column name */
  Sets = 'sets',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight',
  /** column name */
  WorkoutLogId = 'workout_log_id'
}

export type Exercise_Logs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exercise_Logs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exercise_Logs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Exercise_Logs_Var_Pop_Fields = {
  __typename?: 'exercise_logs_var_pop_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "exercise_logs" */
export type Exercise_Logs_Var_Pop_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exercise_Logs_Var_Samp_Fields = {
  __typename?: 'exercise_logs_var_samp_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "exercise_logs" */
export type Exercise_Logs_Var_Samp_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Exercise_Logs_Variance_Fields = {
  __typename?: 'exercise_logs_variance_fields';
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "exercise_logs" */
export type Exercise_Logs_Variance_Order_By = {
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** columns and relationships of "exercises" */
export type Exercises = {
  __typename?: 'exercises';
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  exercise_logs: Array<Exercise_Logs>;
  /** An aggregate relationship */
  exercise_logs_aggregate: Exercise_Logs_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  workout_day_exercises: Array<Workout_Day_Exercises>;
  /** An aggregate relationship */
  workout_day_exercises_aggregate: Workout_Day_Exercises_Aggregate;
};


/** columns and relationships of "exercises" */
export type ExercisesExercise_LogsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


/** columns and relationships of "exercises" */
export type ExercisesExercise_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


/** columns and relationships of "exercises" */
export type ExercisesWorkout_Day_ExercisesArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


/** columns and relationships of "exercises" */
export type ExercisesWorkout_Day_Exercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};

/** aggregated selection of "exercises" */
export type Exercises_Aggregate = {
  __typename?: 'exercises_aggregate';
  aggregate?: Maybe<Exercises_Aggregate_Fields>;
  nodes: Array<Exercises>;
};

/** aggregate fields of "exercises" */
export type Exercises_Aggregate_Fields = {
  __typename?: 'exercises_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Exercises_Max_Fields>;
  min?: Maybe<Exercises_Min_Fields>;
};


/** aggregate fields of "exercises" */
export type Exercises_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercises_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "exercises". All fields are combined with a logical 'AND'. */
export type Exercises_Bool_Exp = {
  _and?: InputMaybe<Array<Exercises_Bool_Exp>>;
  _not?: InputMaybe<Exercises_Bool_Exp>;
  _or?: InputMaybe<Array<Exercises_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exercise_logs?: InputMaybe<Exercise_Logs_Bool_Exp>;
  exercise_logs_aggregate?: InputMaybe<Exercise_Logs_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workout_day_exercises?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
  workout_day_exercises_aggregate?: InputMaybe<Workout_Day_Exercises_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "exercises" */
export enum Exercises_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExercisesPkey = 'exercises_pkey'
}

/** input type for inserting data into table "exercises" */
export type Exercises_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  exercise_logs?: InputMaybe<Exercise_Logs_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_day_exercises?: InputMaybe<Workout_Day_Exercises_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Exercises_Max_Fields = {
  __typename?: 'exercises_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Exercises_Min_Fields = {
  __typename?: 'exercises_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "exercises" */
export type Exercises_Mutation_Response = {
  __typename?: 'exercises_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercises>;
};

/** input type for inserting object relation for remote table "exercises" */
export type Exercises_Obj_Rel_Insert_Input = {
  data: Exercises_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercises_On_Conflict>;
};

/** on_conflict condition type for table "exercises" */
export type Exercises_On_Conflict = {
  constraint: Exercises_Constraint;
  update_columns?: Array<Exercises_Update_Column>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};

/** Ordering options when selecting data from "exercises". */
export type Exercises_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise_logs_aggregate?: InputMaybe<Exercise_Logs_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_day_exercises_aggregate?: InputMaybe<Workout_Day_Exercises_Aggregate_Order_By>;
};

/** primary key columns input for table: exercises */
export type Exercises_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "exercises" */
export enum Exercises_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exercises" */
export type Exercises_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "exercises" */
export type Exercises_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exercises_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exercises_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "exercises" */
export enum Exercises_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Exercises_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercises_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exercises_Bool_Exp;
};

/** columns and relationships of "favorites_workout_plans" */
export type Favorites_Workout_Plans = {
  __typename?: 'favorites_workout_plans';
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  workout_plan: Workout_Plans;
  workout_plan_id: Scalars['uuid']['output'];
};

/** aggregated selection of "favorites_workout_plans" */
export type Favorites_Workout_Plans_Aggregate = {
  __typename?: 'favorites_workout_plans_aggregate';
  aggregate?: Maybe<Favorites_Workout_Plans_Aggregate_Fields>;
  nodes: Array<Favorites_Workout_Plans>;
};

export type Favorites_Workout_Plans_Aggregate_Bool_Exp = {
  count?: InputMaybe<Favorites_Workout_Plans_Aggregate_Bool_Exp_Count>;
};

export type Favorites_Workout_Plans_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "favorites_workout_plans" */
export type Favorites_Workout_Plans_Aggregate_Fields = {
  __typename?: 'favorites_workout_plans_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Favorites_Workout_Plans_Max_Fields>;
  min?: Maybe<Favorites_Workout_Plans_Min_Fields>;
};


/** aggregate fields of "favorites_workout_plans" */
export type Favorites_Workout_Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Favorites_Workout_Plans_Max_Order_By>;
  min?: InputMaybe<Favorites_Workout_Plans_Min_Order_By>;
};

/** input type for inserting array relation for remote table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Arr_Rel_Insert_Input = {
  data: Array<Favorites_Workout_Plans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Favorites_Workout_Plans_On_Conflict>;
};

/** Boolean expression to filter rows from the table "favorites_workout_plans". All fields are combined with a logical 'AND'. */
export type Favorites_Workout_Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Favorites_Workout_Plans_Bool_Exp>>;
  _not?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Favorites_Workout_Plans_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  workout_plan?: InputMaybe<Workout_Plans_Bool_Exp>;
  workout_plan_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "favorites_workout_plans" */
export enum Favorites_Workout_Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  FavoritesWorkoutPlansPkey = 'favorites_workout_plans_pkey',
  /** unique or primary key constraint on columns "user_id", "workout_plan_id" */
  FavoritesWorkoutPlansUserIdWorkoutPlanIdKey = 'favorites_workout_plans_user_id_workout_plan_id_key'
}

/** input type for inserting data into table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_plan?: InputMaybe<Workout_Plans_Obj_Rel_Insert_Input>;
  workout_plan_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Favorites_Workout_Plans_Max_Fields = {
  __typename?: 'favorites_workout_plans_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  workout_plan_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_plan_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Favorites_Workout_Plans_Min_Fields = {
  __typename?: 'favorites_workout_plans_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  workout_plan_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_plan_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Mutation_Response = {
  __typename?: 'favorites_workout_plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Favorites_Workout_Plans>;
};

/** on_conflict condition type for table "favorites_workout_plans" */
export type Favorites_Workout_Plans_On_Conflict = {
  constraint: Favorites_Workout_Plans_Constraint;
  update_columns?: Array<Favorites_Workout_Plans_Update_Column>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "favorites_workout_plans". */
export type Favorites_Workout_Plans_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_plan?: InputMaybe<Workout_Plans_Order_By>;
  workout_plan_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: favorites_workout_plans */
export type Favorites_Workout_Plans_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "favorites_workout_plans" */
export enum Favorites_Workout_Plans_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkoutPlanId = 'workout_plan_id'
}

/** input type for updating data in table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_plan_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "favorites_workout_plans" */
export type Favorites_Workout_Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Favorites_Workout_Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Favorites_Workout_Plans_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_plan_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "favorites_workout_plans" */
export enum Favorites_Workout_Plans_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkoutPlanId = 'workout_plan_id'
}

export type Favorites_Workout_Plans_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Favorites_Workout_Plans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Favorites_Workout_Plans_Bool_Exp;
};

/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['interval']['input']>;
  _gt?: InputMaybe<Scalars['interval']['input']>;
  _gte?: InputMaybe<Scalars['interval']['input']>;
  _in?: InputMaybe<Array<Scalars['interval']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['interval']['input']>;
  _lte?: InputMaybe<Scalars['interval']['input']>;
  _neq?: InputMaybe<Scalars['interval']['input']>;
  _nin?: InputMaybe<Array<Scalars['interval']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "exercise_logs" */
  delete_exercise_logs?: Maybe<Exercise_Logs_Mutation_Response>;
  /** delete single row from the table: "exercise_logs" */
  delete_exercise_logs_by_pk?: Maybe<Exercise_Logs>;
  /** delete data from the table: "exercises" */
  delete_exercises?: Maybe<Exercises_Mutation_Response>;
  /** delete single row from the table: "exercises" */
  delete_exercises_by_pk?: Maybe<Exercises>;
  /** delete data from the table: "favorites_workout_plans" */
  delete_favorites_workout_plans?: Maybe<Favorites_Workout_Plans_Mutation_Response>;
  /** delete single row from the table: "favorites_workout_plans" */
  delete_favorites_workout_plans_by_pk?: Maybe<Favorites_Workout_Plans>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "workout_day_exercises" */
  delete_workout_day_exercises?: Maybe<Workout_Day_Exercises_Mutation_Response>;
  /** delete single row from the table: "workout_day_exercises" */
  delete_workout_day_exercises_by_pk?: Maybe<Workout_Day_Exercises>;
  /** delete data from the table: "workout_days" */
  delete_workout_days?: Maybe<Workout_Days_Mutation_Response>;
  /** delete single row from the table: "workout_days" */
  delete_workout_days_by_pk?: Maybe<Workout_Days>;
  /** delete data from the table: "workout_logs" */
  delete_workout_logs?: Maybe<Workout_Logs_Mutation_Response>;
  /** delete single row from the table: "workout_logs" */
  delete_workout_logs_by_pk?: Maybe<Workout_Logs>;
  /** delete data from the table: "workout_plans" */
  delete_workout_plans?: Maybe<Workout_Plans_Mutation_Response>;
  /** delete single row from the table: "workout_plans" */
  delete_workout_plans_by_pk?: Maybe<Workout_Plans>;
  /** insert data into the table: "exercise_logs" */
  insert_exercise_logs?: Maybe<Exercise_Logs_Mutation_Response>;
  /** insert a single row into the table: "exercise_logs" */
  insert_exercise_logs_one?: Maybe<Exercise_Logs>;
  /** insert data into the table: "exercises" */
  insert_exercises?: Maybe<Exercises_Mutation_Response>;
  /** insert a single row into the table: "exercises" */
  insert_exercises_one?: Maybe<Exercises>;
  /** insert data into the table: "favorites_workout_plans" */
  insert_favorites_workout_plans?: Maybe<Favorites_Workout_Plans_Mutation_Response>;
  /** insert a single row into the table: "favorites_workout_plans" */
  insert_favorites_workout_plans_one?: Maybe<Favorites_Workout_Plans>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "workout_day_exercises" */
  insert_workout_day_exercises?: Maybe<Workout_Day_Exercises_Mutation_Response>;
  /** insert a single row into the table: "workout_day_exercises" */
  insert_workout_day_exercises_one?: Maybe<Workout_Day_Exercises>;
  /** insert data into the table: "workout_days" */
  insert_workout_days?: Maybe<Workout_Days_Mutation_Response>;
  /** insert a single row into the table: "workout_days" */
  insert_workout_days_one?: Maybe<Workout_Days>;
  /** insert data into the table: "workout_logs" */
  insert_workout_logs?: Maybe<Workout_Logs_Mutation_Response>;
  /** insert a single row into the table: "workout_logs" */
  insert_workout_logs_one?: Maybe<Workout_Logs>;
  /** insert data into the table: "workout_plans" */
  insert_workout_plans?: Maybe<Workout_Plans_Mutation_Response>;
  /** insert a single row into the table: "workout_plans" */
  insert_workout_plans_one?: Maybe<Workout_Plans>;
  /** update data of the table: "exercise_logs" */
  update_exercise_logs?: Maybe<Exercise_Logs_Mutation_Response>;
  /** update single row of the table: "exercise_logs" */
  update_exercise_logs_by_pk?: Maybe<Exercise_Logs>;
  /** update multiples rows of table: "exercise_logs" */
  update_exercise_logs_many?: Maybe<Array<Maybe<Exercise_Logs_Mutation_Response>>>;
  /** update data of the table: "exercises" */
  update_exercises?: Maybe<Exercises_Mutation_Response>;
  /** update single row of the table: "exercises" */
  update_exercises_by_pk?: Maybe<Exercises>;
  /** update multiples rows of table: "exercises" */
  update_exercises_many?: Maybe<Array<Maybe<Exercises_Mutation_Response>>>;
  /** update data of the table: "favorites_workout_plans" */
  update_favorites_workout_plans?: Maybe<Favorites_Workout_Plans_Mutation_Response>;
  /** update single row of the table: "favorites_workout_plans" */
  update_favorites_workout_plans_by_pk?: Maybe<Favorites_Workout_Plans>;
  /** update multiples rows of table: "favorites_workout_plans" */
  update_favorites_workout_plans_many?: Maybe<Array<Maybe<Favorites_Workout_Plans_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "workout_day_exercises" */
  update_workout_day_exercises?: Maybe<Workout_Day_Exercises_Mutation_Response>;
  /** update single row of the table: "workout_day_exercises" */
  update_workout_day_exercises_by_pk?: Maybe<Workout_Day_Exercises>;
  /** update multiples rows of table: "workout_day_exercises" */
  update_workout_day_exercises_many?: Maybe<Array<Maybe<Workout_Day_Exercises_Mutation_Response>>>;
  /** update data of the table: "workout_days" */
  update_workout_days?: Maybe<Workout_Days_Mutation_Response>;
  /** update single row of the table: "workout_days" */
  update_workout_days_by_pk?: Maybe<Workout_Days>;
  /** update multiples rows of table: "workout_days" */
  update_workout_days_many?: Maybe<Array<Maybe<Workout_Days_Mutation_Response>>>;
  /** update data of the table: "workout_logs" */
  update_workout_logs?: Maybe<Workout_Logs_Mutation_Response>;
  /** update single row of the table: "workout_logs" */
  update_workout_logs_by_pk?: Maybe<Workout_Logs>;
  /** update multiples rows of table: "workout_logs" */
  update_workout_logs_many?: Maybe<Array<Maybe<Workout_Logs_Mutation_Response>>>;
  /** update data of the table: "workout_plans" */
  update_workout_plans?: Maybe<Workout_Plans_Mutation_Response>;
  /** update single row of the table: "workout_plans" */
  update_workout_plans_by_pk?: Maybe<Workout_Plans>;
  /** update multiples rows of table: "workout_plans" */
  update_workout_plans_many?: Maybe<Array<Maybe<Workout_Plans_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_LogsArgs = {
  where: Exercise_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ExercisesArgs = {
  where: Exercises_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercises_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Favorites_Workout_PlansArgs = {
  where: Favorites_Workout_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Favorites_Workout_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workout_Day_ExercisesArgs = {
  where: Workout_Day_Exercises_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_Day_Exercises_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workout_DaysArgs = {
  where: Workout_Days_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_Days_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workout_LogsArgs = {
  where: Workout_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workout_PlansArgs = {
  where: Workout_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Exercise_LogsArgs = {
  objects: Array<Exercise_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Logs_OneArgs = {
  object: Exercise_Logs_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExercisesArgs = {
  objects: Array<Exercises_Insert_Input>;
  on_conflict?: InputMaybe<Exercises_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercises_OneArgs = {
  object: Exercises_Insert_Input;
  on_conflict?: InputMaybe<Exercises_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Favorites_Workout_PlansArgs = {
  objects: Array<Favorites_Workout_Plans_Insert_Input>;
  on_conflict?: InputMaybe<Favorites_Workout_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Favorites_Workout_Plans_OneArgs = {
  object: Favorites_Workout_Plans_Insert_Input;
  on_conflict?: InputMaybe<Favorites_Workout_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Day_ExercisesArgs = {
  objects: Array<Workout_Day_Exercises_Insert_Input>;
  on_conflict?: InputMaybe<Workout_Day_Exercises_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Day_Exercises_OneArgs = {
  object: Workout_Day_Exercises_Insert_Input;
  on_conflict?: InputMaybe<Workout_Day_Exercises_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_DaysArgs = {
  objects: Array<Workout_Days_Insert_Input>;
  on_conflict?: InputMaybe<Workout_Days_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Days_OneArgs = {
  object: Workout_Days_Insert_Input;
  on_conflict?: InputMaybe<Workout_Days_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_LogsArgs = {
  objects: Array<Workout_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Workout_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Logs_OneArgs = {
  object: Workout_Logs_Insert_Input;
  on_conflict?: InputMaybe<Workout_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_PlansArgs = {
  objects: Array<Workout_Plans_Insert_Input>;
  on_conflict?: InputMaybe<Workout_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Plans_OneArgs = {
  object: Workout_Plans_Insert_Input;
  on_conflict?: InputMaybe<Workout_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_LogsArgs = {
  _inc?: InputMaybe<Exercise_Logs_Inc_Input>;
  _set?: InputMaybe<Exercise_Logs_Set_Input>;
  where: Exercise_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Logs_By_PkArgs = {
  _inc?: InputMaybe<Exercise_Logs_Inc_Input>;
  _set?: InputMaybe<Exercise_Logs_Set_Input>;
  pk_columns: Exercise_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Logs_ManyArgs = {
  updates: Array<Exercise_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExercisesArgs = {
  _set?: InputMaybe<Exercises_Set_Input>;
  where: Exercises_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercises_By_PkArgs = {
  _set?: InputMaybe<Exercises_Set_Input>;
  pk_columns: Exercises_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercises_ManyArgs = {
  updates: Array<Exercises_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Favorites_Workout_PlansArgs = {
  _set?: InputMaybe<Favorites_Workout_Plans_Set_Input>;
  where: Favorites_Workout_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Favorites_Workout_Plans_By_PkArgs = {
  _set?: InputMaybe<Favorites_Workout_Plans_Set_Input>;
  pk_columns: Favorites_Workout_Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Favorites_Workout_Plans_ManyArgs = {
  updates: Array<Favorites_Workout_Plans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Day_ExercisesArgs = {
  _inc?: InputMaybe<Workout_Day_Exercises_Inc_Input>;
  _set?: InputMaybe<Workout_Day_Exercises_Set_Input>;
  where: Workout_Day_Exercises_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Day_Exercises_By_PkArgs = {
  _inc?: InputMaybe<Workout_Day_Exercises_Inc_Input>;
  _set?: InputMaybe<Workout_Day_Exercises_Set_Input>;
  pk_columns: Workout_Day_Exercises_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Day_Exercises_ManyArgs = {
  updates: Array<Workout_Day_Exercises_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_DaysArgs = {
  _set?: InputMaybe<Workout_Days_Set_Input>;
  where: Workout_Days_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Days_By_PkArgs = {
  _set?: InputMaybe<Workout_Days_Set_Input>;
  pk_columns: Workout_Days_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Days_ManyArgs = {
  updates: Array<Workout_Days_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_LogsArgs = {
  _set?: InputMaybe<Workout_Logs_Set_Input>;
  where: Workout_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Logs_By_PkArgs = {
  _set?: InputMaybe<Workout_Logs_Set_Input>;
  pk_columns: Workout_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Logs_ManyArgs = {
  updates: Array<Workout_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_PlansArgs = {
  _set?: InputMaybe<Workout_Plans_Set_Input>;
  where: Workout_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Plans_By_PkArgs = {
  _set?: InputMaybe<Workout_Plans_Set_Input>;
  pk_columns: Workout_Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Plans_ManyArgs = {
  updates: Array<Workout_Plans_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  exercise_logs: Array<Exercise_Logs>;
  /** An aggregate relationship */
  exercise_logs_aggregate: Exercise_Logs_Aggregate;
  /** fetch data from the table: "exercise_logs" using primary key columns */
  exercise_logs_by_pk?: Maybe<Exercise_Logs>;
  /** fetch data from the table: "exercises" */
  exercises: Array<Exercises>;
  /** fetch aggregated fields from the table: "exercises" */
  exercises_aggregate: Exercises_Aggregate;
  /** fetch data from the table: "exercises" using primary key columns */
  exercises_by_pk?: Maybe<Exercises>;
  /** An array relationship */
  favorites_workout_plans: Array<Favorites_Workout_Plans>;
  /** An aggregate relationship */
  favorites_workout_plans_aggregate: Favorites_Workout_Plans_Aggregate;
  /** fetch data from the table: "favorites_workout_plans" using primary key columns */
  favorites_workout_plans_by_pk?: Maybe<Favorites_Workout_Plans>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  workout_day_exercises: Array<Workout_Day_Exercises>;
  /** An aggregate relationship */
  workout_day_exercises_aggregate: Workout_Day_Exercises_Aggregate;
  /** fetch data from the table: "workout_day_exercises" using primary key columns */
  workout_day_exercises_by_pk?: Maybe<Workout_Day_Exercises>;
  /** An array relationship */
  workout_days: Array<Workout_Days>;
  /** An aggregate relationship */
  workout_days_aggregate: Workout_Days_Aggregate;
  /** fetch data from the table: "workout_days" using primary key columns */
  workout_days_by_pk?: Maybe<Workout_Days>;
  /** An array relationship */
  workout_logs: Array<Workout_Logs>;
  /** An aggregate relationship */
  workout_logs_aggregate: Workout_Logs_Aggregate;
  /** fetch data from the table: "workout_logs" using primary key columns */
  workout_logs_by_pk?: Maybe<Workout_Logs>;
  /** An array relationship */
  workout_plans: Array<Workout_Plans>;
  /** An aggregate relationship */
  workout_plans_aggregate: Workout_Plans_Aggregate;
  /** fetch data from the table: "workout_plans" using primary key columns */
  workout_plans_by_pk?: Maybe<Workout_Plans>;
};


export type Query_RootExercise_LogsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


export type Query_RootExercise_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


export type Query_RootExercise_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExercisesArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Query_RootExercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Query_RootExercises_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFavorites_Workout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


export type Query_RootFavorites_Workout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


export type Query_RootFavorites_Workout_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkout_Day_ExercisesArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


export type Query_RootWorkout_Day_Exercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


export type Query_RootWorkout_Day_Exercises_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkout_DaysArgs = {
  distinct_on?: InputMaybe<Array<Workout_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Days_Order_By>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};


export type Query_RootWorkout_Days_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Days_Order_By>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};


export type Query_RootWorkout_Days_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkout_LogsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


export type Query_RootWorkout_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


export type Query_RootWorkout_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Plans_Order_By>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};


export type Query_RootWorkout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Plans_Order_By>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};


export type Query_RootWorkout_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  exercise_logs: Array<Exercise_Logs>;
  /** An aggregate relationship */
  exercise_logs_aggregate: Exercise_Logs_Aggregate;
  /** fetch data from the table: "exercise_logs" using primary key columns */
  exercise_logs_by_pk?: Maybe<Exercise_Logs>;
  /** fetch data from the table in a streaming manner: "exercise_logs" */
  exercise_logs_stream: Array<Exercise_Logs>;
  /** fetch data from the table: "exercises" */
  exercises: Array<Exercises>;
  /** fetch aggregated fields from the table: "exercises" */
  exercises_aggregate: Exercises_Aggregate;
  /** fetch data from the table: "exercises" using primary key columns */
  exercises_by_pk?: Maybe<Exercises>;
  /** fetch data from the table in a streaming manner: "exercises" */
  exercises_stream: Array<Exercises>;
  /** An array relationship */
  favorites_workout_plans: Array<Favorites_Workout_Plans>;
  /** An aggregate relationship */
  favorites_workout_plans_aggregate: Favorites_Workout_Plans_Aggregate;
  /** fetch data from the table: "favorites_workout_plans" using primary key columns */
  favorites_workout_plans_by_pk?: Maybe<Favorites_Workout_Plans>;
  /** fetch data from the table in a streaming manner: "favorites_workout_plans" */
  favorites_workout_plans_stream: Array<Favorites_Workout_Plans>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  workout_day_exercises: Array<Workout_Day_Exercises>;
  /** An aggregate relationship */
  workout_day_exercises_aggregate: Workout_Day_Exercises_Aggregate;
  /** fetch data from the table: "workout_day_exercises" using primary key columns */
  workout_day_exercises_by_pk?: Maybe<Workout_Day_Exercises>;
  /** fetch data from the table in a streaming manner: "workout_day_exercises" */
  workout_day_exercises_stream: Array<Workout_Day_Exercises>;
  /** An array relationship */
  workout_days: Array<Workout_Days>;
  /** An aggregate relationship */
  workout_days_aggregate: Workout_Days_Aggregate;
  /** fetch data from the table: "workout_days" using primary key columns */
  workout_days_by_pk?: Maybe<Workout_Days>;
  /** fetch data from the table in a streaming manner: "workout_days" */
  workout_days_stream: Array<Workout_Days>;
  /** An array relationship */
  workout_logs: Array<Workout_Logs>;
  /** An aggregate relationship */
  workout_logs_aggregate: Workout_Logs_Aggregate;
  /** fetch data from the table: "workout_logs" using primary key columns */
  workout_logs_by_pk?: Maybe<Workout_Logs>;
  /** fetch data from the table in a streaming manner: "workout_logs" */
  workout_logs_stream: Array<Workout_Logs>;
  /** An array relationship */
  workout_plans: Array<Workout_Plans>;
  /** An aggregate relationship */
  workout_plans_aggregate: Workout_Plans_Aggregate;
  /** fetch data from the table: "workout_plans" using primary key columns */
  workout_plans_by_pk?: Maybe<Workout_Plans>;
  /** fetch data from the table in a streaming manner: "workout_plans" */
  workout_plans_stream: Array<Workout_Plans>;
};


export type Subscription_RootExercise_LogsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


export type Subscription_RootExercise_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


export type Subscription_RootExercise_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExercise_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exercise_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


export type Subscription_RootExercisesArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Subscription_RootExercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Subscription_RootExercises_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExercises_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exercises_Stream_Cursor_Input>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Subscription_RootFavorites_Workout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


export type Subscription_RootFavorites_Workout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


export type Subscription_RootFavorites_Workout_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFavorites_Workout_Plans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Favorites_Workout_Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorkout_Day_ExercisesArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


export type Subscription_RootWorkout_Day_Exercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


export type Subscription_RootWorkout_Day_Exercises_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkout_Day_Exercises_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workout_Day_Exercises_Stream_Cursor_Input>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


export type Subscription_RootWorkout_DaysArgs = {
  distinct_on?: InputMaybe<Array<Workout_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Days_Order_By>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};


export type Subscription_RootWorkout_Days_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Days_Order_By>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};


export type Subscription_RootWorkout_Days_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkout_Days_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workout_Days_Stream_Cursor_Input>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};


export type Subscription_RootWorkout_LogsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


export type Subscription_RootWorkout_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


export type Subscription_RootWorkout_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkout_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workout_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


export type Subscription_RootWorkout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Plans_Order_By>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};


export type Subscription_RootWorkout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Plans_Order_By>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};


export type Subscription_RootWorkout_Plans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkout_Plans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workout_Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  clerk_id: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  /** An array relationship */
  favorites_workout_plans: Array<Favorites_Workout_Plans>;
  /** An aggregate relationship */
  favorites_workout_plans_aggregate: Favorites_Workout_Plans_Aggregate;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  username?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  workout_logs: Array<Workout_Logs>;
  /** An aggregate relationship */
  workout_logs_aggregate: Workout_Logs_Aggregate;
  /** An array relationship */
  workout_plans: Array<Workout_Plans>;
  /** An aggregate relationship */
  workout_plans_aggregate: Workout_Plans_Aggregate;
};


/** columns and relationships of "users" */
export type UsersFavorites_Workout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFavorites_Workout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkout_LogsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkout_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Plans_Order_By>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Plans_Order_By>>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  clerk_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  favorites_workout_plans?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
  favorites_workout_plans_aggregate?: InputMaybe<Favorites_Workout_Plans_Aggregate_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  workout_logs?: InputMaybe<Workout_Logs_Bool_Exp>;
  workout_logs_aggregate?: InputMaybe<Workout_Logs_Aggregate_Bool_Exp>;
  workout_plans?: InputMaybe<Workout_Plans_Bool_Exp>;
  workout_plans_aggregate?: InputMaybe<Workout_Plans_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "clerk_id" */
  UsersClerkIdKey = 'users_clerk_id_key',
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  clerk_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  favorites_workout_plans?: InputMaybe<Favorites_Workout_Plans_Arr_Rel_Insert_Input>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  workout_logs?: InputMaybe<Workout_Logs_Arr_Rel_Insert_Input>;
  workout_plans?: InputMaybe<Workout_Plans_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  clerk_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  clerk_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  clerk_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  favorites_workout_plans_aggregate?: InputMaybe<Favorites_Workout_Plans_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  workout_logs_aggregate?: InputMaybe<Workout_Logs_Aggregate_Order_By>;
  workout_plans_aggregate?: InputMaybe<Workout_Plans_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ClerkId = 'clerk_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  clerk_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  clerk_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ClerkId = 'clerk_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "workout_day_exercises" */
export type Workout_Day_Exercises = {
  __typename?: 'workout_day_exercises';
  created_at: Scalars['timestamptz']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  exercise: Exercises;
  exercise_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  workout_day: Workout_Days;
  workout_day_id: Scalars['uuid']['output'];
};

/** aggregated selection of "workout_day_exercises" */
export type Workout_Day_Exercises_Aggregate = {
  __typename?: 'workout_day_exercises_aggregate';
  aggregate?: Maybe<Workout_Day_Exercises_Aggregate_Fields>;
  nodes: Array<Workout_Day_Exercises>;
};

export type Workout_Day_Exercises_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workout_Day_Exercises_Aggregate_Bool_Exp_Count>;
};

export type Workout_Day_Exercises_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workout_day_exercises" */
export type Workout_Day_Exercises_Aggregate_Fields = {
  __typename?: 'workout_day_exercises_aggregate_fields';
  avg?: Maybe<Workout_Day_Exercises_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Workout_Day_Exercises_Max_Fields>;
  min?: Maybe<Workout_Day_Exercises_Min_Fields>;
  stddev?: Maybe<Workout_Day_Exercises_Stddev_Fields>;
  stddev_pop?: Maybe<Workout_Day_Exercises_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workout_Day_Exercises_Stddev_Samp_Fields>;
  sum?: Maybe<Workout_Day_Exercises_Sum_Fields>;
  var_pop?: Maybe<Workout_Day_Exercises_Var_Pop_Fields>;
  var_samp?: Maybe<Workout_Day_Exercises_Var_Samp_Fields>;
  variance?: Maybe<Workout_Day_Exercises_Variance_Fields>;
};


/** aggregate fields of "workout_day_exercises" */
export type Workout_Day_Exercises_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_day_exercises" */
export type Workout_Day_Exercises_Aggregate_Order_By = {
  avg?: InputMaybe<Workout_Day_Exercises_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workout_Day_Exercises_Max_Order_By>;
  min?: InputMaybe<Workout_Day_Exercises_Min_Order_By>;
  stddev?: InputMaybe<Workout_Day_Exercises_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workout_Day_Exercises_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workout_Day_Exercises_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workout_Day_Exercises_Sum_Order_By>;
  var_pop?: InputMaybe<Workout_Day_Exercises_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workout_Day_Exercises_Var_Samp_Order_By>;
  variance?: InputMaybe<Workout_Day_Exercises_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workout_day_exercises" */
export type Workout_Day_Exercises_Arr_Rel_Insert_Input = {
  data: Array<Workout_Day_Exercises_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Day_Exercises_On_Conflict>;
};

/** aggregate avg on columns */
export type Workout_Day_Exercises_Avg_Fields = {
  __typename?: 'workout_day_exercises_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workout_day_exercises". All fields are combined with a logical 'AND'. */
export type Workout_Day_Exercises_Bool_Exp = {
  _and?: InputMaybe<Array<Workout_Day_Exercises_Bool_Exp>>;
  _not?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
  _or?: InputMaybe<Array<Workout_Day_Exercises_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  exercise?: InputMaybe<Exercises_Bool_Exp>;
  exercise_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reps?: InputMaybe<Int_Comparison_Exp>;
  sets?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workout_day?: InputMaybe<Workout_Days_Bool_Exp>;
  workout_day_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workout_day_exercises" */
export enum Workout_Day_Exercises_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutDayExercisesPkey = 'workout_day_exercises_pkey'
}

/** input type for incrementing numeric columns in table "workout_day_exercises" */
export type Workout_Day_Exercises_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "workout_day_exercises" */
export type Workout_Day_Exercises_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exercise?: InputMaybe<Exercises_Obj_Rel_Insert_Input>;
  exercise_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_day?: InputMaybe<Workout_Days_Obj_Rel_Insert_Input>;
  workout_day_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Workout_Day_Exercises_Max_Fields = {
  __typename?: 'workout_day_exercises_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  exercise_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workout_day_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_day_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Day_Exercises_Min_Fields = {
  __typename?: 'workout_day_exercises_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  exercise_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workout_day_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_day_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workout_day_exercises" */
export type Workout_Day_Exercises_Mutation_Response = {
  __typename?: 'workout_day_exercises_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workout_Day_Exercises>;
};

/** on_conflict condition type for table "workout_day_exercises" */
export type Workout_Day_Exercises_On_Conflict = {
  constraint: Workout_Day_Exercises_Constraint;
  update_columns?: Array<Workout_Day_Exercises_Update_Column>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};

/** Ordering options when selecting data from "workout_day_exercises". */
export type Workout_Day_Exercises_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  exercise?: InputMaybe<Exercises_Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_day?: InputMaybe<Workout_Days_Order_By>;
  workout_day_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workout_day_exercises */
export type Workout_Day_Exercises_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "workout_day_exercises" */
export enum Workout_Day_Exercises_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Id = 'id',
  /** column name */
  Reps = 'reps',
  /** column name */
  Sets = 'sets',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutDayId = 'workout_day_id'
}

/** input type for updating data in table "workout_day_exercises" */
export type Workout_Day_Exercises_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exercise_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_day_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Workout_Day_Exercises_Stddev_Fields = {
  __typename?: 'workout_day_exercises_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workout_Day_Exercises_Stddev_Pop_Fields = {
  __typename?: 'workout_day_exercises_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workout_Day_Exercises_Stddev_Samp_Fields = {
  __typename?: 'workout_day_exercises_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workout_day_exercises" */
export type Workout_Day_Exercises_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workout_Day_Exercises_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workout_Day_Exercises_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  exercise_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_day_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Workout_Day_Exercises_Sum_Fields = {
  __typename?: 'workout_day_exercises_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  reps?: Maybe<Scalars['Int']['output']>;
  sets?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** update columns of table "workout_day_exercises" */
export enum Workout_Day_Exercises_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Id = 'id',
  /** column name */
  Reps = 'reps',
  /** column name */
  Sets = 'sets',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutDayId = 'workout_day_id'
}

export type Workout_Day_Exercises_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workout_Day_Exercises_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workout_Day_Exercises_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workout_Day_Exercises_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workout_Day_Exercises_Var_Pop_Fields = {
  __typename?: 'workout_day_exercises_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workout_Day_Exercises_Var_Samp_Fields = {
  __typename?: 'workout_day_exercises_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workout_Day_Exercises_Variance_Fields = {
  __typename?: 'workout_day_exercises_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  reps?: Maybe<Scalars['Float']['output']>;
  sets?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workout_day_exercises" */
export type Workout_Day_Exercises_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
  reps?: InputMaybe<Order_By>;
  sets?: InputMaybe<Order_By>;
};

/** columns and relationships of "workout_days" */
export type Workout_Days = {
  __typename?: 'workout_days';
  created_at: Scalars['timestamptz']['output'];
  day_of_week: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  muscle_group: Scalars['String']['output'];
  plan_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  workout_day_exercises: Array<Workout_Day_Exercises>;
  /** An aggregate relationship */
  workout_day_exercises_aggregate: Workout_Day_Exercises_Aggregate;
  /** An array relationship */
  workout_logs: Array<Workout_Logs>;
  /** An aggregate relationship */
  workout_logs_aggregate: Workout_Logs_Aggregate;
  /** An object relationship */
  workout_plan: Workout_Plans;
};


/** columns and relationships of "workout_days" */
export type Workout_DaysWorkout_Day_ExercisesArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


/** columns and relationships of "workout_days" */
export type Workout_DaysWorkout_Day_Exercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Day_Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Day_Exercises_Order_By>>;
  where?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
};


/** columns and relationships of "workout_days" */
export type Workout_DaysWorkout_LogsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};


/** columns and relationships of "workout_days" */
export type Workout_DaysWorkout_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Logs_Order_By>>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};

/** aggregated selection of "workout_days" */
export type Workout_Days_Aggregate = {
  __typename?: 'workout_days_aggregate';
  aggregate?: Maybe<Workout_Days_Aggregate_Fields>;
  nodes: Array<Workout_Days>;
};

export type Workout_Days_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workout_Days_Aggregate_Bool_Exp_Count>;
};

export type Workout_Days_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workout_Days_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Days_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workout_days" */
export type Workout_Days_Aggregate_Fields = {
  __typename?: 'workout_days_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Workout_Days_Max_Fields>;
  min?: Maybe<Workout_Days_Min_Fields>;
};


/** aggregate fields of "workout_days" */
export type Workout_Days_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workout_Days_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_days" */
export type Workout_Days_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workout_Days_Max_Order_By>;
  min?: InputMaybe<Workout_Days_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workout_days" */
export type Workout_Days_Arr_Rel_Insert_Input = {
  data: Array<Workout_Days_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Days_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workout_days". All fields are combined with a logical 'AND'. */
export type Workout_Days_Bool_Exp = {
  _and?: InputMaybe<Array<Workout_Days_Bool_Exp>>;
  _not?: InputMaybe<Workout_Days_Bool_Exp>;
  _or?: InputMaybe<Array<Workout_Days_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  day_of_week?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  muscle_group?: InputMaybe<String_Comparison_Exp>;
  plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workout_day_exercises?: InputMaybe<Workout_Day_Exercises_Bool_Exp>;
  workout_day_exercises_aggregate?: InputMaybe<Workout_Day_Exercises_Aggregate_Bool_Exp>;
  workout_logs?: InputMaybe<Workout_Logs_Bool_Exp>;
  workout_logs_aggregate?: InputMaybe<Workout_Logs_Aggregate_Bool_Exp>;
  workout_plan?: InputMaybe<Workout_Plans_Bool_Exp>;
};

/** unique or primary key constraints on table "workout_days" */
export enum Workout_Days_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutDaysPkey = 'workout_days_pkey'
}

/** input type for inserting data into table "workout_days" */
export type Workout_Days_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  day_of_week?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  muscle_group?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_day_exercises?: InputMaybe<Workout_Day_Exercises_Arr_Rel_Insert_Input>;
  workout_logs?: InputMaybe<Workout_Logs_Arr_Rel_Insert_Input>;
  workout_plan?: InputMaybe<Workout_Plans_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workout_Days_Max_Fields = {
  __typename?: 'workout_days_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  day_of_week?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  muscle_group?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "workout_days" */
export type Workout_Days_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  day_of_week?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  muscle_group?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Days_Min_Fields = {
  __typename?: 'workout_days_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  day_of_week?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  muscle_group?: Maybe<Scalars['String']['output']>;
  plan_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "workout_days" */
export type Workout_Days_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  day_of_week?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  muscle_group?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workout_days" */
export type Workout_Days_Mutation_Response = {
  __typename?: 'workout_days_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workout_Days>;
};

/** input type for inserting object relation for remote table "workout_days" */
export type Workout_Days_Obj_Rel_Insert_Input = {
  data: Workout_Days_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Days_On_Conflict>;
};

/** on_conflict condition type for table "workout_days" */
export type Workout_Days_On_Conflict = {
  constraint: Workout_Days_Constraint;
  update_columns?: Array<Workout_Days_Update_Column>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};

/** Ordering options when selecting data from "workout_days". */
export type Workout_Days_Order_By = {
  created_at?: InputMaybe<Order_By>;
  day_of_week?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  muscle_group?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_day_exercises_aggregate?: InputMaybe<Workout_Day_Exercises_Aggregate_Order_By>;
  workout_logs_aggregate?: InputMaybe<Workout_Logs_Aggregate_Order_By>;
  workout_plan?: InputMaybe<Workout_Plans_Order_By>;
};

/** primary key columns input for table: workout_days */
export type Workout_Days_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "workout_days" */
export enum Workout_Days_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DayOfWeek = 'day_of_week',
  /** column name */
  Id = 'id',
  /** column name */
  MuscleGroup = 'muscle_group',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "workout_days" */
export type Workout_Days_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  day_of_week?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  muscle_group?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "workout_days" */
export type Workout_Days_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workout_Days_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workout_Days_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  day_of_week?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  muscle_group?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "workout_days" */
export enum Workout_Days_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DayOfWeek = 'day_of_week',
  /** column name */
  Id = 'id',
  /** column name */
  MuscleGroup = 'muscle_group',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Workout_Days_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workout_Days_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workout_Days_Bool_Exp;
};

/** columns and relationships of "workout_logs" */
export type Workout_Logs = {
  __typename?: 'workout_logs';
  created_at: Scalars['timestamptz']['output'];
  date: Scalars['date']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  exercise_logs: Array<Exercise_Logs>;
  /** An aggregate relationship */
  exercise_logs_aggregate: Exercise_Logs_Aggregate;
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An object relationship */
  workout_day: Workout_Days;
  workout_day_id: Scalars['uuid']['output'];
};


/** columns and relationships of "workout_logs" */
export type Workout_LogsExercise_LogsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};


/** columns and relationships of "workout_logs" */
export type Workout_LogsExercise_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Logs_Order_By>>;
  where?: InputMaybe<Exercise_Logs_Bool_Exp>;
};

/** aggregated selection of "workout_logs" */
export type Workout_Logs_Aggregate = {
  __typename?: 'workout_logs_aggregate';
  aggregate?: Maybe<Workout_Logs_Aggregate_Fields>;
  nodes: Array<Workout_Logs>;
};

export type Workout_Logs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workout_Logs_Aggregate_Bool_Exp_Count>;
};

export type Workout_Logs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Logs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workout_logs" */
export type Workout_Logs_Aggregate_Fields = {
  __typename?: 'workout_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Workout_Logs_Max_Fields>;
  min?: Maybe<Workout_Logs_Min_Fields>;
};


/** aggregate fields of "workout_logs" */
export type Workout_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workout_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_logs" */
export type Workout_Logs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workout_Logs_Max_Order_By>;
  min?: InputMaybe<Workout_Logs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workout_logs" */
export type Workout_Logs_Arr_Rel_Insert_Input = {
  data: Array<Workout_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Logs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workout_logs". All fields are combined with a logical 'AND'. */
export type Workout_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Workout_Logs_Bool_Exp>>;
  _not?: InputMaybe<Workout_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Workout_Logs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  exercise_logs?: InputMaybe<Exercise_Logs_Bool_Exp>;
  exercise_logs_aggregate?: InputMaybe<Exercise_Logs_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  workout_day?: InputMaybe<Workout_Days_Bool_Exp>;
  workout_day_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workout_logs" */
export enum Workout_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutLogsPkey = 'workout_logs_pkey'
}

/** input type for inserting data into table "workout_logs" */
export type Workout_Logs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  exercise_logs?: InputMaybe<Exercise_Logs_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_day?: InputMaybe<Workout_Days_Obj_Rel_Insert_Input>;
  workout_day_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Workout_Logs_Max_Fields = {
  __typename?: 'workout_logs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  workout_day_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workout_logs" */
export type Workout_Logs_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_day_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Logs_Min_Fields = {
  __typename?: 'workout_logs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  workout_day_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workout_logs" */
export type Workout_Logs_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_day_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workout_logs" */
export type Workout_Logs_Mutation_Response = {
  __typename?: 'workout_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workout_Logs>;
};

/** input type for inserting object relation for remote table "workout_logs" */
export type Workout_Logs_Obj_Rel_Insert_Input = {
  data: Workout_Logs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Logs_On_Conflict>;
};

/** on_conflict condition type for table "workout_logs" */
export type Workout_Logs_On_Conflict = {
  constraint: Workout_Logs_Constraint;
  update_columns?: Array<Workout_Logs_Update_Column>;
  where?: InputMaybe<Workout_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "workout_logs". */
export type Workout_Logs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  exercise_logs_aggregate?: InputMaybe<Exercise_Logs_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_day?: InputMaybe<Workout_Days_Order_By>;
  workout_day_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workout_logs */
export type Workout_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "workout_logs" */
export enum Workout_Logs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkoutDayId = 'workout_day_id'
}

/** input type for updating data in table "workout_logs" */
export type Workout_Logs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_day_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "workout_logs" */
export type Workout_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workout_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workout_Logs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_day_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "workout_logs" */
export enum Workout_Logs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkoutDayId = 'workout_day_id'
}

export type Workout_Logs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workout_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workout_Logs_Bool_Exp;
};

/** columns and relationships of "workout_plans" */
export type Workout_Plans = {
  __typename?: 'workout_plans';
  created_at: Scalars['timestamptz']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  favorites_workout_plans: Array<Favorites_Workout_Plans>;
  /** An aggregate relationship */
  favorites_workout_plans_aggregate: Favorites_Workout_Plans_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An array relationship */
  workout_days: Array<Workout_Days>;
  /** An aggregate relationship */
  workout_days_aggregate: Workout_Days_Aggregate;
};


/** columns and relationships of "workout_plans" */
export type Workout_PlansFavorites_Workout_PlansArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


/** columns and relationships of "workout_plans" */
export type Workout_PlansFavorites_Workout_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Workout_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Workout_Plans_Order_By>>;
  where?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
};


/** columns and relationships of "workout_plans" */
export type Workout_PlansWorkout_DaysArgs = {
  distinct_on?: InputMaybe<Array<Workout_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Days_Order_By>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};


/** columns and relationships of "workout_plans" */
export type Workout_PlansWorkout_Days_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Days_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Days_Order_By>>;
  where?: InputMaybe<Workout_Days_Bool_Exp>;
};

/** aggregated selection of "workout_plans" */
export type Workout_Plans_Aggregate = {
  __typename?: 'workout_plans_aggregate';
  aggregate?: Maybe<Workout_Plans_Aggregate_Fields>;
  nodes: Array<Workout_Plans>;
};

export type Workout_Plans_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Workout_Plans_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Workout_Plans_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Workout_Plans_Aggregate_Bool_Exp_Count>;
};

export type Workout_Plans_Aggregate_Bool_Exp_Bool_And = {
  arguments: Workout_Plans_Select_Column_Workout_Plans_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Plans_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Workout_Plans_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Workout_Plans_Select_Column_Workout_Plans_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Plans_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Workout_Plans_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Plans_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workout_plans" */
export type Workout_Plans_Aggregate_Fields = {
  __typename?: 'workout_plans_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Workout_Plans_Max_Fields>;
  min?: Maybe<Workout_Plans_Min_Fields>;
};


/** aggregate fields of "workout_plans" */
export type Workout_Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workout_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_plans" */
export type Workout_Plans_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workout_Plans_Max_Order_By>;
  min?: InputMaybe<Workout_Plans_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workout_plans" */
export type Workout_Plans_Arr_Rel_Insert_Input = {
  data: Array<Workout_Plans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Plans_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workout_plans". All fields are combined with a logical 'AND'. */
export type Workout_Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Workout_Plans_Bool_Exp>>;
  _not?: InputMaybe<Workout_Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Workout_Plans_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  favorites_workout_plans?: InputMaybe<Favorites_Workout_Plans_Bool_Exp>;
  favorites_workout_plans_aggregate?: InputMaybe<Favorites_Workout_Plans_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  workout_days?: InputMaybe<Workout_Days_Bool_Exp>;
  workout_days_aggregate?: InputMaybe<Workout_Days_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workout_plans" */
export enum Workout_Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutPlansPkey = 'workout_plans_pkey'
}

/** input type for inserting data into table "workout_plans" */
export type Workout_Plans_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  favorites_workout_plans?: InputMaybe<Favorites_Workout_Plans_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  workout_days?: InputMaybe<Workout_Days_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workout_Plans_Max_Fields = {
  __typename?: 'workout_plans_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workout_plans" */
export type Workout_Plans_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Plans_Min_Fields = {
  __typename?: 'workout_plans_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workout_plans" */
export type Workout_Plans_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workout_plans" */
export type Workout_Plans_Mutation_Response = {
  __typename?: 'workout_plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workout_Plans>;
};

/** input type for inserting object relation for remote table "workout_plans" */
export type Workout_Plans_Obj_Rel_Insert_Input = {
  data: Workout_Plans_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Plans_On_Conflict>;
};

/** on_conflict condition type for table "workout_plans" */
export type Workout_Plans_On_Conflict = {
  constraint: Workout_Plans_Constraint;
  update_columns?: Array<Workout_Plans_Update_Column>;
  where?: InputMaybe<Workout_Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "workout_plans". */
export type Workout_Plans_Order_By = {
  created_at?: InputMaybe<Order_By>;
  default?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  favorites_workout_plans_aggregate?: InputMaybe<Favorites_Workout_Plans_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout_days_aggregate?: InputMaybe<Workout_Days_Aggregate_Order_By>;
};

/** primary key columns input for table: workout_plans */
export type Workout_Plans_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "workout_plans" */
export enum Workout_Plans_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "workout_plans_aggregate_bool_exp_bool_and_arguments_columns" columns of table "workout_plans" */
export enum Workout_Plans_Select_Column_Workout_Plans_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Default = 'default'
}

/** select "workout_plans_aggregate_bool_exp_bool_or_arguments_columns" columns of table "workout_plans" */
export enum Workout_Plans_Select_Column_Workout_Plans_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Default = 'default'
}

/** input type for updating data in table "workout_plans" */
export type Workout_Plans_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "workout_plans" */
export type Workout_Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workout_Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workout_Plans_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "workout_plans" */
export enum Workout_Plans_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Default = 'default',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Workout_Plans_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workout_Plans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workout_Plans_Bool_Exp;
};

export type GetWorkoutPlanQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetWorkoutPlanQuery = { __typename?: 'query_root', workout_plans: Array<{ __typename?: 'workout_plans', id: any, name: string, workout_days: Array<{ __typename?: 'workout_days', id: any, day_of_week: string, muscle_group: string, workout_day_exercises: Array<{ __typename?: 'workout_day_exercises', id: any, sets?: number | null, reps?: number | null, exercise: { __typename?: 'exercises', id: any, name: string, exercise_logs: Array<{ __typename?: 'exercise_logs', completed: boolean, exercise_id: any, reps?: number | null, sets?: number | null, weight?: any | null, workout_log: { __typename?: 'workout_logs', date: any } }> } }> }> }> };

export type CreateWorkoutLogMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  workoutDayId: Scalars['uuid']['input'];
  date: Scalars['date']['input'];
}>;


export type CreateWorkoutLogMutation = { __typename?: 'mutation_root', insert_workout_logs_one?: { __typename?: 'workout_logs', id: any } | null };

export type CreateExerciseLogMutationVariables = Exact<{
  workoutLogId: Scalars['uuid']['input'];
  exerciseId: Scalars['uuid']['input'];
  weight?: InputMaybe<Scalars['numeric']['input']>;
  sets?: InputMaybe<Scalars['Int']['input']>;
  reps?: InputMaybe<Scalars['Int']['input']>;
  completed: Scalars['Boolean']['input'];
}>;


export type CreateExerciseLogMutation = { __typename?: 'mutation_root', insert_exercise_logs_one?: { __typename?: 'exercise_logs', id: any } | null };

export type GetTodayExercisesQueryVariables = Exact<{
  dayOfTheWeek: Scalars['String']['input'];
  workoutPlanId: Scalars['uuid']['input'];
}>;


export type GetTodayExercisesQuery = { __typename?: 'query_root', workout_days: Array<{ __typename?: 'workout_days', muscle_group: string, day_of_week: string, workout_day_exercises: Array<{ __typename?: 'workout_day_exercises', reps?: number | null, duration?: number | null, sets?: number | null, exercise: { __typename?: 'exercises', name: string } }> }> };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, first_name?: string | null, email: string }> };

export type GetWorkoutPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkoutPlansQuery = { __typename?: 'query_root', workout_plans: Array<{ __typename?: 'workout_plans', name: string, id: any, user: { __typename?: 'users', id: any, first_name?: string | null, last_name?: string | null } }>, favorites_workout_plans: Array<{ __typename?: 'favorites_workout_plans', workout_plan: { __typename?: 'workout_plans', name: string, id: any, user: { __typename?: 'users', first_name?: string | null, last_name?: string | null } } }> };


export const GetWorkoutPlanDocument = gql`
    query GetWorkoutPlan($userId: uuid!) {
  workout_plans(where: {user_id: {_eq: $userId}}) {
    id
    name
    workout_days {
      id
      day_of_week
      muscle_group
      workout_day_exercises {
        id
        exercise {
          id
          name
          exercise_logs {
            completed
            exercise_id
            reps
            sets
            weight
            workout_log {
              date
            }
          }
        }
        sets
        reps
      }
    }
  }
}
    `;

/**
 * __useGetWorkoutPlanQuery__
 *
 * To run a query within a React component, call `useGetWorkoutPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutPlanQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetWorkoutPlanQuery(baseOptions: Apollo.QueryHookOptions<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables> & ({ variables: GetWorkoutPlanQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables>(GetWorkoutPlanDocument, options);
      }
export function useGetWorkoutPlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables>(GetWorkoutPlanDocument, options);
        }
export function useGetWorkoutPlanSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables>(GetWorkoutPlanDocument, options);
        }
export type GetWorkoutPlanQueryHookResult = ReturnType<typeof useGetWorkoutPlanQuery>;
export type GetWorkoutPlanLazyQueryHookResult = ReturnType<typeof useGetWorkoutPlanLazyQuery>;
export type GetWorkoutPlanSuspenseQueryHookResult = ReturnType<typeof useGetWorkoutPlanSuspenseQuery>;
export type GetWorkoutPlanQueryResult = Apollo.QueryResult<GetWorkoutPlanQuery, GetWorkoutPlanQueryVariables>;
export const CreateWorkoutLogDocument = gql`
    mutation CreateWorkoutLog($userId: uuid!, $workoutDayId: uuid!, $date: date!) {
  insert_workout_logs_one(
    object: {user_id: $userId, workout_day_id: $workoutDayId, date: $date}
  ) {
    id
  }
}
    `;
export type CreateWorkoutLogMutationFn = Apollo.MutationFunction<CreateWorkoutLogMutation, CreateWorkoutLogMutationVariables>;

/**
 * __useCreateWorkoutLogMutation__
 *
 * To run a mutation, you first call `useCreateWorkoutLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkoutLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkoutLogMutation, { data, loading, error }] = useCreateWorkoutLogMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      workoutDayId: // value for 'workoutDayId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCreateWorkoutLogMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkoutLogMutation, CreateWorkoutLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkoutLogMutation, CreateWorkoutLogMutationVariables>(CreateWorkoutLogDocument, options);
      }
export type CreateWorkoutLogMutationHookResult = ReturnType<typeof useCreateWorkoutLogMutation>;
export type CreateWorkoutLogMutationResult = Apollo.MutationResult<CreateWorkoutLogMutation>;
export type CreateWorkoutLogMutationOptions = Apollo.BaseMutationOptions<CreateWorkoutLogMutation, CreateWorkoutLogMutationVariables>;
export const CreateExerciseLogDocument = gql`
    mutation CreateExerciseLog($workoutLogId: uuid!, $exerciseId: uuid!, $weight: numeric, $sets: Int, $reps: Int, $completed: Boolean!) {
  insert_exercise_logs_one(
    object: {workout_log_id: $workoutLogId, exercise_id: $exerciseId, weight: $weight, sets: $sets, reps: $reps, completed: $completed}
  ) {
    id
  }
}
    `;
export type CreateExerciseLogMutationFn = Apollo.MutationFunction<CreateExerciseLogMutation, CreateExerciseLogMutationVariables>;

/**
 * __useCreateExerciseLogMutation__
 *
 * To run a mutation, you first call `useCreateExerciseLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExerciseLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExerciseLogMutation, { data, loading, error }] = useCreateExerciseLogMutation({
 *   variables: {
 *      workoutLogId: // value for 'workoutLogId'
 *      exerciseId: // value for 'exerciseId'
 *      weight: // value for 'weight'
 *      sets: // value for 'sets'
 *      reps: // value for 'reps'
 *      completed: // value for 'completed'
 *   },
 * });
 */
export function useCreateExerciseLogMutation(baseOptions?: Apollo.MutationHookOptions<CreateExerciseLogMutation, CreateExerciseLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExerciseLogMutation, CreateExerciseLogMutationVariables>(CreateExerciseLogDocument, options);
      }
export type CreateExerciseLogMutationHookResult = ReturnType<typeof useCreateExerciseLogMutation>;
export type CreateExerciseLogMutationResult = Apollo.MutationResult<CreateExerciseLogMutation>;
export type CreateExerciseLogMutationOptions = Apollo.BaseMutationOptions<CreateExerciseLogMutation, CreateExerciseLogMutationVariables>;
export const GetTodayExercisesDocument = gql`
    query GetTodayExercises($dayOfTheWeek: String!, $workoutPlanId: uuid!) {
  workout_days(
    where: {plan_id: {_eq: $workoutPlanId}, day_of_week: {_eq: $dayOfTheWeek}}
  ) {
    muscle_group
    day_of_week
    workout_day_exercises {
      reps
      duration
      sets
      exercise {
        name
      }
    }
  }
}
    `;

/**
 * __useGetTodayExercisesQuery__
 *
 * To run a query within a React component, call `useGetTodayExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodayExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodayExercisesQuery({
 *   variables: {
 *      dayOfTheWeek: // value for 'dayOfTheWeek'
 *      workoutPlanId: // value for 'workoutPlanId'
 *   },
 * });
 */
export function useGetTodayExercisesQuery(baseOptions: Apollo.QueryHookOptions<GetTodayExercisesQuery, GetTodayExercisesQueryVariables> & ({ variables: GetTodayExercisesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodayExercisesQuery, GetTodayExercisesQueryVariables>(GetTodayExercisesDocument, options);
      }
export function useGetTodayExercisesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodayExercisesQuery, GetTodayExercisesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodayExercisesQuery, GetTodayExercisesQueryVariables>(GetTodayExercisesDocument, options);
        }
export function useGetTodayExercisesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTodayExercisesQuery, GetTodayExercisesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodayExercisesQuery, GetTodayExercisesQueryVariables>(GetTodayExercisesDocument, options);
        }
export type GetTodayExercisesQueryHookResult = ReturnType<typeof useGetTodayExercisesQuery>;
export type GetTodayExercisesLazyQueryHookResult = ReturnType<typeof useGetTodayExercisesLazyQuery>;
export type GetTodayExercisesSuspenseQueryHookResult = ReturnType<typeof useGetTodayExercisesSuspenseQuery>;
export type GetTodayExercisesQueryResult = Apollo.QueryResult<GetTodayExercisesQuery, GetTodayExercisesQueryVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo {
  users {
    id
    first_name
    email
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export function useGetUserInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserInfoSuspenseQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetWorkoutPlansDocument = gql`
    query GetWorkoutPlans {
  workout_plans(
    where: {_or: [{default: {_eq: true}}, {user: {clerk_id: {_eq: "X-Hasura-User-Id"}}}, {favorites_workout_plans: {user: {clerk_id: {_eq: "X-Hasura-User-Id"}}}}]}
  ) {
    name
    id
    user {
      id
      first_name
      last_name
    }
  }
  favorites_workout_plans {
    workout_plan {
      name
      id
      user {
        first_name
        last_name
      }
    }
  }
}
    `;

/**
 * __useGetWorkoutPlansQuery__
 *
 * To run a query within a React component, call `useGetWorkoutPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkoutPlansQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>(GetWorkoutPlansDocument, options);
      }
export function useGetWorkoutPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>(GetWorkoutPlansDocument, options);
        }
export function useGetWorkoutPlansSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>(GetWorkoutPlansDocument, options);
        }
export type GetWorkoutPlansQueryHookResult = ReturnType<typeof useGetWorkoutPlansQuery>;
export type GetWorkoutPlansLazyQueryHookResult = ReturnType<typeof useGetWorkoutPlansLazyQuery>;
export type GetWorkoutPlansSuspenseQueryHookResult = ReturnType<typeof useGetWorkoutPlansSuspenseQuery>;
export type GetWorkoutPlansQueryResult = Apollo.QueryResult<GetWorkoutPlansQuery, GetWorkoutPlansQueryVariables>;