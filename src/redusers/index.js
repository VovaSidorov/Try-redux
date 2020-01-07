import {combineReducers} from "redux";

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTraks';



export default combineReducers({
    tracks,
    playlists,
    filterTracks
});