import mongoose from 'mongoose';
const connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@chatapp-shard-00-00.rpd6o.mongodb.net:27017,chatapp-shard-00-01.rpd6o.mongodb.net:27017,chatapp-shard-00-02.rpd6o.mongodb.net:27017/WhatsAppClone?ssl=true&replicaSet=atlas-cf7x2p-shard-0&authSource=admin&retryWrites=true&w=majority`
try{
  await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify: false  });
  console.log('Database Connected Succesfully');

}catch(error){
    console.log("ERROR: ", error.message);
}
}
export default connection;