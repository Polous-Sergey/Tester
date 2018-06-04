import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {LocalStorageService} from 'angular-2-local-storage';
import {current} from 'codelyzer/util/syntaxKind';

@Injectable()
export class DataProviderService {
    curentUser;
    users = [
        {
            id: 101,
            name: 'first',
            surname: 'first',
            password: '1',
            email: 'first@first.ua',
            tests: [{
                name: 'first test',
                mark: 10
            }]
        },
        {
            id: 102,
            name: 'first',
            surname: 'first',
            email: 'first@first.ua',
            password: '1',
            tests: [{
                name: 'first test',
                mark: 10
            }, {
                name: 'first test',
                mark: 10
            }]
        }
    ];

    adminUsers = [];

    getAll() {
        this.users = this.localStorageService.get('users');
        this.adminUsers = this.localStorageService.get('adminUsers');
        this.lectures = this.localStorageService.get('lectures');
        this.testsArr = this.localStorageService.get('testsArr');
    }

    saveAll() {
        this.localStorageService.set('users', this.users);
        this.localStorageService.set('adminUsers', this.adminUsers);
        this.localStorageService.set('lectures', this.lectures);
        this.localStorageService.set('testsArr', this.testsArr);
    }

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

    finishTest(test, val) {
        const user = this.users.find((item) => this.curentUser.id === item.id);
        user.tests.push({
            name: test,
            mark: val
        });
    }

    checkCreds(val) {
        const user = this.users.find((item) => val.name === item.name);
        if (user) {
            if (user.password === val.password) {
                this.curentUser = user;
                return 'ok';
            } else {
                return 'Wrong password';
            }
        } else {
            return 'Wrong Username';
        }
    }

    getLectures() {
        return this.lectures;
    }

    lectures = [
        {
            name: 'lecture 1',
            data: `<h1>asdsdsadsds</h1><h3></h3>
<p><b>Angular</b> (commonly referred to as "<b>Angular 2+</b>" or "<b>Angular v2 and above</b>")<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup><sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> is a <a href="/wiki/TypeScript" title="TypeScript">TypeScript</a>-based <a href="/wiki/Open-source_software" title="Open-source software">open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web application platform</a> led by the Angular Team at <a href="/wiki/Google" title="Google">Google</a> and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built <a href="/wiki/AngularJS" title="AngularJS">AngularJS</a>.</p>
<p><b>Angular</b> (commonly referred to as "<b>Angular 2+</b>" or "<b>Angular v2 and above</b>")<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup><sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> is a <a href="/wiki/TypeScript" title="TypeScript">TypeScript</a>-based <a href="/wiki/Open-source_software" title="Open-source software">open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web application platform</a> led by the Angular Team at <a href="/wiki/Google" title="Google">Google</a> and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built <a href="/wiki/AngularJS" title="AngularJS">AngularJS</a>.</p>
<p><b>Angular</b> (commonly referred to as "<b>Angular 2+</b>" or "<b>Angular v2 and above</b>")<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup><sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> is a <a href="/wiki/TypeScript" title="TypeScript">TypeScript</a>-based <a href="/wiki/Open-source_software" title="Open-source software">open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web application platform</a> led by the Angular Team at <a href="/wiki/Google" title="Google">Google</a> and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built <a href="/wiki/AngularJS" title="AngularJS">AngularJS</a>.</p>
<p><b>Angular</b> (commonly referred to as "<b>Angular 2+</b>" or "<b>Angular v2 and above</b>")<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup><sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> is a <a href="/wiki/TypeScript" title="TypeScript">TypeScript</a>-based <a href="/wiki/Open-source_software" title="Open-source software">open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web application platform</a> led by the Angular Team at <a href="/wiki/Google" title="Google">Google</a> and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built <a href="/wiki/AngularJS" title="AngularJS">AngularJS</a>.</p>`,
            questionarie: [
                {
                    name: 'First Test',
                    sections: [
                        {
                            name: 'first1',
                            questions: [
                                {
                                    name: 'Simple test question texy for example multi',
                                    type: 'mapping',
                                    answers: [
                                        [
                                            {name: '1'},
                                            {name: '2'},
                                            {name: '3'}
                                        ],
                                        [
                                            {name: '1', trueIndex: 0},
                                            {name: '2', trueIndex: 1},
                                            {name: '3', trueIndex: 2}
                                        ]
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
            ]
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

    testsArr = [
        {
            name: 'First Test',
            sections: [
                {
                    name: 'first1',
                    questions: [
                        {
                            name: 'Simple test question texy for example multi',
                            type: 'mapping',
                            answers: [
                                [
                                    {name: '1'},
                                    {name: '2'},
                                    {name: '3'}
                                ],
                                [
                                    {name: '1', trueIndex: 0},
                                    {name: '2', trueIndex: 1},
                                    {name: '3', trueIndex: 2}
                                ]
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
