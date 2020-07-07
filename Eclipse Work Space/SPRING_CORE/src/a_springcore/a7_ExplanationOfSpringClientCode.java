package a_springcore;
/*
Explanation of spring client code
=======================================

BeanFactory factory = new XmlBeanFactory(new FileSystemResource("src/hello.xml"));

	In the above code, the BeanFactory instance is created using the XmlBeanFactory class, by loading hello.xml 
	using FileSystemResource class.

getBean(-) method can be used to get a particular bean object by specifying its id.("helloBean").

		HelloBean bean = (HelloBean)factory.getBean("helloBean");

In the above code getBean("helloBean") is used to get the HelloBean object.

there are multiple overloaded getBean(-) methods to get the bean object.

--public Object getBean(String name)

Above method returns Object, but to get our bean object(HelloBean) we need to perform typecast.

HelloBean helloBean=(HelloBean)object;

If there is no bean definition in the configuration file it throws NoSuchBeanDefinitionException.

-- <T> T getBean(String name, Class<T> requiredType)

It returns directly our pojo class object. (HelloBean)

HelloBean helloBean = factory.getBean("helloBean", HelloBean.class)

*/