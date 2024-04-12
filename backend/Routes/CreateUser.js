const express = require("express");
const router = express.Router();
const User = require("../users");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "AnandUmbarkar";

router.post(
    "/register",[
        body('email').isEmail(),
        body('password').isLength({ min : 5 })
    ],
    async (req, res) => {
        
        const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password, salt);
      try {
        await User.create({
          name: req.body.name,
          password: secpassword,
          phone: req.body.phone,
          email: req.body.email,
        });
  
        res.json({ success: true });
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );

  
  router.post(
    "/signin",
    [body("email").isEmail(), body("password").isLength({ min: 5 })],
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let email = req.body.email;
      try {
        let userdata = await User.findOne({ email });
  
        if (!userdata) {
          return res.status(400).json({ errors: "Try with valid mail id" });
        }
  
        const pwdcmp = bcrypt.compare(req.body.password, userdata.password);
        if (!pwdcmp) {
          return res.status(400).json({ errors: "Try with valid Password" });
        }
  
        const data = {
          user: {
            id: userdata.id,
          },
        };
  
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken:authToken });
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );

  module.exports = router;