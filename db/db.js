const Ticket = require('../models/ticket');

class MyDB {
	constructor(){
		this.tickets = [];
	};

	create(username,price){
		const ticket = new Ticket(username,price);
		this.tickets.push(ticket);
		return ticket;
	};
	bulkCreate(username,price,quantity){
		const result = [];
		for(let i = 0; i < quantity; i++){
			const ticket = this.create(username,price);
			result.push(ticket);
		};
		return result;
	};
	find(){
		return this.tickets;
	};
	findById(ticketId){
		const ticket = this.tickets.find(
			(ticket) => ticket.id === ticketId
		);
		return ticket;
	};

	findByUser(username){
		const ticket = this.tickets.filter(
			(ticket) => ticket.username === username
		);
		return ticket;
	};
	updateById(ticketId,ticketBody){
		const ticket = this.findById(ticketId);
		ticket.username = ticketBody.username ?? username;
		ticket.price = ticketBody.price ?? price;
		ticket.updateAt = new Date();
		return ticket;
	};
	deleteById(ticketId){
		const index = this.tickets.findIndex(
			(ticket) => ticket.id === ticketId
		);
		if(index !== -1){
			return true
		}else{
			return false;
		}
	};

	draw(winnerCount){
		const winnerIndice = new Array(winnerCount);
		let index = 0;
		while(index < winnerCount){
			const winnerIndex = Math.floor(Math.random()*this.tickets.length);
			if(!winnerIndice.includes(winnerIndex)){
				winnerIndice[index++] = winnerIndex;
				continue;
			}
		};
		const winners = winnerIndice.map((index) => this.tickets[index]);
		return winners;
	}
	
};


const myDB = new MyDB();

module.exports = myDB;