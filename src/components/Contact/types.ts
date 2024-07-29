export type FormInputs = {
    name: string;
    email: string;
    message: string;
  };
  
  export type StatusState = {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  };