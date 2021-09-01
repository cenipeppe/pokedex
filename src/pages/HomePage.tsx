import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";
import { ContainerCards } from "../components/ContainerCards/ContainerCards";
import Pagination from "antd/lib/pagination";
import {
  loadPokemons,
  setPokemonsLoading,
} from "../components/ContainerCards/ContainerCards.slice";
import { Loader, LoaderSize } from "../components";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(
    (state: RootState) => state.containerCards.pokemons
  );
  const loading = useSelector(
    (state: RootState) => state.containerCards.loading
  );

  const [pageNumber, setPageNumber] = useState<number>(1);

  const onPageChange = (page: number) => {
    setPageNumber(page);
    const start = (page - 1) * 20;
    dispatch(setPokemonsLoading(true));
    dispatch(loadPokemons(start));
  };
  const renderPagination = (
    <Pagination
      className="pagination"
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
        <Loader size={LoaderSize.xxl} />
      ) : (
        <ContainerCards pokemons={pokemons} page={pageNumber} />
      )}
      {renderPagination}
    </div>
  );
};
