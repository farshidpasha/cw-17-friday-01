export interface Itask {
  id?: string;
  taskName: string;
  priority: string;
  description: string;
  completed: boolean;
}

export interface ItableProps {
  data: Itask[];
}
