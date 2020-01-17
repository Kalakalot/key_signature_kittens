
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
  }
]

export default quizData;