export const TEST = 'TEST';

export const REFRESH_POLLS = 'REFRESH_POLLS';
export const FETCH_MORE_POLLS = 'FETCH_MORE_POLLS';
export const DELETE_POLL = 'DELETE_POLL';

export const LOGOUT = 'LOGOUT';


export const PollCreationStatus = Object.freeze({
    'error': 'error',
    'success': 'success',
    'creating': 'creating',
});

export const POLL_BEING_CREATED = PollCreationStatus.creating;
export const POLL_SUCCESSFULLY_CREATED = PollCreationStatus.success;
export const ERROR_CREATING_POLL = PollCreationStatus.error;

export const EDIT_POLL_STARTED = 'EDIT_POLL_STARTED';
export const EDIT_POLL_SUCCESS = 'EDIT_POLL_SUCCESS';
export const EDIT_POLL_ERROR = 'EDIT_POLL_ERROR';