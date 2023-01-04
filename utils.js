const Event=require('./event')

class Events {

    
    // Register an event handler
    on(eventName, callback) {
        
        Event.create({
            event:eventName,triggerTime:"date"
        },function(err,ev){
            if(err){
                console.log("err");
            }
            
            
            console.log("saved"+ev);
        })
    }
  
    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
    Event.create({
      event: eventName,
      triggerTime: new Date()
    }, function(err, ev) {
      if (err) {
        console.log("err");
      }
      console.log("saved" + ev);
    });
  }

  
    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        Event.deleteMany({ event: eventName }, function(err) {
          if (err) {
            console.log("err");
          }
          console.log("deleted");
        });
      }
    }

  