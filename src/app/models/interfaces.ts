import { BehaviorSubject } from "rxjs";

export interface TypewriterSymbol {
  down: string;
  up: string;
}
export interface TypewriterKey {
  type: 'letter' | 'space' | 'shift' | 'backspace';
  symbol?: TypewriterSymbol;
  state: BehaviorSubject<'up' | 'down'>;
  code?: number;
  row?: number;
}
export interface TypewriterLigature {
  code: number;
  symbol: TypewriterSymbol;
}
export interface TapeData {
  order: number;
  color: string;
}