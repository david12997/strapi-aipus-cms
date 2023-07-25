export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    const io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT"],

      }
    });


    io.on('connection', (socket,) => {
      console.log('a user connected: ',socket.id);
      
      socket.emit('connection', socket.id);

      socket.on('find product', async(data) => {

        const response = await strapi.entityService.findMany('api::product.product',{
          filters:{
            id: data.id
          }
        })

        socket.broadcast.emit('find product', [socket.id , response] );


      });

   
      
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
   
   
    });

  }

 
  

};
