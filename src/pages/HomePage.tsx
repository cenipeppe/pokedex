/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import { ContainerCards } from "../components/ContainerCards/ContainerCards";
import Pagination from "antd/lib/pagination";
import {
  loadPokemons,
  setPokemonsLoading,
} from "../components/ContainerCards/ContainerCards.slice";
import { Loader, LoaderSize } from "../components";
import { setPage } from "./Pages.slice";
import Search from "antd/lib/input/Search";
import { getPokemon } from "../api";
import { setStorePokemon } from "../components/SingleCard/SingleCard.slice";
import { useHistory } from "react-router";
import { message } from "antd";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const loading = useSelector(
    (state: RootState) => state.containerCards.loading
  );

  const pageNumber = useSelector((state: RootState) => state.pages.page);

  useEffect(() => {
    dispatch(loadPokemons((pageNumber - 1) * 20));
  }, []);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    const start = (page - 1) * 20;
    const limit = (start + 20) < 880 ? 20 : 18;
    dispatch(setPokemonsLoading(true));
    dispatch(loadPokemons(start, limit));
  };
  const renderPagination = (
    <Pagination
      className="pagination"
      defaultCurrent={pageNumber}
      current={pageNumber}
      pageSize={20}
      total={900}
      onChange={handlePageChange}
      disabled={loading}
      responsive
      showSizeChanger={false}
    />
  );
  const handleSearch = (input: string) => {
    setSearchLoading(true);
    getPokemon(input)
      .then((res) => {
        dispatch(setStorePokemon(res));
        history.push(`/pokemon/${res.id}`);
        window.scrollTo({ top: 0 });
      })
      .catch(() => {
        setSearchValue("");
        setSearchLoading(false);
        message.warn(
          "Please enter a valid name or a number between 1 and 898.",
          5
        );
      });
  };
  return (
    <div className="page">
      <Search
        className="w-56 sm:w-80 lg:w-96 shadow-xl"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type in a name or number"
        onSearch={handleSearch}
        disabled={searchLoading}
      />
      {renderPagination}
      {loading ? (
        <Loader size={LoaderSize.lg} />
      ) : (
        <>
          <h1>
            Pokemons from #{(pageNumber - 1) * 20 + 1} to #
            {pageNumber !== 45 ? pageNumber * 20 : 898}
          </h1>
          <ContainerCards />
        </>
      )}
      {renderPagination}
    </div>
  );
};
