import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlayListsTypes } from '../ducks/playlists';
import { Types as PlayListDetailsTypes } from '../ducks/playlistDetails';

import { getPlaylists } from './playlists';
import { getPlaylistDetails } from './playlistDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlayListsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlayListDetailsTypes.GET_REQUEST, getPlaylistDetails),
  ]);
}
