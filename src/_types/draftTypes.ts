export interface CoachProps {
  name: string;
  image: string;
  teamPlayer: TeamPlayerProps[];
  color: string;
  order?: number;
}

export interface TeamPlayerProps {
  name: string;
  position: string;
}

export interface BtnProps {
  handleCoachReset: () => void;
  handleRandomSelect: () => void;
}

export interface CoachInfo {
  coach: CoachProps;
  currentOrder: number;
  handlePlayerDelete: (name: string) => void;
}

export interface PositionProps {
  position: string;
  handlePlayerSelect: (player: TeamPlayerProps) => void;
  isAlreadySelected: (playerName: string) => boolean;
  playerList: TeamPlayerProps[];
}
