import React from "react";
import { Link } from "react-router-dom";
import { Container, GitLink, UsernameInput, SearchButton } from "./styles";
import { Typography } from '@mui/material'

export default function SearchBar(props: any) {
  return (
    <Container>
      <GitLink>github.com/</GitLink>
      <UsernameInput
        placeholder="username"
        type="text"
        spellCheck="false"
        onKeyPress={props.onKeyPress}
        onFocus={props.onFocus}
        ref={props.inputRef}
      />
      <SearchButton
        onClick={() => props.searchFunction()}
        loadingState={props.loadingState ? "loading" : undefined}
      > SEARCH
      </SearchButton>
    </Container>
  );
}
