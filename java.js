var arrayQuote = [
    {'author': 'diego maradona', 
     'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {'author': 'leo messi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'adel shakal', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'tamer elgayar', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'abdo eldesoqi', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'yosef bosha', 
     'quote': '“Be yourself; everyone else is already taken.”'
    
    },
    {'author': 'essam el shawali', 
    'quote': '“"Ronaldo is history"”'
   
   },
];

var lastRandomclick= -1; 

function Quote() {
    var randomclick;
    do {
        randomclick = Math.floor(Math.random() * arrayQuote.length);
    } while (randomclick=== lastRandomclick);
  lastRandomclick = randomclick;
    document.getElementById('quoterandom').innerHTML = arrayQuote[randomclick].quote;
    document.getElementById('authorrandom').innerHTML = arrayQuote[randomclick].author;
} 
