function ranNumGenerator(range) {
  return Math.floor(Math.random() * range);
}
  //setting variables
  const noun = ['cans of beans', 'lips', 'individualism', 'antidisestablishmentarianism', 'guitar', 'board games', 'sunglasses', 'too small T shirts', '2019 nissan rouge', 'christmas trees', 'hole in the wall', 'pair of shoes', 'big red candel',  'peanut butter', 'cat', 'dog', 'elephant', 'tongue',  'water bottle', 'feet', 'McDouble with a side of Medium Fries', 'pair of underware', 'DVD of Shrek', 'fruit bowl', 'liquer', 'umbrella', 'ulsers', 'unicorn', 'New York Times', 'doughnuts'];
  
  const people = ['Taylor Swift', 'my Mom', 'your mom', 'David from work', 'Jeff', 'Santa', 'The President', 'Men with big hands', 'Jaden Smith from Karate Kid', 'me and my wife', 'Queen Latifa', 'Joel Miller', 'waiter', 'Zoo keepers', 'my least favorite One Direction member', 'Jackson Polic', 'Woman on the go', 'Chriss from family guy', 'my Therapist', 'Mickey Mouse', 'Big joe', 'Ben and Jerry', 'Karen', 'Joe from Family Guy', 'my wife', 'my uncle', 'my third grade teachers',  'pig with lipstick on', 'Kim Kardashian', 'Shrek', 'Sponge Bob Squarepants', 'Fred Flinstone', 'Meg Ryan'];

  const places = ['hospital', 'soda fountain', 'my Mom\'s house', 'Florida', 'Alaska', 'nowhere perticular', 'my neighbor\'s house',  'place of childhood memories', 'The White House', 'the worst dive bar in town', 'under a highway', 'boat in the ocean', 'good part of town', 'an average Cracker Barrel', 'somewhere I shouldn\'t be', 'wherever crime is', 'motel', 'public restroom', 'crowded elevator', 'the bottom of a trashcan', 'kitchen', 'front desk of a hostle', 'half burnt down building', 'rush hour traffic', 'karate dojo', 'budist temple', 'the bottom of a well', 'wedding', 'Gothem City', 'Heaven', 'CIA headquarters', 'library', 'daycare center',  'GAP', 'mall', 'torn down building', 'hair salon', 'back seat of my car', 'waitingroom of a pharmacy', 'subway train', 'Walmart', 'New York'];
  

  const adjective = ['adorable', 'adventurous', 'aggressive', 'alive', 'ancient', 'annoying', 'angery', 'attractive', 'average', 'awful', 'bad', 'beautiful', 'bloody', 'breakable', 'wide', 'chubby', 'clean', 'colossal', 'crazy', 'cruel', 'cute', 'dead', 'elegant', 'eager', 'expensive', 'wide-eyed', 'fancy', 'fast', 'lazy', 'flat', 'gigantic', 'glamorous', 'dripping', 'sloppy', 'messy', 'graceful', 'grotesque', 'helpful', 'high', 'immense', 'worried', 'little', 'long', 'magnificent', 'mammoth sized', 'massive', 'miniature', 'motionless', 'muddy', 'naughty', 'precious', 'open', 'petite', 'old-fashioned', 'big and fat', 'stinking', 'scooby dooby doooooo look\'n ass', 'chin looking like a pistol grib ass', 'down right nasty'];

  const adverb = ['sadly', 'properly', 'rudely', 'selfishly', 'silently', 'seldom', 'slowly', 'patiently', 'softly', 'wisely', 'curiously', 'calmly', 'cheerfully', 'sadly', 'with a heavy heart', 'greedily', 'greatly', 'boldly', 'bashfully', 'nervously', 'fiercely', 'awkwardly', 'angrily', 'courageously', 'cruelly', 'deliberately', 'doubtfully', 'loudly', 'loosely', 'madly', 'merrily', 'mysteriously', 'never', 'painfully', 'powerfully', 'promptly', 'warmly', 'thoughtfully', 'suspiciously', 'speedily', 'shyly', 'seriously', 'safely', 'nutty'];

  const verb = ['parallel park', 'slap', 'noddle', 'use', 'eat', 'flip', 'sit on', 'wash', 'sneeze out', 'yell at', 'closely watch', 'beat', 'sign', 'spit on', 'lick', 'check in on', 'ignore', 'whip', 'awaken', 'become', 'blind', 'bit', 'build', 'blow', 'break', 'buy', 'cut', 'go into business', 'cast out', 'drink', 'feed', 'kill', 'disturb', 'dress', 'dry', 'fix', 'fry', 'freeze', 'greet', 'hunt', 'identify', 'imagine', 'pound', 'marry', 'employe', 'date', 'forbid', 'hate', 'interrupt', 'birth', 'detest', 'give a loan', 'turn around', 'hide',  'paint', 'spread', 'ruin',, 'play', 'make fun of', 'humiliate', 'rip and tear', 'beatbox', 'break dance', 'undress', 'do paper work'];
  
  const verbing = ['parallel parking', 'slaping', 'noddling', 'using', 'eating', 'flipping', 'sitting on', 'washing', 'sneezing out', 'yelling at', 'closely watching', 'beating', 'signing', 'spiting on', 'licking', 'checking in on', 'ignoring', 'whipping', 'awakening', 'becoming', 'bitting', 'building', 'blowing', 'breaking', 'buying', 'cutting', 'going into business', 'casting out', 'drinking', 'feeding', 'killing', 'disturbing', 'dressing', 'drying', 'fixing', 'frying', 'freezing', 'greeting', 'hunting', 'identifying', 'imagining', 'pounding', 'marrying', 'employing', 'dating', 'forbiding', 'hating', 'interrupting', 'birthing', 'detesting', 'giving a loan', 'turning around', 'hiding', 'painting', 'spreading', 'ruining', 'playing', 'making fun of', 'humiliating', 'ripping and tearing', 'beatboxing', 'break dancing', 'undressing', 'doing paper work'];
  
  const verbed = ['parallel parked', 'slaped', 'noddled', 'used', 'eaten', 'fliped', 'sat on', 'washed', 'sneezed out', 'yelled at', 'closely watched', 'beaten', 'signed', 'spat on', 'licked', 'checked in on', 'ignored', 'whipped', , 'awoken', 'became', 'blinded', 'biten', 'built', 'blew', 'broke', 'bought', 'had cut', 'went into business', 'casted out', 'drank', 'fed', 'killed', 'disturbed', 'dressed', 'dried', 'fixed', 'fried', 'froze', 'greeted', 'hunted', 'identified', 'imagined', 'pounded', 'married', 'employed', 'dated', 'forbade', 'hated', 'interrupted', 'birthed', 'detested', 'gave a loan', 'turned around', 'hid', 'paintad', 'spread', 'ruined', 'played', 'made fun of', 'humiliated', 'ripped and tore', 'beatboxed', 'break danced', 'undressed', 'done paper work',];
  
    
  
  // naming the methods of the structures that could be chosen at random. 
  function articleGen(word, wordType) {

    // defining a term to test if the last three characters are 'men'
    let lastCharacters = '';
    // iterating through the word for the plural article
    if (word !== undefined) {  
      for (let i = 0; i < word.length; i++) {
        if (i > word.length - 3) {
          lastCharacters += word[i];
        }
      }
      if (word[word.length - 1] === 's' || lastCharacters === 'men') {
        return 'some'
      }
      if (wordType === 'person' && word[0] === word.toUpperCase()) {
        return 'The';
      }
      if (word[2] === 'my' || word[4] === 'The' || word[0] === word.toUpperCase() && wordType === 'places') {
        return '';
      }
      if (word[0] === 'a' || word[0] === 'o' || word[0] === 'e' || word[0] === 'u' || word[0] === 'i') {
        return 'an';
      } else {
        return 'a';
      }
    }
  }
  
  function supplementWords(wordGen, wordType, supplementWordType) {
    supplementWordType += '';
    let supList = supplementWordType.split(' ');
    for (let i in supList) {
      if (supList[i] === 'article') {
        wordGen = articleGen(wordGen, wordType) + ' ' + wordGen;
      }
      if (supList[i] === 'comma') {
        wordGen += ',';
      }
      if (supList[i] === 'possessive') {
        wordGen += '\'s';
      }
      if (supList[i] === 'plural') {
        wordGen += 's';
      }
      if (supList[i] === 'end') {
        wordGen += '.';
      }
    }

    return ' ' + wordGen + ' ';
  }
  
  // creating seperate functions for generating the random words
  function gen(wordType, supplementWordType) {

    wordGen = '';

    switch (wordType) {
      case ('noun'):
        wordGen = noun[ranNumGenerator(noun.length - 1)];
        break;
      case ('people'):
        wordGen = people[ranNumGenerator(people.length - 1)];
        break;
      case ('places'):
        wordGen = places[ranNumGenerator(places.length - 1)];
        break;
      case ('adjective'):
        wordGen = adjective[ranNumGenerator(adjective.length - 1)];
        break;
      case ('adverb'):
        wordGen = adverb[ranNumGenerator(adverb.length - 1)];
        break;
      case ('verb'):
        wordGen = verb[ranNumGenerator(verb.length - 1)];
        break;
      case ('verbing'):
        wordGen = verbing[ranNumGenerator(verbing.length - 1)];
        break;
      case ('verbed'):
        wordGen = verbed[ranNumGenerator(verbed.length - 1)];
        break;
      default:
        return '. ';
    }

    // making a better method for what a word would need in addition to being generatted. this will be a list that be made through the long string so the word type and what it needs in addition are the only strings the function needs
    if (supplementWordType != null) {
      return supplementWords(wordGen, wordType, supplementWordType);
    }

    return ' ' + wordGen + ' ';
  }

  function mixedMessage() {

    // I put the sentences in the function in order to produce new messages each click
    const sentence1 = [
      'You know me as' + gen('people', 'end article'),
      'My name is' + gen('people') + 'and the year is 19' + ranNumGenerator(99) + gen(0),
      'Not one day goes by without thoughts of' + gen('people', 'article possessive') + gen('adjective') + gen('noun', 'end'),
      'I will never forget' + gen('people') + gen('adverb') + gen('verbing') + 'me' + gen(0),
      'This is my' + gen('adjective') + 'friend' + gen('people') + 'that I met at' + gen('adjective', 'article') + gen('places', 'end'),
      'I didn\'t think I could' + gen('adverb') + gen('verb') + gen('noun', 'article comma') + 'but look at me now! ' + ranNumGenerator(10) + ' years later and I\'m still' + gen('adverb') + gen('verbing') + 'throughout any given' + gen('places', 'end'),
      'I wake up' + gen('verbing') + 'out of bed, and the first thing I do is' + gen('verb') + gen('noun', 'comma article') + 'Then I am' + gen('adjective') + 'and awake' + gen(0),
      'After ' + gen('verbing') + ranNumGenerator(99) + gen('noun', 'plural') + 'I sure am' + gen('adjective', 'end'),
      'After ' + ranNumGenerator(100) + ' years of' + gen('adverb') + gen('verbing', 'comma') + 'I take resident at' + gen('places') + 'so I can' + gen('verb') + 'in peace. ',
      'I know' + gen('people') + 'is not happy financially. Probably all the' + gen('noun') + 'they keep' + gen('verbing', 'end'),
    ];
    
    
    const sentence2 = [
      'Then' + gen('adjective') + 'images of' + gen('noun', 'plural') + gen('adverb') + gen('verbing') + 'through my mind' + gen(0),
      'I can no longer' + gen('verb') + 'at' + gen('places', 'article end') + 'All because of ' + gen('people', 'possessive') + gen('adjective') + gen('noun', 'comma') + gen('people', 'article') + 'is now my' + gen('noun', 'end'),
      'There is nothing like' + gen('adverb') + gen('verbing') + gen('noun', 'article') + 'at ' + (ranNumGenerator(12) + 1) + ' o\'clock at night it always makes me' + gen('adverb') + gen('adjective', 'end'),
      'To' + gen('verb') + 'or not to' + gen('verb', 'comma') + 'that is the' + gen('adjective') + 'question' + gen(0),
      'I can only imagine' + gen('verbing') + gen('noun', 'article') + 'but you' + gen('verbed') + 'for ' + ranNumGenerator(24) + gen('adjective') + 'hours' + gen(0),
      'I' + gen('adverb') + 'don\'t feel like' + gen('verbing') + gen('noun', 'article') + 'today, it makes me feel too' + gen('adjective', 'end'),
      'Oh NO! I\'m late too' + gen('verbing') + 'with' + gen('people') + 'at' + gen('places', 'article comma') + 'I hope he doesn\'t' + gen('adverb') + gen('verb') + 'me for it' + gen(0),
      'On the other hand, I heard' + gen('people') + 'slept' + gen('adverb') + 'with' + gen('people') + 'without even using' + gen('adjective', 'article') + gen('noun', 'end'),
    ];
    
    
    const sentence3 = [
      'After dealing with that, I should' + gen('verb') + 'to the' + gen('noun', 'plural') + gen('adverb', 'end'),
      'On that note I' + gen('verbed') + 'at' + gen('place') + 'and let me tell you I' + gen('adverb') + gen('verbed') + gen('noun', 'article comma') + 'not great' + gen(0),
      'I just put on my headphones and blasted' + gen('noun') + 'music. It\s kinda my thing' + gen(0),
      'little bit about myself is that I deflate by' + gen('adverb') + gen('verbing') + ' at my local' + gen('places', 'end'),
      'hold on,' + gen('people') + 'just' + gen('adverb') + 'walked in with a' + gen('adjective') + gen('noun', 'end'),
      'I like my job. I just' + gen('verb') + ' but I want to get into' + gen('verbing', 'end') + 'Maybe I should be trying to impress' + gen('people', 'end'),
      'I saw this tic toc dance where ' + gen('people') + 'goes to' + gen('places', 'article') + 'to find' + gen('people') + 'who would' + gen('verb') + 'the phone then ' + gen('verb') + 'with every friend' + gen(0),
      'I don\'t trust the' + gen('people', 'plural') + 'after they' + gen('adverb') + gen('verbed') + gen('people') + ', it just' + gen('adjective') + 'effected my family too much' + gen(0),
    ];
    
    
    const sentence4 = [
      'But at the same time I just can\'t' + gen('adverb') + gen('verb') + 'anymore. Not at' + gen('places', 'end article'),
      'Still the images of' + gen('verbing') + 'that' + gen('adjective') + gen('people') + 'person' + gen('adverb') + 'haunt me' + gen(0),
      'Even without' + gen('people') + 'I' + gen('verb') + gen('noun', 'plural') + 'untill I\'m able to' + gen('verb') + 'at' + gen('places', 'end'),
      gen('adverb') + 'I ignore these thoughts and ' + gen('adverb') + 'sit down to watch' + gen('adjective') + gen('people') + 'at' + gen('places', 'article') + 'on my phone' + gen(0),
      'But I just can\'t' + gen('verb') + gen('adverb') + 'with my parents in town. So I have to go to' + gen('adjective', 'article') + gen('places', 'end'),
      'Controversial' + gen('adjective') + 'thought! I just cannot stop' + gen('verbing') + 'at' + gen('places', 'article', 'comma') + 'even with' + gen('people') + gen('adverb') + 'watching' + gen(0),
      'I just' + gen('adverb') + 'opened a' + gen('adjective') + 'book and found myself' + gen('adverb') + 'reading about' + gen('verbing') + 'in' + gen('places', 'article comma plural') + 'and I' + gen('adverb') + 'closed the book when' + gen('people') + gen('verbed') + 'in the middle of' + gen('places', 'end'),
    ];
    
    
    const sentence5 = [
      'I never did go back to' + gen('places', 'comma') + 'for I ran off with' + gen('people', 'end'),
      'And that is why I' + gen('adverb') + 'drink myself' + gen('adjective', 'end'),
      'I learned to' + gen('adverb') + 'forgive myself after I found God in' + gen('places', 'end'),
      'Then I' + gen('verb') + 'myself' + gen('adverb') + 'till I see the sunrise' + gen(0),
      'That is the reason I' + gen('verb') + 'myself' + gen(0),
      'After all that I have no clue how I' + gen('verbed') + gen('noun', 'article') + gen('adverb', 'comma') + 'but I kinda like it now.',
      'Every morning I still have to look at' + gen('people', 'possessive') + gen('noun') + 'in the eye without' + gen('verbing', 'end') + 'I don\'t think I can live with myself',
      'Because of all that I live with' + gen('person') + 'and' + gen('verbing') + 'their' + gen('noun', 'possessive') + gen('noun') + 'every morning has been a dream' + gen(0),
    ];

  let completeMessage = sentence1[ranNumGenerator(sentence1.length - 1)]
    + sentence2[ranNumGenerator(sentence2.length - 1)]
    + sentence3[ranNumGenerator(sentence3.length - 1)]
    + sentence4[ranNumGenerator(sentence4.length - 1)]
    + sentence5[ranNumGenerator(sentence5.length - 1)];
  completeMessage = completeMessage.split('  ');
  completeMessage = completeMessage.join(' ');
  return completeMessage;
  
}


  function throwMessage() {
    try { 
      document.querySelector('.mixed-messages-text-feild').innerHTML = mixedMessage();
    } catch (err) {
      console.log(err);
    }
  }