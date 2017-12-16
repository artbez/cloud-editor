package iimetra.cloud.editor.gateway.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DefaultRedirectFilter extends ZuulFilter {

    private static final Log log = LogFactory.getLog(DefaultRedirectFilter.class);

    @Value("${zuul.defaultRoute}")
    private String defaultRoute;

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    // only run if we have a default route defined and we are on the default
    @Override
    public boolean shouldFilter() {
        String requestURI = RequestContext.getCurrentContext().getRequest().getRequestURI();
        if (log.isDebugEnabled()) {
            log.debug("defaultRoute=" + defaultRoute);
            log.debug("requestURI=" + requestURI);
        }
        return defaultRoute != null && requestURI.matches("/");
    }

    @Override
    public Object run() {
        if (log.isDebugEnabled()) {
            log.debug("DefaultRedirectFilter: sending redirect " + defaultRoute);
        }
        try {
            RequestContext.getCurrentContext().getResponse().sendRedirect(defaultRoute);
        } catch (java.io.IOException e) {
            if (log.isDebugEnabled()) {
                log.debug("run: IOException on sendRedirect() " + e);
            }
        }
        //if (HTTPRequestUtils.getInstance().getQueryParams() == null) {
        //    RequestContext.getCurrentContext().setRequestQueryParams(new HashMap<String, List<String>>());
        //}
        return null;
    }
}
