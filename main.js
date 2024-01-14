// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, readyClient => {
	console.log(` Genshin Impact! ${readyClient.user.tag}`)
})


client.login(process.env.TOKEN)