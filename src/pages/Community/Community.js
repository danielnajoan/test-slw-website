import React, { memo } from "react";
import {
  communityCoverObj,
  instagramObj,
  rantObje,
  contentObj,
  activitiesObj,
  testimonyObj,
  discordObj,
  subdiscordObj,
  spotifyObj,
  comInformationObj,
} from "./Data";
import {
  CommunityCover,
  Instagram,
  Rant,
  Content,
  Activities,
  Testimony,
  Discord,
  SubDiscord,
  Spotify,
  ComInformation,
} from "../../components";
import LazyLoad from "react-lazyload";

function Community() {
  return (
    <>
      <CommunityCover {...communityCoverObj} />
      <Instagram {...instagramObj} />
      <LazyLoad height={200}>
        <Rant {...rantObje} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Content {...contentObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Activities {...activitiesObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Testimony {...testimonyObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Discord {...discordObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <SubDiscord {...subdiscordObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <Spotify {...spotifyObj} />
      </LazyLoad>
      <LazyLoad height={200}>
        <ComInformation {...comInformationObj} />
      </LazyLoad>
    </>
  );
}

export default memo(Community);
