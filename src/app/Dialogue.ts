﻿import { DialogueTurn } from './DialogueTurns';

export var chatbotMessages: any = {
  "greeting": {
    "start": [
      new DialogueTurn("bot", "Hey! We have 865 Laptops. I can help you find laptops that work for you."),
      new DialogueTurn("bot", "I just have a couple of questions:"),
    ],
  },
  "purpose": {
    "start": [
      new DialogueTurn("bot","What do you usually use your laptop for?", true, "open", "purpose"),
    ],
    "noKeyfacts": [
      [new DialogueTurn("bot","Sorry, can you explain that again?", false, "none", "purpose"),
        new DialogueTurn("bot","I did not get that, can you rephrase it?", false, "none", "purpose"),
        new DialogueTurn("bot","I did not get that. What do you mean?", false, "none", "purpose"),
        new DialogueTurn("bot","I am not sure what you mean, can you explain again that please?", false, "none", "purpose"),
      ],
      [new DialogueTurn("bot","Many people use their laptop for things like document editing, browsing the internet, gaming, and so on. What about you?", true, "open", "purpose")
      ]
    ],
    "unsure": [
      new DialogueTurn("bot","If you are unsure which laptop type you need, we can start with simple, basic laptops.", false, "none", "purpose"),
      new DialogueTurn("bot","That is enough for most use cases. Is that fine with you?", true, "yesno", "purpose"),
    ],
    "notImportant": [
      new DialogueTurn("bot","I have understood from your answer is that you do not have specific tasks. That's no problem.", false, "none", "purpose"),
      new DialogueTurn("bot","In these cases, I usually recommend to start with a basic laptop. Is that fine with you? (We also have advanced or gaming laptops)", true, "yesno", "purpose"),
    ],
    "no": [
      new DialogueTurn("bot","Okay, can you explain to me again what tasks you need your laptop for?", true, "open", "purpose"),
    ]
  },
  "price": {
    "start": [
      new DialogueTurn("bot","What were you thinking of in terms of price?", false, "none", "price"),
      new DialogueTurn("bot","We have laptops from 50 to 3000 pounds.", true, "open", "price"),
    ],
    "noKeyfacts": [
      [new DialogueTurn("bot","Sorry, can you explain that again?", false, "none", "price"),
        new DialogueTurn("bot","I did not get that, can you rephrase it?", false, "none", "price"),
        new DialogueTurn("bot","I did not get that. What do you mean?", false, "none", "price"),
        new DialogueTurn("bot","I am not sure what you mean, can you explain that again please?", false, "none", "price"),
      ],
      [new DialogueTurn("bot","We have laptops from 50 to 3000 pounds. Most laptops cost around 500 pounds.", true, "open", "price"),
        new DialogueTurn("bot","We have laptops from 50 to 3000 pounds. Many people need a laptop for around 500 pounds.", true, "open", "price"),
      ],
    ],
    "unsure": [
      new DialogueTurn("bot","If you are unsure which price point is right for you, I recommend laptops between 250 and 600 pounds.", false, "none", "price"),
      new DialogueTurn("bot","That is a price that most people are happy with. Does that work for you?", true, "yesno", "price"),
    ],
    "notImportant": [
      new DialogueTurn("bot","What I have understood is that price is not too important for you.", false, "none", "price"),
      new DialogueTurn("bot","In that case, I am going to leave that open for now and make sure that the laptop meets your other requirements. Is that fine with you?", true, "yesno", "price"),
    ],
    "no": [
      new DialogueTurn("bot","Okay, then what price point were you thinking of?", true, "open", "price"),
    ]
  },
  "battery": {
    "start": [
      new DialogueTurn("bot","What are your requirements on battery life?", false, "none", "battery"),
      new DialogueTurn("bot","We have laptops that last between 6 and 20 hours.", true, "open", "battery"),
    ],
    "noKeyfacts": [
      [new DialogueTurn("bot","Sorry, can you explain that again?", false, "none", "battery"),
        new DialogueTurn("bot","I did not get that, can you rephrase it?", false, "none", "battery"),
        new DialogueTurn("bot","I did not get that. What do you mean?", false, "none", "battery"),
        new DialogueTurn("bot","I am not sure what you mean, can you explain that again please?", false, "none", "battery"),
      ],
      [new DialogueTurn("bot","We have laptops that last between 6 and 20 hours. Most laptop batteries last for around 8 hours.", true, "open", "battery"),
        new DialogueTurn("bot","We have laptops that last between 6 and 20 hours. Many users want their laptops to last at least 8 hours.", true, "open", "battery"),
      ],
    ],
    "unsure": [
      new DialogueTurn("bot","If you are unsure which battery life you need, I recommend anything over 6 hours of battery life.", false, "none", "battery"),
      new DialogueTurn("bot","That is enough for most people. Does that work for you?", true, "yesno", "battery"),
    ],
    "notImportant": [
      new DialogueTurn("bot","I have understood that the battery is not too important for you.", false, "none", "battery"),
      new DialogueTurn("bot","I will not pay too much attention to the battery then. Does that work for you?", true, "yesno", "battery"),
    ],
    "no": [
      new DialogueTurn("bot","Okay. Can you explain again how long you want the battery to last?", true, "open", "battery"),
    ]
  },
  "storage": {
    "start": [
      new DialogueTurn("bot","How much hard drive storage do you need?", false, "none", "storage"),
      new DialogueTurn("bot","We have laptops with storage between 64 GB and 2000 GB (2TB).", true, "open", "storage"),
    ],
    "noKeyfacts": [
      [new DialogueTurn("bot","Sorry, can you explain that again?", false, "none", "storage"),
        new DialogueTurn("bot","I did not get that, can you please rephrase it?", false, "none", "storage"),
        new DialogueTurn("bot","I did not get that. What do you mean?", false, "none", "storage"),
        new DialogueTurn("bot","I am not sure what you mean, can you explain that again please?", false, "none", "storage"),
      ],
      [new DialogueTurn("bot","We have laptops with hard drives between 64 GB and 2000 GB (2TB). Most laptops have a hard drive size between 500 and 1000 GB.", true, "open", "storage"),
        new DialogueTurn("bot","We have laptops with hard drives between 64 GB and 2000 GB (2TB). Many users want the hard drive size to be between 500GB and 1000GB.", true, "open", "storage"),
      ],
    ],
    "unsure": [
      new DialogueTurn("bot","If you are unsure what the correct storage size is, I can look for laptops with 250GB to 1TB.", false, "none", "storage"),
      new DialogueTurn("bot","That is a size that most people are happy with. Does that work for you?", true, "yesno", "storage"),
    ],
    "notImportant": [
      new DialogueTurn("bot","What I have understood is that the hard drive size is not too important for you.", false, "none", "storage"),
      new DialogueTurn("bot","I will not look for a specific storage size then. Is that fine with you?", true, "yesno", "storage"),
    ],
    "no": [
      new DialogueTurn("bot","Okay. Can you explain again which hard drive size you need?", true, "open", "storage"),
    ]
  },
  "ram": {
    "start": [
      new DialogueTurn("bot","What RAM size do you need?", false, "none", "ram"),
      new DialogueTurn("bot","Our laptops have between 1GB and 32GB RAM.", true, "open", "ram"),
    ],
    "noKeyfacts": [
      [new DialogueTurn("bot","Sorry, can you explain that again?", false, "none", "ram"),
        new DialogueTurn("bot","I did not get that, can you please rephrase it?", false, "none", "ram"),
        new DialogueTurn("bot","I did not get that. What do you mean?", false, "none", "ram"),
        new DialogueTurn("bot","I am not sure what you mean, can you explain that again please?", false, "none", "ram"),
      ],
      [new DialogueTurn("bot","Our laptops have between 1GB and 32GB RAM. Most laptops have a RAM size of 4GB to 8GB.", true, "open", "ram"),
        new DialogueTurn("bot","Our laptops have between 1GB and 32GB RAM. Many users want the RAM to be in the range of 4GB to 8GB.", true, "open", "ram"),
      ],
    ],
    "unsure": [
      new DialogueTurn("bot","If you are unsure what the correct RAM size is, I can look for laptops with 4GB to 8GB of RAM.", false, "none", "ram"),
      new DialogueTurn("bot","That is a size that most people are happy with. Is that fine with you?", true, "yesno", "ram"),
    ],
    "notImportant": [
      new DialogueTurn("bot","What I have understood is that the RAM size is not too important for you.", false, "none", "ram"),
      new DialogueTurn("bot","I will not look for a specific RAM size then. Is that fine with you?", true, "yesno", "ram"),
    ],
    "no": [
      new DialogueTurn("bot","Okay. Can you explain again how much RAM you need?", true, "open", "ram"),
    ]
  },
  "display": {
    "start": [
      new DialogueTurn("bot","How big should the display be?", false, "none", "display"),
      new DialogueTurn("bot","Our laptops have displays between 10 and 18 inches.", true, "open", "display"),
    ],
    "noKeyfacts": [
      [new DialogueTurn("bot","Sorry, can you explain that again?", false, "none", "display"),
        new DialogueTurn("bot","I did not get that, can you please rephrase it?", false, "none", "display"),
        new DialogueTurn("bot","I did not get that. What do you mean?", false, "none", "display"),
        new DialogueTurn("bot","I am not sure what you mean, can you explain that again please?", false, "none", "display"),
      ],
      [new DialogueTurn("bot","We have laptops with displays between 10 and 18 inches. Most laptops have a display around 15 inches.", true, "open", "display"),
        new DialogueTurn("bot","We have laptops with displays between 10 and 18 inches. Many users want the display to be arout 15 inches.", true, "open", "display"),
      ],
    ],
    "unsure": [
      new DialogueTurn("bot","If you are unsure what the correct display size is, I can look for laptops with 14 to 16 inches displays.", false, "none", "display"),
      new DialogueTurn("bot","That is a size that most people are happy with. Does that work for you?", true, "yesno", "display"),
    ],
    "notImportant": [
      new DialogueTurn("bot","What I have understood is that the display size is not too important for you.", false, "none", "display"),
      new DialogueTurn("bot","I will not look for a specific display size then. Is that fine with you?", true, "yesno", "display"),
    ],
    "no": [
      new DialogueTurn("bot","Okay. Can you explain again what display size you need?", true, "open", "display"),
    ]
  },
  "goodbye": {
    "start": [
      new DialogueTurn("bot","Ok, I think I have a few laptops that could work for you.", false, "none", "goodbye"),
      new DialogueTurn("bot","One moment please", false, "none", "goodbye"),
    ]
  }
}
