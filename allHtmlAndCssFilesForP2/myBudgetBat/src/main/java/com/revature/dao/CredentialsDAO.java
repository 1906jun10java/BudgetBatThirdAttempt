package com.revature.dao;

import java.util.List;

public interface CredentialsDAO {
	public List<Credentials> getAllUsers();
	public Credentials getCredentialsByEmail(String email);
	public void createCredentials(Credentials c);
	public void updateCredentials(Credentials c);
	public void removeCredentials(Credentials c);
	

}
