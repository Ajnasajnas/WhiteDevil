const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://avatars.githubusercontent.com/u/85664936?v=4";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ` *ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋᴀʀᴛʜɪᴋ_ᴛᴇʀʀᴏʀ_ʙᴏʏ*
*owner number wa.me/917736936605*

 *ABOUT ME          _https://github.com/Ajnasajnas_*
`}) 

}));
