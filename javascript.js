/*  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'tgbNymZ7vqY',

    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;

*/
/*  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
      }
  }*/
/*
  function stopVideo() {
    player.stopVideo();
  }
*/

var moviesApp = angular.module('moviesApp', []);
moviesApp.controller('moviesCtrl', function($scope, $timeout, $http) {




  $scope.playVideo = function() {
    $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  };

  $scope.pauseVideo = function() {
    $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  };

  var url = "https://www.youtube.com/embed/M6v1oD_pF-k?enablejsapi=1&version=3&playerapiid=ytplayer";

  $scope.loadVideo1 = function() {
    url = "https://www.youtube.com/embed/" + "M6v1oD_pF-k" + "?enablejsapi=1&version=3&playerapiid=ytplayer";
    $("#myVideo").attr('src', url);
    $scope.pauseVideo();
    $scope.resetTimer();
    console.log(url);
  }

  $scope.loadVideo2 = function() {
    url = "https://www.youtube.com/embed/" + "2OM7Ubqee3U" + "?enablejsapi=1&version=3&playerapiid=ytplayer";
    $("#myVideo").attr('src', url);
    $scope.pauseVideo();
    $scope.resetTimer();
    console.log(url);
  }
  $scope.loadVideo3 = function() {
    url = "https://www.youtube.com/embed/" + "rU2fglQ_Gl8" + "?enablejsapi=1&version=3&playerapiid=ytplayer";
    $("#myVideo").attr('src', url);
    $scope.pauseVideo();
    $scope.resetTimer();
    console.log(url);
  }
  $scope.loadVideo4 = function() {
    url = "https://www.youtube.com/embed/" + "frjRU_spyj4" + "?enablejsapi=1&version=3&playerapiid=ytplayer";
    $("#myVideo").attr('src', url);
    $scope.pauseVideo();
    $scope.resetTimer();
    console.log(url);
  }
  //for (var i = 0; i < $scope.textArray.length; i++) {
  //  console.log($scope.textArray[i]);
  //}
  $scope.setDifficulty = function() {
    secondsPerWord = 60 / $scope.difficulty;
  };

  $scope.typingArea = "";
  $scope.displaySentence = 0;
  var firstStart = true;
  $scope.difficulty = 30; //how many wpm must the user type at minumum
  var secondsPerWord = 60 / $scope.difficulty;
  $scope.inputStyle = { "background-color": "white" };
  $scope.inText;
  var toSplit = "Connla of the Fiery Hair was son of Conn of the Hundred Fights.€One day as he stood by the side of his father on the height of Usna, he saw a maiden clad in strange attire coming towards him.€\"Whence comest thou, maiden?\" said Connla.€\"I come from the Plains of the Ever Living,\" she said, \"there where there is neither death nor sin.€There we keep holiday alway, nor need we help from any in our joy.€And in all our pleasure we have no strife.€And because we have our homes in the round green hills, men call us the Hill Folk.\"€The king and all with him wondered much to hear a voice when they saw no one.€For save Connla alone, none saw the Fairy Maiden.€\"To whom art thou talking, my son?\" said Conn the king.€Then the maiden answered, \"Connla speaks to a young, fair maid, whom neither death nor old age awaits.€I love Connla, and now I call him away to the Plain of Pleasure, Moy Mell, where Boadag is king for aye, nor has there been complaint or sorrow in that land since he has held the kingship.€Oh, come with me, Connla of the Fiery Hair, ruddy as the dawn with thy tawny skin.€A fairy crown awaits thee to grace thy comely face and royal form.€Come, and never shall thy comeliness fade, nor thy youth, till the last awful day of judgment.\"€The king in fear at what the maiden said, which he heard though he could not see her, called aloud to his Druid, Coran by name.€\"Oh, Coran of the many spells,\" he said, \"and of the cunning magic, I call upon thy aid.€A task is upon me too great for all my skill and wit, greater than any laid upon me since I seized the kingship.€A maiden unseen has met us, and by her power would take from me my dear, my comely son.€If thou help not, he will be taken from thy king by woman's wiles and witchery.\"€Then Coran the Druid stood forth and chanted his spells towards the spot where the maiden's voice had been heard.€And none heard her voice again, nor could Connla see her longer.€Only as she vanished before the Druid's mighty spell, she threw an apple to Connla.€For a whole month from that day Connla would take nothing, either to eat or to drink, save only from that apple.€But as he ate it grew again and always kept whole.€And all the while there grew within him a mighty yearning and longing after the maiden he had seen.€But when the last day of the month of waiting came, Connla stood by the side of the king his father on the Plain of Arcomin, and again he saw the maiden come towards him, and again she spoke to him.€\"'Tis a glorious place, forsooth, that Connla holds among short-lived mortals awaiting the day of death.€But now the folk of life, the ever-living ones, beg and bid thee come to Moy Mell, the Plain of Pleasure, for they have learnt to know thee, seeing thee in thy home among thy dear ones.\"€When Conn the king heard the maiden's voice he called to his men aloud and said:€\"Summon swift my Druid Coran, for I see she has again this day the power of speech.\"€Then the maiden said:€\"Oh, mighty Conn, fighter of a hundred fights, the Druid's power is little loved; it has little honour in the mighty land, peopled with so many of the upright.€When the Law will come, it will do away with the Druid's magic spells that come from the lips of the false black demon.\"€Then Conn the king observed that since the maiden came, Connla his son spoke to none that spake to him.€So Conn of the hundred fights said to him, \"Is it to thy mind what the woman says, my son?\"€\"'Tis hard upon me,\" then said Connla; \"I love my own folk above all things; but yet, but yet a longing seizes me for the maiden.\"€When the maiden heard this, she answered and said \"The ocean is not so strong as the waves of thy longing.€Come with me in my curragh, the gleaming, straight-gliding crystal canoe.€Soon we can reach Boadag's realm.€I see the bright sun sink, yet far as it is, we can reach it before dark.€There is, too, another land worthy of thy journey, a land joyous to all that seek it.€Only wives and maidens dwell there.€If thou wilt, we can seek it and live there alone together in joy.\"€When the maiden ceased to speak, Connla of the Fiery Hair rushed away from them and sprang into the curragh, the gleaming, straight-gliding crystal canoe.€And then they all, king and court, saw it glide away over the bright sea towards the setting sun.€Away and away, till eye could see it no longer, and Connla and the Fairy Maiden went their way on the sea, and were no more seen, nor did any know where they came.";
  $scope.textArray = toSplit.split("€");
  $scope.typing_prompt = $scope.textArray[$scope.displaySentence];
  var complete = false;
  var firstStartWPM = true;
  var toAdd;
  var width;
  console.log($scope.typing_prompt);
  
  $scope.cols = 52;//$scope.typing_prompt.length;
  $scope.loadStory1 = function() {
    $scope.resetTimer();
    $scope.pauseVideo();
    $scope.typingArea = "";
    $scope.displaySentence = 0;
    firstStart = true;
    $scope.difficulty = 30; //how many wpm must the user type at minumum
    secondsPerWord = 60 / $scope.difficulty;
    $scope.inputStyle = { "background-color": "white" };
    $scope.inText;
    toSplit = "Connla of the Fiery Hair was son of Conn of the Hundred Fights.€One day as he stood by the side of his father on the height of Usna, he saw a maiden clad in strange attire coming towards him.€\"Whence comest thou, maiden?\" said Connla.€\"I come from the Plains of the Ever Living,\" she said, \"there where there is neither death nor sin.€There we keep holiday alway, nor need we help from any in our joy.€And in all our pleasure we have no strife.€And because we have our homes in the round green hills, men call us the Hill Folk.\"€The king and all with him wondered much to hear a voice when they saw no one.€For save Connla alone, none saw the Fairy Maiden.€\"To whom art thou talking, my son?\" said Conn the king.€Then the maiden answered, \"Connla speaks to a young, fair maid, whom neither death nor old age awaits.€I love Connla, and now I call him away to the Plain of Pleasure, Moy Mell, where Boadag is king for aye, nor has there been complaint or sorrow in that land since he has held the kingship.€Oh, come with me, Connla of the Fiery Hair, ruddy as the dawn with thy tawny skin.€A fairy crown awaits thee to grace thy comely face and royal form.€Come, and never shall thy comeliness fade, nor thy youth, till the last awful day of judgment.\"€The king in fear at what the maiden said, which he heard though he could not see her, called aloud to his Druid, Coran by name.€\"Oh, Coran of the many spells,\" he said, \"and of the cunning magic, I call upon thy aid.€A task is upon me too great for all my skill and wit, greater than any laid upon me since I seized the kingship.€A maiden unseen has met us, and by her power would take from me my dear, my comely son.€If thou help not, he will be taken from thy king by woman's wiles and witchery.\"€Then Coran the Druid stood forth and chanted his spells towards the spot where the maiden's voice had been heard.€And none heard her voice again, nor could Connla see her longer.€Only as she vanished before the Druid's mighty spell, she threw an apple to Connla.€For a whole month from that day Connla would take nothing, either to eat or to drink, save only from that apple.€But as he ate it grew again and always kept whole.€And all the while there grew within him a mighty yearning and longing after the maiden he had seen.€But when the last day of the month of waiting came, Connla stood by the side of the king his father on the Plain of Arcomin, and again he saw the maiden come towards him, and again she spoke to him.€\"'Tis a glorious place, forsooth, that Connla holds among short-lived mortals awaiting the day of death.€But now the folk of life, the ever-living ones, beg and bid thee come to Moy Mell, the Plain of Pleasure, for they have learnt to know thee, seeing thee in thy home among thy dear ones.\"€When Conn the king heard the maiden's voice he called to his men aloud and said:€\"Summon swift my Druid Coran, for I see she has again this day the power of speech.\"€Then the maiden said:€\"Oh, mighty Conn, fighter of a hundred fights, the Druid's power is little loved; it has little honour in the mighty land, peopled with so many of the upright.€When the Law will come, it will do away with the Druid's magic spells that come from the lips of the false black demon.\"€Then Conn the king observed that since the maiden came, Connla his son spoke to none that spake to him.€So Conn of the hundred fights said to him, \"Is it to thy mind what the woman says, my son?\"€\"'Tis hard upon me,\" then said Connla; \"I love my own folk above all things; but yet, but yet a longing seizes me for the maiden.\"€When the maiden heard this, she answered and said \"The ocean is not so strong as the waves of thy longing.€Come with me in my curragh, the gleaming, straight-gliding crystal canoe.€Soon we can reach Boadag's realm.€I see the bright sun sink, yet far as it is, we can reach it before dark.€There is, too, another land worthy of thy journey, a land joyous to all that seek it.€Only wives and maidens dwell there.€If thou wilt, we can seek it and live there alone together in joy.\"€When the maiden ceased to speak, Connla of the Fiery Hair rushed away from them and sprang into the curragh, the gleaming, straight-gliding crystal canoe.€And then they all, king and court, saw it glide away over the bright sea towards the setting sun.€Away and away, till eye could see it no longer, and Connla and the Fairy Maiden went their way on the sea, and were no more seen, nor did any know where they came.";
    $scope.textArray = toSplit.split("€");
    $scope.typing_prompt = $scope.textArray[$scope.displaySentence];
    complete = false;
    console.log($scope.typing_prompt);
  };
  $scope.loadStory2 = function() {
    $scope.resetTimer();
    $scope.pauseVideo();
    $scope.typingArea = "";
    $scope.displaySentence = 0;
    firstStart = true;
    $scope.difficulty = 30; //how many wpm must the user type at minumum
    secondsPerWord = 60 / $scope.difficulty;
    $scope.inputStyle = { "background-color": "white" };
    $scope.inText;
    toSplit = "There was once upon a time two farmers, and their names were Hudden and Dudden.€They had poultry in their yards, sheep on the uplands, and scores of cattle in the meadow-land alongside the river.€But for all that they weren't happy.€For just between their two farms there lived a poor man by the name of Donald O'Neary.€He had a hovel over his head and a strip of grass that was barely enough to keep his one cow, Daisy, from starving,€and, though she did her best, it was but seldom that Donald got a drink of milk or a roll of butter from Daisy.€You would think there was little here to make Hudden and Dudden jealous, but so it is,€the more one has the more one wants, and Donald's neighbours lay awake of nights scheming how they might get hold of his little strip of grass-land.€Daisy, poor thing, they never thought of; she was just a bag of bones.€One day Hudden met Dudden, and they were soon grumbling as usual, and all to the tune of:€\"If only we could get that vagabond Donald O'Neary out of the country.\"€\"Let's kill Daisy,\" said Hudden at last; \"if that doesn't make him clear out, nothing will.\"€No sooner said than agreed, and it wasn't dark before Hudden and Dudden crept up to the little shed where lay poor Daisy trying her best to chew the cud, though she hadn't had as much grass in the day as would cover your hand.€And when Donald came to see if Daisy was all snug for the night, the poor beast had only time to lick his hand once before she died.€Well, Donald was a shrewd fellow, and downhearted though he was, began to think if he could get any good out of Daisy's death.€He thought and he thought, and the next day you could have seen him trudging off early to the fair, Daisy's hide over his shoulder, every penny he had jingling in his pockets.€Just before he got to the fair, he made several slits in the hide, put a penny in each slit, walked into the best inn of the town as bold as if it belonged to him, and, hanging the hide up to a nail in the wall, sat down.€\"Some of your best whisky,\" says he to the landlord.€But the landlord didn't like his looks.€\"Is it fearing I won't pay you, you are?\" says Donald; \"why I have a hide here that gives me all the money I want.\"€And with that he hit it a whack with his stick and out hopped a penny.€The landlord opened his eyes, as you may fancy.€\"What'll you take for that hide?\"€\"It's not for sale, my good man.\"€\"Will you take a gold piece?\"€\"It's not for sale, I tell you.€Hasn't it kept me and mine for years?\" and with that Donald hit the hide another whack and out jumped a second penny.€Well, the long and the short of it was that Donald let the hide go, and, that very evening, who but he should walk up to Hudden's door?€\"Good-evening, Hudden. Will you lend me your best pair of scales?\"€Hudden stared and Hudden scratched his head, but he lent the scales.€When Donald was safe at home, he pulled out his pocketful of bright gold and began to weigh each piece in the scales.€But Hudden had put a lump of butter at the bottom, and so the last piece of gold stuck fast to the scales when he took them back to Hudden.€If Hudden had stared before, he stared ten times more now, and no sooner was Donald's back turned, than he was of as hard as he could pelt to Dudden's.€\"Good-evening, Dudden.€That vagabond, bad luck to him.\"€\"You mean Donald O'Neary?\"€\"And who else should I mean?€He's back here weighing out sackfuls of gold.\"€\"How do you know that?\"€\"Here are my scales that he borrowed, and here's a gold piece still sticking to them.\"€Off they went together, and they came to Donald's door.€Donald had finished making the last pile of ten gold pieces.€And he couldn't finish because a piece had stuck to the scales.€In they walked without an \"If you please\" or \"By your leave.\"€\"Well, I never!\" that was all they could say.€\"Good-evening, Hudden; good-evening, Dudden.€Ah! you thought you had played me a fine trick, but you never did me a better turn in all your lives.€When I found poor Daisy dead, I thought to myself, 'Well, her hide may fetch something;' and it did.€Hides are worth their weight in gold in the market just now.\"€Hudden nudged Dudden, and Dudden winked at Hudden.€\"Good-evening, Donald O'Neary.\"€\"Good-evening, kind friends.\"€The next day there wasn't a cow or a calf that belonged to Hudden or Dudden but her hide was going to the fair in Hudden's biggest cart drawn by Dudden's strongest pair of horses.€When they came to the fair, each one took a hide over his arm, and there they were walking through the fair, bawling out at the top of their voices: \"Hides to sell! hides to sell!\"€Out came the tanner: \"How much for your hides, my good men?\"€\"Their weight in gold.\"€\"It's early in the day to come out of the tavern.\"€That was all the tanner said, and back he went to his yard.€\"Hides to sell! Fine fresh hides to sell!\"€Out came the cobbler.€\"How much for your hides, my men?\"€\"Their weight in gold.\"€\"Is it making game of me you are!€Take that for your pains,\" and the cobbler dealt Hudden a blow that made him stagger.€Up the people came running from one end of the fair to the other.€\"What's the matter? What's the matter?\" cried they.€\"Here are a couple of vagabonds selling hides at their weight in gold,\" said the cobbler.€\"Hold 'em fast; hold 'em fast!\" bawled the innkeeper, who was the last to come up, he was so fat.€\"I'll wager it's one of the rogues who tricked me out of thirty gold pieces yesterday for a wretched hide.\"€It was more kicks than halfpence that Hudden and Dudden got before they were well on their way home again, and they didn't run the slower because all the dogs of the town were at their heels.€Well, as you may fancy, if they loved Donald little before, they loved him less now.€\"What's the matter, friends?\" said he, as he saw them tearing along, their hats knocked in, and their coats torn off, and their faces black and blue.€\"Is it fighting you've been? or mayhap you met the police, ill luck to them?\"€\"We'll police you, you vagabond.€It's mighty smart you thought yourself, deluding us with your lying tales.\"€\"Who deluded you?€Didn't you see the gold with your own two eyes?\"€But it was no use talking.€Pay for it he must, and should.";
    toSplit += "€There was a meal-sack handy, and into it Hudden and Dudden popped Donald O'Neary, tied him up tight, ran a pole through the knot, and off they started for the Brown Lake of the Bog, each with a pole-end on his shoulder, and Donald O'Neary between.€But the Brown Lake was far, the road was dusty, Hudden and Dudden were sore and weary, and parched with thirst.€There was an inn by the roadside.€\"Let's go in,\" said Hudden; \"I'm dead beat.€It's heavy he is for the little he had to eat.\"€If Hudden was willing, so was Dudden.€As for Donald, you may be sure his leave wasn't asked, but he was lumped down at the inn door for all the world as if he had been a sack of potatoes.€\"Sit still, you vagabond,\" said Dudden; \"if we don't mind waiting, you needn't.\"€Donald held his peace, but after a while he heard the glasses clink, and Hudden singing away at the top of his voice.€\"I won't have her, I tell you; I won't have her!\" said Donald.€But nobody heeded what he said.€\"I won't have her, I tell you; I won't have her!\" said Donald, and this time he said it louder; but nobody heeded what he said.€\"I won't have her, I tell you; I won't have her!\" said Donald; and this time he said it as loud as he could.€\"And who won't you have, may I be so bold as to ask?\" said a farmer, who had just come up with a drove of cattle, and was turning in for a glass.€\"It's the king's daughter.€They are bothering the life out of me to marry her.\"€\"You're the lucky fellow.€I'd give something to be in your shoes.\"€\"Do you see that now!€Wouldn't it be a fine thing for a farmer to be marrying a princess, all dressed in gold and jewels?\"€\"Jewels, do you say? Ah, now, couldn't you take me with you?\"€\"Well, you're an honest fellow, and as I don't care for the king's daughter, though she's as beautiful as the day, and is covered with jewels from top to toe, you shall have her.€Just undo the cord, and let me out; they tied me up tight, as they knew I'd run away from her.\"€Out crawled Donald; in crept the farmer.€\"Now lie still, and don't mind the shaking; it's only rumbling over the palace steps you'll be.€And maybe they'll abuse you for a vagabond, who won't have the king's daughter; but you needn't mind that.€Ah! it's a deal I'm giving up for you, sure as it is that I don't care for the princess.\"€\"Take my cattle in exchange,\" said the farmer; and you may guess it wasn't long before Donald was at their tails driving them homewards.€Out came Hudden and Dudden, and the one took one end of the pole, and the other the other.€\"I'm thinking he's heavier,\" said Hudden.€\"Ah, never mind,\" said Dudden; \"it's only a step now to the Brown Lake.\"€\"I'll have her now! I'll have her now!\" bawled the farmer, from inside the sack.€\"By my faith, and you shall though,\" said Hudden, and he laid his stick across the sack.€\"I'll have her! I'll have her!\" bawled the farmer, louder than ever.€\"Well, here you are,\" said Dudden, for they were now come to the Brown Lake, and, unslinging the sack, they pitched it plump into the lake.€\"You'll not be playing your tricks on us any longer,\" said Hudden.€\"True for you,\" said Dudden.€\"Ah, Donald, my boy, it was an ill day when you borrowed my scales.\"€Off they went, with a light step and an easy heart, but when they were near home, who should they see but Donald O'Neary,€and all around him the cows were grazing, and the calves were kicking up their heels and butting their heads together.€\"Is it you, Donald?\" said Dudden.€\"Faith, you've been quicker than we have.\"€\"True for you, Dudden, and let me thank you kindly; the turn was good, if the will was ill.€You'll have heard, like me, that the Brown Lake leads to the Land of Promise.€I always put it down as lies, but it is just as true as my word.€Look at the cattle.\"€Hudden stared, and Dudden gaped; but they couldn't get over the cattle; fine fat cattle they were too.€\"It's only the worst I could bring up with me,\" said Donald O'Neary; \"the others were so fat, there was no driving them.€Faith, too, it's little wonder they didn't care to leave, with grass as far as you could see, and as sweet and juicy as fresh butter.\"€\"Ah, now, Donald, we haven't always been friends,\" said Dudden, \"but, as I was just saying, you were ever a decent lad, and you'll show us the way, won't you?\"€\"I don't see that I'm called upon to do that; there is a power more cattle down there.€Why shouldn't I have them all to myself?\"€\"Faith, they may well say, the richer you get, the harder the heart.€You always were a neighbourly lad, Donald.€You wouldn't wish to keep the luck all to yourself?\"€\"True for you, Hudden, though 'tis a bad example you set me.€But I'll not be thinking of old times.€There is plenty for all there, so come along with me.\"€Off they trudged, with a light heart and an eager step.€When they came to the Brown Lake, the sky was full of little white clouds, and, if the sky was full, the lake was as full.€\"Ah! now, look, there they are,\" cried Donald, as he pointed to the clouds in the lake.€\"Where? where?\" cried Hudden, and \"Don't be greedy!\" cried Dudden, as he jumped his hardest to be up first with the fat cattle.€But if he jumped first, Hudden wasn't long behind.€They never came back.€Maybe they got too fat, like the cattle.€As for Donald O'Neary, he had cattle and sheep all his days to his heart's content.";
    $scope.textArray = toSplit.split("€");
    $scope.typing_prompt = $scope.textArray[$scope.displaySentence];
    complete = false;
    console.log($scope.typing_prompt);
  }
  $scope.loadStory3 = function() {
    $scope.resetTimer();
    $scope.pauseVideo();
    $scope.typingArea = "";
    $scope.displaySentence = 0;
    firstStart = true;
    $scope.difficulty = 30; //how many wpm must the user type at minumum
    secondsPerWord = 60 / $scope.difficulty;
    $scope.inputStyle = { "background-color": "white" };
    $scope.inText;
    toSplit = "Four.€Five.€Six.€Seven."
    $scope.textArray = toSplit.split("€");
    $scope.typing_prompt = $scope.textArray[$scope.displaySentence];
    complete = false;
    console.log($scope.typing_prompt);
    $scope.pauseVideo();

  }
  $scope.loadStory4 = function() {
    $scope.resetTimer();
    $scope.pauseVideo();
    $scope.typingArea = "";
    $scope.displaySentence = 0;
    firstStart = true;
    $scope.difficulty = 30; //how many wpm must the user type at minumum
    secondsPerWord = 60 / $scope.difficulty;
    $scope.inputStyle = { "background-color": "white" };
    $scope.inText;
    toSplit = "Eight.€Nine.€Ten.€Eleven."
    $scope.textArray = toSplit.split("€");
    $scope.typing_prompt = $scope.textArray[$scope.displaySentence];
    complete = false;
    console.log($scope.typing_prompt);
    $scope.pauseVideo();

  }
  $scope.typeCheck = function() {
    if (firstStart == true) {
      $scope.startTimer();
      firstStart = false;
    }
    if ($scope.textArray[$scope.displaySentence].startsWith($scope.typingArea)) {
      $scope.inputStyle = { "background-color": "white" };
      console.log("That's correct");
    }
    else {
      $scope.inputStyle = { "background-color": "#F98484" };

    }
    if ($scope.typingArea == $scope.typing_prompt) {
      if ($scope.displaySentence == $scope.textArray.length - 1) {
        $scope.endTimer();
      }
      if ($scope.timerCount > 0) {
        $scope.addTime();
      }
      else {
        $scope.startTimer();
      }
      //Display next sentence to type
      $scope.displaySentence++;
      $scope.typing_prompt = $scope.textArray[$scope.displaySentence];
      $scope.typingArea = "";
      console.log($scope.textArray[$scope.displaySentence]);
    }
  };
  $scope.startTimer = function() {
    console.log("starting timer");
    $scope.playVideo();
    $("#inputArea").attr('placeholder',"");
    if (firstStartWPM == true) {
      toAdd = Math.trunc(secondsPerWord * ($scope.textArray[$scope.displaySentence].split(" ").length));
      if (toAdd < 5) {
        toAdd = 5;
      }
      $scope.timerCount = toAdd;
      firstStartWPM = false;
    }
    else {
      $scope.timerCount = Math.trunc(secondsPerWord * ($scope.textArray[$scope.displaySentence + 1].split(" ").length));
    }

    var countDown = function() {
      if ($scope.timerCount < 0 && complete == false) {
        $scope.pauseVideo();
      }
      else if ($scope.timerCount < 0 && complete == true) {

      }
      else {
        $scope.countDownLeft = $scope.timerCount;
        $scope.timerCount--;
        width = ($scope.timerCount/toAdd)*800;
        if (width > 800) {
          width = 800;
        }
        $("#progressbarDiv").width(width);
        $timeout(countDown, 1000);
      }
    };
    $scope.countDownLeft = $scope.timerCount;
    countDown();
  }
  $scope.addTime = function() {
    toAdd = Math.trunc(secondsPerWord * ($scope.textArray[$scope.displaySentence + 1].split(" ").length));
    if (toAdd < 5) {
      toAdd = 5;
    }
    $scope.timerCount = toAdd;
  }
  $scope.endTimer = function() {
    complete = true;
    $scope.timerCount = 0;
    $scope.typing_prompt = "Complete";
    $scope.typingArea = "";
  }
  $scope.resetTimer = function() {
    $scope.timerCount = 0;
    firstStart = true;
    firstStartWPM = true;
  }
  console.log("working");


});
