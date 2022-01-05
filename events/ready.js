module.exports = async(client) => {

  
  client.user.setStatus("idle");
  const aktiviteler = [
    "v13 Boş"

  ]
  setInterval(function() {
    var random = Math.floor(Math.random() * (aktiviteler.length - 0 + 1) + 0);

    client.user.setActivity(aktiviteler[random], "");
}, 4 * 5000)};