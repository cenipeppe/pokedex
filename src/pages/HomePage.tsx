/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
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

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  // const pokemons = useSelector(
  //   (state: RootState) => state.containerCards.pokemons
  // );
  const loading = useSelector(
    (state: RootState) => state.containerCards.loading
  );

  const pageNumber = useSelector((state: RootState) => state.pages.page);

  useEffect(() => {
    dispatch(loadPokemons((pageNumber - 1) * 20));
  }, []);

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
    const start = (page - 1) * 20;
    const limit = start + 20 < 898 ? 20 : 18;
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
      onChange={onPageChange}
      disabled={loading}
      responsive
      showSizeChanger={false}
    />
  );
  return (
    <div className="page">
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
