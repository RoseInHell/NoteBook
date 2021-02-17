import { getSongDetail, getLyric } from '@/services/player';
import { getRandomNumber } from '@/utils/math-utils';

import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGER_SONG_DETAIL,
  currentSong
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    switch(sequence) {
      case 1: // 随机操作
        let randomIndex = -1;
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放是
        currentSongIndex += tag;
        if (currentSongIndex > playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playList种是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex =  playList.findIndex(song => song.id === ids);

    // 2.判断是否找到了歌曲
    let song = null;
    if (songIndex !== -1) { // 找到了歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
    } else { // 没有找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0];
        if (!song) return;

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song))
      })
    }
    
    // 3.请求该歌曲的歌词
    if (!song) return;
    dispatch(getLyricAction(song.id))
  }
}

// 
export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      
    })
  }
}