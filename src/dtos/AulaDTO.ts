export interface AulaDTO {
  id: string;
  lesson: string;
  teacher: {
    username: string;
  };
  students: {
    username: string;
  };
  _count: {
    students: number;
  };
}[]