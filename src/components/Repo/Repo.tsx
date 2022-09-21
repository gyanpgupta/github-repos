import React from "react";

import {
  RepoLink,
  RepoInfo,
  Titles,
  RepoName,
  RepoDescription,
  Details,
  LangInfo,
  License,
  NoLineBreak
} from "./styles";

export default function Repo(props: any) {
  const repo = props.repo;

  return (
    <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <RepoInfo>
        <Titles>
          <div>
            <RepoName>{repo.name}</RepoName>
          </div>

          {repo.description && (
            <RepoDescription>{repo.description}</RepoDescription>
          )}
        </Titles>

        <Details>
          {repo.language && (
            <LangInfo>
              <NoLineBreak>{repo.language}</NoLineBreak>
            </LangInfo>
          )}

          {repo.license && (
            <License>
              <NoLineBreak>{repo.license.spdx_id}</NoLineBreak>
            </License>
          )}
        </Details>
      </RepoInfo>
    </RepoLink>
  );
}
