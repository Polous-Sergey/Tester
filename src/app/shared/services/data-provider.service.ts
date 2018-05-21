import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class DataProviderService {
    users = [
        {
            name: 'first',
            surname: 'first',
            email: 'first@first.ua',
            tests: [{
                name: 'first test',
                mark: 10
            }]
        },
        {
            name: 'first',
            surname: 'first',
            email: 'first@first.ua',
            tests: [{
                name: 'first test',
                mark: 10
            }, {
                name: 'first test',
                mark: 10
            }]
        }
    ];

    constructor(private localStorageService: LocalStorageService) {

    }

    getTests() {
        this.localStorageService.set('tests', this.testsArr);
        this.localStorageService.get('tests');
        return this.testsArr;
    }

    getUsers() {
        return this.users;
    }

    getLectures() {
        return this.lectures;
    }

    lectures = [
        {
            name: 'lecture 1',
            data: '<h1>asdsdsadsds</h1>',
            questionarie: []
        },
        {
            name: 'lecture 2',
            data: null,
            questionarie: []
        },
        {
            name: 'lecture 3',
            data: null,
            questionarie: []
        },
    ];

    testsArr: Task[] = [
        {
            name: 'First Test',
            sections: [
                {
                    name: 'first1',
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
                        }
                    ],
                },
                {
                    name: 'last1',
                    questions: [
                        {
                            name: 'Simple test question texy for qeweqwe',
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
                        }
                    ],
                }
            ]
        },
        {
            name: 'Second Test',
            sections: [
                {
                    name: 'first2',
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

}
