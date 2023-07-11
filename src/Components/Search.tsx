import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Monster } from "../types";
import { MonsterCard } from "./MonsterCard";
import { Action } from "../App";
import { Loader } from "./Loader";

const fetchData = async (pageIndex: number) => {
  console.log("Fetching", pageIndex);
  const res = await fetch(
    `https://api.open5e.com/monsters/?format=json&page=${pageIndex}`
  );
  const jsonRes = await res.json();
  return jsonRes;
};

type Props = {
  dispatch: React.Dispatch<Action>;
};

export const Search: React.FC<Props> = ({ dispatch }) => {
  const [nextPageIndex, setNextPageIndex] = useState(1);

  const {
    fetchNextPage,
    data: monsterData,
    isLoading,
    isFetching,
  } = useInfiniteQuery<{
    results: Monster[];
  }>({
    queryKey: ["search"],
    queryFn: ({ pageParam = 1 }) => fetchData(pageParam),
  });

  useEffect(() => {
    if (nextPageIndex > 1) {
      fetchNextPage({ pageParam: nextPageIndex });
    }
  }, [nextPageIndex, fetchNextPage]);

  return (
    <>
      <div>
        {monsterData && (
          <div className="flex justify-around flex-wrap gap-8 lg:mx-16 sm:mx-4 mt-16">
            {monsterData?.pages.map((page) =>
              page.results.map((monster) => (
                <MonsterCard
                  dispatch={dispatch}
                  monster={monster}
                  key={monster.slug}
                  variant="search"
                />
              ))
            )}
          </div>
        )}
        {!isLoading && !isFetching && (
          <div className="flex justify-center mx-4 my-4">
            <button
              role="button"
              className="flex-grow md:flex-grow-0 md:px-48 bg-paper border-red-600 text-2xl"
              onClick={() => setNextPageIndex(nextPageIndex + 1)}
            >
              Last inn flere
            </button>
          </div>
        )}
      </div>
      {(isLoading || isFetching) && <Loader />}
    </>
  );
};
