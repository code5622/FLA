import { Component } from '@angular/core';
import { Word } from './Word';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter = 2;

  words: Word[][] = [
    [
      { character: 'f', score: 'A', articulation: 'ae' },
      { character: 'r', score: 'A', articulation: 'ae'  },
      { character: 'y', score: 'A', articulation: 'ae'  },        
      { character: 's', score: 'B', articulation: 'ae'  },
      { character: 'k', score: 'A', articulation: 'ae'  }          
    ],
    [
      { character: 'o', score: 'A', articulation: 'ae' },
      { character: 'a', score: 'A', articulation: 'ae'  },
      { character: 'n', score: 'A', articulation: 'ae'  },        
      { character: 't', score: 'B', articulation: 'ae'  },
      { character: 'm', score: 'A', articulation: 'ae'  },  
      { character: 'o', score: 'A', articulation: 'ae' },
      { character: 'a', score: 'A', articulation: 'ae'  },
      { character: 'r', score: 'A', articulation: 'ae'  },        
      { character: 'n', score: 'B', articulation: 'ae'  },              
    ],    
  ];

  constructor() {}

}
