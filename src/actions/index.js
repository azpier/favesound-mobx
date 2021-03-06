/* eslint-disable max-len */
import { login, logout } from './session';
import { fetchActivities, fetchFollowers, fetchFavorites, fetchFollowings } from './user';
import { fetchActivitiesByGenre } from './browse';
import { like } from './track';
import { follow } from './following';
import { activateTrack, activateIteratedTrack, addTrackToPlaylist, removeTrackFromPlaylist, clearPlaylist, togglePlayTrack } from './player';
import { openComments, fetchComments } from './comments';
/* eslint-enable max-len */

export {
  login,
  logout,
  fetchActivities,
  fetchFollowings,
  fetchFollowers,
  fetchFavorites,
  activateTrack,
  togglePlayTrack,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
  clearPlaylist,
  activateIteratedTrack,
  like,
  follow,
  fetchActivitiesByGenre,
  openComments,
  fetchComments,
};
