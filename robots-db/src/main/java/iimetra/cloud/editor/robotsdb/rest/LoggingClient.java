package iimetra.cloud.editor.robotsdb.rest;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("logger")
public interface LoggingClient {
    @RequestMapping(value = "/log", method = RequestMethod.POST)
    void log(String str);
}
