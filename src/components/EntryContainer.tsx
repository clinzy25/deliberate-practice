import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { EntryType } from '../types/interfaces';
import { Entry } from './Entry';
import { addEntry, onDragEnd } from '../actions/list_actions';
import { EntryArray } from '../reducers/list_reducer';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import type { DroppableProvided } from 'react-beautiful-dnd';

export const EntryContainer: React.FC = () => {
  const entries = useSelector<EntryArray, EntryArray['entries']>(
    (state: AppState) => state.entries
  );
  const dispatch = useDispatch();

  // const onDragEnd = (result: DropResult) => {
  //   const { destination, source, draggableId } = result;

  //   if (!destination) {
  //     return;
  //   }

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }
    
  //   const newEntries = Array.from(entries);
  //   newEntries.splice(source.index, 1);
  //   newEntries.splice(destination.index, 0, draggableId)
    
    
  // };

  return (
    <section className='container flex flex-col bg-gray-200'>
      <button
        onClick={() =>
          dispatch(
            addEntry({
              id: new Date().getTime().toString(),
              title: '',
              content: '',
            })
          )
        }
        className='bg-blue-400 place-self-start px-5 py-2 rounded border-gray-400 border hover:bg-blue-300 focus:outline-none'
      >
        Add
      </button>
      <DragDropContext onDragEnd={() => dispatch(onDragEnd)}>
        <Droppable droppableId='column-1'>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {entries.map((entry: EntryType, index: number) => (
                <Draggable key={entry.id} draggableId={index.toString()} index={index}>
                  {(
                    providedDraggable: DraggableProvided,
                    snapshotDraggable: DraggableStateSnapshot
                  ) => (
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      {...providedDraggable.dragHandleProps}
                    >
                      <Entry key={entry.id} id={entry.id} title={entry.title} />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};
