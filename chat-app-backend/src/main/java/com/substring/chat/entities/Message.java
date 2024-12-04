package com.substring.chat.entities;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Message {
	private String sender;
	private String content;
	private LocalDateTime timeStamp;
	
	public Message(String sender, String content, LocalDateTime timeStamp) {
		super();
		this.sender = sender;
		this.content = content;
		this.timeStamp = timeStamp;
	}
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	

}
