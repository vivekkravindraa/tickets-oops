const { Ticket } = require('./ticket');

// To Save and Reset

// let ticket = new Ticket({
//     name: 'Arjun',
//     department: 'Technical',
//     priority: 'High',
//     message: 'Internet is not working'
// });

// ticket.save();               // saves the tickets to the DB

// console.log(ticket);         // display the ticket
// ticket.reset();              // reset the ticket
// console.log(ticket);         // display after the ticket resets

// To findAll
// Ticket.findAll();

// To findByCode
// let code = 'DCT-6d66';
// Ticket.findByCode(code);

// To findByPriority
// let priority = 'High';
// Ticket.findByPriority(priority);

// To findOneAndUpdate
// let code = 'DCT-16b9';
// Ticket.findOneAndUpdate(code,{
//     status: 'open',
//     priority: 'Low'
// });

// To findOneAndDelete
// let code = 'DCT-16b9';
// Ticket.findOneAndDelete(code);