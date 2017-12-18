package iimetra.cloud.editor.robotsdb.rest;

import iimetra.cloud.editor.robotsdb.robot.Robot;
import iimetra.cloud.editor.robotsdb.robot.RobotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class RobotController {

    private final RobotRepository robotRepository;
    private final LoggingClient loggingClient;

    @Autowired
    public RobotController(RobotRepository robotRepository, LoggingClient loggingClient) {
        this.robotRepository = robotRepository;
        this.loggingClient = loggingClient;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = "application/json")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Robot save(@RequestBody Robot newRobot) {
        Robot robot = robotRepository.save(newRobot);
        loggingClient.log("Saved new robot " + robot.toString());
        return robot;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Collection<Robot> all() {
        return robotRepository.findAll();
    }
}
