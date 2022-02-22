package heretogether.server.post;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("T")
@Getter @Setter
public class Taxi extends Post{
    private String departure;
    private String arrival;
}
