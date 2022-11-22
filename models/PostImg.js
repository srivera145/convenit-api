const mongoose=require('mongoose')

const postImgSchema=mongoose.Schema({
    mimeType:{
        type:String,
        enum:['image/jpeg','image/png','image/gif']
    },
    data:{
        type:Buffer
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PostImg',
        required:true
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

postImgSchema.virtual('imgUrl').get(function(){
    if (this.data !== null && this.mimeType != null){
        return `data:${this.mimeType};charset=utf-8;base64,${this.data.toString('base64')}`
    }
})


module.exports=mongoose.model('PostImg',postImgSchema)
