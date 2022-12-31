import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

type Options = RenderOptions<
  typeof import("@testing-library/dom/types/queries"),
  HTMLElement,
  HTMLElement
>;

interface Props {
  children: React.ReactNode;
}

const WrapperComp = ({ children }: Props) => {
  return (
    <ChakraProvider>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
};

const setupWrapper =
  (wrapper: (props: { children: React.ReactNode }) => JSX.Element) =>
  (ui: JSX.Element, options?: Options) =>
    render(ui, { wrapper, ...options });

export const customRender = setupWrapper(WrapperComp);

export const dropContext = (element: ReactElement) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId={"test"}>
      {(provided) => <div ref={provided.innerRef}>{element}</div>}
    </Droppable>
  </DragDropContext>
);
