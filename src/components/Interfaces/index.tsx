/**
 * Name interface
 */
export interface NameInterface {
  id: string;
  text: string;
}

/**
 * Name form interface
 */
export interface NameFormInterface {
  names: NameInterface[];
  handleNameCreate: (Name: NameInterface) => void;
}

/**
 * Name list interface
 */
export interface NameListInterface {
  handleNameRemove: (id: string) => void;
  names: NameInterface[];
}

/**
 * Name item interface
 */
export interface NameItemInterface {
  handleNameRemove: (id: string) => void;
  name: NameInterface;
}

export enum MessageTypesInterface {
  empty = 'empty',
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

/**
 * Message Interface
 * */
export interface MessageInterface {
  text: string;
  type: MessageTypesInterface;
}

export interface PickerInterface {
  handlePickClick: () => void;
  previous: string;
  next: string;
}
