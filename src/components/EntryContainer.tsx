import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { EntryArray, EntryType } from '../types/interfaces';
import { Entry } from './Entry';
import { addEntry, onDragEnd } from '../actions/list_actions';
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
import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty,
} from 'react-redux-firebase';


interface EntryContainerProps {
  userId: string;
}

export const EntryContainer: React.FC<EntryContainerProps> = ({userId}) => {
  const entries = useSelector((state: AppState) => state.list.entries);
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const entriesFromFirebase = useSelector(
    (state: AppState) => state.firebase.ordered.users
    );
    
    // console.log(Object.values(Object.values(entriesFromFirebase)[0]));
  
  const entriesQuery = {
    path: `users/${userId}/entries`,
  };
  useFirebaseConnect(() => [entriesQuery]);
  
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
        onClick={() => {
          const entry = {
            id: new Date().getTime().toString(),
            title: '',
            content: '',
            progress: 75,
            link: '',
            tags: [],
            modalView: false,
          };
          dispatch(addEntry(entry));
          firebase.push(`users/${userId}/entries`, entry);
        }}
        className='bg-blue-400 place-self-start px-5 py-2 rounded border-gray-400 border hover:bg-blue-300 focus:outline-none'
      >
        Add
      </button>
      <DragDropContext onDragEnd={onDragEndLocal}>
        <Droppable droppableId='column-1'>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {!entriesFromFirebase ? (
                <h1>Add a note</h1>
              ) : (
                Object.values(Object.values(entriesFromFirebase)[0]).map(
                  ({ value: entry, key }, index) => {
                    const {
                      id,
                      title,
                      content,
                      tags,
                      progress,
                      link,
                      modalView,
                    } = entry;
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
                              id={key}
                              title={title}
                              content={content}
                              tags={tags}
                              progress={progress}
                              link={link}
                              modalView={modalView}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  }
                )
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};
