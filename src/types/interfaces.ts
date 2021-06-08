export interface EntryType {
  id: string;
  title: string;
  content: string;
  tags: [];
  progress: number;
  link: string;
  modalView: boolean;
}

export interface EntryArray {
  entries: EntryType[];
}