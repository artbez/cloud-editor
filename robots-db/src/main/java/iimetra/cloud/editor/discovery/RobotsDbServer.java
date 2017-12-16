package iimetra.cloud.editor.discovery;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class RobotsDbServer {
    public static void main(String[] args) {
        SpringApplication.run(RobotsDbServer.class, args);
    }
}
