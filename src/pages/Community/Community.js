import React, {memo} from 'react';
import { communityCoverObj, instagramObj, rantObje, contentObj, activitiesObj, discordObj, subdiscordObj, spotifyObj } from './Data';
import { CommunityCover, Instagram, Rant, Content, Activities, Discord, SubDiscord, Spotify } from '../../components';

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
    </>
  );
}

export default memo(Community);