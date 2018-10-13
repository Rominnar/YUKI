declare namespace Yagt {
  export interface HooksState {
    hookInfos: TextThread[];
    texts: {
      [num: string]: string[];
    };
    currentDisplayHookIndex: number;
  }

  export interface Game {
    name: string;
    path: string;
    code: string;
  }
  export interface ConfigState {
    default: any;
    games: Game[];
  }

  export interface TranslatorHookState extends HooksState {
    translationsForCurrentIndex: Translations;
    toDisplayHookCode: string;
  }

  export interface TranslatorConfigState {
    default: any;
    game: Game;
  }

  export interface TranslatorViewState {
    isButtonsShown: boolean;
  }
}
