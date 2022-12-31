import { Container, Flex } from "@chakra-ui/react";
import useGetColumns from "../../hooks/useGetColumns/useGetColumns";
import Column from "../../components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import Zeal from "../../util/kanban";
import { useAppDispatch } from "../../redux/hooks";

export default function Kanban() {
  const columns = useGetColumns();
  const dispatch = useAppDispatch();

  return (
    <DragDropContext onDragEnd={(data) => Zeal.handleDragEnd(data, dispatch)}>
      <Container maxW={1200}>
        <Flex p={5}>
          {columns.map((col) => {
            return (
              <Column
                key={col.id}
                tasks={col.tasks}
                id={col.id}
                title={col.title}
              />
            );
          })}
        </Flex>
      </Container>
    </DragDropContext>
  );
}
