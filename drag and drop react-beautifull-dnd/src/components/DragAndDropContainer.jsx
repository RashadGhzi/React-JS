import React, { useState } from "react";
import all_notes from "../data/allNotes";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./dragAndDropContainer.css";

export default function DragAndDropContainer() {
  const [items, setItems] = useState(all_notes);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const itemsCopy = Array.from(items);
    const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
    itemsCopy.splice(result.destination.index, 0, reorderedItem);

    setItems(itemsCopy);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <Droppable droppableId="items">
        {(provided) => (
          <div
            className="container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    className="item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {item.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
