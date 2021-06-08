export interface EntryType {
  id: string;
  title: string;
  content: string;
  tags: [];
  progress: number;
  link: string;
}

export interface EntryArray {
  array: EntryType[];
}