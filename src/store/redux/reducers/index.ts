import { TOnePieceAction } from 'src/store/models';
import { INPROGRESS, FAILLURE, FETCH_DATA } from 'src/store/types';

/** type payload */
type TPayloadFetch = {
    error: string;
    data: string;
};

/**
 * @function
 * @param {any}  - state
 * @param { object } -  action
 */
export const ReducerFetch = (state: any = {}, action: TOnePieceAction<string, TPayloadFetch>) => {
    switch (action.type) {
        case INPROGRESS:
            return {
                loading: true,
                ...state,
            };
        case FAILLURE:
            return {
                loading: false,
                error: action.payload.error,
            };
        case FETCH_DATA:
            return {
                loading: false,
                data: action.payload.data,
            };
        default:
            return state;
    }
};
