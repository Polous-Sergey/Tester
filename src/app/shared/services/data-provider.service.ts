import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataProviderService {
    user;
    testsArr = [
        {
            name: 'First Test',
            task: [
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
            task: [
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
        },
    ];

    constructor() {
    }

    getTests() {
        return this.testsArr;
    }
}
