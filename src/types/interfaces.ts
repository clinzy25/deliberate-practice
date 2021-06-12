export interface EntryType {
  id: string;
  title: string;
  content: string;
  progress: number;
  link: string;
  tags: string[];
  modalView: boolean;
}

export interface EntryArray {
  entries: EntryType[];
  userSignedIn: boolean;
}