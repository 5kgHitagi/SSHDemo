package service;

import java.util.List;

import bean.Message;

public interface IMessageService {

	void addMessage(Message m);
	
	List<Message> getAllMessage();
}
