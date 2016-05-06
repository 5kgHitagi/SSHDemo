package action;

import bean.Message;
import service.IMessageService;

import java.text.SimpleDateFormat;
import java.util.Date;


public class SendMessage {
	
	private String messageWords;

	private String messageUsername;
	
	private Message message = new Message();
	
	private IMessageService messageService;
	
	public String execute() {
		
		Date date = new Date(System.currentTimeMillis());
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String messageTime = dateFormat.format(date);
		
		
		message.setMessageUsername(messageUsername);
		message.setMessageWords(messageWords);
		
		message.setMessageTime(messageTime);
		
		messageService.addMessage(message);
		
		return "success";
	}
	
	public String getMessageWords() {
		return messageWords;
	}

	public void setMessageWords(String messageWords) {
		this.messageWords = messageWords;
	}

	public String getMessageUsername() {
		return messageUsername;
	}

	public void setMessageUsername(String messageUsername) {
		this.messageUsername = messageUsername;
	}

	public IMessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(IMessageService messageService) {
		this.messageService = messageService;
	}

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	
}
