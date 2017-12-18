package iimetra.cloud.editor.robotsdb.rest;

import iimetra.cloud.editor.robotsdb.robot.Robot;
import iimetra.cloud.editor.robotsdb.robot.RobotRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class RobotController {

    private final RobotRepository robotRepository;

    public RobotController(RobotRepository robotRepository) {
        this.robotRepository = robotRepository;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = "application/json")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Robot save(@RequestBody Robot newRobot) {
        return robotRepository.save(newRobot);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Collection<Robot> all() {
        return robotRepository.findAll();
    }
}
