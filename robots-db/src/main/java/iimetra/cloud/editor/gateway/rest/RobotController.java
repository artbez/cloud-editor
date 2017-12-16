package iimetra.cloud.editor.gateway.rest;

import iimetra.cloud.editor.gateway.robot.Robot;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class RobotController {

    private final Map<String, Robot> robots = new HashMap<>();

    public RobotController() {
        Robot r1 = new Robot("r1", "lego");
        Robot r2 = new Robot("r2", "trik");
        robots.put(r1.getName(), r1);
        robots.put(r2.getName(), r2);
    }

    @GetMapping("/robots/robot")
    public Robot getByName(String name) {
        return robots.get(name);
    }
}
