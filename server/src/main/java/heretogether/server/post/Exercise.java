package heretogether.server.post;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("E")
@Getter @Setter
public class Exercise extends Post{
    private String arrival;
    private String sport;
}
