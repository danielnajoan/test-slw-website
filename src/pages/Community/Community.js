import React, {memo} from 'react';
import { communityCoverObj, instagramObj, rantObje, contentObj, activitiesObj, testimonyObj, discordObj, subdiscordObj, spotifyObj, comInformationObj } from './Data';
import { CommunityCover, Instagram, Rant, Content, Activities, Testimony, Discord, SubDiscord, Spotify, ComInformation } from '../../components';

function Community() {
  return (
    <>
      <CommunityCover {...communityCoverObj}/>
      <Instagram {...instagramObj}/>
      <Rant {...rantObje}/>
      <Content {...contentObj}/>
      <Activities {...activitiesObj}/>
      <Testimony {...testimonyObj}/>
      <Discord {...discordObj}/>
      <SubDiscord {...subdiscordObj}/>
      <Spotify {...spotifyObj}/>
      <ComInformation {...comInformationObj}/>
    </>
  );
}

export default memo(Community);