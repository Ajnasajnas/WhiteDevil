const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://telegra.ph/file/ad4d2ee49c2fc94dfddaa.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ᴡʜɪᴛᴇ ᴅᴇᴠɪʟ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴋᴀʀᴛʜɪᴋ_ᴛᴇʀʀᴏʀ_ʙᴏʏ*

 *owner number wa.me/917736936605*
 

 *ABOUT ME          _https://github.com/Ajnasajnas_*
 
 
 
 *Github link       _https://github.com/Ajnasajnas/ElsaMwol_*
 
 
 

 *Audio commads-1    _https://github.com//tree/master/uploads_Ajnasajnas/ElsaMwol*
 
 
 
  *Audio commads-2    _https://github.com/Ajnasajnas/ElsaMwol/tree/master/upload_*
  
  
 

 *Sticker commads  _https://github.com/Ajnasajnas/ElsaMwol/tree/master/stickers_*
`}) 

})); 
