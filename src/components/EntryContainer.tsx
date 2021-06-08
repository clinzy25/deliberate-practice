import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { EntryType } from '../types/interfaces';
import { Entry } from './Entry';
import { addEntry, onDragEnd } from '../actions/list_actions';
import { EntryArray } from '../reducers/list_reducer';
import {
  DragDropContext,
  DropResult,
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

  const onDragEndLocal = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newEntries = [...entries];
    newEntries.splice(source.index, 1);
    newEntries.splice(destination.index, 0, entries[source.index]);

    dispatch(onDragEnd(newEntries));
  };

  return (
    <section className='container flex flex-col bg-gray-200 rounded'>
      <button
        onClick={() =>
          dispatch(
            addEntry({
              id: new Date().getTime().toString(),
              title: '',
              content: '',
              progress: 75,
              link: '',
              tags: [],
            })
          )
        }
        className='bg-blue-400 place-self-start px-5 py-2 rounded border-gray-400 border hover:bg-blue-300 focus:outline-none'
      >
        Add
      </button>
      <DragDropContext onDragEnd={onDragEndLocal}>
        <Droppable droppableId='column-1'>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {entries.map((entry: EntryType, index: number) => {
                const { id, title, content, tags, progress, link } = entry;
                return (
                  <Draggable
                    key={entry.id}
                    draggableId={entry.id}
                    index={index}
                  >
                    {(
                      providedDraggable: DraggableProvided,
                      snapshotDraggable: DraggableStateSnapshot
                    ) => (
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <Entry
                          key={id}
                          id={id}
                          title={title}
                          content={content}
                          tags={tags}
                          progress={progress}
                          link={link}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};
