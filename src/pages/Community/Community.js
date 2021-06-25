import React, {memo} from 'react';
import { communityCoverObj, instagramObj, rantObje, contentObj, activitiesObj, discordObj, subdiscordObj, spotifyObj, comInformationObj } from './Data';
import { CommunityCover, Instagram, Rant, Content, Activities, Discord, SubDiscord, Spotify, ComInformation } from '../../components';

function Community() {
  return (
    <>
      <CommunityCover {...communityCoverObj}/>
      <Instagram {...instagramObj}/>
      <Rant {...rantObje}/>
      <Content {...contentObj}/>
      <Activities {...activitiesObj}/>
      <Discord {...discordObj}/>
      <SubDiscord {...subdiscordObj}/>
      <Spotify {...spotifyObj}/>
      <ComInformation {...comInformationObj}/>
    </>
  );
}

export default memo(Community);