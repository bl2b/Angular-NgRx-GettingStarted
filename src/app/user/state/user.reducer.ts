import { User } from '../user';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    users: UserState;
}
export interface UserState {
    maskUserName: boolean;
    currentUser: User;
    users: User[];
}

const initialState: UserState = {
    maskUserName: true,
    currentUser: null,
    users: []
};

const getStateFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getStateFeatureState,
    state => state.maskUserName
);

export function reducer(state = initialState, action): UserState {
    switch (action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                maskUserName: action.payload
            };
        default:
            return state;
    }
}