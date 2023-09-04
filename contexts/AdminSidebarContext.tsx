"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type SidebarType = {
  open: boolean;
};

type ActionType = {
  type: string;
};

const initialState: SidebarType = {
  open: true,
};

const reducer = (state: SidebarType, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, open: true };
    case "CLOSE":
      return { ...state, open: false };
    default:
      return state;
  }
};

export const SidebarContext = createContext<{
  state: SidebarType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
