import { TOnePieceAction } from 'src/store/models';
import { INPROGRESS, FAILLURE, FETCH_SUCCESS } from 'src/store/types';

/** type payload */
type TPayloadFetch = {
    error?: string;
    data?: string;
};

/**
 * @function
 * @param state
 * @param action
 * @returns
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
        case FETCH_SUCCESS:
            return {
                loading: false,
                data: action.payload.data,
            };
        default:
            return state;
    }
};
