const jwt = require("jsonwebtoken");

require("dotenv").config();
module.exports={
    generateToken: (user,role) => {
        return jwt.sign(
          {
            uuid: user.uuid,
            email: user.email,
            role: role,
            district_code:user.district_sso_id ? user.district_sso_id:''
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "365d"


            
          }
        );
      },
}