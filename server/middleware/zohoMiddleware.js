const axios = require('axios')

exports.zohoCheck = async (email) => {
    const checkZohoStatus = async () => {
      const url = `https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;
      let response = await axios.post(url);
      return response.data.access_token;
    };
    let zoho_token = await checkZohoStatus();
  
    let config = {
      method: "get",
      url: "https://creator.zoho.com/api/v2/schoolscool/mentor/report/PlatformCheck",
      headers: {
        Authorization: `Bearer ${zoho_token}`,
        Cookie:
          "442b5845d7=eb0c86c949abb5888ae844667cf23763; ZCNEWLIVEUI=true; _zcsr_tmp=f99507fa-ac1c-47f9-8800-a8e2a882b59c; zccpn=f99507fa-ac1c-47f9-8800-a8e2a882b59c",
      },
    };
  
    let userInZoHoStatus;
    let response = await axios(config);
  
    return response.data.data.some((user) => {
      if (user.Email === email) {
        return userInZoHoStatus = true;
      } else {
        return userInZoHoStatus = false;
      }
    });
    
  };