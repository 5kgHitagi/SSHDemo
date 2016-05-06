package service.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;

import bean.Message;
import dao.EntityDAO;
import service.IMessageService;

public class MessageServiceImpl implements IMessageService{

	private EntityDAO entityDAO;

	public void setEntityDAO(EntityDAO entityDAO) {
		this.entityDAO = entityDAO;
	}
	
	@Override
	public void addMessage(Message m) {
		// TODO Auto-generated method stub
		entityDAO.save(m);
	}

	@Override
	public List<Message> getAllMessage() {
		// TODO Auto-generated method stub
		List<Criterion> criterions = new ArrayList<Criterion>();
		List<Message> messageList = entityDAO.findAll(Message.class, "messageTime", true, criterions);
		System.out.println("size = " + messageList.size());
		
		return messageList;
	}

}
