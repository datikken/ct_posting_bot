import { Telegraf } from 'telegraf';
import 'dotenv/config';
import {setBotCommands} from "./commands/index.js";
import {setBotActions} from "./actions/index.js";

const bot = new Telegraf(process.env.BOT_TOKEN)

setBotCommands(bot);
setBotActions(bot);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
