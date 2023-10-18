import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import mockData from '../../mockData';
import Card from '../Card' // Update the import path for your Card component
import './kanban.css';

const Kanban = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex((e) => e.id === destination.droppableId);

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData([...data]);
    }
  };

  const handleAddTask = () => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: 'New Task',
    };

    // Add the new task to the 'To Do' column (or any other column you prefer)
    const todoColumn = data.find((column) => column.title === ' 📃 To do');
    if (todoColumn) {
      todoColumn.tasks.push(newTask);
    }

    setData([...data]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        <button onClick={handleAddTask}>Add Task</button>
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="kanban-section"
              >
                <div className="kanban-section-title">
                  {section.title} ({section.tasks.length} tasks)
                </div>
                <div className="kanban-section-content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="kanban-task"
                        >
                          <Card icon={task.icon} heading={task.heading} description={task.description}>
                            {task.title}
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
