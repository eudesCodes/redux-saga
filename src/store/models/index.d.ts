// action models
type TOnePieceAction<T, P> = {
    readonly type: T;
    payload?: P;
};

// CombineReducer type

type TCombineReducer<T> = {} & TReducers<T>;

// Add reducers Types
type TReducers<T> = {
    reducer?: T;
};
// export type
export type { TOnePieceAction, TCombineReducer };
