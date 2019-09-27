require('dotenv').config();

const axios = require('axios');

const token = process.env.VK_ACCESS_TOKEN,
      groupId = process.env.VK_GROUP_ID;

axios.get(`https://api.vk.com/method/groups.getMembers?v=5.101&lang=ru&group_id=${groupId}&fields=sex&access_token=${token}`)
  .then(({data}) => {
    const {response} = data;
    const {items} = response;
    items.forEach( i => {
      console.log(`${i.id},https://vk.com/id${i.id},${i.last_name},${i.first_name},${i.sex}`)
    })
  } );
