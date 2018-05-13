import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class DataProviderService {
    user;

    testsArr: Task[] = [
        {
            name: 'First Test',
            sections: [
                {
                    name: 'first',
                    questions: [
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: [
                                {
                                    name: 'answer1',
                                    isTrue: true
                                },
                                {
                                    name: 'answer2',
                                    isTrue: false
                                },
                                {
                                    name: 'answer13',
                                    isTrue: false
                                }
                            ]
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'checkbox',
                            answers: [
                                {
                                    name: 'answer1',
                                    isTrue: true
                                },
                                {
                                    name: 'answer2',
                                    isTrue: false
                                },
                                {
                                    name: 'answer13',
                                    isTrue: false
                                }
                            ]
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: []
                        }
                    ],
                },
                {
                    name: 'second',
                    questions: [
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: [
                                {
                                    name: 'answer10',
                                    isTrue: true
                                },
                                {
                                    name: 'answer20',
                                    isTrue: false
                                },
                                {
                                    name: 'answer130',
                                    isTrue: false
                                }
                            ]
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'checkbox',
                            answers: [
                                {
                                    name: 'answer100',
                                    isTrue: true
                                },
                                {
                                    name: 'answer200',
                                    isTrue: false
                                },
                                {
                                    name: 'answer1300',
                                    isTrue: false
                                }
                            ]
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: []
                        }
                    ],
                },
                {
                    name: 'last',
                    questions: [
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: [
                                {
                                    name: 'answer1',
                                    isTrue: true
                                },
                                {
                                    name: 'answer2',
                                    isTrue: false
                                },
                                {
                                    name: 'answer13',
                                    isTrue: false
                                }
                            ]
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'checkbox',
                            answers: [
                                {
                                    name: 'answer1',
                                    isTrue: true
                                },
                                {
                                    name: 'answer2',
                                    isTrue: false
                                },
                                {
                                    name: 'answer13',
                                    isTrue: false
                                }
                            ]
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: []
                        }
                    ],
                }
            ]
        },
        {
            name: 'Second Test',
            sections: [
                {
                    name: 'first',
                    questions: [
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: []
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: []
                        },
                        {
                            name: 'Simple test question texy for example',
                            type: 'radio',
                            answers: []
                        }
                    ],
                },
                {
                    name: 'second',
                    questions: [],
                },
                {
                    name: 'last',
                    questions: [],
                }
            ]
        }
    ];

    constructor(protected localStorage: LocalStorage) {
    }

    getTests() {
        return this.testsArr;
    }
}
