package com.revature;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan("com.revature")
@EnableTransactionManagement 
public class OrmConfiguration {
	
		@Bean
		public DataSource getDataSource() {
			System.out.println("DB_Driver");

			DriverManagerDataSource dsrc = new DriverManagerDataSource();
			dsrc.setDriverClassName("oracle.jdbc.driver.OracleDriver");
			dsrc.setUrl("jdbc:oracle:thin:@databasedemo.cuzvuv7zoqan.us-east-2.rds.amazonaws.com:1521:ORCL");
			dsrc.setUsername("AlphonseWilson");
			dsrc.setPassword("Philip9798");
			return dsrc;
		}
		
		@Bean
		public LocalSessionFactoryBean getSessionFactory() {
			LocalSessionFactoryBean sf = new LocalSessionFactoryBean();
			sf.setDataSource(getDataSource());
			sf.setPackagesToScan("com.revature.beans");
			sf.setHibernateProperties(getHibernateProps());
			return sf;
			
		} 
	
		public Properties getHibernateProps() {
			Properties props = new Properties();
			props.setProperty("hibernate.hbm2ddl.auto", "create-drop");
			props.setProperty("hibernate.show-sql", "true");
			props.setProperty("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
			return props;
		}
		
		@Bean
		public PlatformTransactionManager getTransactionManager() {
			HibernateTransactionManager txman = new HibernateTransactionManager();
			txman.setSessionFactory(getSessionFactory().getObject());
			return txman;
		}


}
