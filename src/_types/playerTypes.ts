export interface PlayerInfoProps {
  _id: string;
  id: number;
  name: string;
  position: string;
  subPosition: string;
  note: string;
  image: string;
  achievements: Achivement[];
}

interface Achivement {
  tournament: string;
  result: string;
}
