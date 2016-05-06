package action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import bean.Message;
import service.IMessageService;

public class GetMessage {
	
	private List<Message> messageList;
	
	private IMessageService messageService;
	
	public String execute() {
		
		messageList = messageService.getAllMessage();
		
		return "success";
	}

	public List<Message> getMessageList() {
		return messageList;
	}

	public void setMessageList(List<Message> messageList) {
		this.messageList = messageList;
	}

	public IMessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(IMessageService messageService) {
		this.messageService = messageService;
	}
	
	

}
