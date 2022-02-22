package heretogether.server.post;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("C")
@Getter @Setter
public class Car extends Post{
    private String departure;
    private String arrival;
    private String vehicle;
}
