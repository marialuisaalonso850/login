import mongoose from 'moongose'

export const mongoose = async () => {

    try{
        await mongoose.connect('mongodb://localhost/merndb')
        console.log(">>> DB is connected")
    }catch(error){
    console.log(error);
    }

};
