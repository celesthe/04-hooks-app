export interface ScrambleWordState {
    currentWord: string;
    scrambledWord: string;
    guess: string;
    points: number;
    errorCounter: number;
    maxAllowErrors: number;
    skipCounter: number;
    maxSkips: number;
    isGameOver: boolean;
    words: string[];
    totalWords: number;
}

export type ScrambledWordsAction =
    | { type: 'SET_GUESS', payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'SKIP_WORDS' }
    | { type: 'START_NEW_GAME', payload: ScrambleWordState };


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};


export const getInitialState = (): ScrambleWordState => {
    const shuffleWords = shuffleArray([...GAME_WORDS]);

    return {
        currentWord: shuffleWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffleWords[0]),
        skipCounter: 0,
        words: shuffleWords,
        totalWords: shuffleWords.length
    }


}

export const scrambledWordsReducer = (state: ScrambleWordState, action: ScrambledWordsAction): ScrambleWordState => {
    switch (action.type) {
        case 'SET_GUESS':

            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            };

        case 'CHECK_ANSWER':
            {
                if (state.currentWord === state.guess) {
                    const newWords = state.words.slice(1);
                    return {
                        ...state,
                        words: newWords,
                        points: state.points + 1,
                        guess: '',
                        currentWord: newWords[0],
                        scrambledWord: scrambleWord(newWords[0]),
                    }
                }
                return {
                    ...state,
                    errorCounter: state.errorCounter + 1,
                    guess: '',
                    isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors
                }

            };
        case 'SKIP_WORDS': {
            if (state.skipCounter >= state.maxSkips) return state;

            const updatedWords = state.words.slice(1);
            return {
                ...state,
                words: updatedWords,
                skipCounter: state.skipCounter + 1,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                guess: ''
            }
        }

        case 'START_NEW_GAME':
            return action.payload;


        default:
            return state;
    }
}