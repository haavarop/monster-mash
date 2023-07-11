import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Search } from "./Components/Search";
import { Reducer, useReducer } from "react";
import { Monster } from "./types";
import { EncounterList } from "./Components/EncounterList";

export type Action =
  | { type: "add"; monster: Monster }
  | { type: "remove"; monster: Monster };

export type State = {
  monsters: { [key: string]: { monster: Monster; count: number } };
};

const reducer = (state: State, action: Action): State => {
  const { type, monster } = action;
  switch (type) {
    case "add":
      if (state.monsters[monster.slug]) {
        return {
          ...state,
          monsters: {
            ...state.monsters,
            [monster.slug]: {
              ...state.monsters[monster.slug],
              count: state.monsters[monster.slug].count + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          monsters: {
            ...state.monsters,
            [action.monster.slug]: {
              monster: action.monster,
              count: 1,
            },
          },
        };
      }
    case "remove":
      if (state.monsters[monster.slug].count === 1) {
        const copy = { ...state.monsters };
        delete copy[monster.slug];
        return {
          ...state,
          monsters: copy,
        };
      } else {
        return {
          ...state,
          monsters: {
            ...state.monsters,
            [monster.slug]: {
              ...state.monsters[monster.slug],
              count: state.monsters[monster.slug].count - 1,
            },
          },
        };
      }

    default:
      return state;
  }
};

function App() {
  const queryClient = new QueryClient();

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    monsters: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-screen mb-32 mt-16 bg-slate-700 flex items-center flex-col">
        <h1 className="text-3xl lg:text-6xl font-bold underline text-red-600">
          DnD Enocounter-builder
        </h1>
        <Search dispatch={dispatch} />
      </main>
      <aside className="fixed max-h-[50vh] bottom-0 left-0 w-screen flex justify-center">
        <EncounterList state={state} dispatch={dispatch} />
      </aside>
    </QueryClientProvider>
  );
}

export default App;
