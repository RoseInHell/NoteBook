import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import { getSongDetailAction, changeSequenceAction,  changeCurrentSong} from '../store/actionCreators';

import { NavLink } from 'react-router-dom';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';
import { Slider } from 'antd';

export default memo(function HYAppPlayerBar() {
  // props and state
  const [currentTime, setCurrenTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks
  const { currentSong, sequence } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"])
  }), shallowEqual)

  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(1811921555))
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    })
  }, [currentSong.id])

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying])

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrenTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
    }
  }
  
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentSong(tag))
  }

  const handleMusicEnded = () => {

  }

  const sliderChange = useCallback((value) => {
    setIsChanging(true);
    const time = value / 100 * duration / 1000;
    setCurrenTime(time * 1000);
    setProgress(value)
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    const time = value / 100 * duration / 1000;
    audioRef.current.currentTime = time;
    setCurrenTime(time * 1000)
    setIsChanging(false);

    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"
                  onClick={e => changeMusic()} ></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"
                  onClick={e => changeMusic()} ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt=""/>
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} 
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange}
                        />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence() } ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} 
             onTimeUpdate={e => timeUpdate(e)} 
             onEnded={e => handleMusicEnded()} />
    </PlaybarWrapper>
  )
})

