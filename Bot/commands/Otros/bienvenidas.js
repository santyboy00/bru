client.on("guildMemberAdd", async (member) => { //cada que el bot registre que hay un nuevo mienbro realisara 
   let guild = client.guilds.cache.get("ID DEL SERVIDOR")   



   let channel = client.channels.cache.get("ID DEL CANAL DE BIENVENIDAS");  



 



  



 if (guild != member.guild) {



   return console.log(`entro al grupo, ${member.user}`) // cada que se agrege un mienbro al grupo pondra el sigiente texto en la consola *puedes modificarlo*



 



} else {



    let embed = new MessageEmbed() // se creara un embed que tendra lo sigiente  



  .setColor("GREEN") // el color del embed sera verde por defecto si quieres puedes modificarlo tansolo poniendo el nombre de el color en ingles: red,purple,etc tambien puedes poner un color de paleta #0000 *este es negro*



  .setAuthor(member.user.tag, member.user.displayAvatarURL()) // esta parte lo que hace es poner el nombre del usuario y imagen en la parte de arriba 



  .setImage('https://media.giphy.com/media/TKv4j0jA2IUfcLFCKl/giphy.gif') //el gif que quieras poner, yo te recuerdo que pongas uno de giphy 



  .setTitle(`Bienvenido a ${guild.name}`) // mensaje que pondra en el titulo puedes modificarlo , seria algo asi " bienvenido a discord ayuda" 



  .setDescription(`${member.user} Diviertete En El Servidor !`) // aqui es la parte de descripcion puedes modificarlo , es el mensaje que pondra en el embed puedes cambiarlo a tu gusto en este caso se veria asi "@usuarioqueentro diviertete en el servidor"



  .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024 })) // agarrara el url del mienbro en png en tamaño 1024 y lo pondra en la aprte superior



  .setFooter("haora Somos :", message.guild.memberCount) // puedes cambiarlo como gustes asta poner el id de que entro al grupo pero pues como dije las hare lo mas indentico a discord ayuda pero pues si quisiese poner el id de la persona solo cambialo a esto "Usuario: ' + member.user.id" si quisieras poner el tiempo de mensaje solo escribe debajo : .setTimestamp() *opcional*



 



  await channel.send(embed) // pondra el mensaje "embed" lo ya definimos que contiene esta arriba en el chnnel que pues tambien ya definimos arriba



 



 // asi acaba la parte de bienvenidas haora pasemos a despedidas aqui no explicare mucho porque es casi lo mismo solo cambiarias el gif y el canal de las despedidas y lo que tendra el embed ¯\_(?)_/¯



}



 



});



 client.on("guildMemberRemove", async (member) => {



   



   let guild = client.guilds.cache.get("ID DEL SERVER")       



   let channel = client.channels.cache.get("ID DEL CANAL DE DESPEDIDAS"); 


 



  



 if (guild != member.guild) {



   return console.log(`Salio Del Grupo, ${member.user}`) // *puedes modificarlo*



 


} else {



    let embed = new MessageEmbed()



  .setColor("GREEN")



  .setAuthor(member.user.tag, member.user.displayAvatarURL()) 



  .setImage('https://media.giphy.com/media/3og0IG0skAiznZQLde/giphy.gif')



  .setTitle(`${guild.name}`)



    /// puedes modificarlo



  .setDescription(`${member.user} , Te Extrañaremos`)



  /// puedes modificarl

  .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024 }))

  .setFooter("haora Somos :", message.guild.memberCount)



  await channel.send(embed)

} 


}); // aqui acaba el 

