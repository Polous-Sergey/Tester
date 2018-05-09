import {Question} from './question';

export interface Section {
    name: string;
    questions: Question[];
}
