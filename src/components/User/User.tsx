import React from "react";
import { UserInfo, Avatar, UserName, Info } from "./styles";

export default function User(props: any) {
  const prof = props.prof;

  return (
    <UserInfo>
      {prof.avatar_url && <Avatar src={prof.avatar_url} alt={prof.login} />}
      {prof.name && <UserName>{prof.name}</UserName>}
      {prof.bio && <Info>{prof.bio}</Info>}
      {prof.company && (
        <div>
          <Info>{prof.company}</Info>
        </div>
      )}
      {prof.location && (
        <div>
          <Info>{prof.location}</Info>
        </div>
      )}
      {prof.blog && (
        <div>
          <a href={prof.blog} target="_blank" rel="noopener noreferrer">
            {prof.blog}
          </a>
        </div>
      )}
    </UserInfo>
  );
}
