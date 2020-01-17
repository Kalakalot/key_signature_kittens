const quizData = 
[
  {
    "_id": {
      "$oid": "5e13b1d21c9d440000086025"
    },
    "answers": [
      {
        "content": "D major",
        "type": "incorrect"
      },
      {
        "content": "G major",
        "type": "incorrect"
      },
      {
        "content": "A major",
        "type": "incorrect"
      },
      {
        "content": "C major",
        "type": "correct"
      },
    ],
    "key_signature": "C major",
    "kitten_value": "100",
    "accidentals": [
      ""
    ],
    "answer_explanation": "C major is the only major key with no accidentals. You \"C\" no sharps or flats here!",
    "explanation_url": require('../assets/explanation_images/C_explanation.png'),
    "question": require('../assets/key_sig_images/C.png'),
    "alt": "Key signature with no sharps or flats"
  },
  {
    "_id": {
      "$oid": "5e13b29b1c9d440000086026"
    },
    "answers": [
      {
        "content": "F major",
        "type": "incorrect"
      },
      {
        "content": "C major",
        "type": "incorrect"
      },
      {
        "content": "G major",
        "type": "incorrect"
      },
      {
        "content": "D major",
        "type": "correct"
      },
    ],
    "key_signature": "D major",
    "kitten_value": "140",
    "accidentals": [
      "F sharp",
      "C sharp"
    ],
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from C sharp is D, which makes this D major.",
    "explanation_url": require('../assets/explanation_images/D_explanation.png'),
    "question": require('../assets/key_sig_images/D.png'),
    "alt": "Key signature with two sharps: F sharp and C sharp"
  },
  {
    "_id": {
      "$oid": "5e17b2b71c9d440000cc71c9"
    },
    "answers": [
      {
        "content": "F major",
        "type": "incorrect"
      },
      {
        "content": "A major",
        "type": "incorrect"
      },
      {
        "content": "D major",
        "type": "incorrect"
      },
      {
        "content": "G major",
        "type": "correct"
      },
    ],
    "key_signature": "G major",
    "kitten_value": "120",
    "accidentals": "F sharp",
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from F sharp is G, which makes this G major.",
    "explanation_url": require('../assets/explanation_images/G_explanation.png'),
    "question": require('../assets/key_sig_images/G.png'),
    "alt": "Key signature with one sharp: F sharp."
  },
  {
    "_id": {
      "$oid": ""
    },
    "answers": [
      {
        "content": "A# major",
        "type": "incorrect"
      },
      {
        "content": "D major",
        "type": "incorrect"
      },
      {
        "content": "E major",
        "type": "incorrect"
      },
      {
        "content": "A major",
        "type": "correct"
      },
    ],
    "key_signature": "A major",
    "kitten_value": "160",
    "accidentals": [
      "F sharp",
      "C sharp",
      "G sharp"
    ],
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from G sharp is A, which makes this A major.",
    "explanation_url": require('../assets/explanation_images/A_explanation.png'),
    "question": require('../assets/key_sig_images/A.png'),
    "alt": "Key signature with three sharps: F sharp, C sharp, and G sharp."
  },
  {
    "_id": {
      "$oid": ""
    },
    "answers": [
      {
        "content": "A major",
        "type": "incorrect"
      },
      {
        "content": "G major",
        "type": "incorrect"
      },
      {
        "content": "F major",
        "type": "incorrect"
      },
      {
        "content": "E major",
        "type": "correct"
      },
    ],
    "key_signature": "E major",
    "kitten_value": "180",
    "accidentals": [
      "F sharp",
      "C sharp",
      "G sharp", 
      "D sharp"
    ],
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from D sharp is E, which makes this E major.",
    "explanation_url": require('../assets/explanation_images/E_explanation.png'),
    "question": require('../assets/key_sig_images/E.png'),
    "alt": "Key signature with four sharps: F sharp, C sharp, G sharp, and D sharp."
  },
  {
    "_id": {
      "$oid": ""
    },
    "answers": [
      {
        "content": "D major",
        "type": "incorrect"
      },
      {
        "content": "F sharp major",
        "type": "incorrect"
      },
      {
        "content": "A major",
        "type": "incorrect"
      },
      {
        "content": "B major",
        "type": "correct"
      },
    ],
    "key_signature": "B major",
    "kitten_value": "200",
    "accidentals": [
      "F sharp",
      "C sharp",
      "G sharp", 
      "D sharp",
      "A sharp"
    ],
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from A sharp is B, which makes this B major.",
    "explanation_url": require('../assets/explanation_images/B_explanation.png'),
    "question": require('../assets/key_sig_images/B.png'),
    "alt": "Key signature with five sharps: F sharp, C sharp, G sharp, D sharp, and A sharp."
  },
  {
    "_id": {
      "$oid": ""
    },
    "answers": [
      {
        "content": "A sharp major",
        "type": "incorrect"
      },
      {
        "content": "C sharp major",
        "type": "incorrect"
      },
      {
        "content": "A major",
        "type": "incorrect"
      },
      {
        "content": "F sharp major",
        "type": "correct"
      },
    ],
    "key_signature": "F sharp major",
    "kitten_value": "220",
    "accidentals": [
      "F sharp",
      "C sharp",
      "G sharp", 
      "D sharp",
      "A sharp", 
      "E sharp"
    ],
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from E sharp (also known as F) is F sharp, which makes this F sharp major.",
    "explanation_url": require('../assets/explanation_images/F_sharp_explanation.png'),
    "question": require('../assets/key_sig_images/F_sharp.png'),
    "alt": "Key signature with six sharps: F sharp, C sharp, G sharp, D sharp, A sharp, and E sharp"
  },
  {
    "_id": {
      "$oid": ""
    },
    "answers": [
      {
        "content": "E major",
        "type": "incorrect"
      },
      {
        "content": "C major",
        "type": "incorrect"
      },
      {
        "content": "D sharp major",
        "type": "incorrect"
      },
      {
        "content": "C sharp major",
        "type": "correct"
      },
    ],
    "key_signature": "C sharp major",
    "kitten_value": "220",
    "accidentals": [
      "F sharp",
      "C sharp",
      "G sharp", 
      "D sharp",
      "A sharp", 
      "E sharp", 
      "B sharp"
    ],
    "answer_explanation": "You can determine the key signature of a major key with sharps by going a half step up from the last sharp. A half step up from B sharp (also known as C) is C sharp, which makes this C sharp major.",
    "explanation_url": require('../assets/explanation_images/C_sharp_explanation.png'),
    "question": require('../assets/key_sig_images/C_sharp.png'),    "alt": "Key signature with seven sharps: F sharp, C sharp, G sharp, D sharp, A sharp, E sharp, and B sharp"
  },
  {
    "_id": {
      "$oid": ""
    },
    "answers": [
      {
        "content": "C major",
        "type": "incorrect"
      },
      {
        "content": "B flat major",
        "type": "incorrect"
      },
      {
        "content": "D major",
        "type": "incorrect"
      },
      {
        "content": "F major",
        "type": "correct"
      },
    ],
    "key_signature": "F major",
    "kitten_value": "120",
    "accidentals": [
      "B flat"
    ],
    "answer_explanation": "Sorry, no shortcuts here. You'll just have to remember that the key signature with one flat is F major.",
    "explanation_url": require('../assets/explanation_images/F_explanation.png'),
    "question": require('../assets/key_sig_images/F.png'),    "alt": "Key signature with one flat: B flat"
},
{
  "_id": {
    "$oid": ""
  },
  "answers": [
    {
      "content": "E flat major",
      "type": "incorrect"
    },
    {
      "content": "B major",
      "type": "incorrect"
    },
    {
      "content": "D flat major",
      "type": "incorrect"
    },
    {
      "content": "B flat major",
      "type": "correct"
    },
  ],
  "key_signature": "B flat major",
  "kitten_value": "140",
  "accidentals": [
    "B flat", 
    "E flat"
  ],
  "answer_explanation": "You can determine the key signature of a major key with two or more flats by looking at the second-to-last flat. The second-to-last flat here is B flat, so this is B flat major.",
  "explanation_url": require('../assets/explanation_images/B_flat_explanation.png'),
    "question": require('../assets/key_sig_images/B_flat.png'),
  "alt": "Key signature with two flats: B flat and E flat."
},
{
  "_id": {
    "$oid": ""
  },
  "answers": [
    {
      "content": "A flat major",
      "type": "incorrect"
    },
    {
      "content": "E major",
      "type": "incorrect"
    },
    {
      "content": "B flat major",
      "type": "incorrect"
    },
    {
      "content": "E flat major",
      "type": "correct"
    },
  ],
  "key_signature": "E flat major",
  "kitten_value": "160",
  "accidentals": [
    "B flat", 
    "E flat", 
    "A flat"
  ],
  "answer_explanation": "You can determine the key signature of major keys with flats by looking at the second-to-last flat. The second-to-last flat here is E flat, so this is E flat major.",
  "explanation_url": require('../assets/explanation_images/E_flat_explanation.png'),
    "question": require('../assets/key_sig_images/E_flat.png'),
  "alt": "Key signature with three flats: B flat, E flat, and A flat."
},
{
  "_id": {
    "$oid": ""
  },
  "answers": [
    {
      "content": "A major",
      "type": "incorrect"
    },
    {
      "content": "D major",
      "type": "incorrect"
    },
    {
      "content": "G flat major",
      "type": "incorrect"
    },
    {
      "content": "A flat major",
      "type": "correct"
    },
  ],
  "key_signature": "A flat major",
  "kitten_value": "180",
  "accidentals": [
    "B flat", 
    "E flat", 
    "A flat", 
    "D flat"
  ],
  "answer_explanation": "You can determine the key signature of major keys with flats by looking at the second-to-last flat. The second-to-last flat here is A flat, so this is A flat major.",
  "explanation_url": require('../assets/explanation_images/A_flat_explanation.png'),
    "question": require('../assets/key_sig_images/A_flat.png'),
  "alt": "Key signature with four flats: B flat, E flat, A flat, and D flat."
},
{
  "_id": {
    "$oid": ""
  },
  "answers": [
    {
      "content": "D major",
      "type": "incorrect"
    },
    {
      "content": "E flat major",
      "type": "incorrect"
    },
    {
      "content": "G flat major",
      "type": "incorrect"
    },
    {
      "content": "D flat major",
      "type": "correct"
    },
  ],
  "key_signature": "D flat major",
  "kitten_value": "200",
  "accidentals": [
    "B flat", 
    "E flat", 
    "A flat", 
    "D flat", 
    "G flat"
  ],
  "answer_explanation": "You can determine the key signature of major keys with flats by looking at the second-to-last flat. The second-to-last flat here is D flat, so this is D flat major.",
  "explanation_url": require('../assets/explanation_images/D_flat_explanation.png'),
  "question": require('../assets/key_sig_images/D_flat.png'),
  "alt": "Key signature with five flats: B flat, E flat, A flat, D flat, and G flat."
},
{
  "_id": {
    "$oid": ""
  },
  "answers": [
    {
      "content": "C major",
      "type": "incorrect"
    },
    {
      "content": "G major",
      "type": "incorrect"
    },
    {
      "content": "D flat major",
      "type": "incorrect"
    },
    {
      "content": "G flat major",
      "type": "correct"
    },
  ],
  "key_signature": "G flat major",
  "kitten_value": "220",
  "accidentals": [
    "B flat", 
    "E flat", 
    "A flat", 
    "D flat", 
    "G flat",
    "C flat"
  ],
  "answer_explanation": "You can determine the key signature of major keys with flats by looking at the second-to-last flat. The second-to-last flat here is G flat, so this is G flat major.",
  "explanation_url": require('../assets/explanation_images/G_flat_explanation.png'),
    "question": require('../assets/key_sig_images/G_flat.png'),
  "alt": "Key signature with six flats: B flat, E flat, A flat, D flat, G flat, and C flat."
},
{
  "_id": {
    "$oid": ""
  },
  "answers": [
    {
      "content": "C major",
      "type": "incorrect"
    },
    {
      "content": "F major",
      "type": "incorrect"
    },
    {
      "content": "F flat major",
      "type": "incorrect"
    },
    {
      "content": "C flat major",
      "type": "correct"
    },
  ],
  "key_signature": "C flat major",
  "kitten_value": "240",
  "accidentals": [
    "B flat", 
    "E flat", 
    "A flat", 
    "D flat", 
    "G flat",
    "C flat", 
    "F flat"
  ],
  "answer_explanation": "You can determine the key signature of major keys with flats by looking at the second-to-last flat. The second-to-last flat here is C flat, so this is C flat major.",
  "explanation_url": require('../assets/explanation_images/C_flat_explanation.png'),
    "question": require('../assets/key_sig_images/C_flat.png'),
  "alt": "Key signature with seven flats: B flat, E flat, A flat, D flat, G flat, C flat, and F flat."
},

]

export default quizData;