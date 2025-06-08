  const lyrics = [
    // Frank Ocean
    { quote: "I thought that I was dreaming when you said you loved me", artist: "Frank Ocean", song: "Ivy" },
    { quote: "We'll never be those kids again", artist: "Frank Ocean", song: "Ivy" },
    { quote: "You got a roommate, he'll hear what we do", artist: "Frank Ocean", song: "Thinkin Bout You" },
  
    // Steve Lacy
    { quote: "Don't even know what she's doing in my dreams", artist: "Steve Lacy", song: "C U Girl" },
    { quote: "Only feel right when I'm next to you", artist: "Steve Lacy", song: "Dark Red" },
    { quote: "I wish I knew, I wish I knew you wanted me", artist: "Steve Lacy", song: "Bad Habit" },
  
    // Central Cee
    { quote: "How can I be homophobic? My b*tch is gay", artist: "Central Cee", song: "Doja" },
    { quote: "If you knew what I made in a day, you'd be shocked", artist: "Central Cee", song: "Obsessed With You" },
    { quote: "I ain't got a heart 'cause I'm broke", artist: "Central Cee", song: "Loading" },
  
    // SZA
    { quote: "I'm a mess but I'm the mess that you wanted", artist: "SZA", song: "Good Days" },
    { quote: "I want to be happy, but I'm scared", artist: "SZA", song: "Love Galore" },
    { quote: "Control is an illusion, we don't get to choose", artist: "SZA", song: "20 Something" },
  
    // Drake
    { quote: "Started from the bottom now we're here", artist: "Drake", song: "Started From the Bottom" },
    { quote: "I got my eyes on you, you're everything that I see", artist: "Drake", song: "Hold On, We're Going Home" },
    { quote: "You only live once, that's the motto, YOLO", artist: "Drake", song: "The Motto" },
  
    // Kanye West
    { quote: "Reach for the stars so if you fall you land on a cloud", artist: "Kanye West", song: "Homecoming" },
    { quote: "I ain't here to argue about his facial features", artist: "Kanye West", song: "Gold Digger" },
    { quote: "The plan was to drink until the pain over", artist: "Kanye West", song: "Heartless" },
  
    // The Weeknd
    { quote: "I ran out of tears when I was eighteen", artist: "The Weeknd", song: "Call Out My Name" },
    { quote: "I'm blinded by the lights", artist: "The Weeknd", song: "Blinding Lights" },
    { quote: "I only call you when it's half past five", artist: "The Weeknd", song: "The Hills" },
  
    // Kendrick Lamar
    { quote: "We're gonna be alright", artist: "Kendrick Lamar", song: "Alright" },
    { quote: "I got power, poison, pain and joy inside my DNA", artist: "Kendrick Lamar", song: "DNA" },
  
    // Additional artists
  
    // Billie Eilish
    { quote: "I'm not your friend or anything, damn", artist: "Billie Eilish", song: "Therefore I Am" },
    { quote: "When the party's over, I'll call you", artist: "Billie Eilish", song: "When the Party's Over" },
  
    // Post Malone
    { quote: "I fall apart every time you walk away", artist: "Post Malone", song: "I Fall Apart" },
    { quote: "Sunflower, my eyes want you more than a melody", artist: "Post Malone", song: "Sunflower" },
  
    // Ariana Grande
    { quote: "Right now, I'm in a state of mind", artist: "Ariana Grande", song: "no tears left to cry" },
    { quote: "Thank u, next", artist: "Ariana Grande", song: "thank u, next" },
  
    // J. Cole
    { quote: "Love yours", artist: "J. Cole", song: "Love Yourz" },
    { quote: "No such thing as a life that's better than yours", artist: "J. Cole", song: "Love Yourz" },
  
    // Travis Scott
    { quote: "I'm way too turnt up", artist: "Travis Scott", song: "Goosebumps" },
    { quote: "Got the whole city talking", artist: "Travis Scott", song: "Sicko Mode" },
  
    // Lana Del Rey
    { quote: "I'm your national anthem", artist: "Lana Del Rey", song: "National Anthem" },
    { quote: "Born to die", artist: "Lana Del Rey", song: "Born to Die" },
  
    // Childish Gambino
    { quote: "This is America, don't catch you slippin' now", artist: "Childish Gambino", song: "This Is America" },
    { quote: "I'm so cold like yeah", artist: "Childish Gambino", song: "3005" },
  
    // Khalid
    { quote: "Location unknown, just a place in my mind", artist: "Khalid", song: "Location" },
    { quote: "Talk is overrated", artist: "Khalid", song: "Talk" },
  
    // Dua Lipa
    { quote: "Don't show up, don't come out", artist: "Dua Lipa", song: "Don't Start Now" },
    { quote: "New rules, I count 'em", artist: "Dua Lipa", song: "New Rules" },
  
    // Ed Sheeran
    { quote: "I'm in love with the shape of you", artist: "Ed Sheeran", song: "Shape of You" },
    { quote: "We keep this love in a photograph", artist: "Ed Sheeran", song: "Photograph" },
    { quote: "This ain't love, it's clear to see", artist: "SZA", song: "Normal Girl" },
    { quote: "You're the coffee that I need in the morning", artist: "Daniel Caesar", song: "Best Part" },
    { quote: "You used to call me on my cell phone", artist: "Drake", song: "Hotline Bling" },
    { quote: "Now you're just somebody that I used to know", artist: "Gotye", song: "Somebody That I Used To Know" },
    { quote: "I can't feel my face when I'm with you", artist: "The Weeknd", song: "Can't Feel My Face" },
    { quote: "All of the lights in here, baby", artist: "Kanye West", song: "All of the Lights" },
    { quote: "I'm just a man who's fighting to be a boy again", artist: "Steve Lacy", song: "Infrunami" },
    { quote: "It's a thin line between all this love and hate", artist: "Brent Faiyaz", song: "Poison" },
    { quote: "Loving you is a losing game", artist: "Duncan Laurence", song: "Arcade" },
    { quote: "우린 결국 웃게 될 거야", artist: "백예린", song: "Square" },
    { quote: "너의 모든 순간이 나였으면 해", artist: "성시경", song: "너의 모든 순간" },
    { quote: "하루 끝에 네가 있어", artist: "폴킴", song: "모든 날, 모든 순간" },
    { quote: "보고 싶다, 이렇게 말하니까 더 보고 싶다", artist: "방탄소년단", song: "봄날" },
    { quote: "오늘 밤 주인공은 나야 나", artist: "워너원", song: "나야 나" },
    { quote: "잊지 마 그 모든 걸", artist: "헤이즈", song: "비도 오고 그래서" },
    { quote: "이젠 안녕이라는 말 대신", artist: "이승철", song: "소녀시대" },
    { quote: "좋은 날이 올 거야", artist: "장범준", song: "흔들리는 꽃들 속에서" },
    { quote: "네가 없는 이 거리는 너무 쓸쓸해", artist: "노을", song: "전부 너였다" },
    { quote: "You are the dancing queen, young and sweet", artist: "ABBA", song: "Dancing Queen" },
    { quote: "Don't stop believin'", artist: "Journey", song: "Don't Stop Believin'" },
    { quote: "Take me to church", artist: "Hozier", song: "Take Me to Church" },
    { quote: "난 너를 사랑해, 아직도", artist: "임재범", song: "너를 위해" },
    { quote: "마지막처럼", artist: "BLACKPINK", song: "마지막처럼" },
    { quote: "사랑을 했다 우리가 만나", artist: "iKON", song: "사랑을 했다" },
    { quote: "Cause I’m off the deep end, watch as I dive in", artist: "Lady Gaga", song: "Shallow" },
    { quote: "I've become so numb, I can't feel you there", artist: "Linkin Park", song: "Numb" },
    { quote: "It's a beautiful day, don't let it get away", artist: "U2", song: "Beautiful Day" },
    { quote: "So wake me up when it's all over", artist: "Avicii", song: "Wake Me Up" },
    { quote: "네가 보고 싶은 밤이야", artist: "김나영", song: "솔직하게 말해서 나" },
    { quote: "널 너무 사랑해서 그랬어", artist: "정승환", song: "이 바보야" },
    { quote: "너와 나의 계절은 아직 끝나지 않았어", artist: "AKMU", song: "시간과 낙엽" },
    { quote: "꽃길만 걷게 해줄게", artist: "볼빨간사춘기", song: "우주를 줄게" },
    { quote: "한 번 더 말해줘요 사랑한다고", artist: "김범수", song: "보고 싶다" },
    { quote: "마음이 말하는 사랑이란 걸", artist: "윤하", song: "사건의 지평선" },
    { quote: "눈을 감아도 넌 항상 떠올라", artist: "이하이", song: "한숨" },
    { quote: "널 사랑하지 않아", artist: "어반자카파", song: "널 사랑하지 않아" },
    { quote: "You got that James Dean daydream look in your eye", artist: "Taylor Swift", song: "Style" },
    { quote: "You were the shadow to my light", artist: "Alan Walker", song: "Faded" },
    { quote: "네가 없는 하루도 괜찮아", artist: "DAY6", song: "예뻤어" },
    { quote: "I'm in love with the shape of you", artist: "Ed Sheeran", song: "Shape of You" },
    { quote: "너를 처음 본 순간, 눈을 뗄 수 없었어", artist: "아이유", song: "밤편지" },
    { quote: "널 품기 전 알지 못했다", artist: "김동률", song: "감사" },
    { quote: "I got my peaches out in Georgia", artist: "Justin Bieber", song: "Peaches" },
    { quote: "너의 슬픔까지 사랑할게", artist: "이적", song: "다행이다" },
    { quote: "사랑은 늘 도망가", artist: "임영웅", song: "사랑은 늘 도망가" },
    { quote: "밤하늘의 별을", artist: "마이티마우스", song: "별을 따다줘" },
    { quote: "내가 날 버린 이유는 너야", artist: "이무진", song: "신호등" },
    { quote: "그대라는 시", artist: "태연", song: "그대라는 시" },
    { quote: "I gave you all of me, and you gave me none", artist: "Khalid", song: "Better" },
    { quote: "Every little thing you do, I'm so in love with you", artist: "Ne-Yo", song: "Because of You" }, 
    { lyric: "Cause baby, you're a firework", song: "Firework", artist: "Katy Perry" },
    { lyric: "넌 나의 하나뿐인 태양", song: "Love Scenario", artist: "iKON" },
    { lyric: "Hello from the other side", song: "Hello", artist: "Adele" },
    { lyric: "시간은 계속 흘러만 가고", song: "봄날", artist: "BTS" },
    { lyric: "I'm in love with the shape of you", song: "Shape of You", artist: "Ed Sheeran" },
    { lyric: "어둠 속에 핀 한 송이의 빛", song: "에잇", artist: "아이유 (IU)" },
    { lyric: "It's a beautiful day, don't let it get away", song: "Beautiful Day", artist: "U2" },
    { lyric: "기억 속에 내가 살고 있다면", song: "사랑했지만", artist: "김광석" },
    { lyric: "Say something, I'm giving up on you", song: "Say Something", artist: "A Great Big World" },
    { lyric: "어디에 있든 너의 하늘을 바라봐", song: "그대라는 시", artist: "태연" },
    { lyric: "You are the reason", song: "You Are the Reason", artist: "Calum Scott" },
    { lyric: "그대는 나만의 전부", song: "비도 오고 그래서", artist: "헤이즈 (Heize)" },
    { lyric: "We're all in this together", song: "We're All In This Together", artist: "High School Musical Cast" },
    { lyric: "꿈을 꿔왔던 순간을 찾아", song: "꿈", artist: "박효신" },
    { lyric: "I’m off the deep end, watch as I dive in", song: "Shallow", artist: "Lady Gaga, Bradley Cooper" },
    { lyric: "달빛 아래 너와 나", song: "밤편지", artist: "아이유 (IU)" },
    { lyric: "And I will always love you", song: "I Will Always Love You", artist: "Whitney Houston" },
    { lyric: "모든 게 다 꿈이었으면 해", song: "봄날", artist: "BTS" },
    { lyric: "You make me feel like I’m living a teenage dream", song: "Teenage Dream", artist: "Katy Perry" },
    { lyric: "눈물이 나도 웃을게", song: "길", artist: "god" },
    { lyric: "Cause all of me loves all of you", song: "All of Me", artist: "John Legend" },
  { lyric: "빛이 되어줄게 어둠 속에", song: "LOVE SCENARIO", artist: "iKON" },
  { lyric: "I'm in love with the shape of you", song: "Shape of You", artist: "Ed Sheeran" },
  { lyric: "손을 내밀면 닿을 듯 가까이", song: "Into the New World", artist: "Girls' Generation" },
  { lyric: "Say something, I'm giving up on you", song: "Say Something", artist: "A Great Big World" },
  { lyric: "너의 모든 순간을 사랑해", song: "너의 모든 순간", artist: "성시경" },
  { lyric: "You are my sunshine, my only sunshine", song: "You Are My Sunshine", artist: "Johnny Cash" },
  { lyric: "별처럼 수놓아진 너와 나의 이야기", song: "밤편지", artist: "아이유" },
  { lyric: "This is my fight song, take back my life song", song: "Fight Song", artist: "Rachel Platten" },
  { lyric: "거짓말이야, 널 사랑한 적 없어", song: "거짓말", artist: "BIGBANG" },
  { lyric: "You belong with me", song: "You Belong With Me", artist: "Taylor Swift" },
  { lyric: "바람에 날려 보내는 너의 향기", song: "취중고백", artist: "김민석" },
  { lyric: "I will always love you", song: "I Will Always Love You", artist: "Whitney Houston" },
  { lyric: "다시 돌아와, 그때 그 시절로", song: "비 오는 날의 수채화", artist: "강인원, 김현식, 권인하" },
  { lyric: "It's a beautiful day, don't let it get away", song: "Beautiful Day", artist: "U2" },
  { lyric: "내게 와줘, 나의 빛이 되어줘", song: "Palette", artist: "IU (Feat. G-DRAGON)" },
  { lyric: "When I see your face, there's not a thing that I would change", song: "Just The Way You Are", artist: "Bruno Mars" },
  { lyric: "그대 내게 다시 돌아올 순 없나요", song: "보고싶다", artist: "김범수" },
  { lyric: "I'm gonna swing from the chandelier", song: "Chandelier", artist: "Sia" },
  { lyric: "하루하루 지나가면 널 잊을 수 있을까", song: "하루하루", artist: "BIGBANG" },
  { lyric: "So baby pull me closer in the backseat of your Rover", song: "Closer", artist: "The Chainsmokers" },
  { lyric: "이 밤을 잊지 못할 너에게", song: "벚꽃 엔딩", artist: "버스커 버스커" },
  { lyric: "But I set fire to the rain", song: "Set Fire To The Rain", artist: "Adele" },
  { lyric: "넌 내게 빛이 돼 줬어", song: "시간을 거슬러", artist: "린" },
  { lyric: "I'm not afraid to take a stand", song: "Not Afraid", artist: "Eminem" },
  { lyric: "나는 너를 사랑해 영원히", song: "사랑했지만", artist: "김광석" },
  { lyric: "Don't stop believin', hold on to that feelin'", song: "Don't Stop Believin'", artist: "Journey" },
  { lyric: "널 사랑하지 않아", song: "널 사랑하지 않아", artist: "어반자카파" },
  { lyric: "I'm in my head right now, wishin' I could be there", song: "Someone You Loved", artist: "Lewis Capaldi" },
  { lyric: "내 마음속에 저장", song: "좋아", artist: "민서" },
  { lyric: "Why'd you have to go and make things so complicated?", song: "Complicated", artist: "Avril Lavigne" },
  { lyric: "비처럼 음악처럼", song: "비처럼 음악처럼", artist: "김현식" },
  { lyric: "Take me to church", song: "Take Me To Church", artist: "Hozier" },
  { lyric: "너 없인 아무 의미가 없어", song: "이런 엔딩", artist: "아이유" },
  { lyric: "You got me feelin' like a psycho", song: "Psycho", artist: "Red Velvet" },
  { lyric: "I can't feel my face when I'm with you", song: "Can't Feel My Face", artist: "The Weeknd" },
  { lyric: "기다릴게 아무 말도 하지 마", song: "첫눈처럼 너에게 가겠다", artist: "에일리" },
  { lyric: "I got a feeling that tonight’s gonna be a good night", song: "I Gotta Feeling", artist: "Black Eyed Peas" },
  { lyric: "그댈 잊을 수 있을까", song: "기다리다", artist: "윤하" },
  { lyric: "I kissed a girl and I liked it", song: "I Kissed A Girl", artist: "Katy Perry" },
  { lyric: "우리의 사랑이 어긋났나 봐요", song: "헤어지자 말해요", artist: "박재정" },
  { lyric: "You make me feel like I'm living a teenage dream", song: "Teenage Dream", artist: "Katy Perry" },
  { lyric: "한참을 멍하니 바라보다", song: "잊지 말아요", artist: "백지영" },
  { lyric: "I see skies of blue and clouds of white", song: "What A Wonderful World", artist: "Louis Armstrong" },
  { lyric: "이젠 안녕, 그 말 밖에", song: "비밀", artist: "박효신" },
  { lyric: "Oh, baby, baby, how was I supposed to know", song: "...Baby One More Time", artist: "Britney Spears" },
  { lyric: "내게 다시 돌아와", song: "다시 사랑한다 말할까", artist: "김동률" },
  { lyric: "We found love in a hopeless place", song: "We Found Love", artist: "Rihanna" },
  { lyric: "햇살 좋은 날엔 너와 걷고 싶어", song: "너를 만나", artist: "폴킴" }
  ];