import {postData, channelsData} from "../commands/index.js";
import { deunionize } from 'telegraf';
import {getChannelsButtons} from "../buttons/index.js";
import {Markup} from "telegraf";
import qb from "../database/qb.js";
import {getChannelById} from "../config/channels.js";

export const setBotActions = bot => {
  bot.action(
    postData.filter({
      action: 'create'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Creating post!',
        Markup.inlineKeyboard([
          ... await getChannelsButtons()
        ]));
      //todo choose channels buttons
      //send messages to compose post
      //add
    }
  );
  bot.action(
    postData.filter({
      action: 'scheduled'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Scheduled:');
    }
  );
  bot.action(
    postData.filter({
      action: 'edit'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Edit:');
    }
  );
  bot.action(
    postData.filter({
      action: 'stats'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Stats:');
    }
  );
  bot.action(
    postData.filter({
      action: 'settings'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Settings:');
    }
  );
  bot.action(
    channelsData.filter({
      action: 'send_to'
    }),
    async (ctx) => {
      const { id } = channelsData.parse(
        deunionize(ctx.callbackQuery).data
      );

      qb.setChat(id);
      const acceptedChannel = await getChannelById(id);
      await ctx.replyWithHTML(`Here it is: <b>${acceptedChannel.name}</b>.\n\nSend me one or multiple messages you want to include in the post. It could be anything. A text, photo, video even a sticker.`)

      bot.on('message', async ctx => {
        ctx.reply('Ok');
        qb.addToPost(ctx.message);
      })
    }
  )
};
