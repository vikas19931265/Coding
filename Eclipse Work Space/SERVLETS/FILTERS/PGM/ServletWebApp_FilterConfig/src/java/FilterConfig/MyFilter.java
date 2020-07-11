
package FilterConfig;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyFilter implements Filter
{
    FilterConfig config;
    @Override
    public void init(FilterConfig config) throws ServletException //please note that in case of servletconfig this implementation is already provided.
    {
        this.config=config;
        
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req= (HttpServletRequest) request;
        HttpServletResponse res=(HttpServletResponse) response;
        
        res.setContentType("text/html");
        PrintWriter out=res.getWriter();
        String value= config.getInitParameter("construction");
        if(value.equals("yes"))
        {
            out.println("The page is under the construction");
            
        }
        
        else
        {
            chain.doFilter(req, res);
        }
    
    }

    @Override
    public void destroy() {
        
    }
}