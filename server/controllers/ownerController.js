import User from "../models/User.js"



export const changeRoleToOwner=async(req,res)=>{
    try {
        const {_id}=req.body;
        await User.findByIdAndUpdate(_id,{role: "owner"})
        res.json({success: true, message: "Now you are an owner,you can list cars"})
    }
    catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}
