const config = require('../config')
const fg = require('api-dylux');

let res = await fg.GDriveDl(link)
	if (res.fileSizeB / 1024 >= 2 * 1024) {
		return reply('The movie is larger than 2 GB. Download it from the link below:\n\n' + res.downloadUrl);
	}
 
	caption = caption ? caption : `*📃 File name:*  ${title}` + `\n` +
		`*💈 File Size:* ${res.fileSize}` + `\n` +
		`*🕹️ File type:* ${res.mimetype}` + "\n\n" + config.FOOTERNAME


	 	const mass = await conn.sendMessage(chats[0], {
		document: { url: res.downloadUrl },
		mimetype: res.mimetype,
		fileName: res.fileName,
		caption: caption
	}, {
quoted:mek
})
