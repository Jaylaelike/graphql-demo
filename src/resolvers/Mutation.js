const {v4: uuidv4} = require('uuid')

const Mutation = {
    addUser(parent, args, ctx, info){
       const {name,age} = args;
       const { users } = ctx;
      
       users.push({
           id: uuidv4(), 
           name,
           age, 
       })
       return users;
    },
    updateUser(parent, args, ctx, info){
        const { id, name, age } =args;
        const {users , pubsub } = ctx;
        const user = users.find((user)=> user.id == id);

      if(!user)
       {
          throw new Error(`Sorry cannot find user ${id}.`);
        }

      if(name){
          user.name = name  ; 
      }  

      if(age){
         user.age = age    ;
      }

      pubsub.publish('update_user', {
          update: user
      })

      return user

    },
    deleteUser(parent, args, ctx, info){
      const { users } = ctx;
      const index = users.findIndex((index) => index.id === args.id);
      if(index === -1 ){
          throw new Error(`Sorry id and user ${args.id} dose not exist.`);


      }
        const deleteUser = users.splice(index, 1);
        return deleteUser[0];    
    }

}

module.exports = Mutation;