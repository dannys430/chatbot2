// random integer between 0 and max
const randomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports = (controller) => {

  // what is your phone number
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('phone') || message.text.toLowerCase().includes('cell') || message.text.toLowerCase().includes('number'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="tel: 845-866-4302">${controller.resume.phone}</a>`);
    }, 1200);
  });

  // what is your email
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('email') || message.text.toLowerCase().includes('contact'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="mailto: danielsinger200@gmail.com">${controller.resume.email}</a>`);

    }, 1200);
  });

  // what is your social media
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('social') || message.text.toLowerCase().includes('twitter'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="https://twitter.com/dannywritescode" target="_blank">${controller.resume.social}</a>`);

    }, 1200);
  });

  // what is your github
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('github'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="https://github.com/dannys430" target="_blank">${controller.resume.github}</a>`);
    }, 1200);
  });

  // what languages do you know
  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase().includes('language') || 
    message.text.toLowerCase().includes('framework') || 
    message.text.toLowerCase().includes('technologies') || 
    message.text.toLowerCase().includes('stack'),
    ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `${controller.resume.languages}`);
    }, 1200);
  });

  // what skills do you have
  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase().includes('skill'), 
    ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `${controller.resume.skills}`);
    }, 2700);
  });

  // what is your work history
  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase().includes('work') || 
    message.text.toLowerCase().includes('career') || 
    message.text.toLowerCase().includes('job'),
    ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `I have been a ${controller.resume.jobs[0].company} ${controller.resume.jobs[0].title} for several years. ${controller.resume.jobs[0].desc}`);
    }, 3000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 3700)

    setTimeout(async () => {
      await bot.reply(message, `I was a ${controller.resume.jobs[1].title} at ${controller.resume.jobs[1].company} in ${controller.resume.jobs[1].timeline}. ${controller.resume.jobs[1].desc}`);
    }, 5900);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 7400)

    setTimeout(async () => {
      await bot.reply(message, `From ${controller.resume.jobs[2].timeline}, I was a ${controller.resume.jobs[2].title} at ${controller.resume.jobs[2].company}. ${controller.resume.jobs[2].desc}`);
    }, 9000);
  });

  // where did you go to college
  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase().includes('college') || 
    message.text.toLowerCase().includes('school') || 
    message.text.toLowerCase().includes('education'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 500)

    setTimeout(async () => {
      await bot.reply(message, `From ${controller.resume.education[0].timeline}, I attended ${controller.resume.education[0].name}, a ${controller.resume.education[0].desc}.`);
    }, 2300);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 3100)

    setTimeout(async () => {
      await bot.reply(message, `I'm also a graduate of ${controller.resume.education[1].name}, a ${controller.resume.education[1].desc}, from ${controller.resume.education[1].timeline}.`);
    }, 4900);
  });

  // am I authorized to work in the US?
  controller.hears(async (message) => 
    message.text && 
    message.text.toLowerCase().includes('authorized') || 
    message.text.toLowerCase().includes('visa'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 500)

    setTimeout(async () => {
      await bot.reply(message, `I am authorized to work in the United States and do not require a work visa.`);
    }, 2100);
  });
  

}