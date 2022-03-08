export interface StudentDTO {
  id: string;
  students: {
    id: string;
    username: string;
  };
}[]