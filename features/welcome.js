// const { Botkit, BotkitConversation } = require('botkit');

// module.exports = function(controller) {

//   controller.hears(['hi', 'hello', 'howdy', 'hey', 'aloha', 'hola', 'bonjour', 'oi'], ['message'], async (bot, message) => {

//     // random integer between 0 and max
//     const randomInt = (max) => {
//       return Math.floor(Math.random() * Math.floor(max))
//     }

//     // array of different greeting responses
//     const responsesArr = ["how's it going", "hey, how are you", "what's up", "how goes it"]

//     await bot.reply(message, responsesArr[randomInt(responsesArr.length)]);

//   });
// }




// const { BotkitConversation } = require('botkit');

// module.exports = (controller) => {

//   // define the conversation
//   const onboarding = new BotkitConversation('onboarding', controller);

//   onboarding.say('Hello human!');
//   // collect a value with no conditions
//   onboarding.ask('What is your name?', async (answer) => {
//     // do nothing.
//   }, { key: 'name' });

//   // collect a value with conditional actions
//   onboarding.ask('Do you like tacos?', [
//     {
//       pattern: 'yes',
//       handler: async function (answer, convo, bot) {
//         await convo.gotoThread('likes_tacos');
//       }
//     },
//     {
//       pattern: 'no',
//       handler: async function (answer, convo, bot) {
//         await convo.gotoThread('hates_life');
//       }
//     }
//   ], { key: 'tacos' });

//   // define a 'likes_tacos' thread
//   onboarding.addMessage('HOORAY TACOS', 'likes_tacos');

//   // define a 'hates_life' thread
//   onboarding.addMessage('TOO BAD!', 'hates_life');

//   // handle the end of the conversation
//   onboarding.after(async (results, bot) => {
//     const name = results.name;
//   });

//   // add the conversation to the dialogset
//   controller.addDialog(onboarding);

//   // launch the dialog in response to a message or event
//   controller.hears(['hello'], 'message', async (bot, message) => {
//     bot.beginDialog('onboarding');
//   });
  
// }








const { Botkit } = require('botkit');

module.exports = (controller) => {




    controller.on('welcome_back', async (bot, message) => {
      await bot.reply(message, "Welcome to my portfolio site!");
      // await bot.reply(message, "What do you want to know?");
      
      setTimeout(async () => {
        await bot.changeContext(message.reference);
        await bot.reply(message, { type: 'typing' });
      }, 1400)
      
      setTimeout(async () => {
        await bot.reply(message, 'I am currently seeking exciting career opportunities.');
      }, 2800);

      setTimeout(async () => {
        await bot.changeContext(message.reference);
        await bot.reply(message, { type: 'typing' });
      }, 3300)
      
      setTimeout(async () => {
        await bot.reply(message, "You can ask me about my background, experience, skills, and more.");
      }, 5000);

      setTimeout(async () => {
        await bot.changeContext(message.reference);
        await bot.reply(message, { type: 'typing' });
      }, 6300)

      setTimeout(async () => {
        await bot.reply(message, {
          text: 'Here are some sample topics...',
          quick_replies: [
            {
              title: 'About Me', // how the button text appears
              payload: 'about me', // this is the message.text that triggers the appropriate function in background.js
            },
            {
              title: 'Langauges',
              payload: 'languages',
            },
            {
              title: 'Skills',
              payload: 'skills'
            },
            {
              title: 'Work History',
              payload: 'work'
            },
            {
              title: 'Education',
              payload: 'education'
            },
            {
              title: 'Contact',
              payload: 'contact'
            }
          ]
        });
      }, 7800);

    });
}