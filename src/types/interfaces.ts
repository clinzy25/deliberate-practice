export interface EntryType {
  id: string;
  title: string;
  content: string;
  draggableId?: string;
}

export interface EntryArray {
  array: EntryType[];
}