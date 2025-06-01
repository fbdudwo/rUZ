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
    { quote: "Every little thing you do, I'm so in love with you", artist: "Ne-Yo", song: "Because of You" }
  ];