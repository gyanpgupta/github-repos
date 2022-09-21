import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Topbar, Title, RepoList } from "../styles";
import SearchBar from "./SearchBar/SearchBar";
import Repo from "./Repo/Repo";
import User from "./User/User";

function Main() {
  const [searchvalue, setSearchvalue] = useState<any>([]);
  const [user, setUser] = useState<any>({
    prof: {},
    repos: [],
  });

  const [loading, setLoading] = useState(false);

  const inputEl: any = useRef(null);

  async function search() {
    let searchData = inputEl?.current?.value;
    let time = new Date();
    setSearchvalue([{ searchData, time }, ...searchvalue]);
    setLoading(true);
    const { prof, repos } = await getApiData();
    setLoading(false);

    if (prof.message === "Not Found") {
      //@ts-ignore
      inputEl.current.focus();
    } else {
      setUser({
        prof,
        repos,
      });
    }
  }
  useEffect(() => {
    localStorage.setItem("searchvalue", JSON.stringify(searchvalue));
  }, [searchvalue]);

  async function getApiData() {
    try {
      const [prof, repos] = await Promise.all([
        fetch(`https://api.github.com/users/${inputEl.current.value}`)
          .then((response) => response.json())
          .catch((error) => console.log(error, "errrrrrr")),

        fetch(`https://api.github.com/users/${inputEl.current.value}/repos`)
          .then((response) => response.json())
          .catch((error) => alert(error)),
      ]);
      if (prof.id) return { prof, repos };
      else {
        alert(prof.message);
        throw new Error(prof.message);
      }
    } catch (error) {
      throw new Error();
    }
  }

  function handleEnterKey() {
    const ENTER = 13;
    // @ts-ignore
    if (window.event.keyCode === ENTER) {
      search();
      // @ts-ignore
      inputEl.current.blur();
    }
  }

  function selectText() {
    // @ts-ignore
    inputEl.current.select();
  }
  return (
    <>
      <Container>
        <Topbar>
          <Title>ListRepos</Title>
          <SearchBar
            onKeyPress={handleEnterKey}
            onFocus={selectText}
            searchFunction={search}
            loadingState={loading}
            inputRef={inputEl}
          />
          <a
            href="https://github.com/LucasSonego"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <Link to="/history" style={{ color: "white" }}>
            HISTORY
          </Link>
        </Topbar>
        {user.prof.id && (
          <>
            <User prof={user.prof} />

            <RepoList>
              {user.repos.map((r: any) => (
                <li className="repo" key={r.id}>
                  <Repo repo={r} />
                </li>
              ))}
            </RepoList>
          </>
        )}
      </Container>
    </>
  );
}

export default Main;
