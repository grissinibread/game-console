import { Game } from './logic/Game.ts';
import { Player } from './logic/Player.ts';

export type GameState = {
  playerOne: Player;
  playerTwo: Player;
  
  game: Game | null;
}
