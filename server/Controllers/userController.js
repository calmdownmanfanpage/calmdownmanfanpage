const userModel = require("../Models/userModel")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")

/**
 * @param _id jwt생성할 키값
 *
 * jwt toekn 생성 함수
 */
const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtkey, {expiresIn: "3d"})
}

const registerUser = async (req, res) => {
    try{
        const {name, email, password,} = req.body;
    
        let user = await userModel.findOne({email});
    
        if(user) return res.status(400).json("이미 존재하는 이매일입니다.");
        if(!name | !email || !password) return res.status(400).json("모든 항목은 필수사항입니다.");
        if(!validator.isEmail(email)) return res.status(400).json("이메일 형식이 올바르지 않습니다.");
        if(!validator.isStrongPassword(password)) return res.status(400).json("비밀번호 형식이 올바르지 않습니다.");
    
        user = new userModel({name, email, password});
    
        //비밀번호 암호화 하기
        const salt = await bcrypt.genSalt(10); //바이트 단위의 임의의 문자열 salt생성
        user.password = await bcrypt.hash(user.password, salt); //비밀번호 + salt로 암호화된 비밀번호 생성
    
        await user.save(); //유저 저장
    
        const token = createToken(user._id); //jwt 생성
    
        res.status(200).json({_id: user._id, name, email, token});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
  
}

module.exports = {registerUser}