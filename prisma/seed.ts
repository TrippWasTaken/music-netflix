import { PrismaClient } from '@prisma/client';

const data = [
  {
    source: '8hUuwtCrb-U',
    description:
      'An interesting song full of modern production standards, tight tone, lots of interesting things going on with the guitar and that Vocal tuning is so amazing it made me want to buy the synth right away',
    translatedName: 'Finale for you',
    name: 'フィナーレをあなたに。',
    genre: 'j-pop',
    author: 'Aira'
  },
  {
    source: 'Mnqi6-948pQ',
    description:
      'The video for this one really shines, some seriously cool effects being thrown out along with all around solid production from every party involved',
    translatedName: 'Illustration',
    name: 'イラストレーシオン',
    genre: 'j-pop',
    author: 'Aira'
  },
  {
    source: 'GyjpqeKqzaQ',
    description:
      'If you have ever listened to artists like JIN then ippo.tsk is right up your alley, this guy fully produces everything from the visuals to the music. A literal jack of all trades and mastery of many',
    name: 'oyasumination',
    genre: 'indie',
    author: 'ippo.tsk'
  },
  {
    source: 'L6QtByukIPs',
    description:
      'Brace yourself for that ending sound design because it can be hard to get through but in my opinion it pays off, Just wow the amount of work that must have went into crafting this story is insane but the end product pays off',
    translatedName: 'The Flea Waltz',
    name: 'ねこふんじゃった',
    genre: 'funk',
    author: 'A4'
  },
  {
    source: 'T9iFcb5yfAc',
    description:
      'This is a cover by Kyaami and its the first song that really made me enjoy Vocaloid, I almost instantly fell in love with Flower and I think she can still hold up to todays army of realistic voicebanks just fine',
    name: 'Close to you',
    genre: 'rock',
    author: 'Niki'
  },
  {
    source: 'D6DVTLvOupE',
    description: 'This song is just all around very cute and fun :)',
    translatedName: 'Strong wind, swept back hair',
    name: '強風オールバック',
    genre: 'dance-pop',
    author: 'Yukopi'
  },
  {
    source: '_O0h2WqEFjo',
    description:
      'This guy really enjoys the Trap horns but god damn does that drop not disappoint (also some jazz? what is going on in this one??) not to mention the incredibly intricate lyrics',
    translatedName: "I'll Never Be (Apart From) You",
    name: 'Sheeno Mirin',
    genre: 'trap fusion',
    author: ''
  },
  {
    source: 'ruBxsq03FZo',
    description:
      'Honestly this song is not for everyone, it has like 10 time signature changes with like 5 bpm changes to add, a lot is going on but god damn do I love how it all works together. One could only dream of mastering his tools like Iyowa has',
    translatedName: 'The opposite side of Earth',
    name: '地球の裏',
    genre: 'pop Jazz?',
    author: 'Iyowa'
  },
  {
    source: 'smleVe12kEo',
    description: 'Im pretty sure a hip hop track without an 808 shouldnt be able to go so hard yet it somehow does',
    translatedName: 'Behind the scenes',
    name: 'うしろきいつけや',
    genre: 'hip-hop',
    author: 'SHINGO★西成'
  },
  {
    source: 'h31THl8shy4',
    description:
      'Whats more brutal than this song is the sheer fact that they band filmed this whole video in inside one of the members house which is just insane',
    name: 'Dethrone',
    genre: 'Metalcore',
    author: 'BAD OMENS'
  },
  {
    source: '5e7IVcfmUTw',
    description:
      'Anarchy has to be one of my favourite japanese rappers, he just carries this I dont give a shit energy in every track he does and its something I dont see many on the japanese hip hop scene pull off',
    name: 'Where we from',
    genre: 'hip-hop',
    author: 'ANARCHY'
  },
  {
    source: 'mb6Jc4juSF8',
    description: 'Hands down the best track Vince ever dropped, simple beat and just good lyricism',
    name: 'Norf Norf',
    genre: 'hip-hop',
    author: 'Vince Staples'
  },
  {
    source: 'CqGj7bBjs_o',
    description:
      'This was the first Ive ever heard a Voicebank provider duet their own voicebank and needless to say it made me a big fanboy of both Kaf and Kafu',
    translatedName: 'Unscrupulous Cheers',
    name: '不埒な喝采',
    genre: 'j-pop',
    author: 'Police Piccadilly'
  }
];

const prisma = new PrismaClient();

async function main() {
  await prisma.video.createMany({
    data
  });
}

main()
  .catch(e => {
    console.log(e);
    process.exit();
  })
  .finally(() => {
    prisma.$disconnect();
  });
