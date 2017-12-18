package iimetra.cloud.editor.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableEurekaClient
public class LoggingServer {

    private static final Logger logger = LoggerFactory.getLogger(LoggingServer.class);

    public static void main(String[] args) {
        SpringApplication.run(LoggingServer.class, args);
    }

    @RequestMapping(value = "/log", method = RequestMethod.POST)
    public void log(@RequestBody String str) {
        logger.info("logged! " + str);
    }
}
