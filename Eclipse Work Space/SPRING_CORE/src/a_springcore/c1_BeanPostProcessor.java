package a_springcore;
/*
Bean Post Processor
=======================


If we have a common initialization process which has to be applied across all the beans, we will go for 
BeanPostProcessor.

BeanPostProcessor is an interface.
It has two methods:

Object postProcessBeforeInitialization(Object bean, String beanName)
Object postProcessAfterInitialization(Object bean, String beanName)

BeanPostPocessor is used to provide some common logic to all beans which are configured in spring configuration file.

postProcessBeforeIntialization() method is executed before the initialization method called.

postProcessAfterInitialization() method is executed after the initialization method called.

These methods will be called for each spring bean, which is configured in spring configuration file.

Refer the pgm for more info

*/