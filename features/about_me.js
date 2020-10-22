// random integer between 0 and max
const randomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports = (controller) => {

  // some things about me
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'about me', ['message'], async (bot, message) => {
    
    const backgroundArr = [
      "I grew up in a small town with more trees than people.  When I was 8, I started taking piano lessons, and before I knew it, it was off to music school.  As a composer turned software engineer, I now have two types of keyboards that enable me to get creative.",
      "I grew up in New York and have called NYC home for several years.  I really love being here because you get to meet people from all walks of life with varying perspectives and open hearts and minds.",
      "I am a lifelong vegan and love how accessible tasty vegan food has become over the last several years.  Wherever I go, I'm sure to checkout the local vegan cuisine.",
      "Google Maps is my guilty pleasure.  I really enjoy the street view feature, which lets me explore the world from the comfort of my own home."
    ]
    
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 500)

    setTimeout(async () => {
      await bot.reply(message, backgroundArr[randomInt(backgroundArr.length)]);
    }, 4300);

  });

  // where are you from
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('where') && message.text.toLowerCase().includes('from'), ['message'], async (bot, message) => {
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 500)

    setTimeout(async () => {
      await bot.reply(message, `I'm from ${controller.resume.location}.`);
    }, 1900);
  });

  // where do you live
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('where') && message.text.toLowerCase().includes('live'), ['message'], async (bot, message) => {
    
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 500)

    setTimeout(async () => {
      await bot.reply(message, `I live in ${controller.resume.location}, but I'm open to a change.`);
    }, 2100);
  });

    

}