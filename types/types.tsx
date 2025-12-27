export type Disciplina = {
  codigo: string;
  nome: string;
  instituto: string;
  professores: Professor[];
};

export type Professor = {
  id: string;
  email: string;
  nome: string;
  salario: number;
};
