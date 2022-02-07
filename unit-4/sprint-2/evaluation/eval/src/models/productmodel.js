const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        id: {type:Number, required: true},
        first_name: {type : String, required: true},
        middle_name: {type : String, required: false},
        last_name : {type : String, required: true},
        age : {type: Number, required: true},
        email: {type: String, required: true},
        address : {type: String, required: true},
        gender: {type:String, required: false, default: "Female"},
        type: {type: String, required: false}


    },
    {
  versionKey: false,
  timestamps: true,
    }
);

const BranchSchema = new mongoose.Schema(
    {
    name: {type: String, required :true},
    address : {type: String, required: true},
    IFSR: {type: String, required: true},
    MICR : {type: Number, required: true},
    createdat : {type: String, required: true},
    updatedat : {type:String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const MasteraccountSchema = new mongoose.Schema(
    {
        balance: {type: Number, required: true},
        createdat: {type: String, required: true},
        updatedat: {type:String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
const savingaccountSchema = new mongoose.Schema(
    {
        account_number : {type : Number, required: true},
        balance: {type: Number, required: true},
        interest_rate: {type: Number, required: true},
        startdate: {type: Number, required: true},
        maturitydate: {type: Number, required: true},
        createdat: {type: String, required: true},
        updatedat: {type: String, required: true},

    },
    {
        versionKey: false,
        timestamps: true,
    }
)
const fixedaccountSchema = new mongoose.Schema(
    {
        account_number : {type : Number, required: true},
        balance: {type: Number, required: true},
        interest_rate: {type: Number, required: true},
        startdate: {type: Number, required: true},
        maturitydate: {type: Number, required: true},
        createdat: {type: String, required: true},
        updatedat: {type: String, required: true},

    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("user_Banking", userSchema)
module.exports = mongoose.model("branch_banking", BranchSchema)
module.exports = mongoose.model("master_banking", MasteraccountSchema)
module.exports = mongoose.model("saving_banking", savingaccountSchema)
module.exports = mongoose.model("fixed_banking", fixedaccountSchema)