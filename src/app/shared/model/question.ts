import {Answer} from './answer';

export interface Question {
    name: string;
    type: string;
    answers: Answer[];
}
