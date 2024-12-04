package com.substring.chat.controllers;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import com.substring.chat.entities.Message;
import com.substring.chat.entities.Room;
import com.substring.chat.payload.MessageRequest;
import com.substring.chat.repositories.RoomRepository;

@Controller
@CrossOrigin("http://localhost:3000")
public class ChatController {
	
	private RoomRepository roomRepository;

	public ChatController(RoomRepository roomRepository) {
		this.roomRepository = roomRepository;
	}
	
	
	//fr sending and Recieving Messages
	@MessageMapping("/sendMessage/{roomId}")
	@SendTo("/topic/room/{roomId}")
	public Message sendMessage(@DestinationVariable String roomId,@RequestBody MessageRequest request) throws Exception
	{
		Room room=roomRepository.findByRoomId(request.getRoomId());
		
		Message message=new Message();
		message.setContent(request.getContent());
		message.setSender(request.getSender());
		message.setTimeStamp(LocalDateTime.now());
		
		if(room==null)
		{
			room.getMessages().add(message);
			roomRepository.save(room);
		}else {
			throw new RuntimeException("Room NotFound");
		}
		
		return message ;
		
	}
}
