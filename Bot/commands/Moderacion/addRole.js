module.exports = {
    name: "AddRoles",
    aliases: [],
    usage: 'addRole <usuario> <rol>',
    description: "arina",
    run: async (client, message, args) => {
let usuario = message.mentions.members.first();//definimos "user" para cuando queramos añadirle un rol al usuario solo tengamos que mencionarlo
let rol = message.mentions.roles.first();//Lo mismo que "user" pero esta vez para "ROL"

if (!usuario) return message.channel.send(new MessageEmbed().setTitle("<a:no:776065602984083456> | Menciona al usuario").setColor("PURPLE"))//Una condicional para verificar que se menciono al usuario

if (!rol) return message.channel.send(new MessageEmbed().setTitle("<a:no:776065602984083456> | Menciona el rol para ponerle al usuario")
.setColor("PURPLE"))//Una condicional para verificar que se menciono el rol
await usuario.roles.add(rol)//añadimos el rol al usuario.
message.channel.send(new MessageEmbed().setDescription(`Arina`).setColor("RANDOM"))//Un mensaje embed confirmando 
     }
}