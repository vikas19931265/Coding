/*
Annotations
===============

Spring 2.X onwords spring supports annotations.

so from spring 2.X it is possible to configure the the dependency injection using annotations.

instead of using XML to define a bean wiring, you can move the bean configuration into the pojo class itself by
using annotations.

By default spring container doesn't perform annotation wiring. So, before using annotation-based wiring, 
we need to enable it in our Spring configuration file.

If we want to work with annotations in spring you have add the following code in configuration file.

<beans>
<context:annotation-config/>
</beans>

Once <context:annotation-config/> is configured, you can start annotating on your code. and Spring automatically wire values into properties, methods, and constructors. 

There are multiple annotations in spring.
@Required
@Autowired
@Qualifier
@PostConstruct
@PreDestroy
@Component
@Controller
@Service
@Repository
etc.

*/


