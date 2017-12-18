package iimetra.cloud.editor.robotsdb.robot;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Robot {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String type;
    private String description;

    public Robot(String name, String type, String description) {
        this.name = name;
        this.type = type;
        this.description = description;
    }

    public Robot() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}